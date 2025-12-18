import { Groq } from 'groq-sdk';
import 'dotenv/config';
const groq = new Groq({apiKey: process.env.DESCRIPTIO_GENERATOR_API});

const chatCompletion = await groq.chat.completions.create({
  "messages": [
    {
      "role": "user",
      "content": "hey how can you help me"
    }
  ],
  "model": "openai/gpt-oss-120b",
  "temperature": 1,
  "max_completion_tokens": 8192,
  "top_p": 1,
  "stream": true,
  "reasoning_effort": "medium",
  "stop": null
});

for await (const chunk of chatCompletion) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}

