import React from "react";
import HomeButton from "../buttons/HomeButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiErrorWarningFill } from "react-icons/ri";
import Image from "next/image";

function Contact(props) {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(<RiErrorWarningFill />),
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    number: Yup.string()
      .min(10, <RiErrorWarningFill />)
      .max(10, <RiErrorWarningFill />)
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
  const handleSubmit = (data) => {
    const serializeData = {
      data,
      subject: "Thank You For Contacting Us | Brain Inventory",
    };
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(serializeData),
    }).then((res) => {
      console.log(res);
    });
    router.push("/thank-you");
  };
  return (
    <div
      className="2xl:p-0 p-8 2xl:space-y-8 space-y-6 pt-24 pb-24"
      id="contact"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row pt-8 lg:pt-24 max-w-full">
          <div className="flex flex-col w-full lg:w-[55%]">
            <h2 className="Gilroy-Bold text-3xl text-white leading-10">
              awesomeness awaits!
            </h2>
            <p className="text-xl text-white Gilroy-light pb-4 lg:pb-0">
              Connect with our experts.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form
                id="GTM-MWMG4P2"
                className="flex flex-col xl:space-y-4 pt-8 space-y-6 lg:w-full"
              >
                <div className="flex flex-col xl:space-y-8 pt-8 space-y-6 lg:w-4/5">
                  <div className="relative flex items-center">
                    <Field
                      type="text"
                      name="name"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="You should have a name"
                    />
                    <p className="text-red-500 text-xl absolute right-2">
                      <ErrorMessage name="name" />
                    </p>
                  </div>
                  <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                    <div className="relative w-1/2">
                      <Field
                        type="text"
                        name="email"
                        className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                        placeholder="Obviously, an email"
                      />
                      <p className="text-red-500 text-xl absolute top-4 right-2">
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                    <div className="relative w-1/2">
                      <Field
                        type="text"
                        name="number"
                        className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                        placeholder="Your contact number"
                      />
                      <p className="text-red-500 text-xl absolute top-4 right-2">
                        <ErrorMessage name="number" />
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center">
                    <Field
                      type="text"
                      name="companyName"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="What's your company name?"
                    />
                    <p className="text-red-500 text-xl absolute right-2">
                      <ErrorMessage name="companyName" />
                    </p>
                  </div>
                  <div className="relative flex items-center">
                    <Field
                      type="text"
                      name="feedback"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="Tell us, Everything!"
                    />
                    <p className="text-red-500 text-xl absolute right-2">
                      <ErrorMessage name="feedback" />
                    </p>
                  </div>
                  <HomeButton type="submit">
                    <span className="text-base">Submit</span>
                  </HomeButton>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="blue-section lg:mt-0 mt-16 w-full lg:w-[50%]">
            <h3 className="Gilroy-Bold text-3xl text-white leading-10">
              Got a startup idea & need to get it <br /> validated?
            </h3>
            <p className="text-xl text-white Gilroy-light pt-2 pb-4">
              Let us give you our honest opinion.
            </p>
            <div className="relative w-60 h-60">
              <Image
                width={500}
                height={600}
                src={
                  "https://braininventory.s3.us-east-2.amazonaws.com/images/sufiyan.png"
                }
                className="w-60 h-60"
                alt="Brain Inventory Co founder"
              />
            </div>
            <p className="Gilroy-Bold text-lg mt-3">Sufiyan Rao I Co founder</p>
            <Link
              href="mailto:sufiyan@braininventory.com"
              className="Gilroy-Bold text-lg pb-1"
            >
              Email: sufiyan@braininventory.com
            </Link>{" "}
            <br />
            <Link href="tel:+918109561401" className="Gilroy-Bold text-lg">
              Phone: +91-810-956-1401
            </Link>
          </div>
        </div>

        <div className="pt-40">
          <h2 className="Gilroy-Bold text-5xl">
            want to be a part of our team?
          </h2>

          <p className="pt-4 pb-4 text-xl">
            If you have got powerful skills, we will pay your bills. Contact our
            HR at:
          </p>

          <div className="md:flex block">
            <a
              className="btn-career"
              href="mailto:career@braininventory.com?subject=Me&body=Hello!"
            >
              career@braininventory.com
            </a>
            <a className="btn-contact" href="tel:+91-810-956-1401">
              +91-810-956-1401
            </a>
          </div>
          <Link className="cursor-pointer" href="/career">
            <p className="view-opening cursor-pointer">View openings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Contact;
