<template>
  <section class="acount-register">
    <div class="container">
      <div class="row my-2">
        <div class="col-sm-8 m-auto">
          <div class="section-title m-auto text-center">
            <h2 class="title">ثبت نام</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="form-register">
          <form>
            <div class="row">
              <div class="col-12 p-0">
                <TheTextField v-model="value" label="نام کاربری یا ایمیل" />
              </div>
              <div class="col-12 p-0">
                <TheTextField v-model="value" label="رمز عبور" />
              </div>
              <div class="col-12 p-0">
                <TheTextField v-model="value" label=" تایید رمز عبور" />
              </div>
              <div class="col-12 p-0">
                <TheButton label="ثبت نام" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.form-register {
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
