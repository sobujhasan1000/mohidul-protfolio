"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import contractImg from "../../../../public/contract.jpg";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMe = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailData: Record<string, string> = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_jad2mi8",
        "template_gu99amn",
        emailData,
        "E2yzAkRlRkyJDomRP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="py-12 bg-slate-700 flex justify-center items-center min-h-screen">
      <div className="flex flex-wrap max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2">
          <Image
            width={400}
            height={400}
            src={contractImg}
            alt="My Photo"
            className=" w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
