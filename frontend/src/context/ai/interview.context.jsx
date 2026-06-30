import { createContext , useEffect, useState } from "react";

export const InterviewContext = createContext();

export const InterviewProvider = ({children})=>{
    const [report , setReport] = useState();
    const [reports , setReports]= useState([]);
    const [loading , setLoading] = useState(false);

    return (
        <InterviewContext.Provider value={{report ,setReport , reports , setReports , loading ,setLoading}}>
            {children}
        </InterviewContext.Provider>
    )
}