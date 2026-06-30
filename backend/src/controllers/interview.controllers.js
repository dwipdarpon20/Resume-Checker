import { PDFParse } from "pdf-parse";
import { groqInterviewReport } from "../services/aiGroq.services.js";
import InterviewReport from "../models/Interview.model.js";

export const generateInterviewReport = async (req, res) => {
    try {
        
        const resumeContent = await new PDFParse(Uint8Array.from(req.file.buffer)).getText();
        const { selfDescription, jobDescription } = req.body;

        const interviewReportByAi = await groqInterviewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription
        });
        const interviewReport = await InterviewReport.create({
            user: req.userId,
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
            ...interviewReportByAi
        });

        return res.status(201).json({
            message: "Interview report created successfully",
            interviewReport
        })
    } catch (error) {
        console.log(error);
    }
}

export const getReporstByUserId = async (req, res) => {
    try {
        const userId = req.userId;
        const reports = await InterviewReport.find({ user : userId })
                                .select('matchScore createdAt title')
                                .sort({ createdAt: -1 });

        if (reports.length === 0) {
            return res.status(404).json({
                success: false,
                message : "No reports found!"
            })
        }
        return res.status(201).json({
            success: true,
            message: "Reports fetched successfully",
            reports
        })
    } catch (error) {
        console.log (error);
    }
}

export const getReportByInterviewId = async (req, res)=>{
    try {
        const {id : interviewId } = req.params;
        const report = await InterviewReport.findById(interviewId);
        if(!report){
            return res.status(404).message("No report found");
        }
        return res.status(201).json({
            success: true,
            message : "Report fetched successfully",
            report
        })
    } catch (error) {
        console.log(error);
        return res.status(404).message("Report not found");
    }
}