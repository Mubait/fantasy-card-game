import { urlserver } from "../../conf"
import axios from "axios"

const users = {
  axiosPostUsersSignup: (userData) => {
    return axios.post(`${urlserver}/users/signup`, userData, { headers: { Authorization: `Bearer justtoken`}})
  }
}

export { users }