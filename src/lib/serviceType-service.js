import axios from "axios";

class ServiceTypeService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }
  getAllServiceType() {
    return this.axios.get(`/servicetype`).then(({ data }) => data);
  }

  getAllServicesSameType(categoryID) {
    return this.axios
      .get(`/servicetype/${categoryID}`)
      .then(({ data }) => data);
  }

  getServiceDetail(serviceID) {
    return this.axios.get(`/services/${serviceID}`).then(({ data }) => data);
  }

  getAllServices() {
    return this.axios.get(`/allservices`).then(({ data }) => data);
  }

  handleUpload = async (theImage, serviceId) => {
    try {
      const uploadData = new FormData();
      uploadData.append("file", theImage);
      const res = await this.axios.post(
        `/api/uploadservice/${serviceId}`,
        uploadData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  newService = async (service) => {
    try {
      const res = await this.axios.post(`/newservice`, service);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const axiosRequestFunctions = new ServiceTypeService();

export default axiosRequestFunctions;
