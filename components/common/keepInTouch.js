import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

export default function KeepInTouch({ fromBlog }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.string()
      .matches(/^\d+$/, "Enter a valid number")
      .required("Number is required"),
    companyName: Yup.string().required("Company name is required"),
    feedback: Yup.string().required("Feedback is required"),
  });

  const submitContact = (data, { setSubmitting }) => {
    const serializeData = {
      data,
      subject: "Thank You For Contacting Us | Brain Inventory",
    };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(serializeData),
    }).then(() => {
      window.location.href = "/thank-you";
    });

    setSubmitting(false);
  };

  return (
    <div
      id="talk"
      className={`container px-4 lg:px-[2rem] bg-secondaryBg 2xl:space-y-8 space-y-6 py-4 ${
        fromBlog && "text-slate-900"
      }`}
    >
      <div className="container padding-left-all-section max-w-screen-xl">
        <div className="grid lg:grid-cols-1 content-center grid-cols-1">
          <div className="flex sm:flex-row flex-col justify-between text-left sm:items-center space-y-6">
            <h2 className="text-heading-1 Gilroy-Bold leading-normal w-[90%]">
              <br /> Get in touch, we’d be <br /> happy to hear from you
            </h2>
            <div className="text-lg Gilroy-Bold leading-normal">
              <p>
                <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=askus@braininventory.com"}>
                askus@braininventory.com 
                </Link>
                </p>
              <p>
                <Link href={"tel:+918109561401"}>
                +91 8109561401
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <HomeButton fromBlog={fromBlog}>
              <span className="2xl:text-2xl text-xl transition-all">
                Contact Us
              </span>
            </HomeButton>
          </div>

          <div className="border border-b-1 border-primaryTx my-10"></div>

          <div className="flex sm:flex-row flex-col lg:justify-end justify-start text-secondaryTx">
            <div className="flex flex-col py-6">
              <h2 className="text-heading-1 Gilroy-Bold leading-normal w-full sm:w-[70%] mb-8">
                Want to join us?
              </h2>
              <p className="Gilroy-light text-xl w-full sm:w-[70%]">
                We are always looking out for new collaborations,
              </p>
              <p className="Gilroy-light text-xl w-full sm:w-[70%]">
                whether{" "}
                <span className="text-primaryTx font-bold">
                  YOU ARE A CLIENT
                </span>{" "}
                who is passionate about a project or{" "}
                <span className="text-primaryTx font-bold">A TALENT</span> who
                is interested in joining our team, our doors are always open.
              </p>
            </div>

            <div className="flex flex-col xl:space-y-8 space-y-6 w-full">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  number: "",
                  feedback: "",
                }}
                validationSchema={validationSchema}
                onSubmit={submitContact}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="flex flex-col xl:space-y-8 pt-8 space-y-6">
                      {/* Name Field */}
                      <div>
                        <Field
                          type="text"
                          name="name"
                          className="bg-transparent p-4 border border-primaryTx w-full placeholder-secondaryTx Gilroy-Bold text-lg focus:outline-none"
                          placeholder="You should have a name"
                        />
                        <ErrorMessage
                          name="name"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Email & Number Fields */}
                      <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                        <div className="flex-1">
                          <Field
                            type="email"
                            name="email"
                            className="bg-transparent p-4 border border-primaryTx w-full placeholder-secondaryTx Gilroy-Bold text-lg focus:outline-none"
                            placeholder="Obviously, an email"
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>

                        <div className="flex-1">
                          <Field
                            type="tel"
                            name="number"
                            className="bg-transparent p-4 border border-primaryTx w-full placeholder-secondaryTx Gilroy-Bold text-lg focus:outline-none"
                            placeholder="Your contact number"
                          />
                          <ErrorMessage
                            name="number"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      {/* Company Name Field */}
                      <div>
                        <Field
                          type="text"
                          name="companyName"
                          className="bg-transparent p-4 border border-primaryTx w-full placeholder-secondaryTx Gilroy-Bold text-lg focus:outline-none"
                          placeholder="What's your company name?"
                        />
                      </div>

                      {/* Feedback Field */}
                      <div>
                        <Field
                          as="textarea"
                          name="feedback"
                          className="bg-transparent p-4 border border-primaryTx w-full placeholder-secondaryTx Gilroy-Bold text-lg focus:outline-none"
                          placeholder="Tell us, Everything!"
                          rows="4"
                        />
                        <ErrorMessage
                          name="feedback"
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      {/* Submit Button */}
                      <HomeButton type="submit" fromBlog={fromBlog} disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </HomeButton>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
