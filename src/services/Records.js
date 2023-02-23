import axios from "axios";

class RecordsDataService {
    getAll(ids, page = 0) {
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/record/list/${ids}/${page}`);
    }
   
    postRecord(data) {
        return axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/record`, data);
    }

    editRecord(data) {
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/record`, data);
    }
    
    getRecordIdByDateAndUserId(userId,date){
        return axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/record/${userId}/${date}`);
    }
}

export default new RecordsDataService();