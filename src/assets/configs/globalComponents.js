import TheTextField from '@/components/common/TheTextField.vue'
import TheButton from '@/components/common/TheButton.vue'
import BaseLoading from '@/components/base/BaseLoading.vue'
const components = {
  TheTextField,
  TheButton,
  BaseLoading
}
export default function (app) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}
