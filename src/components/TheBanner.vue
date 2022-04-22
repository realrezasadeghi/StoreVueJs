<template>
  <main class="main-content">
    <section  v-if="$route.name === 'Home'" class="main-slider-home">
      <Swiper :slides-per-view="1" :space-between="50" :pagination="true">
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <router-link :to="`/product/${image.alt}`" class="h-100 w-100">
            <img :src="getImg(image.src)" :alt="image.alt" />
          </router-link>
        </SwiperSlide>
      </Swiper>
    </section>
    <section v-else class="main-default-home">
      <div class="container py-0">
        <div class="row">
          <div class="col-12 pb-3">
            <div class="text-center">
              <h2 class="title mb-4">{{ breadCrumbs.name }}</h2>
            </div>
            <TheBreadCrumbs :items="breadCrumbs.listHrefs" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import TheBreadCrumbs from '@/components/TheBreadCrumbs.vue'

const route = useRoute()
const router = useRouter()

// data
const images = ref([
  { src: 'beauty.jpg', alt: 'image-1' },
  { src: 'beauty2.jpg', alt: 'image-2' },
  { src: 'beauty3.jpg', alt: 'image-3' }
])
const breadCrumbs = ref({
  name: '',
  listHrefs: []
})

// methods
const getImg = (img) => {
  return require(`../assets/styles/images/${img}`)
}

const getRouteForBreadCrumb = (fullPath) => {
  breadCrumbs.value.listHrefs = [{ text: 'خانه', href: '/', disabled: false }]
  const routes = fullPath.split('/')
  routes.forEach(element => {
    if (element.length > 2) {
      const itemBreadCrumb = router.getRoutes().find((item) => item.path.includes(element))
      breadCrumbs.value.listHrefs.push({ text: itemBreadCrumb.meta.nameFa, href: itemBreadCrumb.path, disabled: false })
    }
  })
}

// watch
watch(route, ({ fullPath }) => {
  breadCrumbs.value.name = route.meta.nameFa
  getRouteForBreadCrumb(fullPath)
}, { deep: true, immediate: true })

</script>

<style scoped>
.main-content {
  width: 100%;
  height: 450px;
}
.main-slider-home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.main-btn-detail {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 20px;
  font-size: 21px;
  margin-bottom: 40px;
  transition: 0.2s ease-in;
  text-decoration: none;
}
.main-btn-detail:hover {
  background-color: #eb3e32;
  border: 2px solid #eb3e32;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}

/* image default */
.main-default-home {
  height: 100%;
  width: 100%;
  background-image: url("https://htmldemo.net/shome/shome/assets/img/photos/bg3.webp");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 400px;
}
.main-default-home .title {
  color: white;
  font-family: "Iran-Sans-Bold";
  font-size: 45px;
}
</style>
