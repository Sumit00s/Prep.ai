Prep.ai 🎯
AI-Powered Mock Interview Assistant

Prep.ai is a full-stack AI-powered interview assistant that helps users prepare for job interviews based on their selected role, tech stack, and preferences. The platform simulates real-world interview sessions using conversational AI, making it ideal for developers, students, and job seekers who want to practice and sharpen their skills with personalized mock interviews.

🚀 Features
🎯 Generate technical questions based on role and stack
🤖 Simulate mock interviews with an AI interviewer
⚙️ Customize difficulty level and question count
🧠 Conversational interface with real-time feedback
🎨 Responsive and clean UI with Tailwind CSS and shadcn/ui
🔐 Authentication and secure data with Firebase
🧠 AI-powered question generation using Google Generative AI
🎙️ Real-time mock sessions with Vapi voice agents

🛠 Tech Stack
Technology	Description
Next.js	Full-stack React framework
Firebase	Auth, Firestore, and backend infrastructure
Tailwind CSS	Utility-first CSS framework
shadcn/ui	Accessible and customizable UI components
Google Gen AI API	For generating tailored interview questions
Vapi	Voice workflow engine for live mock interviews

📦 Getting Started
📦 Project Setup
To run Prep.ai locally, follow these steps:

bash
Copy
Edit
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/prep-ai.git
cd prep-ai

# 2. Install dependencies
npm install

# 3. Create a `.env.local` file and add the following environment variables:

# Firebase Admin SDK
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# Google Generative AI
GOOGLE_GEN_AI_API_KEY=

# Vapi API
VAPI_WEB_AI_API_KEY=
VAPI_WORKFLOW_ID=

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# 4. Start the development server
npm run dev
