import React, { useState, useEffect, useRef } from 'react';

// This component will inject the necessary styles and scripts into the document head.
const StyleSetup = () => {
  useEffect(() => {
    // Inject Tailwind CSS CDN script
    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com';
    document.head.appendChild(tailwindScript);

    // Inject custom animation styles. These are not part of standard Tailwind.
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
               opacity: 0; /* Start hidden */
               animation: fade-in-up 1s ease-out forwards;
               animation-fill-mode: forwards;
            }
        `;
    document.head.appendChild(style);

    // Cleanup function to remove the added elements when the component unmounts
    return () => {
      if (document.head.contains(tailwindScript)) {
        document.head.removeChild(tailwindScript);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null; // This component does not render any visible UI
};

// ICONS - Using inline SVGs for better performance and customization
const LogoIcon = () => (
  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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

// Header Component with animation and hover
const Header = ({ setPage, theme, toggleTheme }) => {
  const navItems = ['AI Quiz Generator', 'YouTube Processor', 'Quiz Classrooms', 'Question Digitizer'];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md dark:shadow-gray-800 transition-colors duration-300 animate-fade-in">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo & Title */}
          <div
            className="flex items-center space-x-3 cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setPage('home')}
          >
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <LogoIcon />
            </div>
            <span className="text-xl font-bold text-gray-800 dark:text-white tracking-wide transition-colors duration-300">
              QuizerAI
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
              className="p-2 rounded-full bg-white dark:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-300 transform hover:scale-110 shadow-md hover:shadow-xl"
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = ({ setPage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-1000"></div>

      {/* Interactive Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }}
      ></div>

      {/* Enhanced Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full filter blur-2xl opacity-40 animate-float"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-purple-200 dark:bg-purple-800 rounded-full filter blur-2xl opacity-40 animate-float-delayed"></div>
      <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-green-200 dark:bg-green-800 rounded-full filter blur-2xl opacity-40 animate-float-slow"></div>
      <div className="absolute top-1/3 left-1/2 w-28 h-28 bg-orange-200 dark:bg-orange-800 rounded-full filter blur-2xl opacity-30 animate-float-reverse"></div>

      {/* 3D Geometric Shapes */}
      <div className="absolute top-10 right-10 w-20 h-20 border-2 border-blue-300 dark:border-blue-700 rotate-45 animate-spin-slow opacity-20"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-purple-300 dark:border-purple-700 animate-pulse opacity-20"></div>

      {/* Quiz-themed floating elements */}
      <div className="absolute top-16 left-16 animate-float-3d">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl transform rotate-45 animate-cube-rotate opacity-30 flex items-center justify-center text-white text-xs font-bold">Q</div>
      </div>

      <div className="absolute bottom-1/3 left-20 animate-float-slow">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-2xl opacity-30 flex items-center justify-center text-white text-xs font-bold">A</div>
      </div>

      {/* Main Content */}
      <div className="relative w-full px-4 sm:px-6 lg:px-8 z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced Icon Container */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="relative p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full backdrop-blur-sm border border-white/20 dark:border-gray-700/20 shadow-2xl transform hover:scale-110 transition-all duration-500">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-full shadow-lg">
                <QuizGeneratorIcon />
              </div>
            </div>
          </div>

          {/* Enhanced Title */}
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 leading-tight animate-gradient-text mb-6">
            QuizerAI
          </h1>

          {/* Animated Subtitle */}
          <div className="relative">
            <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 max-w-3xl mx-auto animate-slide-up mb-6">
              Empowering Schools and Students with AI
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-width-expand"></div>
          </div>

          {/* Enhanced Description */}
          <p className="mt-8 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delayed">
            Transform any content into personalized quizzes, notes, and study materials. From PDFs and YouTube videos to handwritten notes and question papers - make learning engaging, collaborative, and fun!
          </p>

          {/* Premium CTA Button */}
          <div className="mt-12 relative">
            <button
              onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="animate-bounce-subtle">Start Creating Quizzes</span>
                <svg className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </span>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
            </button>
          </div>

          {/* Floating Action Indicators */}
          <div className="mt-16 flex justify-center gap-6">
            <div className="animate-bounce-slow">
              <div className="w-3 h-3 bg-blue-500 rounded-full opacity-60"></div>
            </div>
            <div className="animate-bounce-slow animation-delay-200">
              <div className="w-3 h-3 bg-purple-500 rounded-full opacity-60"></div>
            </div>
            <div className="animate-bounce-slow animation-delay-400">
              <div className="w-3 h-3 bg-green-500 rounded-full opacity-60"></div>
            </div>
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(25px) rotate(360deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-up {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes width-expand {
          0% { width: 0; }
          100% { width: 8rem; }
        }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        
        @keyframes float-3d {
          0%, 100% { transform: translateY(0px) translateZ(0) rotateX(0deg) rotateY(0deg); }
          25% { transform: translateY(-10px) translateZ(10px) rotateX(15deg) rotateY(90deg); }
          50% { transform: translateY(-20px) translateZ(20px) rotateX(30deg) rotateY(180deg); }
          75% { transform: translateY(-10px) translateZ(10px) rotateX(15deg) rotateY(270deg); }
        }
        
        @keyframes cube-rotate {
          0% { transform: rotate(45deg) rotateX(0deg) rotateY(0deg); }
          100% { transform: rotate(45deg) rotateX(360deg) rotateY(360deg); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-gradient-text { 
          animation: gradient-text 3s ease infinite;
          background-size: 200% 200%;
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out; }
        .animate-width-expand { animation: width-expand 1.5s ease-out; }
        .animate-fade-in-delayed { animation: fade-in-delayed 1s ease-out 0.5s both; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-scroll-indicator { animation: scroll-indicator 2s ease-in-out infinite; }
        .animate-float-3d { animation: float-3d 8s ease-in-out infinite; }
        .animate-cube-rotate { animation: cube-rotate 12s linear infinite; }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>
    </section>
  );
};

// Stats Section Component
const StatsSection = () => {
  const [studentsHelped, studentsRef] = useAnimatedCounter(25847);
  const [quizzesGenerated, quizzesRef] = useAnimatedCounter(156432);
  const [schoolsPartnered, schoolsRef] = useAnimatedCounter(1247);

  const stats = [
    { value: studentsHelped.toLocaleString(), label: 'Students Helped', ref: studentsRef },
    { value: quizzesGenerated.toLocaleString(), label: 'Quizzes Generated', ref: quizzesRef },
    { value: schoolsPartnered.toLocaleString(), label: 'Schools Partnered', ref: schoolsRef },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#0b1120] to-[#10172a] transition-colors duration-300 overflow-hidden">
      {/* Book and Quiz Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-elements"></div>
      </div>

      {/* Stats Content */}
      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={stat.ref}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-blue-400/30"
            >
              <h3 className="text-4xl font-bold text-blue-400">{stat.value}</h3>
              <p className="mt-2 text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for Floating Elements */}
      <style jsx>{`
        .floating-elements {
          width: 100%;
          height: 100%;
          background: transparent;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 90% 10%, rgba(34, 197, 94, 0.1) 1.5px, transparent 1.5px);
          background-size: 100px 100px, 150px 150px, 80px 80px;
          animation: floatingBooks 20s ease-in-out infinite alternate;
          opacity: 0.3;
        }

        @keyframes floatingBooks {
          from {
            opacity: 0.2;
            transform: translateY(0px) rotate(0deg);
          }
          to {
            opacity: 0.4;
            transform: translateY(-10px) rotate(1deg);
          }
        }
      `}</style>
    </section>
  );
};

// Capability Card Component
const CapabilityCard = ({ icon, title, description, buttonText, buttonColor, setPage, pageName }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col items-start animate-fade-in-up">
    <div className={`p-4 rounded-xl mb-6`} style={{ backgroundColor: `${buttonColor}20` }}>
      <div className={`text-white rounded-lg`} style={{ color: buttonColor }}>
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 mb-6 flex-grow">{description}</p>
    <button onClick={() => setPage(pageName)} className="w-full text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:opacity-90" style={{ backgroundColor: buttonColor }}>
      {buttonText}
    </button>
  </div>
);

// Capabilities Section Component
const CapabilitiesSection = ({ setPage }) => {
  const capabilities = [
    { icon: <QuizGeneratorIcon />, title: 'AI Quiz Generator', description: 'Create personalized quizzes from PDFs, images, videos, and handwritten notes using advanced AI.', buttonText: 'Generate Quiz', buttonColor: '#2563EB', pageName: 'aiquizgenerator' },
    { icon: <YouTubeProcessorIcon />, title: 'YouTube Processor', description: 'Enter any topic and get curated YouTube videos with notes, summaries, and quizzes automatically.', buttonText: 'Process Videos', buttonColor: '#DC2626', pageName: 'youtubeprocessor' },
    { icon: <CollaborativeQuizIcon />, title: 'Quiz Classrooms', description: 'Create virtual study groups to take quizzes together and share resources collaboratively.', buttonText: 'Join Classroom', buttonColor: '#10B981', pageName: 'quizclassrooms' },
    { icon: <QuestionPaperDigitizerIcon />, title: 'Question Digitizer', description: 'Upload past exam papers and convert them into digital quizzes with analytics and timers.', buttonText: 'Digitize Papers', buttonColor: '#F97316', pageName: 'questiondigitizer' },
    { icon: <AnalyticsIcon />, title: 'Smart Analytics', description: 'Track your progress with interactive dashboards, heatmaps, and performance insights.', buttonText: 'View Analytics', buttonColor: '#8B5CF6', pageName: 'smartanalytics' },
    { icon: <AITutorIcon />, title: '24/7 AI Tutor', description: 'Get instant help and explanations from our AI tutor with voice interaction support.', buttonText: 'Chat with Tutor', buttonColor: '#EF4444', pageName: 'aitutor' },
  ];

  return (
    <section id="capabilities" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Discover Our AI-Powered Features</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Transform your learning experience with our comprehensive suite of AI tools designed for students and educators.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <CapabilityCard key={index} {...cap} setPage={setPage} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Feature Section Component
const FeaturesSection = () => {
  const features = [
    {
      icon: <QuizGeneratorIcon />,
      title: 'Multimodal AI Processing',
      description:
        'Our advanced AI processes PDFs, images, videos, audio, handwritten notes, and YouTube content to create personalized study materials.',
    },
    {
      icon: <CollaborativeQuizIcon />,
      title: 'Collaborative Learning',
      description:
        'Study together in virtual classrooms, share resources, analyze group performance, and learn from your peers in real-time.',
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Smart Performance Tracking',
      description:
        'Get detailed insights with interactive dashboards, progress tracking, peer comparisons, and personalized learning recommendations.',
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Premium 3D Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Educational floating elements */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => {
            const length = 10 + Math.random() * 20;
            const opacity = 0.1 + Math.random() * 0.15;
            return (
              <div
                key={`element-${i}`}
                className="absolute w-0.5 bg-gradient-to-b from-blue-400/40 to-purple-600/40 dark:from-blue-500/30 dark:to-purple-700/30 rounded-full animate-rain-slow"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  height: `${length}px`,
                  opacity: opacity,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  transform: `rotate(${10 + Math.random() * 20}deg)`,
                }}
              />
            );
          })}
        </div>

        {/* Quiz-themed geometry shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/5 left-1/5 w-72 h-72 animate-float-very-slow opacity-20 dark:opacity-30">
            <div className="w-full h-full" style={{
              background: 'conic-gradient(from 45deg, #3b82f6, #8b5cf6, #3b82f6)',
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
            }}></div>
          </div>

          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 animate-spin-slow opacity-15 dark:opacity-25">
            <div className="w-full h-full" style={{
              background: 'radial-gradient(circle, #60a5fa, transparent 70%)',
              clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 90% 60%, 80% 90%, 50% 100%, 20% 90%, 10% 60%, 0% 35%, 20% 10%)'
            }}></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white animate-fade-in font-[var(--font-heading)] tracking-tight">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">QuizerAI</span>?
          </h2>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-[var(--font-body)] leading-relaxed">
            Experience the future of education with our AI-powered learning platform that makes studying engaging, collaborative, and effective.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/30 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-[2rem] shadow-2xl p-10 transition-all duration-700 hover:-translate-y-3 hover:shadow-3xl hover:border-blue-400/40 hover:dark:border-blue-500/50 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 group-hover:dark:border-blue-500/30 rounded-[2rem] transition-all duration-700"></div>
              </div>

              <div className="relative z-10">
                <div className="text-blue-600 dark:text-blue-400 mb-6 text-5xl group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-500 font-[var(--font-subheading)] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-500 font-[var(--font-body)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes rain-slow {
          0% { transform: translateY(-100vh) rotate(10deg); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          100% { transform: translateY(100vh) rotate(10deg); opacity: 0; }
        }
        @keyframes float-very-slow {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-30px) translateX(15px) rotate(2deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-rain-slow {
          animation: rain-slow linear infinite;
        }
        .animate-float-very-slow {
          animation: float-very-slow 12s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </section>
  );
}

// Footer Component
const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">QuizerAI</h3>
          <p className="text-sm">AI-powered educational platform that transforms any content into personalized quizzes, notes, and study materials for students and educators.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">For Students</h3>
          <ul className="space-y-2">
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Create Quizzes</button></li>
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Study Groups</button></li>
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">YouTube Learning</button></li>
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">AI Tutor</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">For Schools</h3>
          <ul className="space-y-2">
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Class Management</button></li>
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Student Analytics</button></li>
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Bulk Licensing</button></li>
            <li><button className="text-left bg-transparent border-none p-0 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Integration Support</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Exams Supported</h3>
          <p className="text-sm">CBSE, IB, SAT, ACT, AP, GRE, UPSC, JEE, and many more competitive exams with tailored question formats and difficulty levels.</p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} QuizerAI. Revolutionizing education with AI-powered learning tools.</p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>AI Online</span>
          </div>
          <span>25K+ Students Active</span>
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

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <PageWrapper title="AI Quiz Generator" setPage={setPage}>
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
          <QuizGeneratorIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">AI Quiz Generator</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Upload Content
            </label>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
              <input
                type="file"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-gray-400 mb-2">
                  <svg className="mx-auto h-12 w-12" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  PDF, DOC, TXT, JPG, PNG up to 10MB
                </p>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Quiz Type
              </label>
              <select
                value={quizType}
                onChange={(e) => setQuizType(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="mcq">Multiple Choice</option>
                <option value="short">Short Answer</option>
                <option value="long">Long Answer</option>
                <option value="fill">Fill in the Blank</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Difficulty
              </label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Generate Quiz
          </button>
        </div>

        {/* Preview Section */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quiz Preview</h3>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
              <p className="font-medium text-gray-800 dark:text-white mb-2">1. Sample Question</p>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Option A</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Option B</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Option C</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="q1" className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Option D</span>
                </label>
              </div>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              Upload content to generate personalized quiz questions
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

// Placeholder Page for unimplemented features
const PlaceholderPage = ({ setPage, title, icon }) => (
  <PageWrapper title={title} setPage={setPage}>
    <div className="text-center py-16">
      <div className="inline-block p-4 bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
        {icon}
      </div>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">This feature is currently under development. Please check back later for updates. We are working hard to bring this to you soon!</p>
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
        return <PlaceholderPage setPage={setPage} title="YouTube Processor" icon={<YouTubeProcessorIcon className="h-12 w-12 text-red-600" />} />;
      case 'quizclassrooms':
        return <PlaceholderPage setPage={setPage} title="Quiz Classrooms" icon={<CollaborativeQuizIcon className="h-12 w-12 text-green-600" />} />;
      case 'questiondigitizer':
        return <PlaceholderPage setPage={setPage} title="Question Digitizer" icon={<QuestionPaperDigitizerIcon className="h-12 w-12 text-orange-600" />} />;
      case 'smartanalytics':
        return <PlaceholderPage setPage={setPage} title="Smart Analytics" icon={<AnalyticsIcon className="h-12 w-12 text-purple-600" />} />;
      case 'aitutor':
        return <PlaceholderPage setPage={setPage} title="24/7 AI Tutor" icon={<AITutorIcon className="h-12 w-12 text-red-500" />} />;
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