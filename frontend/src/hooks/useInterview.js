import { useContext } from "react"
import { generateReport, getAllReports, getReportById } from "../services/ai/interview.services.js"
import { InterviewContext } from "../context/ai/interview.context.jsx"
import { useParams } from "react-router";

export const useInterview = ()=> {
    const context = useContext(InterviewContext);
    if (!context){
        throw new Error ("No context provided");
     }
    const {loading , setLoading , report , setReport , reports , setReports } = context;

    const generateInterviewReport = async({selfDescription , jobDescription, resumeFile})=>{
        try {
            setLoading(true);
            let response = await generateReport({jobDescription, selfDescription ,resumeFile});
            setReport(response.interviewReport);
            return response.interviewReport;
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const getInterviewReportById  = async (interviewId) =>{
        try {
            setLoading(true);
            const response = await getReportById (interviewId);
            setReport(response.report);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    const getInterviewReports = async ()=>{
        try {
            setLoading(true);
            const response = await getAllReports();
            setReports(response.reports);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    return {loading , report, reports, generateInterviewReport, getInterviewReportById, getInterviewReports}
}