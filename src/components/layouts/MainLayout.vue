<template>
  <div class="wrapper">
    <TheNavbar />
    <TheBanner />
    <div class="container-fluid py-5">
      <slot></slot>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from '@/components/TheNavbar.vue'
import TheBanner from '@/components/TheBanner.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>
