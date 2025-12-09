import { Mail, Github, Instagram, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-linear-to-br from-indigo-50 via-white to-purple-50 py-20 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-200px)]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600">
            Have questions or suggestions? I'd love to hear from you!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600 mb-3">Send me an email anytime</p>
            <a
              href="mailto:abusayeedrifat20@gmail.com"
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              abusayeedrifat20@gmail.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Location</h3>
            <p className="text-gray-600 mb-3">Visit me at my office</p>
            <p className="text-gray-700 font-medium">
              12/4 Khilkhet, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Connect With Me
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Follow me for updates and community discussions
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/AsiF-noob44"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.instagram.com/asif_saeed.96/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 font-semibold"
            >
              <Instagram size={20} />
              Instagram
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
            <h3 className="text-xl font-bold mb-3 text-indigo-900">
              About BlogIt
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              BlogIt is a platform dedicated to empowering writers and readers.
              I believe in the power of sharing stories and ideas. Join my
              growing community today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
