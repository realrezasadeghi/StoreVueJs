/* eslint-disable no-unused-vars */
import axios from 'axios'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import endpoints from '@/assets/configs/endpoints'
// config axios
axios.defaults.baseURL = 'http://localhost:5000/'
axios.defaults.timeout = 3000
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// define function for request to server
export const useFetch = async (endpoint, body = null) => {
  const toast = useToast()
  const response = ref(null)
  const error = ref(null)
  const [parent, child] = endpoint.split('.')
  const { path, method } = endpoints[parent].actions[child]

  //   get response
  await wait(3000)
  try {
    response.value = await axios(path, { method, data: body })
  } catch (error) {
    error.value = error
  }
  return {
    response: response.value,
    error: error.value
  }
}

const wait = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay > 0) {
        resolve('ok')
      } else {
        reject(new Error('not ok'))
      }
    }, delay)
  })
}
