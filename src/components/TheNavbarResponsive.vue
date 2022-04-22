<template>
  <transition-group appear name="fade">
    <div class="modal-backdrop fade show"></div>
    <div class="menu-mobile">
      <div class="menu-mobile-header" @click="$emit('close')">
        <span>منو</span>
        <i class="fa fa-angle-right" />
      </div>
      <div class="menu-mobile-body">
        <div class="info-user">
          <ul class="m-0 p-0">
            <li class="menu-item">
              <i class="fa fa-user ms-2" />
              حساب کابری
            </li>
          </ul>
        </div>
        <div class="mobile-menu-items">
          <ul class="mobile-menu-nav">
            <li class="item-nav">
              <div
                class="item-nav-header"
                @click="showItemMenu = !showItemMenu"
              >
                <span>خانه</span>
                <i class="fa fa-plus" />
              </div>
              <transition appear name="item">
                <ul class="sub-menu" v-if="showItemMenu">
                  <li class="sub-menu-item">
                    <router-link to=""> لاگین </router-link>
                  </li>
                </ul>
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script setup>
import { ref } from 'vue'
const showItemMenu = ref(false)
</script>

<style scoped>
/* transiation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* menu */
.menu-mobile {
  width: 310px;
  position: fixed;
  z-index: 1050;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #1f1f1f;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
}
.menu-mobile .menu-mobile-header {
  background-color: #eb3e32;
  padding: 15px 30px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s ease-in;
}
.menu-mobile-header span,
.menu-mobile-header i {
  color: white;
  transition: 0.3s ease-in-out;
  font-size: 18px;
}
.menu-mobile-header:hover {
  background-color: #313131;
}
.menu-mobile-header:hover span,
.menu-mobile-header:hover i {
  color: #eb3e32;
}
.menu-mobile .menu-mobile-body {
  scrollbar-width: auto;
  scrollbar-color: #1f1f1f #292929;
  flex-grow: 1;
  overflow-y: auto;
  padding: 0;
}
.menu-item {
  display: block;
  line-height: 1;
  position: relative;
  border-bottom: 1px solid #373737;
  padding: 20px 30px 23px 40px;
  color: white;
  cursor: pointer;
  transition: 0.3s ease-out;
}
.menu-item:hover {
  color: #eb3e32;
}

.mobile-menu-nav {
  padding: 0;
  list-style: none;
}

.item-nav-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: white;
  border-bottom: 1px solid #373737;
  cursor: pointer;
  transition: 0.3s ease-out;
}
.item-nav-header i {
  color: white;
  transition: 0.3s ease-out;
}
.item-nav-header:hover i,
.item-nav-header:hover {
  color: #eb3e32;
}
.sub-menu {
  width: 100%;
  padding: 0;
  list-style: none;
}
.sub-menu-item {
  padding: 10px 30px;
  border-bottom: 1px solid #373737;
}
.sub-menu-item a {
  text-decoration: none;
  color: white;
  display: block;
}

/* transiation */
.item-enter-active,.item-leave-active{
  transition: 0.3s ease-in-out;
}
.item-enter-from,.item-leave-to{
  transition: 0.7s ease-out;
  transform: translateX(300px);
}

/* modal */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1040;
  background-color: rgba(43, 43, 43, 0.92);
}
.fade {
  transition: all 0.15s linear;
}
.show{
  opacity: 1;
}
</style>
