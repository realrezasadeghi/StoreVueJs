import TheTextField from '@/components/common/TheTextField.vue'
import TheButton from '@/components/common/TheButton.vue'

const components = {
  TheTextField,
  TheButton
}
export default function (app) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })
}
