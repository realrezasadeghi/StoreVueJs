<template>
  <section class="acount-login">
    <div class="container">
      <div class="row my-2">
        <div class="col-sm-8 m-auto">
          <div class="section-title m-auto text-center">
            <h2 class="title">ورود</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="form-login">
          <form>
            <div class="row">
              <div class="col-12 p-0">
                <TheTextField v-model="value" label="نام کاربری یا ایمیل" />
              </div>
              <div class="col-12 p-0">
                <TheTextField v-model="value" label="رمز عبور" />
              </div>
              <div class="col-12 p-0">
                <TheButton label="ورود" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
const value = ref('')
watch(value, (val) => {
  console.log(val)
})
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
