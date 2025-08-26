
import Image from "next/image";

export default function Hero() {
  return (
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
  );
}
