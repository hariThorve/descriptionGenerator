import { Groq } from 'groq-sdk';
import 'dotenv/config';

// creating job description generator 
// input = {
//     jobTitle : String (important not null),
//     department : string (important not null),
//     jobType : String (important not null),
//     payRange : String (important),
//     location : String,
//     experienceRequired : String,
//     qualification : String,
//     specialization : string,
//     urgency : string,
//     inPersonInterview : Boolean,
//     physicalInterview : Boolean
// }





// this will be recieved from the frontend using form data, but for testing purpose,
// it is hardcoded

const input = {
  jobTitle : "Nurse",
  department : "Cardiology",
  jobType : "Part Time",
  payRange : "$2300 - $2800",
  location : "Toronto ON",
  experienceRequired : "2 - 3 Yrs",
  qualification : "Neurology",
  specialization : "Neurology",
  urgency : "High",
  inPersonInterview : true,
  physicalInterview : true
}


const groq = new Groq({apiKey: process.env.DESCRIPTION_GENERATOR_API});
const chatCompletion = await groq.chat.completions.create({
  "messages": [
    {
        "role": "system",
        "content": 
        `You are responsible to create a short and precise Job Description
        based on the input data, which will contain information regarding job post.
        Keep it simple in JSON format in such format {description: "your output"}, 
        dont create the description in markdown format.
        It is mandatory to have json output. Explain the Job role and responsibilities,
        so that the candidate would understand properly.
        `
    },
    {
      "role": "user",
      "content": `Job details : ${JSON.stringify(input)}`
    }
  ],
  "model": "openai/gpt-oss-120b",
  "temperature": 1,
  "max_completion_tokens": 1000,
  "top_p": 1,
  "stream": true,
  "reasoning_effort": "medium",
  "stop": null
});

for await (const chunk of chatCompletion) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}

