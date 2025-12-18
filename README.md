# Description Generator

An AI-powered job description generator service that uses the Groq SDK and GPT to automatically create professional job descriptions based on job details.

## Overview

This service generates concise, precise job descriptions in JSON format by processing job information through the Groq API. It's designed to be integrated with a job posting system and provides both standalone functionality and Express.js API endpoints.

## Features

- **AI-Powered Generation**: Uses OpenAI GPT-OSS-120B model via Groq API for intelligent job description creation
- **JSON Output**: Returns structured JSON responses for easy integration
- **Express REST API**: POST endpoint for generating descriptions from job data
- **Streaming Support**: Efficient streaming responses from the AI model
- **Configurable Parameters**: Supports multiple job-related fields including location, pay range, experience requirements, and more

## Technology Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js
- **AI SDK**: Groq SDK
- **Environment**: dotenv for configuration

## Project Structure

```
├── index.js                      # Express server and API endpoints
├── descriptionFunction.js        # Core description generation logic
├── example.js                    # Example usage/testing script
├── package.json                  # Dependencies and configuration
├── .env                         # Environment variables (local)
├── .env.sample                  # Environment template
└── node_modules/                # Dependencies
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd descriptionGenerator
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.sample .env
```

4. Add your Groq API key to `.env`:
```
DESCRIPTION_GENERATOR_API=your_groq_api_key_here
PORT=3000
```

## Usage

### Starting the Server

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 3000).

### API Endpoint

**POST** `/generate_description`

#### Request Body

```json
{
  "jobTitle": "Nurse",
  "department": "Cardiology",
  "jobType": "Part Time",
  "payRange": "$2300 - $2800",
  "location": "Toronto ON",
  "experienceRequired": "2 - 3 Yrs",
  "qualification": "Neurology",
  "specialization": "Neurology",
  "urgency": "High",
  "inPersonInterview": true,
  "physicalInterview": true
}
```

#### Response

```json
{
  "description": "Generated job description text..."
}
```

### Running Example

To test the generation without the API server:

```bash
node example.js
```

## Input Parameters

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| jobTitle | String | Yes | Job position title |
| department | String | Yes | Department or team |
| jobType | String | Yes | Employment type (e.g., Full Time, Part Time) |
| payRange | String | No | Salary range |
| location | String | No | Job location |
| experienceRequired | String | No | Years/type of experience needed |
| qualification | String | No | Required qualifications |
| specialization | String | No | Job specialization |
| urgency | String | No | Hiring urgency level |
| inPersonInterview | Boolean | No | Whether in-person interview is required |
| physicalInterview | Boolean | No | Whether physical presence is required |

## Configuration

The AI model is configured with the following parameters:

- **Model**: `openai/gpt-oss-120b`
- **Temperature**: 1 (randomness)
- **Max Tokens**: 1000
- **Reasoning Effort**: Medium
- **Stream**: Enabled for efficient response

## API Routes

- `GET /` - Health check endpoint returning "Hello World!"
- `POST /generate_description` - Generate job description

## Environment Variables

Create a `.env` file with:

```
DESCRIPTION_GENERATOR_API=your_groq_api_key
PORT=3000
```

## Error Handling

- The service expects valid JSON input in POST requests
- API responses are parsed and returned as JSON objects
- Ensure all required fields (jobTitle, department, jobType) are provided

## Development Notes

- The example.js file contains a sample implementation for testing
- The AI prompt is configured to generate descriptions in JSON format with a "description" key
- Markdown formatting is explicitly disabled in the AI prompt to ensure proper JSON output

## Dependencies

- **express** ^5.2.1 - Web framework
- **groq-sdk** ^0.37.0 - Groq API client
- **dotenv** ^17.2.3 - Environment variable management

## License

ISC
