import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  signup({ name , lastName, email, password }) {
    return this.auth
      .post("/auth/signup", { name , lastName, email, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  login({ email, password }) {
    return this.auth
      .post("/auth/login", { email, password })
      .then(({ data }) => data);
    // .then((response) => response.data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
    // return this.auth.post("/auth/logout", {}).then((response) => response.data);
  }

  me() {
    return this.auth.get("/auth/profile").then(({ data }) => data);
    // return this.auth.get("/auth/me").then((response) => response.data);
  }

  getAllServices(){
    return this.auth.get(`/servicetype`).then(({ data }) => data);
  }

  getAllServicesSameType(categoryID){
    return this.auth.get(`/servicetype/${categoryID}`).then(({ data }) => data);
  }


}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
