import  Groq  from "groq-sdk";
import ENV from "../env.js";
import { resumePromt } from "./prompt.js";

const ai = new Groq({
    apiKey : ENV.GROQ_API,
});

export const groqInterviewReport = async ({resume , selfDescription, jobDescription})=>{
    try {
        const prompt = resumePromt ({selfDescription, jobDescription ,resume});
        const response = await ai.chat.completions.create ({
            model : "llama-3.3-70b-versatile",
            messages : [
                {
                    role : "system",
                    content : "You are professional technical recruiter. Always return valid JSON only"
                },
                {
                    role : "user",
                    content : prompt
                }
            ],
            temperature : 0.2,
            response_format : {
                type : "json_object"
            }
        });

        const text = response.choices[0].message.content;
        return (JSON.parse(text));

    } catch (error) {
        console.log (error);
    }
}

