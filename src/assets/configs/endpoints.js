const endpoints = {
  User: {
    name: 'User',
    actions: {
      GetOtp: {
        name: 'GetOtp',
        path: 'user/auth/getOtp',
        method: 'post',
        enableMessage: true,
        cacheTime: 60,
        varyByParam: true
      },
      CheckOtp: {
        name: 'CheckOtp',
        path: 'user/auth/checkOtp',
        method: 'post',
        enableMessage: true,
        cacheTime: 60,
        varyByParam: true
      }
    }
  }
}
export default endpoints
