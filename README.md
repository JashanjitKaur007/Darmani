# Darmani License MongoDB React Node.js Google AI  

An intelligent mental wellness companion built using the MERN stack and Google Gemini AI.

---

## 🌟 Introduction  
Darmani is a full-featured mental health support platform that uses advanced AI to deliver empathetic and personalized assistance. It integrates conversational AI, facial emotion recognition, and location-aware support resources to provide a well-rounded mental health experience.

---

## 🎯 Purpose  
The goal of Darmani is to make mental health care more approachable, cost-effective, and stigma-free by using AI-driven solutions that complement professional therapy and traditional care systems.

---

## ✨ Key Highlights  

- 🤖 **AI-Driven Insights** – Utilizes Google Gemini 2.5 Flash for deep emotional understanding  
- 📸 **Facial Emotion Recognition** – Detects emotions via camera input or uploaded images  
- 🗺️ **Nearby Support Services** – Identifies mental health facilities based on user location  
- 💬 **Context-Aware Chat** – Continues meaningful conversations based on prior inputs  
- 📊 **Emotion Tracking** – Stores interactions to help observe emotional trends  
- 🔒 **Privacy-Focused** – Secure handling of user data with encryption  
- 🌍 **Always Available** – Accessible anytime for continuous support  

---

## ✨ Core Features  

### 🤖 AI Chat Assistance  
- **Live Conversations**: Communicate naturally with Gemini AI  
- **Context Retention**: Keeps track of conversation flow for personalization  
- **Emotion-Sensitive Replies**: Responds appropriately to emotional tone  
- **Mental Health Focused**: Designed specifically for wellness support  
- **Markdown Rendering**: Clean and structured responses  

---

### 📸 Facial Emotion Analysis  
- **Camera Input**: Capture live facial data  
- **Image Upload**: Accepts images up to 10MB with compression  
- **Emotion Recognition**: Detects moods such as happiness, anxiety, stress, etc.  
- **Intensity Levels**: Classifies emotional strength (low, moderate, high)  

**Detailed Feedback Includes:**  
- Identified emotion  
- Sentiment (positive, neutral, negative)  
- Severity level  
- Explanation of results  
- Personalized coping recommendations  

- **Saved Results**: Analysis persists across navigation  
- **Chat Continuation**: Discuss results directly with AI  

---

### 🗺️ Mental Health Resources (Location-Based)  
- **Nearby Facilities**: Finds 3–5 mental health centers around the user  
- **Auto Suggestions**: Triggered when moderate/high emotional distress is detected  

**Clinic Details Include:**  
- Name and category  
- Contact numbers (click-to-call)  
- Address and distance  
- Availability status  

- **Helplines Included**: 988, Crisis Text Line, SAMHSA, NAMI  
- **Privacy Assurance**: Location is used only temporarily and not stored  

---

### 📊 Interaction History  
- **Persistent Storage**: Saves chats and analysis sessions  
- **Organized View**: Sorted by date for easy navigation  
- **Search Capability**: Track emotional patterns over time  
- **Delete Option**: Remove entries when needed  
- **Session Categorization**: Differentiates chat vs analysis sessions  

---

### 🔐 Authentication & Security  
- **JWT Authentication**: Secure session handling  
- **Password Protection**: Bcrypt hashing with salting  
- **Route Security**: Middleware-based protection  
- **Session Persistence**: Maintains login state across tabs  
- **Token Handling**: Automatic session management  

---

### 🎨 User Experience  
- **Responsive Layout**: Works across all screen sizes  
- **Dark Mode UI**: Purple-blue gradient theme for comfort  
- **Simple Navigation**: Clean and intuitive interface  
- **Loading Indicators**: Feedback during AI processing  
- **Error Handling**: User-friendly recovery messages  
- **Accessible Design**: Follows WCAG 2.1 guidelines  

---

## 🛠️ Technology Stack  

### Frontend  
| Technology      | Role                     | Version  |
|----------------|--------------------------|----------|
| React          | UI Development           | 18.3.1   |
| Vite           | Build Tool               | 5.4.1    |
| React Router   | Routing                  | 6.26.1   |
| Axios          | API Communication        | 1.7.7    |
| React Markdown | Markdown Rendering       | 9.0.1    |
| Lucide React   | Icons                    | 0.441.0  |
| Context API    | State Management         | Built-in |

---

### Backend  
| Technology   | Role                     | Version  |
|--------------|--------------------------|----------|
| Node.js      | Runtime                  | 18+      |
| Express.js   | Server Framework         | 5.1.0    |
| MongoDB      | Database                 | 8.19.1   |
| Mongoose     | ODM                      | 8.19.1   |

---

### AI & Security  
| Technology        | Purpose                                  |
|------------------|------------------------------------------|
| Google Gemini AI | AI Model (gemini-2.5-flash)              |
| JWT              | Authentication                           |
| Bcrypt.js        | Password encryption                      |

---

## 🏗️ System Architecture  
CLIENT (React + Vite)
│
├── Chat Interface
├── Face Analysis Module
└── History Viewer
│
│ HTTPS / REST API
│
SERVER (Node.js + Express)
│
├── Middleware
│ • CORS
│ • Authentication (JWT)
│ • Error Handling
│
├── API Routes
│ • /api/users
│ • /api/chat
│ • /healthz
│
├── Controllers
│ • User Management
│ • Chat Processing
│ • Face Analysis Logic
│
├── Database (MongoDB)
│ • User Data
│ • Interaction History
│
└── External AI (Gemini API)
• Chat Processing
• Emotion Interpretation
• Resource Suggestions


---

## 🔄 Data Flow Overview  

- User interacts via chat or uploads/captures an image  
- Request is sent to backend APIs  
- Server processes request (authentication, logic, AI calls)  
- Gemini AI generates responses or analysis  
- Data is stored in MongoDB  
- Results are returned and displayed on the frontend  

---
