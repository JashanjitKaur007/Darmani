# Eyra: AI-Powered Mental Health Support Platform

> **Project Title:** Eyra  
> **Project Type:** Copyright  
> **Submission Status:** Submitted

### 👥 Team Details

|        Name        | Roll Number |
| :----------------: | :---------: |
| **Jashanjit Kaur** | 2210990440  |
|  **Vrinda Verma**  | 2210990969  |
| **Aayush Sharma**  | 2210991138  |
|  **Yashasvi Nag**  | 2210990975  |

---


An intelligent, accessible, and user-centric platform designed to provide evidence-based mental health support through conversational AI, clinically-grounded assessments, and intuitive design.

---


## 📋 Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Security & Privacy](#security--privacy)
- [Disclaimer](#disclaimer)
- [Future Roadmap](#future-roadmap)

---


## Overview

Eyra is a comprehensive mental health support platform that bridges the gap between users seeking help and accessible mental wellness resources. By combining advanced AI technology with clinical psychology principles, Eyra creates a safe, private space for individuals to explore their emotional well-being without judgment or barriers.

**Mission:** To make mental health support more accessible, interactive, and less intimidating.

---


## 📸 Screenshots

<details>
<summary>Click to view all screenshots</summary>

<br>

<p align="center">
  <img src="ScreenShots%20of%20Project/1-Home%20Page.png" width="700"><br><br>
  <img src="ScreenShots%20of%20Project/2-homepage.png" width="700"><br><br>
  <img src="ScreenShots%20of%20Project/3-chat.png" width="700"><br><br>
  <img src="ScreenShots%20of%20Project/4-conversation%20report.png" width="700"><br><br>
  <img src="ScreenShots%20of%20Project/5-Tests%20dropdown%20menu.png" width="700"><br><br>
  <img src="ScreenShots%20of%20Project/6-Test%20UI.png" width="700"><br><br>
  <img src="ScreenShots%20of%20Project/7-Depresssoin%20Tests%20Sample%20-%20result,%20email,%20more%20info.png" width="700">
</p>

</details>

---


## Features

### 💬 AI-Powered Chat Support

A context-aware mental health companion that provides supportive conversations:

- **Personalized AI Responses** – Context-aware chatbot trained for mental health conversations
- **Safe & Private Interactions** – End-to-end security with emphasis on user privacy
- **Multiple Chat Sessions** – Organize conversations across different topics or time periods
- **Crisis Support Integration** – Quick access to emergency helplines and crisis resources
- **Chat-Based Analytics** – Weekly mood tracking with visual insights (charts, graphs, sentiment analysis)

### 📊 Evidence-Based Mental Health Assessments

Clinically-grounded self-assessment tests based on validated psychological instruments:

**Available Assessments:**

- Addiction Screening
- ADHD Assessment
- Anxiety Disorder (GAD-7)
- Depression Screening (PHQ-9)
- Eating Disorder Assessment
- Obsessive-Compulsive Disorder (OCD)
- Psychosis Screening
- Social Anxiety Assessment
- Youth Mental Health Screening

**Assessment Experience:**

- **Focused Question Format** – One question at a time to minimize cognitive load
- **Intuitive Navigation** – Questions auto-scroll into view with smooth transitions
- **Distraction-Free Interface** – Clean, minimal design for better concentration

**Results & Insights:**

- **Severity-Coded Results** – Color-coded severity levels for quick interpretation:
  - 🟢 Mild
  - 🟡 Moderate
  - 🟠 Severe
  - 🔴 Extreme (with clinical alerts)

- **Critical Alerts** – High-risk indicators with recommended next steps
- **Email Results** – Shareable assessment reports sent directly to users
- **Answer Review** – Transparent review of all responses
- **Educational Resources** – Condition-specific information to improve health literacy

### 🎥 Live Facial Expression Analysis *(Experimental)*

Advanced emotion detection through real-time facial analysis:

- **Non-Verbal Emotion Recognition** – Detect stress, sadness, happiness, and other emotional states
- **Mood Tracking Over Time** – Visual timeline of emotional patterns
- **Complementary Insights** – Supports understanding of mental state beyond self-reported measures

> **⚠️ Note:** This feature is experimental and intended for awareness only, not diagnostic purposes.

---


## Tech Stack

### Frontend

- **React** – Modern UI library for component-driven development
- **Vite** – Next-generation frontend build tool for fast development
- **Tailwind CSS** – Utility-first CSS framework for responsive design
- **Framer Motion** – Animation library for smooth, accessible interactions
- **Recharts** – Composable React components for data visualization
- **i18next** – Internationalization framework for multi-language support
- **Axios** – Promise-based HTTP client for API communication

### Backend

- **Node.js** – JavaScript runtime for scalable server-side development
- **Express.js** – Web application framework for building RESTful APIs
- **MongoDB** – NoSQL database for flexible, scalable data storage
- **Mongoose** – Object Data Modeling (ODM) library for MongoDB
- **Google Generative AI** – LLM integration for conversational AI
- **JWT (JSON Web Tokens)** – Secure user authentication and authorization

---


## Architecture

Eyra follows the **MERN stack** architecture, providing seamless data flow between client and server with modern best practices for scalability and maintainability.

### Frontend Structure

```
frontend/
├── public/                      # Static assets (icons, favicon, etc.)
│
└── src/
    ├── components/              # Reusable UI and feature components
    │   ├── ui/                  # Design system base components
    │   ├── Account/             # User account and profile management
    │   ├── Chat/                # Chat interface and conversation components
    │   ├── Layout/              # Shared layouts (navbar, footer, sidebars)
    │   └── Feedback/            # Loading states, error boundaries, fallbacks
    │
    ├── pages/                   # Route-based page components
    │   └── tests/               # Assessment and test-related pages
    │
    ├── hooks/                   # Custom React hooks (business logic)
    ├── lib/                     # Core utilities and helper functions
    ├── contexts/                # Global state management (React Context API)
    ├── utils/                   # App utilities (i18n config, storage helpers)
    ├── assets/                  # Images and static media
    └── types/                   # TypeScript type definitions (future support)
```

### Backend Structure

```
backend/
├── config/                      # Environment and database configuration
├── controllers/                 # Request handlers and API business logic
├── models/                      # MongoDB schema definitions
├── routes/                      # API endpoint routing
├── middleware/                  # Authentication, validation, error handling
├── utils/                       # Helper functions (token generation, analytics)
└── services/                    # Core business logic and external integrations
```

### Data Flow

```
Client (React)
    ↓
API Requests (Axios)
    ↓
Express Server (Routes → Controllers)
    ↓
Database (MongoDB)
    ↓
Response (JSON)
    ↓
State Management (Context API) → UI Update
```

---


## Installation & Setup

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud-based connection string)
- **Google Generative AI API Key** (for LLM features)

### Quick Start

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd eyra
```

#### 2. Backend Setup

```bash
cd backend

# Create .env file with required environment variables
cat > .env << EOF
PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret-key>
GOOGLE_API_KEY=<your-google-generative-ai-key>
EOF

# Install dependencies
npm install

# Start the development server
npm start
```

The backend will be available at `http://localhost:5000`.

#### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Add emailjs browser dependency (for test result emails)
npm install @emailjs/browser

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:5173`.

#### 4. Run Both Simultaneously

From the root directory:

```bash
npm run dev
```

This runs both frontend and backend concurrently in development mode.

---


## Project Structure

```
eyra/
├── backend/                     # Node.js + Express API server
│   ├── config/                  # Database and environment configuration
│   ├── controllers/             # Route handlers and business logic
│   ├── models/                  # MongoDB schemas (User, Chat, Assessment, etc.)
│   ├── routes/                  # API endpoints (/api/auth, /api/chat, etc.)
│   ├── middleware/              # Authentication, validation, error handling
│   ├── utils/                   # Token generation, analytics, helpers
│   ├── services/                # AI integration, external APIs, core logic
│   ├── .env.example             # Environment variable template
│   └── package.json             # Dependencies and scripts
│
├── frontend/                    # React + Vite client application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/          # React components (organized by domain)
│   │   ├── pages/               # Route pages
│   │   ├── hooks/               # Custom React hooks
│   │   ├── contexts/            # Global state
│   │   ├── utils/               # Utility functions
│   │   ├── assets/              # Images and static files
│   │   ├── App.jsx              # Root component
│   │   └── main.jsx             # Entry point
│   ├── .env.example             # Environment variable template
│   └── package.json             # Dependencies and scripts
│
├── docs/                        # Project documentation
├── scripts/                     # Setup and automation scripts
├── config/                      # Shared configuration files
├── .gitignore                   # Git ignore rules
├── package.json                 # Root-level package configuration
└── README.md                    # This file
```

---


## Security & Privacy

### Authentication & Authorization

- **JWT Token-Based Auth** – Secure, stateless authentication using JSON Web Tokens
- **Password Hashing** – Industry-standard bcrypt encryption for passwords
- **Secure Session Management** – Tokens with configurable expiration

### Data Protection

- **Encrypted Data Storage** – Sensitive user data encrypted at rest
- **HTTPS/TLS** – Secure communication between client and server
- **Environment Variables** – Sensitive credentials never hardcoded
- **Input Validation** – Server-side validation of all user inputs
- **Rate Limiting** – Protection against abuse and brute-force attacks

### Privacy Measures

- **Data Minimization** – Collect only necessary user information
- **User Consent** – Clear consent mechanisms for data usage
- **Privacy Policy** – Transparent data handling practices
- **Right to Deletion** – Users can request account and data deletion

---


## Disclaimer

**Important Notice:**

Eyra is designed for **support and awareness purposes only**. It is **not a substitute** for professional medical advice, diagnosis, or treatment.

If you are experiencing a mental health crisis or severe symptoms, please seek immediate help from:

- A licensed mental health professional
- Emergency services (call 911 in the US)
- National Crisis Hotlines:
  - **National Suicide Prevention Lifeline:** 988
  - **Crisis Text Line:** Text HOME to 741741
  - **International Association for Suicide Prevention:** https://www.iasp.info/resources/Crisis_Centres/

**Your safety is our priority.** Always prioritize professional help when needed.

---


## Future Roadmap

### Planned Enhancements

- **Advanced Emotion Detection** – Improved facial analysis with better accuracy
- **Personalized AI Responses** – Machine learning models fine-tuned for individual user needs
- **Professional Integration** – Secure referral pathway to licensed therapists
- **Advanced Analytics Dashboard** – Deeper insights into mental health patterns over time
- **Mobile App** – Native iOS and Android applications
- **Peer Support Community** – Moderated peer-to-peer support features
- **Multi-Language Support** – Expanded language coverage beyond current offerings
- **Offline Mode** – Ability to access certain features without internet connection
- **Integration with Wearables** – Heart rate, sleep, and activity data for holistic health tracking

---


## Contributing

We welcome contributions from the community. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please ensure all code adheres to our style guidelines and includes appropriate tests.

---


## License

This project is licensed under the MIT License – see the LICENSE file for details.

---


## Support

For issues, feature requests, or general inquiries:

- **GitHub Issues:** Open an issue on our repository
- **Email:** support@eyra.app
- **Documentation:** See the `/docs` directory for detailed guides

---


## Acknowledgments

Special thanks to:

- The open-source community for excellent libraries and frameworks
- Mental health professionals who guided our assessment design
- All contributors and users who provide feedback and support

---


## ❤️ Final Note

Mental health matters. Eyra is built to provide a **safe, accessible starting point** for understanding and improving emotional well-being. Remember, seeking professional help is a sign of strength, not weakness.

*Take care of your mind. You deserve it.*

---


**Last Updated:** April 2026  
**Version:** 1.0.0
