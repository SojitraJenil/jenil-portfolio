'use client';

import { useState } from 'react';
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from 'react-icons/fa';

type Errors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState('');

  const validate = (form: HTMLFormElement) => {
    const newErrors: Errors = {};

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (firstName.length < 2) {
      newErrors.firstName = 'Please enter a valid first name';
    }

    if (lastName.length < 2) {
      newErrors.lastName = 'Please enter a valid last name';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess('');

    const form = e.currentTarget;

    if (!validate(form)) return;

    setLoading(true);

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSuccess('Message sent successfully 🚀');
      setErrors({});
      form.reset();
    } catch {
      setErrors({
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (error?: string) =>
    `w-full rounded-md border px-4 py-3 text-sm outline-none transition
     focus:ring-2 focus:ring-black/70
     ${
       error
         ? 'border-red-400 focus:ring-red-300'
         : 'border-gray-300 hover:border-gray-400'
     }`;

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#eef2ff] py-28"
    >
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-2 gap-20 max-[900px]:grid-cols-1">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[42px] font-serif text-black">
              Get in Touch
            </h2>
            <p className="mt-2 text-black">
              I&apos;d like to hear from you!
            </p>

            <p className="mt-6 max-w-[420px] leading-relaxed text-gray-600">
              If you have a project in mind, a job opportunity, or just want to
              say hello — feel free to drop a message.
            </p>

            <p className="mt-8 text-gray-700">
              📧 sojitrasojitra0@gmail.com
            </p>

            <div className="my-10 flex gap-5 max-[900px]:justify-center">
              <a
                href="https://github.com/SojitraJenil"
                target="_blank"
                rel="noreferrer"
                className="text-[#2d2e32] transition hover:text-black"
                aria-label="GitHub"
              >
                <FaGithubSquare size={32} />
              </a>
{/* 
              <a
                href="https://www.linkedin.com/in/jenil-sojitra-0a18a2250"
                target="_blank"
                rel="noreferrer"
                className="text-[#0a66c2] transition hover:opacity-80"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={32} />
              </a>

              <a
                href="https://www.instagram.com/jenilll_18"
                target="_blank"
                rel="noreferrer"
                className="text-[#e1306c] transition hover:opacity-80"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a> */}

              <a
                href="https://wa.me/919979968463"
                target="_blank"
                rel="noreferrer"
                className="text-[#25D366] transition hover:opacity-80"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={32} />
              </a>

              <a
                href="tel:+919979968463"
                className="pt-1 text-[#147efb] transition hover:opacity-80"
                aria-label="Call"
              >
                <FaPhoneAlt size={24} />
              </a>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl bg-white p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  placeholder="First Name"
                  className={inputStyle(errors.firstName)}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="lastName"
                  placeholder="Last Name"
                  className={inputStyle(errors.lastName)}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Email *"
                className={inputStyle(errors.email)}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                className={`${inputStyle(errors.message)} resize-none`}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {success && (
              <div className="rounded-md bg-green-50 px-4 py-3 text-sm text-green-700">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-fit rounded-md bg-black px-12 py-3
              text-sm font-medium tracking-wide text-white
              transition hover:bg-[#7a3e1d] active:scale-95
              disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}