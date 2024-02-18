import React, { useState } from "react";
import * as Yup from "yup";
import { RiErrorWarningFill } from "react-icons/ri";
import { ErrorMessage, Field, Form, Formik, resetForm } from "formik";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
const Contact = () => {
  const [pending, SetPending] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(<RiErrorWarningFill />),
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    number: Yup.string()
      .matches(/^[0-9+]+$/, <RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    companyName: Yup.string().required(<RiErrorWarningFill />),
    feedback: Yup.string().required(<RiErrorWarningFill />),
  });

  const initialValues = {
    name: "",
    email: "",
    number: "",
    companyName: "",
    feedback: "",
  };
  const router = useRouter();
  const handleSubmit = (data, { resetForm }) => {
    SetPending(true);
    const serializeData = {
      data,
      subject: "Thank You For Contacting Us | Brain Inventory",
    };
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(serializeData),
    }).then((res) => {
      SetPending(false);
      resetForm();
      window.location.href = "/thank-you";
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form id="GTM-MWMG4P2" className="flex flex-col xl:space-y-4 lg:w-full">
        <div className="flex flex-col lg:w-4/5">
          <div className="relative flex items-center">
            <Field
              type="text"
              name="name"
              className="bg-transparent p-1 m-1 focus:outline-none border-b-2 border-white  lg:min-w-[350px] placeholder-[#ffffffd7] placeholder:text-xs"
              placeholder="You should have a name"
            />
            <p className="text-red-500 text-xl absolute -right-10 ">
              <ErrorMessage name="name" />
            </p>
          </div>
          <div className="relative flex items-center">
            <Field
              type="text"
              name="email"
              className="bg-transparent p-1 m-1 focus:outline-none border-b-2 border-white  lg:min-w-[350px] placeholder-[#ffffffd7] placeholder:text-xs"
              placeholder="Obviously, an email"
            />
            <p className="text-red-500 text-xl absolute -right-10 ">
              <ErrorMessage name="email" />
            </p>
          </div>
          <div className="relative flex items-center">
            <Field
              type="text"
              name="number"
              className="bg-transparent p-1 m-1 focus:outline-none border-b-2 border-white  lg:min-w-[350px] placeholder-[#ffffffd7] placeholder:text-xs"
              placeholder="Your contact number"
            />
            <p className="text-red-500 text-xl absolute -right-10 ">
              <ErrorMessage name="number" />
            </p>
          </div>
          <div className="relative flex items-center">
            <Field
              type="text"
              name="companyName"
              className="bg-transparent p-1 m-1 focus:outline-none border-b-2 border-white  lg:min-w-[350px] placeholder-[#ffffffd7] placeholder:text-xs"
              placeholder="What's your company name?"
            />
            <p className="text-red-500 text-xl absolute -right-10 ">
              <ErrorMessage name="companyName" />
            </p>
          </div>
          <div className="relative flex items-center">
            <Field
              type="text"
              name="feedback"
              className="bg-transparent p-1 m-1 focus:outline-none border-b-2 border-white  lg:min-w-[350px] placeholder-[#ffffffd7] placeholder:text-xs"
              placeholder="Tell us, Everything!"
            />
            <p className="text-red-500 text-xl absolute -right-10 ">
              <ErrorMessage name="feedback" />
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex items-center bg-transparent transition-all hover-bg-yellow-h  text-[#4601a1] hover:text-white"
          >
            <span className="2xl:w-8 lg:w-6 w-4 2xl:h-8 color-hover lg:h-6 h-4 transition-all relative bg-white  hover:text-white rounded-full mr-4 my-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="2xl:h-8 transition-all lg:h-6 h-4 2xl:w-8 lg:w-6 w-4 absolute -left-1 top-1/2 -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="2xl:text-sm font-bold text-sm transition-all text-white">
              {pending ? (
                <ThreeDots
                  visible={true}
                  height="40"
                  width="40"
                  color="#ffffff"
                  radius="10"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Submit"
              )}
            </span>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Contact;
