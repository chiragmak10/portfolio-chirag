
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Custom cursor
    const cursor = cursorRef.current;
    if (cursor) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      };

      const handleMouseEnter = () => {
        gsap.to(cursor, { scale: 1.5, duration: 0.2 });
      };

      const handleMouseLeave = () => {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      };

      window.addEventListener('mousemove', moveCursor);
      
      // Add hover effects for interactive elements
      const interactiveElements = document.querySelectorAll('a, button, .project-card');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        window.removeEventListener('mousemove', moveCursor);
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    }

    // Hero animations with more sophisticated timing
    const tl = gsap.timeline();
    
    tl.fromTo(".hero-profile", 
      { scale: 0, opacity: 0, rotation: 180 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" }
    )
    .fromTo(".hero-greeting", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6"
    )
    .fromTo(".hero-name", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.4"
    )
    .fromTo(".hero-title", 
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6"
    )
    .fromTo(".hero-description", 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.4"
    )
    .fromTo(".hero-buttons", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.2"
    )
    .fromTo(".hero-scroll", 
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }, "-=0.2"
    );

    // Parallax effect for hero section
    gsap.to(".hero-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Section animations with stagger
    gsap.utils.toArray(".animate-section").forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Project cards with enhanced animations
    gsap.utils.toArray(".project-card").forEach((card: any, index) => {
      gsap.fromTo(card,
        { y: 80, opacity: 0, scale: 0.8, rotationY: 45 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Skills animation with wave effect
    gsap.utils.toArray(".skill-item").forEach((skill: any, index) => {
      gsap.fromTo(skill,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skill,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Floating animation for scroll indicator
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 bg-blue-700 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-black tracking-tight">
              Chirag<span className="text-blue-700">.</span>
            </div>
            <div className="hidden md:flex space-x-12">
              <a href="#about" className="text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#work" className="text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium relative group">
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium relative group">
                Skills
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-all duration-300 font-medium relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="hero-profile mb-8">
            <Image
              src="/profile.jpg"
              alt="Chirag Makdiya"
              width={160}
              height={160}
              className="rounded-full mx-auto border-4 border-white shadow-2xl"
              priority
            />
          </div>
          
          <div className="hero-greeting text-blue-700 font-medium text-lg mb-4 tracking-wide">
            Hello, I'm
          </div>
          
          <h1 className="hero-name text-6xl md:text-8xl font-black text-black mb-4 tracking-tight">
            Chirag Makdiya
          </h1>
          
          <h2 className="hero-title text-3xl md:text-5xl font-bold text-gray-700 mb-8 tracking-tight">
            Frontend Developer & UX Designer
          </h2>
          
          <p className="hero-description text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft digital experiences that blend beautiful design with seamless functionality. 
            Passionate about creating user-centered solutions that make a difference.
          </p>
          
          <div className="hero-buttons flex gap-6 justify-center flex-wrap">
            <a 
              href="#work" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-black hover:bg-black hover:text-white text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Talk
            </a>
          </div>
        </div>
        
        <div className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="scroll-indicator flex flex-col items-center text-gray-500">
            <span className="text-sm font-medium mb-2 tracking-wide">Scroll</span>
            <div className="w-px h-12 bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-8 bg-white animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">About Me</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                I'm a passionate frontend developer with a strong background in UX design. 
                I believe that great software is born from the perfect marriage of aesthetic 
                beauty and functional excellence.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                With experience in modern web technologies and user-centered design principles, 
                I create digital experiences that not only look stunning but also solve real problems 
                for real people.
              </p>
              <div className="flex gap-6 pt-4">
                <a 
                  href="/resume.pdf" 
                  className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Download CV
                </a>
                <a 
                  href="https://linkedin.com/in/chirag-makdiya" 
                  className="border-2 border-blue-700 hover:bg-blue-700 hover:text-white text-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <div className="text-4xl font-black mb-2">3+</div>
                <div className="text-blue-100 font-medium">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-2xl p-8 text-center shadow-xl">
                <div className="text-4xl font-black mb-2">50+</div>
                <div className="text-gray-300 font-medium">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-blue-700 text-blue-700 rounded-2xl p-8 text-center shadow-xl">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-blue-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-black text-black rounded-2xl p-8 text-center shadow-xl">
                <div className="text-4xl font-black mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Learning Mode</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 lg:px-8 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Featured Work</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here are some projects that showcase my skills in frontend development and UX design
            </p>
          </div>
          
          <div className="space-y-32">
            {[
              {
                title: "E-Commerce Platform",
                description: "A modern e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced filtering, and seamless checkout experience.",
                image: "/project1.jpg",
                tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
                year: "2024",
                category: "Full-Stack Development"
              },
              {
                title: "Task Management Dashboard",
                description: "Real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and advanced analytics.",
                image: "/project2.jpg",
                tags: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
                year: "2024",
                category: "Web Application"
              },
              {
                title: "Weather Analytics Platform",
                description: "Beautiful weather dashboard with interactive charts, forecasting, and location-based services. Designed with user experience at the forefront.",
                image: "/project3.jpg",
                tags: ["Vue.js", "Chart.js", "Weather API", "Tailwind", "PWA"],
                year: "2023",
                category: "Data Visualization"
              }
            ].map((project, index) => (
              <div key={index} className={`project-card grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <div className="text-blue-700 font-semibold text-lg mb-2">{project.category} • {project.year}</div>
                    <h3 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">{project.title}</h3>
                    <p className="text-xl text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-6 pt-4">
                    <a href="#" className="text-blue-700 hover:text-blue-900 font-bold text-lg transition-colors">
                      View Project →
                    </a>
                    <a href="#" className="text-black hover:text-gray-700 font-bold text-lg transition-colors">
                      GitHub →
                    </a>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <div className="text-blue-700 text-8xl text-center">🎨</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 lg:px-8 bg-white animate-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-black mb-6">Frontend Development</h3>
              {["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"].map((skill, index) => (
                <div key={index} className="skill-item flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  <span className="text-lg font-semibold text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-black mb-6">Design & UX</h3>
              {["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing", "Design Systems"].map((skill, index) => (
                <div key={index} className="skill-item flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  <span className="text-lg font-semibold text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-black mb-6">Tools & Technologies</h3>
              {["Git", "Webpack", "Tailwind CSS", "SASS", "Node.js", "REST APIs"].map((skill, index) => (
                <div key={index} className="skill-item flex items-center space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
                  <span className="text-lg font-semibold text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-blue-900 text-white animate-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Let's Create Something Amazing</h2>
          <p className="text-2xl text-blue-100 mb-16 leading-relaxed">
            Ready to turn your ideas into reality? Let's start a conversation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="mailto:chirag@example.com" className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📧</div>
              <div className="font-bold text-lg">Email</div>
              <div className="text-blue-100">chirag@example.com</div>
            </a>
            
            <a href="https://linkedin.com/in/chirag-makdiya" className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">💼</div>
              <div className="font-bold text-lg">LinkedIn</div>
              <div className="text-blue-100">Connect with me</div>
            </a>
            
            <a href="https://github.com/chirag-makdiya" className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <div className="font-bold text-lg">GitHub</div>
              <div className="text-blue-100">Check my code</div>
            </a>
          </div>
          
          <a 
            href="mailto:chirag@example.com"
            className="bg-white hover:bg-gray-100 text-blue-700 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl inline-block"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-2xl font-bold text-black">
              Chirag<span className="text-blue-700">.</span>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">About</a>
              <a href="#work" className="text-gray-600 hover:text-blue-700 transition-colors">Work</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-700 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 Chirag Makdiya. Crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
