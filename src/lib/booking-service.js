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

  getRequestsByUserID(userId) {
    return this.axios.get(`/ownerservice/${userId}`)
    .then(({ data }) => data);
  }

  changeTheBookingStatus(bookingId, status){
    return this.axios.put(`/bookings/${bookingId}/${status}`)
    .then(({ data }) => data);
  }
  getReviewsByUserID(userId) {
    return this.axios.get(`/reviews/${userId}`)
    .then(({data}) => data)
  }
}

const axiosRequestFunctions = new BookingService();

export default axiosRequestFunctions;
