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

  getServicesByUserID(userId) {
    return this.axios.get(`/servicesOwner/${userId}`).then(({ data }) => data);
  }

  deleteTheService(serviceId) {
    return this.axios.delete(`/services/${serviceId}`).then(({ data }) => data);
  }

  editTheService(serviceId, form) {
    return this.axios.put(`/services/${serviceId}`, form).then(({ data }) => data);
  }

  addANewReview(bookingId, form) {
    return this.axios.post(`/reviews/${bookingId}`, form).then(({ data }) => data);
  }
  newBooking = async (serviceID, info) => {
    try {
      const res = await this.axios.post(`/bookings/${serviceID}`, info);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  
}

const axiosRequestFunctions = new BookingService();

export default axiosRequestFunctions;
