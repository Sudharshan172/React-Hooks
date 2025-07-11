import emailjs from 'emailjs-com';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react'; // Optional: lucide icon, or use emoji ✅

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(''); // '' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(''), 4000); // Hide after 4 seconds
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus(''), 4000);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150 max-w-xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        {status === 'success' && (
          <div className="mb-6 flex items-center gap-3 text-green-500 bg-green-100 px-4 py-3 rounded shadow">
            <CheckCircle2 className="w-5 h-5" />
            <span>Message sent successfully!</span>
          </div>
        )}

        {status === 'error' && (
          <div className="mb-6 text-red-500 bg-red-100 px-4 py-3 rounded shadow">
            Something went wrong. Please try again!
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your Message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};