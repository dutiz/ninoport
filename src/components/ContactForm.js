'use client'
import React from 'react'
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function ContactForm() {
    const form = useRef();
    const router = useRouter();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_s0ryfm9",
          "template_z6tvyl9",
          form.current,
          "__xd76y2z_zMclD-D"
        )
        .then(
          (result) => {
            console.log(result.text);
            router.push("/success ");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
      <div className="md:col-6 mt-10 md:p-20 p-5 border-2 border-black dark:border-yellow-500 rounded-3xl">
          <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="w-full bg-white px-6 py-4"
          placeholder="Full Name"
          name="user_fullname"
        />
        <input
          type="text"
          className="w-full bg-white mt-7 px-6 py-4"
          placeholder="Email"
          name="user_email"
        />
        <textarea
          name="user_message"
          id=""
          cols="30"
          rows="10"
          className="w-full bg-white mt-7 px-6 py-4"
          placeholder="Message"
        ></textarea>
        <button className="mt-8 rounded-full px-9 py-2 font-semibold text-yellow-500 dark:text-black bg-black dark:bg-yellow-500 ">
          Send
        </button>
        </form>
      </div>
  );
}
