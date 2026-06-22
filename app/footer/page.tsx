import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/10">

      <div className="absolute inset-0 bg-linear-to-r from-yellow-500/10 via-transparent to-orange-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

    
        <div className="grid md:grid-cols-3 gap-12">

       
          <div>
            <h1 className="text-4xl font-black text-yellow-400">
              ANUJ<span className="text-white">.</span>
            </h1>

            <p className="text-zinc-400 mt-5 leading-7">
              Full Stack MERN Developer building modern, scalable and
              high-performance web applications with clean UI and strong backend systems.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5 text-white">
              Navigation
            </h2>

            <div className="flex flex-col gap-3 text-zinc-400">
              <Link href="/" className="hover:text-yellow-400 transition">
                About
              </Link>
              <Link href="skill" className="hover:text-yellow-400 transition">
                Skills
              </Link>
              <Link href="project" className="hover:text-yellow-400 transition">
                Projects
              </Link>
              <Link href="experience" className="hover:text-yellow-400 transition">
                Experience
              </Link>
              <Link href="contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </div>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-5 text-white">
              Get In Touch
            </h2>

            <div className="text-zinc-400 space-y-3">
              <p>📍 Kathmandu, Nepal</p>
              <p>📧 anujraidas7@gmail.com</p>
              <p>📞 +977 9701654744</p>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/anujraidas66"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/anuj-raidas-0a389238a/"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        
        <div className="my-12 border-t border-white/10" />

     
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Anuj Raidas. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}