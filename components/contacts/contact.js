import React from "react";
import HomeButton from "../buttons/HomeButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiErrorWarningFill } from "react-icons/ri";
import SufiyanImage from "../../public/assets/contact-assets/sufiyan.webp"
import Image from "next/image";

function Contact() {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(<RiErrorWarningFill />),
    email: Yup.string().email(<RiErrorWarningFill />).required(<RiErrorWarningFill />),
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
    <div className="md:pr-8 py-16 lg:pr-16 bg-secondaryBg">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-secondaryTx mb-8">
          Got a startup idea & need to get it validated?
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Panel - Founder Info */}
          <div className="lg:w-2/3  border-r-4 border-primaryTx">
            <p className="text-lg Gilroy-SemiBold text-center text-secondaryTx mb-4">Connect with our Founder</p>
            <div className="relative w-60 h-60 mx-auto">
              <Image
                width={500}
                height={600}
                src={SufiyanImage}
                alt="Brain Inventory Co-Founder"
                className="object-cover"
              />
            </div>
            <p className="font-bold text-lg mt-4 text-center">Sufiyan Rao</p>
            <p className="text-center mt-2">
              <Link href="mailto:sufiyan@braininventory.com" className="text-secondaryTx Gilroy-SemiBold">
               Email : sufiyan@braininventory.com
              </Link>
            </p>
            <p className="text-center Gilroy-SemiBold ml-[-85px] mt-2">
              <Link href="tel:+918109561401" className="text-secondaryTx">
               Phone : +91 81095 61401
              </Link>
            </p>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="lg:w-2/3">
            <p className="ext-lg Gilroy-SemiBold  text-secondaryTx mb-4">or you could send us a message, and we will connnect with you!</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="space-y-6"  id="GTM-MWMG4P2">
                <div className="space-y-4">
                  <div>
                  <Field
                      type="text"
                      name="name"
                      className="bg-transparent p-4 focus:outline-none border border-primaryTx w-full placeholder-secondaryTx"
                      placeholder="You should have a name"
                    />
                     <p className="text-red-500 text-xl absolute right-2">
                      <ErrorMessage name="name" />
                    </p>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full">
                    <Field
                        type="text"
                        name="email"
                        className="bg-transparent p-4 focus:outline-none border border-primaryTx w-full placeholder-secondaryTx"
                        placeholder="Obviously, an email"
                      />
                      <p className="text-red-500 text-xl absolute top-4 right-2">
                        <ErrorMessage name="email" />
                      </p>
                    </div>
                    <div className="w-full">
                    <Field
                        type="text"
                        name="number"
                        className="bg-transparent p-4 focus:outline-none border border-primaryTx w-full placeholder-secondaryTx"
                        placeholder="Your contact number"
                      />
                      <p className="text-red-500 text-xl absolute top-4 right-2">
                        <ErrorMessage name="number" />
                      </p>
                    </div>
                  </div>

                  <div>
                  <Field
                      type="text"
                      name="companyName"
                      className="bg-transparent p-4 focus:outline-none border border-primaryTx w-full placeholder-secondaryTx"
                      placeholder="What's your company name?"
                    />
                   <p className="text-red-500 text-xl absolute right-2">
                      <ErrorMessage name="companyName" />
                    </p>
                  </div>

                  <div>
                  <Field
                      type="text"
                      name="feedback"
                      className="bg-transparent p-4 focus:outline-none border border-primaryTx w-full placeholder-secondaryTx"
                      placeholder="Tell us, Everything!"
                    />
                      <p className="text-red-500 text-xl absolute right-2">
                      <ErrorMessage name="feedback" />
                    </p>
                  </div>
                </div>

                <HomeButton type="submit">
                  <span className="text-base">Submit</span>
                </HomeButton>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <div className="pt-40 container px-36">
          <div className="flex justify-between ">
          <h2 className="Gilroy-Bold text-5xl">
          Want to be a part of our team?
          </h2>
          <Link className="cursor-pointer" href="/career">
            <p className="view-opening cursor-pointer ">View Job Openings</p>
          </Link>
          </div>
          <p className="pt-4 pb-4 text-xl">
          If you have got powerful skills, we will pay your bills. Contact our HR at:
          </p>
          <div className="md:flex block">
            <a
              className="px-2 py-1 bg-primaryTx text-primaryBg mr-4"
              href="mailto:career@braininventory.com?subject=Me&body=Hello!"
            >
              E-mail Us
            </a>
            <a className="px-2 py-1 border-2 border-primaryTx text-primaryTx" href="tel:+91-810-956-1401">
              Call Us
            </a>
          </div>
         
        </div>
    </div>
  );
}

export default Contact;
