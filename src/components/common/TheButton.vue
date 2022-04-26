<template>
  <button class="btn btn-custom">{{ label }}</button>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  label: {
    type: String,
    default: '',
    required: true
  }
})
</script>

<style scoped>
.btn-custom {
  text-align: center;
  display: block;
  background-color: #333131;
  border-color: #333131;
  color: white;
  transition: all 0.4s;
  width: 100%;
  height: 60px;
  font-weight: 700;
  border-radius: 0;
  margin: 20px 0;
}
.btn-custom:active{
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.btn-custom:hover{
background-color: #eb3e32;
border-color: #eb3e32;
}
</style>
