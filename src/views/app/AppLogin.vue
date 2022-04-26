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
                <TheButton label="ورود" type="submit"/>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Suspense>
        <template v-if="!loginStepOne" #default>
          <div class="row justify-content-center align-content-center">
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
                    <TheButton label="ارسال کد" type="submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </template>
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
const formLogin = reactive({
  mobile: '',
  code: ''
})
const loginStepOne = ref(false)
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
