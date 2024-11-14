import { urlserver } from "../../conf"
import axios from "axios"

const users = {
  fetchGetUsers: () => {
    return axios.get(`${urlserver}/users`)
  }
}

export { users }