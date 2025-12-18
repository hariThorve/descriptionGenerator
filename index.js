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

import express from "express"
import {Groq} from "groq-sdk"
import { configDotenv } from "dotenv"

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
