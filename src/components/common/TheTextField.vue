<template>
  <div class="form-group">
    <label :for="$attrs.for" class="label">{{ label }}</label>
    <input
      :value="modelValue"
      class="form-control text-field"
      autocomplete
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="messageError" class="text-error">نام کاربری را پر کنید</span>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
defineProps({
  label: {
    type: String,
    default: '',
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  messageError: {
    type: String,
    default: '',
    required: false
  }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.form-group{
    margin: 10px 0;
}
.label{
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
  display: inline-block;
}
.text-field {
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  padding: 0 20px;
  height: 60px;
  font-size: 14px;
  border-radius: 0;
}
.text-field:focus {
  outline: none;
  box-shadow: none;
  border-color: #eb3e32;
}
.text-error{
  font-size: 12px;
  color: #eb3e32;
  margin:10px 0 ;
  display: block;
}
</style>
