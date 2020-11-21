import axios from "axios";

class BookingService {
    constructor() {
        this.axios = axios.create({
          baseURL: process.env.REACT_APP_API_URI,
          withCredentials: true,
        });
      }
  getBookingsByUserID(userId) {
    return this.axios.get(`/clientbooking/${userId}`)
    .then(({ data }) => data);
  }
}

const axiosRequestFunctions = new BookingService();

export default axiosRequestFunctions;
