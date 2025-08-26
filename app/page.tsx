
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Chirag</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/profile.jpg"
              alt="Chirag"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-white/20"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Creating digital experiences with modern technologies. Passionate about clean code, 
            user experience, and solving complex problems.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love building scalable applications and creating seamless user experiences.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80">Commits</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
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
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-600/50 text-white px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-white/80 hover:text-white transition-colors">
                      GitHub
                    </a>
                    <a href={project.live} className="text-white/80 hover:text-white transition-colors">
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
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Frontend</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "JavaScript"].map((skill, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-center text-white">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Backend</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"].map((skill, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-center text-white">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Tools & Others</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"].map((skill, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-3 text-center text-white">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-white/80 mb-12">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <a href="mailto:chirag@example.com" className="text-white/80 hover:text-white transition-colors">
              Email
            </a>
            <a href="https://linkedin.com/in/chirag" className="text-white/80 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/chirag" className="text-white/80 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/chirag" className="text-white/80 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
          <a 
            href="mailto:chirag@example.com"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Chirag. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
