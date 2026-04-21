// import React from 'react';
// import { Brain, Heart, Shield, Users, Sparkles, Target, Award, TrendingUp } from 'lucide-react';

// const About = () => {
//   const features = [
//     {
//       icon: <Brain className="w-8 h-8" />,
//       title: "AI-Powered Analysis",
//       description: "Advanced facial emotion recognition using Google's Gemini AI to provide accurate mental health insights."
//     },
//     {
//       icon: <Heart className="w-8 h-8" />,
//       title: "Compassionate Support",
//       description: "24/7 empathetic AI companion designed to listen, understand, and provide personalized mental health guidance."
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "Privacy First",
//       description: "Your conversations and data are encrypted and secure. We prioritize your privacy and confidentiality."
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Local Resources",
//       description: "Get connected to nearby mental health clinics and professionals based on your location."
//     }
//   ];

//   // const stats = [
//   //   { number: "10K+", label: "Active Users" },
//   //   { number: "98%", label: "Satisfaction Rate" },
//   //   { number: "24/7", label: "Availability" },
//   //   { number: "50+", label: "Countries" }
//   // ];
// const stats = [
//   { number: "24/7", label: "Available 24/7" },
//   { number: "$0", label: "Free Access" },
//   { number: "100%", label: "Privacy Guaranteed" },
// { number: "AI", label: "Smart Mental Health Insights" },
// ];


//   const values = [
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Our Mission",
//       description: "To make mental health support accessible, affordable, and stigma-free for everyone, everywhere."
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Our Vision",
//       description: "A world where seeking mental health support is as natural as caring for physical health."
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Our Goal",
//       description: "Empower individuals with AI-driven insights and connect them to professional care when needed."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      
//       {/* Hero Section with Video */}
//       <div className="relative overflow-hidden text-white">
//         {/* Video Background */}
//         <video
//           className="absolute inset-0 w-full h-full object-cover"
//           src="https://video.wixstatic.com/video/11062b_79fb0a985d25457792889076ee94f54e/1080p/mp4/file.mp4?fileUsed=false"
//           autoPlay
//           loop
//           muted
//         ></video>

//         {/* Overlay for readability */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"> */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-33">
//           <div className="text-center">
//             <div className="flex justify-center mb-6">
//               {/* <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
//                 <a href="/home"><Brain className="w-16 h-16 text-white"/></a>
//               </div> */}
//                 <a
//                   href="/home"
//                   className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-2 flex items-center gap-1 hover:bg-white/30 transition duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   <Brain className="w-16 h-16 text-white" />
//                   <span className="text-white font-semibold text-lg">Start Chatting Now</span>
//                 </a>
//             </div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
//               About eyra
//             </h1>
//             <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed">
//               Your trusted AI companion for mental wellness, combining cutting-edge technology 
//               with compassionate care to support your mental health journey.
//             </p>
//           </div>
//         </div>

//         {/* Bottom Wave SVG */}
//         <div className="absolute bottom-0 left-0 right-0">
//           <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
//           </svg>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-2xl shadow-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
//             >
//               <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
//                 {stat.number}
//               </div>
//               <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Story Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
//               <Sparkles className="w-4 h-4" />
//               Our Story
//             </div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Transforming Mental Health Care with AI
//             </h2>
//             <p className="text-lg text-gray-700 mb-4 leading-relaxed">
//               eyra was born from a simple yet powerful belief: mental health support 
//               should be accessible to everyone, anytime, anywhere. We leverage the latest 
//               advancements in artificial intelligence to provide immediate, personalized, 
//               and compassionate mental health support.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               Our platform combines advanced facial emotion recognition, natural language 
//               processing, and a deep understanding of mental health to create a supportive 
//               environment where you can explore your feelings, get insights, and find the 
//               help you need.
//             </p>
//           </div>
//           <div className="relative">
//             <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
//               <div className="bg-white rounded-2xl p-8">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
//                     <p className="text-gray-700 font-medium">Empathy Driven</p>
//                   </div>
//                   <div className="text-center">
//                     <Brain className="w-12 h-12 text-purple-500 mx-auto mb-3" />
//                     <p className="text-gray-700 font-medium">AI Powered</p>
//                   </div>
//                   <div className="text-center">
//                     <Shield className="w-12 h-12 text-blue-500 mx-auto mb-3" />
//                     <p className="text-gray-700 font-medium">Secure & Private</p>
//                   </div>
//                   <div className="text-center">
//                     <Users className="w-12 h-12 text-green-500 mx-auto mb-3" />
//                     <p className="text-gray-700 font-medium">Community Focus</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Why Choose eyra?
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We combine technology and compassion to deliver exceptional mental health support
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature, index) => (
//               <div 
//                 key={index}
//                 className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//               >
//                 <div className="text-purple-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Values Section */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Values
//           </h2>
//           <p className="text-xl text-gray-600">
//             The principles that guide everything we do
//           </p>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {values.map((value, index) => (
//             <div 
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-purple-500 hover:shadow-2xl transition-shadow duration-300"
//             >
//               <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center text-purple-600 mb-4">
//                 {value.icon}
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 {value.title}
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 {value.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-6">
//             Ready to Start Your Mental Wellness Journey?
//           </h2>
//           <p className="text-xl text-purple-100 mb-8">
//             Join thousands of users who trust eyra for their mental health support
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a 
//               href="/register"
//               className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
//             >
//               Get Started Free
//             </a>
//             <a 
//               href="/home"
//               className="bg-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-800 transition-colors duration-300 border-2 border-white/30"
//             >
//               Try Face Analysis
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Note */}
//       <div className="bg-gray-50 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p className="text-gray-600">
//             <span className="font-semibold text-gray-900">Note:</span> eyra is designed to provide support and guidance. 
//             For serious mental health concerns, please consult with a licensed professional.
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default About;























































































import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Brain, Heart, Shield, Users, Sparkles, Target, Award, TrendingUp, ArrowRight, Leaf, Clock, Lock, MapPin, Star, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion"; // Add this import at the top

const About = () => {
  const features = [
    {
      icon: <Brain className="w-11 h-11" />,
      title: "Intelligent Emotion Insights",
      description: "Real-time facial emotion recognition powered by Google's Gemini AI provides accurate, compassionate understanding of how you're feeling."
    },
    {
      icon: <Heart className="w-11 h-11" />,
      title: "Always Present Empathy",
      description: "A warm, non-judgmental AI companion available 24/7 that truly listens and responds with care tailored to your unique emotional state."
    },
    {
      icon: <Shield className="w-11 h-11" />,
      title: "Complete Privacy & Security",
      description: "Every conversation is end-to-end encrypted. Your data is never shared or used for training. Your trust is our foundation."
    },
    {
      icon: <Users className="w-11 h-11" />,
      title: "Seamless Local Connections",
      description: "Find licensed therapists, support groups, and crisis resources near you — gently bridged when professional care is recommended."
    }
  ];

  const stats = [
    { number: "24/7", label: "Support When You Need It" },
    { number: "Free", label: "To Begin Your Journey" },
    { number: "100%", label: "Privacy Protected" },
    { number: "Gemini AI", label: "Powered Intelligence" },
  ];

  const values = [
    {
      icon: <Target className="w-9 h-9" />,
      title: "Accessibility",
      description: "Removing every barrier — financial, geographical, and emotional — so mental wellness support reaches everyone who needs it."
    },
    {
      icon: <Award className="w-9 h-9" />,
      title: "Compassion First",
      description: "Technology should feel human. We design every interaction to be gentle, respectful, and genuinely caring."
    },
    {
      icon: <TrendingUp className="w-9 h-9" />,
      title: "Responsible Guidance",
      description: "Empowering you with insights while always knowing when to recommend connecting with a licensed professional."
    }
  ];

  const testimonials = [
    {
      quote: "eyra helped me understand my emotions on days when I couldn't even explain them to myself. It felt like talking to a truly kind friend.",
      name: "Priya Sharma",
      role: "Software Engineer, Mumbai",
      rating: 5
    },
    {
      quote: "The face analysis feature is surprisingly accurate and the guidance is never pushy. Finally, a mental health tool that respects my pace.",
      name: "Rahul Verma",
      role: "Teacher, Ludhiana",
      rating: 5
    },
    {
      quote: "It gently encouraged me to seek professional help when I needed it most. That bridge made all the difference.",
      name: "Ananya Patel",
      role: "Student, Delhi",
      rating: 5
    }
  ];


  // design 1 
//   const SafeSpaceSection = () => {
//   const points = [
//     { icon: <Heart className="w-5 h-5" />, text: "Get Unbiased Advice" },
//     { icon: <Clock className="w-5 h-5" />, text: "Available 24/7" },
//     { icon: <Lock className="w-5 h-5" />, text: "Fully Anonymous" },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-28">
//       <div className="grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="space-y-8">
//           <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-950 leading-tight">
//             A Judgement Free Place to Discuss Everyday Problems.
//           </h2>

//           <p className="text-lg text-slate-600 leading-relaxed">
//             Whether it’s stress at work, relationship struggles, or just needing someone to listen — your AI Therapist is here to help. 
//             You can open up freely and explore your thoughts without worrying about being judged.
//           </p>

//           <p className="text-lg text-slate-600 leading-relaxed">
//             Your AI therapist assistant provides a safe, empathetic space to sort through your emotions, 
//             offering guidance and support when you need it most.
//           </p>

//           {/* FEATURES LIST */}
//           <div className="space-y-4">
//             {points.map((item, i) => (
//               <div key={i} className="flex items-center gap-3 text-slate-700">
//                 <div className="w-9 h-9 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <span className="font-medium">{item.text}</span>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <a
//             href="/home"
//             className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-lg hover:scale-[1.03] transition"
//           >
//             Talk Now
//             <ArrowRight className="w-5 h-5" />
//           </a>
//         </div>

//         {/* RIGHT SIDE (CARD UI / MOCK IMAGE STYLE) */}
//         <div className="relative">
//           <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100 p-4 rounded-3xl shadow-2xl">
//             <div className="bg-white rounded-3xl p-10 space-y-6">
              
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center">
//                   <Brain className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-slate-900">AI Therapist</p>
//                   <p className="text-sm text-slate-500">Always here for you</p>
//                 </div>
//               </div>

//               <div className="bg-slate-50 p-4 rounded-2xl text-sm text-slate-600">
//                 “It sounds like you’ve been feeling overwhelmed lately.  
//                 Do you want to talk about what’s been weighing on you?”
//               </div>

//               <div className="bg-emerald-50 p-4 rounded-2xl text-sm text-emerald-700 self-end">
//                 “Yeah… work has been really stressful.”
//               </div>

//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };



  const SafeSpaceSection = () => {
  const points = [
    { icon: <Heart className="w-5 h-5" />, text: "Unbiased Advice" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 Availability" },
    { icon: <Lock className="w-5 h-5" />, text: "100% Anonymous" },
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-200 rounded-full blur-[140px] opacity-30" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-teal-200 rounded-full blur-[140px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT SIDE */}
        <div className="space-y-10">
          
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur px-6 py-2 rounded-full border border-emerald-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm text-emerald-700 font-medium">
              Safe • Private • Supportive
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-semibold tracking-[-2px] leading-tight text-slate-950">
            A judgement-free space
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">to be yourself.</span>
          </h2>

          <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
            Whether it’s stress, relationships, or just needing someone to listen —
            your AI therapist is always here. No pressure, no judgment, just a space
            where you can think clearly and feel understood.
          </p>

          {/* FEATURES */}
          {/* <div className="flex flex-wrap gap-4 pt-2">
            {points.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100"
              >
                <span className="text-emerald-600">{item.icon}</span>
                <span className="text-sm font-medium text-slate-700">
                  {item.text}
                </span>
              </div>
            ))}
          </div> */}



          {/* CTA */}
          <div className="pt-6">
            <a
              href="/home"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-6 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-[1.04]"
            >
              Talk Now
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - PREMIUM CHAT UI */}
        <div className="relative">
          
          {/* Glass Card */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-8 space-y-6">

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">AI Therapist</p>
                <p className="text-xs text-slate-500">Online now</p>
              </div>
            </div>

            {/* Chat bubbles */}
            <div className="space-y-4 text-sm">

              <div className="bg-slate-100 p-4 rounded-2xl text-slate-700 max-w-[80%]">
                It sounds like something has been on your mind lately.
                Do you want to talk about it?
              </div>

              <div className="bg-emerald-600 text-white p-4 rounded-2xl max-w-[80%] ml-auto">
                Yeah… I’ve been feeling really overwhelmed with everything.
              </div>

              <div className="bg-slate-100 p-4 rounded-2xl text-slate-700 max-w-[80%]">
                That makes sense. When things pile up, it can feel heavy.
                What’s been the hardest part for you?
              </div>

            </div>

            {/* Input fake */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex-1 bg-slate-100 rounded-xl px-4 py-3 text-slate-400 text-sm">
                Type your message...
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                →
              </div>
            </div>
          </div>

          {/* Glow behind card */}
          <div className="absolute -z-10 inset-0 blur-3xl opacity-30 bg-gradient-to-br from-emerald-300 to-teal-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};


const FAQSection = () => {
  return (
    <>
      <style>
        {`
          .faq-item {
            transition: all 0.3s ease;
          }

          .faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease, opacity 0.3s ease;
            opacity: 0;
          }

          .faq-item.active .faq-content {
            max-height: 200px;
            opacity: 1;
            margin-top: 10px;
          }

          .faq-icon {
            transition: transform 0.3s ease;
          }

          .faq-item.active .faq-icon {
            transform: rotate(45deg);
          }
        `}
      </style>

      <div className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-semibold text-center text-slate-900 mb-16">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {
            [
{
    "q": "What makes Eyra different from other AI chat tools?",
    "a": "Eyra is built specifically for emotional well-being, focusing on meaningful conversations rather than generic responses. It aims to help you reflect, gain clarity, and build healthier mental habits over time."
  },
  {
    "q": "How can Eyra help me on a daily basis?",
    "a": "Eyra can be part of your daily routine by helping you check in with your emotions, reflect on your day, and develop small habits that support your mental wellness."
  },
  {
    "q": "Does Eyra remember what I share?",
    "a": "Eyra can retain context from your conversations to provide more relevant responses, but it is designed to respect your privacy and handle your data responsibly."
  },
  {
    "q": "Is Eyra suitable for people new to mental health support?",
    "a": "Yes, Eyra is beginner-friendly and designed to be approachable. It can be a comfortable starting point for people exploring mental wellness for the first time."
  },
  {
    "q": "Can Eyra help me build better habits?",
    "a": "Eyra can suggest simple routines, reflection exercises, and mindset shifts that encourage consistency and personal growth over time."
  },
  {
    "q": "What kind of tone does Eyra use in conversations?",
    "a": "Eyra communicates in a calm, thoughtful, and supportive tone, aiming to make conversations feel natural and easy rather than clinical or robotic."
  },
  {
    "q": "Can I use Eyra anytime I want?",
    "a": "Yes, Eyra is available whenever you need it, whether it’s late at night, during a busy day, or in moments when you just need to talk."
  },
  {
    "q": "Does Eyra give direct answers or guide me to find my own?",
    "a": "Eyra often helps you think through situations by asking reflective questions, while also offering suggestions when you’re looking for direction."
  },
  {
    "q": "Is Eyra only for serious mental health concerns?",
    "a": "No, Eyra is useful for both everyday thoughts and deeper emotional challenges. You can use it for anything from small worries to bigger life questions."
  },
  {
    "q": "How quickly does Eyra respond?",
    "a": "Eyra responds instantly, allowing you to have a smooth and uninterrupted conversation whenever you need support."
  },
            ].map((item, i) => (
              <div
                key={i}
                className="faq-item border border-slate-200 rounded-2xl p-5 cursor-pointer"
                onClick={(e) => {
                  e.currentTarget.classList.toggle("active");
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-slate-800">
                    {item.q}
                  </h3>
                  <span className="faq-icon text-2xl text-slate-500">+</span>
                </div>

                <div className="faq-content text-slate-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};


  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans overflow-x-hidden">
      {/* Fixed Professional Navigation */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center shadow-inner">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-semibold text-3xl tracking-[-2px] text-slate-900">eyra</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
            <a href="#story" className="hover:text-emerald-700 transition-colors">Our Story</a>
            <a href="#how" className="hover:text-emerald-700 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
            <a href="#values" className="hover:text-emerald-700 transition-colors">Values</a>
          </div>

          <a 
            href="/register" 
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Start Free Today
          </a>
        </div>
      </nav> */}

      {/* Hero - More Impactful & Serene */}
      <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/60 to-teal-50" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_0.8px,transparent_1px)] bg-[length:60px_60px] opacity-10" />

        {/* <div className="relative z-10 max-w-6xl mx-auto px-6 text-center"> */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur px-8 py-3 rounded-3xl border border-emerald-100 mb-10 shadow-sm">
            <Sparkles className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 uppercase tracking-[2px] text-xs font-semibold">A gentler approach to mental wellness</span>
          </div>

          <h1 className="text-7xl md:text-[5.8rem] leading-none font-semibold tracking-[-3.5px] text-slate-950 mb-8">
            Mental wellness,<br />made kind and <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">accessible</span>.
          </h1>

          <p className="max-w-3xl mx-auto text-2xl text-slate-600 mb-14 leading-relaxed font-light">
            eyra is your compassionate AI companion — using advanced emotion recognition to listen deeply and guide you toward calmer, clearer days.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/home"
              className="group inline-flex items-center justify-center gap-4 bg-emerald-600 hover:bg-emerald-700 text-white px-14 py-7 rounded-3xl font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.03]"
            >
              Begin Your Journey Now
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-3 border-2 border-slate-300 hover:border-slate-400 px-12 py-7 rounded-3xl font-medium text-xl transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-20 flex flex-wrap justify-center gap-x-16 gap-y-8 text-sm text-slate-500">
            <div className="flex items-center gap-3"><Lock className="w-5 h-5 text-emerald-600" />End-to-end encrypted</div>
            <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-emerald-600" />Available round the clock</div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-emerald-600" />Local professional connections</div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#f8fafc] to-transparent" />
      </div>

      {/* <SafeSpaceSection /> */}

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-12 grid grid-cols-2 md:grid-cols-4 gap-8 border border-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-6xl font-semibold bg-gradient-to-br from-emerald-700 to-teal-600 bg-clip-text text-transparent mb-3 tracking-tighter">
                {stat.number}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      {/* <div id="story" className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-10">
            <div className="uppercase text-emerald-700 font-semibold tracking-widest text-sm">Our Beginning</div>
            
            <h2 className="text-6xl font-semibold tracking-tighter leading-none text-slate-950">
              We believe mental health support should feel like a warm conversation — not a clinical visit.
            </h2>

            <div className="space-y-7 text-lg text-slate-600 leading-relaxed">
              <p>
                eyra was created because waiting weeks for help or feeling judged shouldn't be part of caring for your mind. 
                We combine the latest in AI emotion understanding with genuine empathy modeling to create a safe, immediate space for reflection and growth.
              </p>
              <p>
                Whether you're feeling overwhelmed, anxious, low, or simply want to check in with yourself — eyra is here, without judgment and without delay.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="bg-gradient-to-br from-emerald-100 via-teal-100 to-sky-100 rounded-3xl p-4 shadow-2xl">
              <div className="bg-white rounded-3xl p-14">
                <div className="grid grid-cols-2 gap-12">
                  {[
                    { icon: Heart, label: "Empathy" },
                    { icon: Brain, label: "Intelligence" },
                    { icon: Shield, label: "Safety" },
                    { icon: Users, label: "Connection" }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-6 text-emerald-600">
                        <item.icon className="w-11 h-11" />
                      </div>
                      <p className="font-semibold text-slate-800">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* // paste here - */}
      <SafeSpaceSection />

      {/* How It Works */}
      <div id="how" className="bg-white py-28 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-emerald-600 font-semibold tracking-widest text-sm mb-3">SIMPLE • GENTLE • EFFECTIVE</div>
            <h2 className="text-6xl font-semibold tracking-tighter text-slate-950">How eyra supports you</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Check In", desc: "Share how you're feeling through chat or optional quick face scan." },
              { step: "02", title: "Receive Insights", desc: "Get gentle, personalized reflections and practical next steps." },
              { step: "03", title: "Grow & Connect", desc: "Build daily habits or get seamlessly connected to local professionals when needed." }
            ].map((item, i) => (
              <div key={i} className="relative bg-slate-50 border border-slate-100 rounded-3xl p-10 group hover:bg-white hover:shadow-xl transition-all">
                <div className="text-7xl font-semibold text-emerald-200 group-hover:text-emerald-100 transition-colors absolute -top-6 -right-4">{item.step}</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-5">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                <ChevronRight className="mt-10 text-emerald-600 opacity-40 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section - Enhanced */}
      {/* <div id="features" className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-semibold tracking-tighter text-slate-950 mb-4">Thoughtfully built features</h2>
          <p className="text-xl text-slate-600 max-w-xl mx-auto">Every detail designed to make mental wellness feel approachable and supportive</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-transparent hover:border-emerald-200 rounded-3xl p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col"
            >
              <div className="mb-10 text-emerald-600 group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed flex-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div> */}


{/* Features Grid - Redesigned */}
<>
  {/* Animation styles */}
  <style>
    {`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>

  {/* Section */}
  <section className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-[-2px] text-slate-950 mb-6">
          Designed to support you,
          <br />
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">anytime, anywhere</span>
        </h2>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A calm, private space where you can think clearly, express freely, and feel understood — without pressure or judgment.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          {
            icon: Clock,
            title: "Always Available",
            description: "Support whenever you need it — no waiting, no appointments.",
          },
          // {
          //   icon: Shield,
          //   title: "Private & Safe",
          //   description: "Your thoughts stay yours. No tracking, no judgment.",
          // },
          // {
          //   icon: Heart,
          //   title: "Feels Human",
          //   description: "Conversations that feel calm, natural, and genuinely supportive.",
          // },
          {
            icon: Brain,
            title: "Guided Clarity",
            description: "Understand your thoughts with structured reflection.",
          },
          {
            icon: MessageCircle,
            title: "Effortless to Use",
            description: "Just start typing. No learning curve, no friction.",
          },
          {
            icon: Sparkles,
            title: "Adapts to You",
            description: "Responses evolve based on your needs over time.",
          },
        ].map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              style={{
                animation: `fadeUp 0.6s ease forwards`,
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
              className="group translate-y-10"
            >
              <div className="relative h-full rounded-3xl p-[1px] bg-gradient-to-b from-slate-200 to-transparent hover:from-emerald-300 transition-all duration-500">

                {/* Card */}
                <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-10 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">

                  {/* ICON */}
                  <div className="mb-8 relative">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-40 bg-emerald-300 transition" />
                  </div>

                  {/* TEXT */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>

                  {/* bottom line */}
                  <div className="mt-8 h-[2px] w-0 bg-emerald-500 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  </section>
</>

      {/* Testimonials */}
      <div className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold tracking-tighter">Real voices, real impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-3xl p-10 shadow-sm">
                <div className="flex mb-8">
                  {[...Array(t.rating)].map((_, k) => <Star key={k} className="w-5 h-5 text-amber-400 fill-current" />)}
                </div>
                <p className="text-lg leading-relaxed text-slate-700 mb-10">“{t.quote}”</p>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


{/* How It Works Section */}


      {/* Values */}
      <div id="values" className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-semibold tracking-tighter text-slate-950">Guided by care</h2>
          <p className="mt-4 text-xl text-slate-600">These values shape every conversation and every feature</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-12 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all group">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl flex items-center justify-center text-white mb-10 group-hover:rotate-6 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-3xl font-semibold tracking-tight mb-6 text-slate-900">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">{value.description}</p>
            </div>
          ))}
        </div>
      </div>




{/* ✅ ADD HERE */}
<FAQSection />





      {/* Final CTA */}
      <div className="bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-700 py-32 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-8">
            Ready to feel a little lighter?
          </h2>
          <p className="text-2xl text-white/90 mb-14 max-w-2xl mx-auto">
            Join thousands who have already started their gentle journey toward better mental wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/register"
              className="bg-white text-emerald-700 px-16 py-7 rounded-3xl font-semibold text-2xl shadow-2xl hover:bg-slate-50 transition-all hover:scale-105"
            >
              Create Your Free Account
            </a>
            <a
              href="/home"
              className="border-2 border-white/80 hover:bg-white/10 px-14 py-7 rounded-3xl font-semibold text-2xl transition-all"
            >
              Try Face Analysis
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-500 text-sm leading-relaxed">anytime, anywhere..
          <p className="font-medium text-slate-700 mb-3"><span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">A gentle reminder</span></p>
          <p>
            eyra offers supportive AI-guided insights and is not a replacement for professional mental health treatment. 
            If you are in crisis or need immediate help, please reach out to a licensed therapist or your local emergency mental health services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;