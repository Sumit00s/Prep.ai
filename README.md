Prep.ai 💼
AI-Powered Mock Interview Platform

Prep.ai is an AI-driven mock interview assistant that helps users prepare for real-world technical interviews. Simply input your role, tech stack, and number of questions—Prep.ai will generate tailored questions and conduct a simulated interview using conversational AI. Ideal for developers, job seekers, and students looking to improve their interview performance with personalized practice.

🚀 Features
🎯 Generate role-specific technical interview questions
🤖 Conduct mock interviews with an AI interviewer
⚙️ Customize interviews based on tech stack & preferences
🧠 Real-time feedback and question handling
🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
🔐 Firebase Authentication for secure login
📈 Scalable backend powered by Vapi for AI agent conversations

🛠 Tech Stack
Technology	Description
Next.js	Full-stack React framework
Firebase	Auth, Firestore (database), and storage backend
Tailwind CSS	Utility-first CSS framework
shadcn/ui	Accessible, customizable UI components
Vapi	AI voice agent for realistic mock interviews

📦 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/YOUR_USERNAME/prep-ai.git
cd prep-ai

2. Install dependencies
bash
Copy
Edit
npm install


3. Set up environment variables
Create a .env.local file in the root directory and add the following:

env
Copy
Edit
# 🔐 Firebase Admin SDK
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=

# 🔑 Google Generative AI API
GOOGLE_GEN_AI_API_KEY=

# 🎙️ Vapi Configuration
VAPI_WEB_AI_API_KEY=
VAPI_WORKFLOW_ID=

# 🌐 Other (if needed)
NEXT_PUBLIC_BASE_URL=http://localhost:3000
