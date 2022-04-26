<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/components/layouts/MainLayout.vue'
import { useFetch } from '@/services/useFetch'

const { data } = await useFetch('User.GetOtp', null)
console.log(data)
</script>
