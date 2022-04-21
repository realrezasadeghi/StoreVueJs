<template>
  <header class="position-relative">
    <!-- header top -->
    <div class="header-top">
      <div class="container py-0">
        <div class="row">
          <div class="col-12">
            <div class="header-top-align">
              <div class="header-top-align-start">
                <p>به سایت خودت خوش اومدی</p>
              </div>
              <div class="header-top-align-end">
                <ul class="header-info-items">
                  <li class="account">
                    <i class="fa fa-user" />
                    حساب کاربری
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header middle  -->
    <div class="header-middle">
      <div class="container py-0">
        <div class="row align-items-center">
          <div class="col-12">
            <div class="header-middle-align">
              <div class="header-middle-align-start">
                <div class="header-logo-area">
                  <router-link to="/"> بلک شاپ </router-link>
                </div>
              </div>
              <div class="header-middle-align-center">
                <div class="header-search-area">
                  <form class="header-searchbox">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="جستجو"
                    />
                    <button type="submit" class="btn-submit">
                      <i class="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div class="header-middle-align-end">
                <div class="header-action-area">
                  <div class="shopping-wishlist">
                    <button class="shopping-wishlist-btn btn">
                      <i class="fa fa-heart-o"></i>
                    </button>
                  </div>
                  <div class="shopping-cart">
                    <button
                      class="shopping-cart-btn"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#AsideOffcanvasCart"
                      aria-controls="offcanvasRightLabel"
                    >
                      <i class="fa fa-shopping-basket"></i>
                      <sup></sup>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- header-are -->
    <div class="header-area header-default">
      <div class="container">
        <div class="row no-gutter align-items-center position-relative">
          <div class="col-12">
            <div class="header-align">
              <div class="header-navigation-area position-relative">
                <ul class="main-menu nav">
                  <li class="mx-2">خانه</li>
                  <li class="mx-2">محصولات</li>
                  <li class="mx-2">درباره ما</li>
                  <li class="mx-2">ارتباط با ما</li>
                  <li class="mx-2">تخفیف ها </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header-top {
  background-color: #f4f4f4;
  padding: 8px 0 9px;
}
.header-top-align {
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  align-items: center;
}
.header-top-align-start p {
  margin: 0;
}
.header-info-items {
  display: flex;
  list-style: none;
  margin: 0;
}
.header-middle {
  padding: 27px 30px 26px 30px;
}
.align-items-center {
  padding: 0 30px;
}
.header-middle-align {
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
}
.header-logo-area a {
  text-decoration: none;
  font-size: 30px;
  color: black;
  font-family: "Iran-Sans-Bold";
}

.header-searchbox {
  position: relative;
}
.header-searchbox .form-control {
  border: 2px solid #e8e8e8;
  box-shadow: none;
  border-radius: 8px;
  background-clip: inherit;
  color: #989898;
  font-size: 14px;
  height: 44px;
  line-height: 44px;
  padding: 5px 21px 5px 70px;
  width: 450px;
}
.header-searchbox .btn-submit {
  align-items: center;
  background-color: #eb3e32;
  border-radius: 8px 0 0 8px;
  border: none;
  color: #fff;
  display: flex;
  height: 100%;
  font-size: 25px;
  line-height: 1;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 65px;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
}
.header-searchbox .btn-submit:hover{
  background-color: #333131;
}
.header-searchbox .btn-submit i {
  color: white;
}
.shopping-wishlist-btn {
  display: inline-block;
  font-size: 20px;
  position: relative;
}
.header-action-area {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.shopping-cart-btn {
  display: inline-block;
  font-size: 20px;
  position: relative;
  background: none;
  border: none;
  padding: 0 6px 0 0;
}
.shopping-wishlist-btn i,
.shopping-cart-btn i {
  color: #252525;
  font-weight: 200;
}

/* header */
.header-area {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  z-index: 2;
}
.header-area .header-align {
  background-color: #eb3e32;
  border-radius: 10px 10px 0 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.header-navigation-area {
  padding: 15px;
}
.main-menu .nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav li {
  color: white;
  cursor: pointer;
  transition: 0.1s ease-in;
}
.nav li:hover {
  color: #fffc;
  transition: 0.2s ease-in-out;
}
</style>
