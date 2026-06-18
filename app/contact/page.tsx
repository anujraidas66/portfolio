"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-400">
          Contact Me
        </h1>

        <p className="mt-6 text-zinc-400 text-lg">
          Let’s build something amazing together. Feel free to reach out.
        </p>
      </div>

      {/* Form + Map Section */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-stretch">

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="h-full bg-zinc-950 border border-white/10 rounded-2xl p-8 flex flex-col space-y-5"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            Send Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-yellow-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-yellow-400"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={8}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-yellow-400 flex-1"
            required
          />

          <button
            type="submit"
            className="w-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-semibold py-3 rounded-xl hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

        {/* Map Section */}
        <div className="h-full bg-zinc-950 border border-white/10 rounded-2xl p-6 flex flex-col">
          
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            My Location
          </h2>

          <div className="flex-1 overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113202.13468855886!2d82.97552487334248!3d27.544917353397075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996e53ea48469cd%3A0xb245eb7a78eec71c!2sKapilvastu%2032800!5e0!3m2!1sen!2snp!4v1781793638316!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>


        </div>
      </div>
    </main>
  );
}