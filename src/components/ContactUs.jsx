import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!form.name) errors.name = 'Name is required';
    if (!form.email) errors.email = 'Email is required';
    if (!form.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      emailjs.sendForm('service_0evjizq', 'template_h1bvcu7', e.target, 'HEajAstaQ9Afv4Vl0')
        .then((result) => {
          console.log('Email sent:', result.text);
          console.log('Meassage sent!');
          setSubmitted(true);
        }, (error) => {
          console.error('Email send failed:', error);
        });
    }
  };

  return (
    <section id='contact' className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center  mb-8">Contact Us</h2>
        <p className="text-lg text-center text-white mb-12">We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {submitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-amber-600">Thank you for your message!</h3>
              <p className="text-lg text-gray-600">We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name='user_name'
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name='user_email'
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name='message'
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your Message"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="py-3 px-6 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
                    )}
                    </div>
                  </div>
                </section>
              );
            };
            
            export default ContactUs;
            
