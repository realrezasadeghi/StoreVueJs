<template>
  <footer>
    <div class="footer-main">
      <div class="container py-0">
        <div class="row g-5">
          <div class="col-md-6 col-lg-3">
            <div class="widget-item">
              <div class="about-widget-wrap">
                <router-link to="/" class="footer-logo-area">
                  بلک شاپ
                </router-link>
                <p class="description">
                  طراحان سایت هنگام طراحی قالب سایت معمولا با این موضوع رو برو
                  هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید
                  درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط
                  بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر
                  خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر
                  دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های
                  موجود تمرکز کنند.
                </p>
                <div class="socail-share">
                  <TheSharing />
                </div>
              </div>
            </div>
          </div>
          <div v-for="(column,index) in columnsFooter" :key="index" class="col-md-6 col-lg-3">
            <div class="widget-item widget-service-item">
              <h4 class="widget-title">{{ column.title }}</h4>
              <div class="collapse widget-collapse-body">
                <div class="collapse-body">
                  <div class="widget-menu-wrap">
                    <ul class="nav-menu">
                      <li v-for="(item,i) in column.body" :key="i" class="mb-2">
                        <router-link :to="item.href" class="footer-link">
                          {{ item.text }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import TheSharing from '@/components/TheSharing.vue'

// state
const columnsFooter = ref([
  {
    title: 'خدمات',
    body: [
      { text: 'خانه', href: '/' },
      { text: 'فیلترها', href: '/product' },
      { text: 'محصولات', href: '/' },
      { text: 'سبد خرید', href: '/product' },
      { text: 'مورد علاقه ها', href: '/' }
    ]
  },
  {
    title: 'حساب کاربری',
    body: [
      { text: 'ورود', href: '/login' },
      { text: 'ثبت نام', href: '/register' },
      { text: 'خانه', href: '/' },
      { text: 'محصولات', href: '/product' },
      { text: 'مورد علاقه ها', href: '/wishlist' }
    ]
  },
  {
    title: 'ارتباط با ما',
    body: [
      { text: 'صفحه ارتباط با ما', href: '/contact' },
      { text: 'rezassadeghi@gmail.com', href: '/product' },
      { text: '09360627890', href: '/' },
      { text: 'مهشد هاشمیه ساختمان بلک شاپ', href: '/product' },
      { text: 'ورود', href: '/' }
    ]
  }
])
</script>

<style scoped>
footer {
  background-color: #26292e;
  width: 100%;
  position: relative;
  bottom: 0;
  min-height: 150px;
}
.footer-main {
  padding: 104px 0 70px;
}
.footer-main .footer-logo-area {
  text-decoration: none;
  font-size: 30px;
  color: white;
  font-family: "Iran-Sans-Bold";
}
.footer-main .description {
  color: #cacaca;
  font-size: 16px;
  line-height: 2;
  text-align: justify;
}
.footer-main .widget-title{
  color: white;
  font-weight: 500;
  font-size: 23px;
  margin-bottom: 15px;
}
.footer-main .widget-collapse-body{
  display: block;
}
.footer-main .nav-menu{
  list-style: none;
  padding: 10px 0;
}
.nav-menu .footer-link{
  color: #cacaca;
  text-decoration: none;
  transition: 0.3s ease-out;
}
.nav-menu .footer-link:hover{
  color: #eb3e32;
}
</style>
