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
    <main className="min-h-screen bg-black text-white pt-32 px-6 pb-20 ">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-yellow-400">
          Contact Me
        </h1>

        <p className="mt-6 text-zinc-400 text-lg">
          Let’s build something amazing together. Feel free to reach out.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white">Email</h2>
            <p className="text-zinc-400 mt-2">anujraidas7@gmail.com</p>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white">Phone</h2>
            <p className="text-zinc-400 mt-2">+977 9701654774</p>
          </div>

          <div className="bg-zinc-950 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white">Location</h2>
            <p className="text-zinc-400 mt-2">Kathmandu, Nepal</p>
          </div>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-950 border border-white/10 rounded-2xl p-8 space-y-5"
        >
          <h2 className="text-2xl font-bold text-white">
            Send Message
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-yellow-400"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-yellow-400"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl text-white outline-none focus:border-yellow-400"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-yellow-400 to-orange-500 text-black font-semibold py-3 rounded-xl hover:scale-105 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </main>
  );
}