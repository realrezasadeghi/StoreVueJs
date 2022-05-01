<template>
  <section class="acount-login">
    <div class="container">
      <div class="row my-2">
        <div class="col-sm-8 m-auto">
          <div class="section-title m-auto text-center">
            <h2 class="title">ورود</h2>
          </div>
          <div class="section-text m-auto text-center">
            <p>سلام خوش اومدی !</p>
          </div>
        </div>
      </div>
      <template v-if="!showLoading">
        <div
          v-if="loginStepOne"
          class="row justify-content-center align-items-center"
        >
          <div class="form-login">
            <form>
              <div class="row">
                <div class="col-12 p-0">
                  <TheTextField
                    v-model="formLogin.mobile"
                    label="شماره تلفن همراه تو وارد کن"
                  />
                </div>
                <div class="col-12 p-0">
                  <TheButton
                    label="ورود"
                    type="submit"
                    @click.prevent="getOtp"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          v-else-if="!loginStepOne"
          class="row justify-content-center align-content-center"
        >
          <div class="form-login">
            <form>
              <div class="row">
                <div class="col-12 p-0">
                  <TheTextField
                    v-model="formLogin.code"
                    label="کد ارسال شده رو وارد کن"
                  />
                </div>
                <div class="col-12 p-0">
                  <TheButton
                    label="ارسال کد"
                    type="submit"
                    @click.prevent="checkOtp"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </template>
      <div v-else  class="row justify-content-center align-items-center">
         <BaseLoading/>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useFetch } from '@/services/useFetch'
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/store/auth'
const formLogin = reactive({
  mobile: '',
  code: ''
})
const loginStepOne = ref(true)
const showLoading = ref(false)
// eslint-disable-next-line no-unused-vars
const store = useAuthStore()
// methods
const getOtp = async () => {
  showLoading.value = true
  try {
    await useFetch('User.GetOtp', { mobile: formLogin.mobile })
    loginStepOne.value = false
  } catch (error) {
    console.log(error)
  } finally {
    showLoading.value = false
  }
}
const checkOtp = () => {
  store.checkOtp(formLogin)
}
</script>

<style scoped>
.form-login {
  max-width: 570px;
}
.section-title {
  margin: 20px 0;
  padding-bottom: 30px;
  max-width: 570px;
}
.title {
  font-size: 44px;
  margin-bottom: 0;
  line-height: 1.4;
}
</style>
