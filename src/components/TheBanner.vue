<template>
  <main class="main-content">
    <section class="main-slider-home">
      <div class="main-information container">
        <router-link class="main-btn-detail" to="/detail"
          >دیدن جزییات بیشتر
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style scoped>
.main-content {
  width: 100%;
}
.main-slider-home {
  padding: 20px;
  height: 500px;
  background-image: url("https://htmldemo.net/shome/shome/assets/img/slider/slider-02.webp");
  background-attachment: scroll;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-btn-detail {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 20px;
  font-family: "Vazir-Bold";
  font-size: 21px;
  margin-bottom: 40px;
  transition: 0.2s ease-in;
  text-decoration: none;
}
.main-information {
  display: flex;
  justify-content: flex-end;
}
.main-btn-detail:hover {
  background-color: #eb3e32;
  border: 2px solid #eb3e32;
}
</style>
