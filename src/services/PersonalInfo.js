import axios from "axios";

class PersonalInfoDataService {

    getRecordList(userId) {
        return axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/personal_info/record_list/${userId}`
        );
    }

    updateRecordList(data) {
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/personal_info/record_list`, data);
    }
    
    getInfo(userId) {
        return axios.get(
            `${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/personal_info/info/${userId}`
        );
    }

    updateInfo(data) {
        return axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/mypet/personal_info/info`, data);
    }
}

export default new PersonalInfoDataService();