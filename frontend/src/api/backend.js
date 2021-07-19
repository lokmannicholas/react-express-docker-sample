
import axios from 'axios';

export class Backend {
  
    constructor() {
      console.log(process.env.API)
      this.baseURL = process.env.API || "http://localhost:3000"
     }

     getPlans = async () => {
      try {
        const response = await axios({
          method: 'get',
          baseURL: this.baseURL,
          url: "/plans",
          'Content-Type': 'application/json',
          validateStatus: function (status_1) {
            return status_1;
          },
          params: {  }
        });
        if (response.status === 400 || response.status === 500) {
          const error = new Error(response.data.message);
          error.response = response;
  
          throw error;
        }
        return response.data.data;
      } catch (err) {
        throw err;
      }
    };
  
    getFeatures = async ( ) => {
      try {
        const response = await axios({
          method: 'get',
          baseURL: this.baseURL,
          url: "/features",
          'Content-Type': 'application/json',
          validateStatus: function (status_1) {
            return status_1;
          },
        });
        if (response.status === 400 || response.status === 500) {
          const error = new Error(response.data.message);
          error.response = response;
  
          throw error;
        }
        return response.data.data;
      } catch (err) {
        throw err;
      }
    };

  
  _handleError(error) {
    // var errorCode = error.code;
    var errorMessage = error.message;
    return errorMessage;
  }
}



let _backend = null;

const getBackend = () => {
  if (!_backend) {
    _backend = new Backend();
  }
  return _backend;
};

export {  getBackend };
