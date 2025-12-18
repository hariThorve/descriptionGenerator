import express from "express"
import "dotenv/config"
import { generate_description } from "./descriptionFunction.js"

const app = express()
app.use(express.json())

const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/generate_description', async (req, res)=>{

    const data = {
        jobTitle : req.body.jobTitle,
        department : req.body.department,
        jobType : req.body.jobType,
        payRange : req.body.payRange,
        location : req.body.location,
        experienceRequired : req.body.experienceRequired,
        qualification : req.body.qualification,
        specialization : req.body.specialization,
        urgency : req.body.urgency,
        inPersonInterview : req.body.inPersonInterview,
        physicalInterview : req.body.physicalInterview
    }
    

    let response = await generate_description(data)
    res.send(JSON.parse(response))

})

// app.post('/generate_description', (req, res) => {
//   // Access the parsed JSON data from req.body
//   const jsonData = req.body;
//   console.log('Received JSON data:', jsonData);

//   // Send a response back to the client
//   res.status(200).json({
//     message: 'JSON data received successfully!',
//     data: jsonData
//   });
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

