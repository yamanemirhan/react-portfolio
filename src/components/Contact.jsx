import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2y5cuq1",
        "template_7m3d8cl",
        form.current,
        "cWO2D_b-LrNi5mNDC"
      )
      .then(
        (result) => {
          toast.success("Your message was sent successfully");
          form.current.reset();
        },
        (error) => {
          toast.error("Something went wrong!");
        }
      );
  };

  return (
    <div id="contact" className="p-6">
      <div className="mx-auto w-[320px] sm:w-[500px]">
        <h2 className="text-3xl text-center">Contact</h2>
        <p className="text-center text-gray-700 mb-4">Write your thoughts.</p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 p-2"
        >
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            required
            className="p-2 rounded-md bg-slate-200 dark:bg-slate-700"
          />
          <input
            type="email"
            placeholder="Email"
            name="from_email"
            required
            className="p-2 rounded-md bg-slate-200 dark:bg-slate-700"
          />
          <textarea
            rows="5"
            placeholder="Message"
            name="message"
            required
            className="resize-none p-2 rounded-md bg-slate-200 dark:bg-slate-700"
          />
          <button
            type="submit"
            className="w-fit border bg-orange-400 py-2 px-6 rounded-lg ml-auto"
          >
            Send
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Contact;
