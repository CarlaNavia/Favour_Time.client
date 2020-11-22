import axios from "axios";

class ServiceTypeService {
    constructor() {
        this.axios = axios.create({
          baseURL: process.env.REACT_APP_API_URI,
          withCredentials: true,
        });
      }
      getAllServices(){
        return this.axios.get(`/servicetype`).then(({ data }) => data);
      }
    
      getAllServicesSameType(categoryID){
        return this.axios.get(`/servicetype/${categoryID}`).then(({ data }) => data);
      }

      getServiceDetail(serviceID){
        return this.axios.get(`/services/${serviceID}`).then(({ data }) => data);
      }

      newService(){
        return this.axios.post(`/newservice`).then(({ data }) => data);
      }

      handleUpload = async (theImage) => {
        try {
          console.log(theImage, 'theimage')
          const uploadData = new FormData();
          uploadData.append("file", theImage);
          const res = await this.axios.post("/api/upload", uploadData, {headers: {'Content-Type': 'multipart/form-data'}});
          return res.data;
        } catch (error) {
          console.log(error);
        }
      };
      // handleUpload(image) {
      //   const formData = new FormData();
      //   formData.append("file", image);
      //   return this.axios.post(`/api/upload`, formData, {
      //       headers: {'Content-Type': 'multipart/form-data'}
      //   })
      //   .then(({ data }) => data);
      // }
      
}

const axiosRequestFunctions = new ServiceTypeService();

export default axiosRequestFunctions;
