import React, { useState, useEffect, useRef } from 'react';

// This component will inject the necessary styles and scripts into the document head.
const StyleSetup = () => {
  useEffect(() => {
    // Inject Tailwind CSS CDN script
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    // Inject custom animation styles
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }

      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }

      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in-up {
        opacity: 0;
        animation: fade-in-up 1s ease-out forwards;
        animation-fill-mode: forwards;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }
      
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      .animate-pulse { animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (document.head.contains(tailwindScript)) {
        document.head.removeChild(tailwindScript);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
};

// ICONS - Education themed
const LogoIcon = () => (
  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9z" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-yellow-400">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-gray-400">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const QuizGeneratorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const YouTubeProcessorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const CollaborativeQuizIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const QuestionPaperDigitizerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const AITutorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

// Animated Counter Hook
const useAnimatedCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const endValue = parseInt(end.toString().replace(/,/g, ''));
          if (start === endValue) return;

          let startTime = null;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (endValue - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

// Header Component for AI StudyHub
const Header = ({ setPage, theme, toggleTheme }) => {
  const navItems = ['AI Quiz Generator', 'YouTube Processor', 'Quiz Classrooms', 'Question Digitizer', 'AI Tutor'];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-blue-900/80 backdrop-blur-sm shadow-md dark:shadow-blue-800 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo & Title */}
          <div
            className="flex items-center space-x-3 cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setPage('home')}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <LogoIcon />
            </div>
            <span className="text-xl font-bold text-blue-800 dark:text-white tracking-wide transition-colors duration-300">
              AI StudyHub
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setPage(item.toLowerCase().replace(/ /g, ''))}
                className="relative px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 transform hover:scale-105 group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white dark:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section for AI StudyHub
const HeroSection = ({ setPage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-20 md:py-32 text-center overflow-hidden min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 transition-all duration-1000"></div>

      {/* Interactive Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }}
      ></div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-2xl opacity-40 animate-float"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-yellow-200 dark:bg-yellow-800 rounded-full filter blur-2xl opacity-40 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-green-200 dark:bg-green-800 rounded-full filter blur-2xl opacity-40 animate-float animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced Icon Container */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-2xl transform hover:scale-110 transition-all duration-500">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full shadow-lg">
                <QuizGeneratorIcon className="text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 leading-tight mb-6">
            AI StudyHub
          </h1>

          {/* Subtitle */}
          <div className="relative">
            <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 max-w-3xl mx-auto animate-slide-up mb-6">
              Empowering Schools and Students with AI
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-width-expand"></div>
          </div>

          {/* Description */}
          <p className="mt-8 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Transform any content into personalized quizzes, notes, and study materials. From PDFs and YouTube videos to handwritten notes and question papers - make learning engaging, collaborative, and fun!
          </p>

          {/* CTA Button */}
          <div className="mt-12 relative">
            <button
              onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10 flex items-center gap-3">
                Start Creating Quizzes
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-scroll-indicator"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes width-expand {
          0% { width: 0; }
          100% { width: 8rem; }
        }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-width-expand { animation: width-expand 1.5s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1s ease-out 0.5s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

// Stats Section for AI StudyHub
const StatsSection = () => {
  const [studentsHelped, studentsRef] = useAnimatedCounter(25847);
  const [quizzesGenerated, quizzesRef] = useAnimatedCounter(156432);
  const [schoolsPartnered, schoolsRef] = useAnimatedCounter(1247);

  const stats = [
    { value: studentsHelped.toLocaleString(), label: 'Students Helped', ref: studentsRef, icon: "👨‍🎓" },
    { value: quizzesGenerated.toLocaleString(), label: 'Quizzes Generated', ref: quizzesRef, icon: "📝" },
    { value: schoolsPartnered.toLocaleString(), label: 'Schools Partnered', ref: schoolsRef, icon: "🏫" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-800 to-blue-900 transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Thousands</h2>
          <p className="text-blue-200 text-lg">Join our growing community of learners and educators</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={stat.ref}
              className="group p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Capability Card Component
const CapabilityCard = ({ icon, title, description, buttonText, buttonColor, setPage, pageName }) => (
  <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 flex flex-col items-start border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
    <div className={`p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`} style={{ backgroundColor: `${buttonColor}20` }}>
      <div className={`text-white rounded-lg`} style={{ color: buttonColor }}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">{description}</p>
    <button 
      onClick={() => setPage(pageName)} 
      className="w-full text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:opacity-90 hover:shadow-lg transform hover:scale-105" 
      style={{ backgroundColor: buttonColor }}
    >
      {buttonText}
    </button>
  </div>
);

// Capabilities Section for AI StudyHub
const CapabilitiesSection = ({ setPage }) => {
  const capabilities = [
    { 
      icon: <QuizGeneratorIcon />, 
      title: 'AI Quiz Generator', 
      description: 'Create personalized quizzes from PDFs, images, videos, and handwritten notes using advanced AI technology.', 
      buttonText: 'Generate Quiz', 
      buttonColor: '#2563EB', 
      pageName: 'aiquizgenerator' 
    },
    { 
      icon: <YouTubeProcessorIcon />, 
      title: 'YouTube Processor', 
      description: 'Enter any topic and get curated YouTube videos with notes, summaries, and quizzes automatically generated.', 
      buttonText: 'Process Videos', 
      buttonColor: '#DC2626', 
      pageName: 'youtubeprocessor' 
    },
    { 
      icon: <CollaborativeQuizIcon />, 
      title: 'Quiz Classrooms', 
      description: 'Create virtual study groups to take quizzes together and share resources collaboratively with peers.', 
      buttonText: 'Join Classroom', 
      buttonColor: '#10B981', 
      pageName: 'quizclassrooms' 
    },
    { 
      icon: <QuestionPaperDigitizerIcon />, 
      title: 'Question Digitizer', 
      description: 'Upload past exam papers and convert them into digital quizzes with analytics and customizable timers.', 
      buttonText: 'Digitize Papers', 
      buttonColor: '#F97316', 
      pageName: 'questiondigitizer' 
    },
    { 
      icon: <AnalyticsIcon />, 
      title: 'Smart Analytics', 
      description: 'Track your progress with interactive dashboards, heatmaps, and detailed performance insights.', 
      buttonText: 'View Analytics', 
      buttonColor: '#8B5CF6', 
      pageName: 'smartanalytics' 
    },
    { 
      icon: <AITutorIcon />, 
      title: '24/7 AI Tutor', 
      description: 'Get instant help and explanations from our AI tutor with voice interaction and personalized support.', 
      buttonText: 'Chat with Tutor', 
      buttonColor: '#EF4444', 
      pageName: 'aitutor' 
    },
  ];

  return (
    <section id="capabilities" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI-Powered</span> Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transform your learning experience with our comprehensive suite of AI tools designed for students and educators worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CapabilityCard {...cap} setPage={setPage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Features Section for AI StudyHub
const FeaturesSection = () => {
  const features = [
    {
      icon: <QuizGeneratorIcon />,
      title: 'Multimodal AI Processing',
      description: 'Our advanced AI processes PDFs, images, videos, audio, handwritten notes, and YouTube content to create personalized study materials tailored to your learning style.',
    },
    {
      icon: <CollaborativeQuizIcon />,
      title: 'Collaborative Learning',
      description: 'Study together in virtual classrooms, share resources, analyze group performance, and learn from your peers in real-time collaborative environments.',
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Smart Performance Tracking',
      description: 'Get detailed insights with interactive dashboards, progress tracking, peer comparisons, and personalized learning recommendations powered by AI.',
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-blue-900 dark:via-blue-800 dark:to-purple-900 transition-colors duration-300">
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 tracking-tight">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">AI StudyHub</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the future of education with our AI-powered learning platform that makes studying engaging, collaborative, and effective.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/30 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-3xl shadow-2xl p-10 transition-all duration-700 hover:-translate-y-3 hover:shadow-3xl hover:border-blue-400/40 hover:dark:border-blue-500/50 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative z-10">
                <div className="text-blue-600 dark:text-blue-400 mb-6 text-5xl group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-500 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer for AI StudyHub
const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-900 to-blue-800 text-gray-300">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl">
              <LogoIcon />
            </div>
            <span className="text-2xl font-bold text-white">AI StudyHub</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
            AI-powered educational platform that transforms any content into personalized quizzes, notes, and study materials for students and educators worldwide.
          </p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm">AI Online</span>
            </div>
            <span className="text-sm text-gray-500">•</span>
            <span className="text-sm">25K+ Students Active</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-6">For Students</h3>
          <ul className="space-y-3">
            {['Create Quizzes', 'Study Groups', 'YouTube Learning', 'AI Tutor', 'Progress Tracking'].map((item) => (
              <li key={item}>
                <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white mb-6">For Schools</h3>
          <ul className="space-y-3">
            {['Class Management', 'Student Analytics', 'Bulk Licensing', 'Integration Support', 'Custom Solutions'].map((item) => (
              <li key={item}>
                <button className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-blue-700 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} AI StudyHub. Revolutionizing education with AI-powered learning tools.
        </p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <button className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</button>
          <button className="text-gray-400 hover:text-white transition-colors duration-300">Terms</button>
          <button className="text-gray-400 hover:text-white transition-colors duration-300">Support</button>
        </div>
      </div>
    </div>
  </footer>
);

// Home Page Component
const HomePage = ({ setPage }) => (
  <>
    <HeroSection setPage={setPage} />
    <StatsSection />
    <CapabilitiesSection setPage={setPage} />
    <FeaturesSection />
    <Footer />
  </>
);

// Page Wrapper Component for inner pages
const PageWrapper = ({ title, children, setPage }) => (
  <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 md:py-12 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button onClick={() => setPage('home')} className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold mb-8 hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span>Back to Home</span>
      </button>
      <main className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 animate-fade-in">
        {children}
      </main>
    </div>
  </div>
);

// Quiz Generator Page
const QuizGeneratorPage = ({ setPage }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [quizType, setQuizType] = useState('mcq');
  const [difficulty, setDifficulty] = useState('medium');
  const [numQuestions, setNumQuestions] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleGenerateQuiz = () => {
    setIsGenerating(true);
    // Simulate quiz generation
    setTimeout(() => {
      setIsGenerating(false);
      alert('Quiz generated successfully! (This is a demo)');
    }, 2000);
  };

  return (
    <PageWrapper title="AI Quiz Generator" setPage={setPage}>
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl">
          <QuizGeneratorIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">AI Quiz Generator</h2>
          <p className="text-gray-600 dark:text-gray-400">Transform any content into personalized quizzes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Upload Content
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300 bg-gray-50 dark:bg-gray-700/50">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.mp4,.mp3"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-16 w-16" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  PDF, DOC, TXT, JPG, PNG, MP4, MP3 up to 25MB
                </p>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Quiz Type
              </label>
              <select
                value={quizType}
                onChange={(e) => setQuizType(e.target.value)}
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="mcq">Multiple Choice</option>
                <option value="short">Short Answer</option>
                <option value="long">Long Answer</option>
                <option value="fill">Fill in the Blank</option>
                <option value="true-false">True/False</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
                <option value="expert">Expert</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Number of Questions: {numQuestions}
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              <span>5</span>
              <span>50</span>
            </div>
          </div>

          <button 
            onClick={handleGenerateQuiz}
            disabled={!selectedFile || isGenerating}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {isGenerating ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Generating Quiz...
              </div>
            ) : (
              'Generate Quiz'
            )}
          </button>
        </div>

        {/* Preview Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
              ?
            </span>
            Quiz Preview
          </h3>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
              <p className="font-semibold text-gray-800 dark:text-white mb-4">1. Sample Question</p>
              <div className="space-y-3">
                {['Option A', 'Option B', 'Option C', 'Option D'].map((option, index) => (
                  <label key={index} className="flex items-center group cursor-pointer">
                    <input type="radio" name="q1" className="mr-3 text-blue-600 focus:ring-blue-500" />
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-200">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Upload content to generate personalized quiz questions
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

// YouTube Processor Page
const YouTubeProcessorPage = ({ setPage }) => {
  const [topic, setTopic] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  const handleProcess = () => {
    if (!topic.trim()) return;
    
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        videoTitle: `Best ${topic} Tutorial for Students`,
        videoUrl: 'https://youtube.com/watch?v=demo',
        transcript: `This is a sample transcript about ${topic}. The video covers all the key concepts you need to know.`,
        summary: `This video provides a comprehensive overview of ${topic}, covering the fundamentals and advanced concepts.`,
        quiz: [
          {
            question: `What is the main concept of ${topic}?`,
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            answer: 1
          }
        ]
      });
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <PageWrapper title="YouTube Processor" setPage={setPage}>
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50 rounded-xl">
          <YouTubeProcessorIcon className="h-8 w-8 text-red-600 dark:text-red-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">YouTube Processor</h2>
          <p className="text-gray-600 dark:text-gray-400">Get curated videos with transcripts, notes, and quizzes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Enter a Topic
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Algebra, World History, Biology"
              className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <button 
            onClick={handleProcess}
            disabled={!topic || isProcessing}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </div>
            ) : (
              'Find Video & Generate Content'
            )}
          </button>
        </div>

        {result && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Results for: {topic}
            </h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Selected Video:</h4>
              <a href={result.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                {result.videoTitle}
              </a>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Video Summary:</h4>
              <p className="text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-700/50 p-4 rounded-lg">
                {result.summary}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Generated Quiz:</h4>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                {result.quiz.map((q, i) => (
                  <div key={i} className="mb-4">
                    <p className="font-medium text-gray-800 dark:text-white mb-2">{i+1}. {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, j) => (
                        <label key={j} className="flex items-center space-x-3">
                          <input type="radio" name={`quiz-${i}`} className="text-red-600 focus:ring-red-500" />
                          <span className="text-gray-700 dark:text-gray-300">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

// Quiz Classrooms Page
const QuizClassroomsPage = ({ setPage }) => {
  const [classrooms, setClassrooms] = useState([
    { id: 1, name: "Physics Study Group", members: 24, quizzes: 8 },
    { id: 2, name: "Math Olympiad Prep", members: 18, quizzes: 12 },
    { id: 3, name: "History Revision Club", members: 32, quizzes: 5 },
  ]);
  const [newClassroomName, setNewClassroomName] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateClassroom = () => {
    if (!newClassroomName.trim()) return;
    const newClassroom = {
      id: Date.now(),
      name: newClassroomName,
      members: 0,
      quizzes: 0
    };
    setClassrooms([...classrooms, newClassroom]);
    setNewClassroomName('');
    setShowCreateModal(false);
  };

  return (
    <PageWrapper title="Quiz Classrooms" setPage={setPage}>
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 rounded-xl">
          <CollaborativeQuizIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Quiz Classrooms</h2>
          <p className="text-gray-600 dark:text-gray-400">Collaborative learning spaces for students and teachers</p>
        </div>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Your Classrooms</h3>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
        >
          Create New Classroom
        </button>
      </div>

      {classrooms.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
          <p className="text-gray-500 dark:text-gray-400 mb-4">You don't have any active classrooms yet</p>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
          >
            Create Your First Classroom
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classrooms.map(classroom => (
            <div key={classroom.id} className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{classroom.name}</h4>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span>{classroom.members} members</span>
                  <span>{classroom.quizzes} quizzes</span>
                </div>
                <div className="flex space-x-3">
                  <button className="bg-blue-600 text-white py-1 px-3 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Join
                  </button>
                  <button className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white py-1 px-3 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Classroom Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Create New Classroom</h3>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Classroom Name
              </label>
              <input
                type="text"
                value={newClassroomName}
                onChange={(e) => setNewClassroomName(e.target.value)}
                placeholder="e.g., Math Study Group, Science Quiz Team"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleCreateClassroom}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

// Question Digitizer Page
const QuestionDigitizerPage = ({ setPage }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [digitizedQuestions, setDigitizedQuestions] = useState([]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDigitize = () => {
    if (!selectedFile) return;
    
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setDigitizedQuestions([
        { id: 1, text: "Sample question 1 from the paper", type: "MCQ" },
        { id: 2, text: "Sample question 2 from the paper", type: "Short Answer" },
        { id: 3, text: "Sample question 3 from the paper", type: "Long Answer" },
        { id: 4, text: "Sample question 4 from the paper", type: "True/False" }
      ]);
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <PageWrapper title="Question Digitizer" setPage={setPage}>
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50 rounded-xl">
          <QuestionPaperDigitizerIcon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Question Digitizer</h2>
          <p className="text-gray-600 dark:text-gray-400">Convert past exam papers into digital quizzes</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Upload Question Paper
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-8 text-center hover:border-orange-500 dark:hover:border-orange-400 transition-colors duration-300 bg-gray-50 dark:bg-gray-700/50">
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
                id="paper-upload"
              />
              <label htmlFor="paper-upload" className="cursor-pointer">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-16 w-16" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                  {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  PDF or image files up to 25MB
                </p>
              </label>
            </div>
          </div>

          <button 
            onClick={handleDigitize}
            disabled={!selectedFile || isProcessing}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 px-6 rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Digitizing Questions...
              </div>
            ) : (
              'Digitize Questions'
            )}
          </button>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            Digitized Questions
          </h3>
          
          {digitizedQuestions.length > 0 ? (
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600 p-6">
              <ul className="space-y-4">
                {digitizedQuestions.map((q, i) => (
                  <li key={q.id} className="border-b border-gray-100 dark:border-gray-600 pb-4 last:border-0">
                    <p className="font-medium text-gray-800 dark:text-white">
                      {i+1}. {q.text}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Type: {q.type}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                No papers processed yet. Upload a question paper to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

// AI Tutor Page
const AITutorPage = ({ setPage }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your AI tutor. How can I help with your studies today?", sender: 'ai', timestamp: new Date().toLocaleTimeString() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };
    
    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        text: `I'm an AI tutor here to help with your questions. Can you be more specific about what you're studying?`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <PageWrapper title="AI Tutor" setPage={setPage}>
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-xl">
          <AITutorIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">AI Tutor</h2>
          <p className="text-gray-600 dark:text-gray-400">24/7 personalized learning assistance</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-600">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white">
          <h3 className="font-semibold">AI Tutor Assistant</h3>
          <p className="text-xs opacity-80">Always available to help with your studies</p>
        </div>
        
        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map(msg => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-xs md:max-w-md rounded-lg p-3 ${msg.sender === 'user' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-white'}`}
              >
                <p>{msg.text}</p>
                <p className="text-xs opacity-70 mt-1 text-right">
                  {msg.timestamp}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 dark:bg-gray-600 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat Input */}
        <div className="border-t border-gray-200 dark:border-gray-600 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question about your studies..."
              className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

// Placeholder Page Component
const PlaceholderPage = ({ setPage, title, icon }) => (
  <PageWrapper title={title} setPage={setPage}>
    <div className="text-center py-20">
      <div className="inline-block p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-xl mb-6">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
        This feature is coming soon! We're working hard to bring you the best learning experience.
      </p>
      <button
        onClick={() => setPage('home')}
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
      >
        Back to Home
      </button>
    </div>
  </PageWrapper>
);

// Main App Component
export default function App() {
  const [page, setPage] = useState('home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage setPage={setPage} />;
      case 'aiquizgenerator':
        return <QuizGeneratorPage setPage={setPage} />;
      case 'youtubeprocessor':
        return <YouTubeProcessorPage setPage={setPage} />;
      case 'quizclassrooms':
        return <QuizClassroomsPage setPage={setPage} />;
      case 'questiondigitizer':
        return <QuestionDigitizerPage setPage={setPage} />;
      case 'aitutor':
        return <AITutorPage setPage={setPage} />;
      case 'smartanalytics':
        return <PlaceholderPage setPage={setPage} title="Smart Analytics" icon={<AnalyticsIcon className="h-12 w-12 text-blue-500" />} />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className={`${theme} bg-white dark:bg-gray-900 font-sans transition-colors duration-300`}>
      <StyleSetup />
      <Header setPage={setPage} theme={theme} toggleTheme={toggleTheme} />
      {renderPage()}
    </div>
  );
}