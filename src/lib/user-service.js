import axios from "axios";

class UserService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  uploadPhoto(image) {
    const formData = new FormData();
    formData.append("file", image);
    return this.axios.post(`/api/upload`, formData, {
        headers: {'Content-Type': 'multipart/form-data'}
    })
    .then(({ data }) => data);
  }

  uploadProfile(userId, currentUser) {
      return this.axios.put(`/auth/profile/${userId}`, currentUser)
      .then((data) => data)
  }
}
const axiosRequestFunctions = new UserService();

export default axiosRequestFunctions;
