import jwtDecode from 'jwt-decode'

const decodeToken = (token) => jwtDecode(token)
export default decodeToken
