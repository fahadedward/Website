import { type FormEvent } from "react";
import { useState } from "react";

import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const SERVICE_ID = "service_0gnnggo";
  const TEMPLATE_ID = "template_7zgk1qi";
  const API_KEY = "iIKrjTY8kHapNQ4fG";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, API_KEY)
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong, please try again"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-2xl mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <div className="relative p-8 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-sm shadow-[0_0_25px_rgba(0,200,255,0.15),inset_0_0_15px_rgba(0,200,255,0.05)] hover:shadow-[0_0_60px_rgba(0,255,255,0.35),inset_0_0_25px_rgba(0,255,255,0.15)] transition-all duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 pointer-events-none" />

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-cyan-400/20 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 transition focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                placeholder="Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-cyan-400/20 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 transition focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                placeholder="Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                className="w-full bg-white/5 border border-cyan-400/20 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 transition focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] resize-none"
                placeholder="Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="relative w-full px-8 py-3 rounded-xl border border-cyan-400/30 text-cyan-300 shadow-[0_0_25px_rgba(0,200,255,0.15),inset_0_0_12px_rgba(0,200,255,0.1)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5),inset_0_0_20px_rgba(0,255,255,0.2)] hover:-translate-y-1 transition-all duration-500 font-medium"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-500/20 pointer-events-none" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
