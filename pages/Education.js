import React from "react";
import Divider from "./Divider";

function Education() {
  return (
    <section id="education" className=" min-h-screen py-3  text-white">
      <div className="text-center mt-4">
        <h3 className="text-3xl font-bold text-center hover:text-4xl  transition-all duration-300">
          EDUCATION
        </h3>
      </div>

      <div className="relative  lg:flex md:flex md:justify-between sm:flex-shrink   py-14 mt-14 ">
        <ol className="relative border-l md:mr-14 lg:ml-0 md:ml-0 sm:ml-1 w-1/2 lg:w-fit border-gray-700 left-14 ">
          <li className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-white dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-black dark:text-white">
              N.M.A.M INSTITUTE OF TECHNOLOGY , NITTE
              <span className="md:mr-6 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 dark:text-blue-300 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-md font-normal leading-none text-gray-600 dark:text-gray-400   ">
              YEAR : 2020 - PRESENT
            </time>
            <p className=" text-lg font-normal text-gray-600 dark:text-gray-400 ">
              Bachelor's degree in Computer Science.
            </p>
            <p className=" text-lg font-normal text-gray-600 dark:text-gray-400 ">
              CGPA : 9.11
            </p>
          </li>
          <li className="mb-10 ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-white dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-black dark:text-white">
              DR NSAM PU COLEGE NITTE
            </h3>
            <time className="block mb-2 text-md font-normal leading-none text-gray-600 dark:text-gray-400  ">
              YEAR : 2018 - 2020
            </time>
            <p className="text-lg font-normal text-gray-600 dark:text-gray-400  ">
              Physics , Chemistry , Maths , Computer Science.
            </p>
            <p className=" text-lg font-normal  text-gray-600 dark:text-gray-400 ">
              PERCENTAGE : 95.83 %
            </p>
          </li>
          <li className="ml-10">
            <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-white dark:text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold  text-black dark:text-white">
              ST FRANCIS ENGLISH MEDIUM SCHOOL MUDARANGADY
            </h3>
            <time className="block mb-2 text-md font-normal leading-none text-gray-600 dark:text-gray-400  ">
              YEAR : 2008 - 2018
            </time>
            <p className="text-lg font-normal text-gray-600 dark:text-gray-400  ">
              High School.
            </p>
            <p className=" text-lg font-normal text-gray-600 dark:text-gray-400 ">
              PERCENTAGE : 94.72 %
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Education;
