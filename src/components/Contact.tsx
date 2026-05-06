import { useState } from "react";
import {
  Mail,
  Copy,
  CheckCircle,
  Send,
} from "lucide-react";

export default function Contact() {
  const email = "greg.c.schuman@gmail.com";

  const [copied, setCopied] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const FORMSPREE_ENDPOINT =
    "https://formspree.io/f/meenkoyn";

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
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
      FORMSPREE_ENDPOINT,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      setSubmitted(true);

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
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          Contact
        </h2>

        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Have a question, project, or opportunity?
          Reach out anytime.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Direct Contact */}
        <div className="rounded-2xl border border-emerald-500/20 bg-white p-6 shadow-sm dark:bg-slate-900">
          <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
            Direct Contact
          </h3>

          <p className="mt-3 text-slate-600 dark:text-slate-300">
            You can contact me directly via email or copy
            my address below.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-lg border border-emerald-500/30 px-4 py-3 text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
            >
              <Mail size={20} />
              {email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white transition hover:bg-emerald-700"
            >
              {copied ? (
                <>
                  <CheckCircle size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Email
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form */}
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
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-emerald-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white transition hover:bg-emerald-700"
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
      </div>
    </section>
  );
}

// action="https://formspree.io/f/meenkoyn"