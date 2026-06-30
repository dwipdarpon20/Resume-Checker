
export const resumePromt = ({jobDescription , resume , selfDescription}) => {
        const prompt = ` 
            You are an expert Technical Recruiter and Interview Coach.
            Analyze the following information carefully.
            =========================
            JOB DESCRIPTION
            =========================
            ${jobDescription}
            =========================
            RESUME
            ========================
            ${resume}
            =========================
            SELF DESCRIPTION
            =========================
            ${selfDescription}
            Return ONLY ONE valid JSON object.
            DO NOT:
            - Write markdown
            - Write explanations
            - Use \`\`\`
            - Wrap objects inside strings
            - Return null
            The JSON MUST look EXACTLY like this strictly follow the JSON format I have given 
            Just copy poit to point:
            {
            "title": "string",
            "matchScore": 90,
            "technicalQuestions": [
                {
                "question": "string",
                "answer": "string",
                "intention": "string"
                }
            ],
            "behavioralQuestions": [
                {
                "question": "string",
                "answer": "string",
                "intention": "string"
                }
            ],
            "skillGaps": [
                {
                "skill": "string",
                "severity": "low"
                }
            ],
            "preparationPlan": [
                {
                "day": 1,
                "focus": "string",
                "tasks": [
                    "task1",
                    "task2"
                ]
                }
            ]
            }

            Requirements
            - title → Extract job title.
            - matchScore → Integer between 0-100.
            - technicalQuestions → Generate minimum 8 or more than that depending on the resume and job description, most probably can be asked in the interview.
            - behavioralQuestions → Generate minimum 5 or more than that depending on the resume and job description, most probably can be asked in the interview.
            - skillGaps → Generate minimum 3 more than that depending on the resume and job description, most probably can be asked in the interview.
            - preparationPlan → Generate minimum 7 days more than that depending on the resume and job description, most probably can be asked in the interview. add the task day wise what should do
            Every array MUST contain JSON objects.
            Return ONLY valid JSON.`;

  return prompt;
}