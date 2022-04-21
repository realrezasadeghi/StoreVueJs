<template>
  <ul v-if="breadCrumbsLength" class="breadcrumbs">
    <template v-for="(item, index) in items" :key="index">
      <li>
        <router-link :to="item.href" :class="[index ===breadCrumbsLength -1 ? 'breadcrumbs-item active':'breadcrumbs-item']">
          {{ item.text }}
        </router-link>
      </li>
      <li v-if="index !== breadCrumbsLength - 1" class="breadcrumbs-divider">\\</li>
    </template>
  </ul>
</template>

<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

// computed
const breadCrumbsLength = computed(() => props.items.length)
</script>

<style scoped>
.breadcrumbs {
  background-color: transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-wrap: unset;
  flex-wrap: unset;
  letter-spacing: 0;
  line-height: 1;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
.breadcrumbs li {
  margin: 0 5px;
}
.breadcrumbs .breadcrumbs-item {
  color: white;
  font-size: 24px;
  text-decoration: none;
  transition: all 0.3s ease-out;
}
.breadcrumbs .breadcrumbs-item:hover {
  color: #eb3e32;
}
.breadcrumbs .active{
  color: #eb3e32;
}
.breadcrumbs .breadcrumbs-divider {
  color: #eb3e32;
  font-size: 24px;
}
</style>
