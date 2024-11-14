import { users } from "./routes/users";
import { urlserver } from "../conf";


const controller = {
  signup:(userData) => {
    users.fetchGetUsers()
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
}

export { controller }