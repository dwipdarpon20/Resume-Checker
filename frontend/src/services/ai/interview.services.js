import axios from "axios";

const api = axios.create ({
    baseURL : 'http://localhost:8080/api/interview',
    withCredentials : true
});

export const generateReport = async({jobDescription, selfDescription, resumeFile})=> {
    try {
        const formData = new FormData();
        formData.append("jobDescription", jobDescription);
        formData.append("selfDescription", selfDescription);
        formData.append("resume" , resumeFile);

        const response = await api.post("/generate-report" , formData , {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getReportById = async (interviewId)=>{
    try {
        const response = await api.get(`/get-report/${interviewId}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllReports = async ()=>{
    try {
        const response = await api.get("/get-reports");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}