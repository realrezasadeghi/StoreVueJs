const endpoints = {
  User: {
    name: 'User',
    actions: {
      GetOtp: {
        name: 'GetOtp',
        path: 'todos/{id}',
        params: '{id:int},{name:string}',
        method: 'get',
        enableMessage: true,
        cacheTime: 60,
        varyByParam: true
      }
    }
  }
}
export default endpoints
