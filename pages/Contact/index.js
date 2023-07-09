import React, { useRef } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2szuy9m",
        "template_ievg4dn",
        form.current,
        "9mz_SiVKISaQupHFU"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message sent!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-10 bg-white dark:bg-black ">
      <h1 className="text-3xl font-bold text-center hover:text-4xl  transition-all duration-300 text-black dark:text-white">
        Contact
      </h1>

      <div className=" grid grid-cols-2 gap-4 container1 text-black dark:text-white">
        <div>
          <Image
            className="m-1.5 rounded-lg"
            src="/contact2.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <div className=" flex m-10 gap-10  justify-center  ">
            <a href="https://github.com/Amith-Jagannath">
              <svg
                className="w-6 h-6 hover:text-gray-500 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/amith-jagannath-soorenji-6b13a8202/">
              <svg
                className="w-6 h-6 text-white hover:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 15 15"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  clip-rule="evenodd"
                />
                <path d="M3 5.012H0V15h3V5.012Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/amith__js/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap">
          <form
            className="flex flex-col flex-wrap items-left "
            ref={form}
            onSubmit={sendEmail}
          >
            <label htmlFor="text-lg">Name</label>
            <input
              type="text"
              name="user_name"
              className="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900 "
              size="35"
            />
            <label>Email</label>
            <input
              type="text"
              className="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900  "
              name="user_email"
              size="35"
            />
            <label className="text-xxl">Message</label>
            <textarea
              name="message"
              id=""
              cols="7"
              rows="4"
              className="bg-slate-200 rounded-lg p-4 dark:bg-neutral-900  "
            ></textarea>
            <div className="flex justify-center m-5">
              <button className="bg-indigo-400  items-center justify-center rounded-lg px-8 py-3 hover:bg-indigo-500 active:bg-indigo-500 focus:outline-none focus:ring focus:ring-violet-300 ">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
