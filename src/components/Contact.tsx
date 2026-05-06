import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const response = await fetch(
      "https://formspree.io/f/meenkoyn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setSubmitted(true);

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-emerald-500/20 bg-white p-6 shadow-sm dark:bg-slate-900"
    >
      <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
        Send a Message
      </h3>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 dark:border-slate-700 dark:bg-slate-950"
        />

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white hover:bg-emerald-700"
        >
          <Send size={18} />
          Send Message
        </button>

        {submitted && (
          <p className="text-center text-sm text-emerald-600 dark:text-emerald-400">
            Message sent successfully.
          </p>
        )}
      </div>
    </form>
  );
}

// action="https://formspree.io/f/meenkoyn"