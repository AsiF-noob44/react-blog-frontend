import { Github, Instagram, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Section */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-indigo-400" />
            <h3 className="text-2xl font-bold bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              BlogIt
            </h3>
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-sm text-center">
            © {new Date().getFullYear()} All rights reserved by{" "}
            <span className="text-indigo-400 font-medium">
              Abu Sayeed Rifat
            </span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AsiF-noob44"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github
                size={20}
                className="text-slate-400 group-hover:text-white"
              />
            </a>
            <a
              href="https://www.instagram.com/asif_saeed.96/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <Instagram
                size={20}
                className="text-slate-400 group-hover:text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
