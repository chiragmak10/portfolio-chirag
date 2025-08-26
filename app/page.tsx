
"use client";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Hero animations
    gsap.fromTo(".hero-profile", 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.7)" }
    );
    
    gsap.fromTo(".hero-title", 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );
    
    gsap.fromTo(".hero-description", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
    );
    
    gsap.fromTo(".hero-buttons", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.9, ease: "power3.out" }
    );

    // Section animations
    gsap.utils.toArray(".animate-section").forEach((section: any) => {
      gsap.fromTo(section, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Project cards animation
    gsap.utils.toArray(".project-card").forEach((card: any, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Skills animation
    gsap.utils.toArray(".skill-category").forEach((category: any, index) => {
      gsap.fromTo(category,
        { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.3,
          scrollTrigger: {
            trigger: category,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Stats counter animation
    gsap.utils.toArray(".stat-number").forEach((stat: any) => {
      const finalValue = parseInt(stat.textContent);
      gsap.fromTo(stat, 
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 2,
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-black">Chirag Makdiya</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">About</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Projects</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 hero-profile">
            <Image
              src="/profile.jpg"
              alt="Chirag Makdiya"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-blue-700 shadow-lg"
              priority
            />
          </div>
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-black mb-6">
            Full Stack Developer
          </h1>
          <p className="hero-description text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Creating digital experiences with modern technologies. Passionate about clean code, 
            user experience, and solving complex problems.
          </p>
          <div className="hero-buttons flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 border-black hover:bg-black hover:text-white text-black px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love building scalable applications and creating seamless user experiences.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-700 text-white rounded-lg p-6 text-center shadow-lg">
                <div className="stat-number text-3xl font-bold mb-2">50</div>
                <div className="text-blue-100">Projects</div>
              </div>
              <div className="bg-black text-white rounded-lg p-6 text-center shadow-lg">
                <div className="stat-number text-3xl font-bold mb-2">3</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white border-2 border-blue-700 text-blue-700 rounded-lg p-6 text-center shadow-lg">
                <div className="stat-number text-3xl font-bold mb-2">100</div>
                <div className="text-blue-600">Commits</div>
              </div>
              <div className="bg-blue-50 border-2 border-black text-black rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-gray-700">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 animate-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with Next.js, Stripe, and PostgreSQL",
                image: "/project1.jpg",
                tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
                github: "https://github.com/chirag/ecommerce",
                live: "https://ecommerce-demo.com"
              },
              {
                title: "Task Management App",
                description: "Real-time collaborative task management with React and Socket.io",
                image: "/project2.jpg",
                tags: ["React", "Node.js", "Socket.io", "MongoDB"],
                github: "https://github.com/chirag/taskmanager",
                live: "https://taskmanager-demo.com"
              },
              {
                title: "Weather Dashboard",
                description: "Beautiful weather dashboard with charts and forecasts",
                image: "/project3.jpg",
                tags: ["Vue.js", "Chart.js", "Weather API", "Tailwind"],
                github: "https://github.com/chirag/weather",
                live: "https://weather-demo.com"
              }
            ].map((project, index) => (
              <div key={index} className="project-card bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-blue-700 text-6xl">📱</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
                      GitHub
                    </a>
                    <a href={project.live} className="text-black hover:text-gray-700 font-medium transition-colors">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white animate-section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-black text-center mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="skill-category bg-blue-700 text-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Frontend</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "JavaScript"].map((skill, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-3 text-center text-white font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category bg-black text-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Backend</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"].map((skill, index) => (
                  <div key={index} className="bg-white/20 rounded-lg p-3 text-center text-white font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-category bg-white border-2 border-blue-700 text-blue-700 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Tools & Others</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"].map((skill, index) => (
                  <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center text-blue-700 font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-blue-100 animate-section">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-700 mb-12">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center gap-8 mb-12 flex-wrap">
            <a href="mailto:chiragmakdiya@example.com" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
              Email
            </a>
            <a href="https://linkedin.com/in/chirag-makdiya" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/chirag-makdiya" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/chirag-makdiya" className="text-blue-700 hover:text-blue-900 font-medium transition-colors">
              Twitter
            </a>
          </div>
          <a 
            href="mailto:chiragmakdiya@example.com"
            className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium text-lg transition-all transform hover:scale-105 shadow-lg inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            © 2024 Chirag Makdiya. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
