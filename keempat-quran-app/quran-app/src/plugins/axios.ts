import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://equran.id/api/v2/surat"
})


export default axiosInstance;