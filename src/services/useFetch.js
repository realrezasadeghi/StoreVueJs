import axios from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import endpoints from '@/assets/configs/endpoints'
// config axios
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'
axios.defaults.timeout = 3000

// define function for request to server
export const useFetch = async (endpoint, body = null) => {
  const toast = useToast()
  const data = ref(null)
  const error = ref(null)
  const [parent, child] = endpoint.split('.')
  const { path, method, enableMessage } = endpoints[parent].actions[child]

  //   get response
  try {
    data.value = await axios(path, { method, data: body })
  } catch (error) {
    error.value = error
  } finally {
    if (enableMessage) {
      toast.success('succss')
    }
  }
  return {
    data,
    error
  }
}
