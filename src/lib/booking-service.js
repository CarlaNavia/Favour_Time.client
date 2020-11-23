import axios from "axios";


class BookingService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }
  getBookingsByUserID(userId) {
    return this.axios.get(`/clientbooking/${userId}`).then(({ data }) => data);
  }

  getRequestsByUserID(userId) {
    return this.axios.get(`/ownerservice/${userId}`).then(({ data }) => data);
  }

  changeTheBookingStatus(bookingId, status) {
    return this.axios
      .put(`/bookings/${bookingId}/${status}`)
      .then(({ data }) => data);
  }
  getReviewsByUserID(userId) {
    return this.axios.get(`/reviews/${userId}`).then(({ data }) => data);
  }

  newBooking(serviceID) {
    console.log(serviceID, "serviceID");
    return this.axios.post(`/bookings/${serviceID}`).then(({ data }) => data);
  }

  getServicesByUserID(userId) {
    return this.axios.get(`/servicesOwner/${userId}`).then(({ data }) => data);
  }

  deleteTheService(serviceId) {
    return this.axios.delete(`/services/${serviceId}`).then(({ data }) => data);
  }

  editTheService(serviceId, form) {
    return this.axios.put(`/services/${serviceId}`, form).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new BookingService();

export default axiosRequestFunctions;
