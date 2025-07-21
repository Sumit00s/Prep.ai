Prep.ai 🎯
AI-Powered Mock Interview Assistant

Prep.ai is a full-stack AI interview assistant that helps users practice real-world interviews tailored to their desired role and tech stack. By inputting key details like the role, technologies, and number of questions, users can simulate personalized mock interviews powered by conversational AI.

Ideal for developers, students, and job seekers who want to build confidence and improve their technical interview skills.

🚀 Features
Generate interview questions based on role and stack

Conduct mock interviews with an AI interviewer

Customize difficulty and question count

Conversational interface for real-time practice

Secure authentication via Firebase

Smooth and accessible UI with shadcn/ui and Tailwind CSS

Voice-based interaction powered by Vapi workflows

🛠 Tech Stack
Next.js – Full-stack React framework
Tailwind CSS – Utility-first CSS for styling
shadcn/ui – Reusable UI components for Next.js
Firebase – Auth, database, and backend infrastructure
Vapi – Workflow engine for AI-based mock interviews
Google Generative AI – For dynamic question generation and evaluation

📦 Getting Started
To run Prep.ai locally, follow these steps:

1. Clone the repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/prep-ai.git
cd prep-ai

3. Install dependencies
bash
Copy
Edit
npm install

3. Configure environment variables
Create a .env.local file in the root directory and add the following:
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

GOOGLE_GEN_AI_API_KEY=

VAPI_WEB_AI_API_KEY=
VAPI_WORKFLOW_ID=


4. Start the development server
npm run dev
