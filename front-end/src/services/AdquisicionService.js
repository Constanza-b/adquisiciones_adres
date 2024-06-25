import axios from './axiosConfig';

const AdquisicionService = {
  getAll: async () => {
    try {
      const response = await axios.get('/adquisiciones/');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
  getById: async (id) => {
    try {
      const response = await axios.get( `/adquisiciones/${id}/`);
      return response.data;
    } catch (error ) {
      console.error(error);
      throw error;
    }
  },
  
  create: async (adquisicion) => {
    try {
      const response = await axios.post('/adquisiciones/', adquisicion);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
  update: async (id, adquisicion) => {
    try {
      const response = await axios.put(`/adquisiciones/${id}/`, adquisicion);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  
  delete: async (id) => {
    try {
      const response = await axios.delete(`/adquisiciones/${id}/`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

export default AdquisicionService;
