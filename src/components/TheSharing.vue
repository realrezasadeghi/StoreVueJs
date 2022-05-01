<template>
  <ShareNetwork
    v-for="network in networks"
    :network="network.network"
    :key="network.network"
    :url="sharing.url"
    :title="sharing.title"
    :description="sharing.description"
    class="social ms-2"
  >
    <i :class="network.icon" />
    <span v-if="showNameSocail">{{ network.name }}</span>
  </ShareNetwork>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { listNetworks } from '@/assets/configs/enums'

// props
defineProps({
  sharing: {
    type: Object,
    required: true,
    default: () => ({
      url: '',
      title: '',
      description: ''
    })
  },
  showNameSocail: {
    type: Boolean,
    default: false
  }
})

// state
const networks = ref([...listNetworks])
</script>

<style scoped>
.social {
  background-color: #5d5d5d;
  width: 40px;
  height: 40px;
  font-size: 13px;
  border-radius: 7px;
  padding: 10px;
  transition: all 0.3s ease-out;
  text-decoration: none;
  display: inline-block;
  text-align: center;
}
.social:hover {
  background-color: #eb3e32;
  color: #fff;
}
.social i {
  color: white;
}
</style>
