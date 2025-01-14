import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function KeepInTouch({ fromBlog }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    number: Yup.number()
      .typeError("Enter a valid number")
      .required("Number is required"),
    companyName: Yup.string().required("Company name is required"),
    feedback: Yup.string().required("Feedback is required"),
  });
  const sumbitContact = (data) => {
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
  };
  return (
    <div
      id="talk"
      className={`container px-4 lg:px-[2rem] bg-secondaryBg 2xl:space-y-8 space-y-6 py-4 ${
        fromBlog && "text-slate-900"
      }`}
    >
      <div className="container padding-left-all-section">
        <div className="mobile-padding grid lg:grid-cols-1 content-center grid-cols-1 ">
          <div className="flex sm:flex-row flex-col justify-between text-left sm:items-center space-y-6 ">
            <h2 className="text-heading-1 Gilroy-Bold leading-normal w-[90%]">
              <br /> Get in touch, we’d be <br /> happy to hear from you
            </h2>
            <div className="text-lg Gilroy-Bold leading-normal ">
              <p>askus@braininventory.com</p>
              <p>+91 8109561401</p>
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
          <div className="flex sm:flex-row flex-col lg:justify-end justify-start text-secondaryTx ">
            <div className="flex flex-col py-6 ">
              <h2 className="text-heading-1 Gilroy-Bold leading-normal w-full sm:w-[70%] mb-8">
                Want to join us ?
              </h2>
              <p className=" Gilroy-light leading-normal Gilroy-LightBold text-xl w-full sm:w-[70%]">
                We are always looking out for new <br /> collaborations,
              </p>
              <p className="Gilroy-light leading-normal w-full sm:w-[70%] Gilroy-LightBold text-xl">
                whether{" "}
                <span className="text-primaryTx font-bold">
                  YOU ARE A CLIENT
                </span>{" "}
                who is passionate about a project or{" "}
                <span className="text-primaryTx font-bold">A TALENT</span> who
                is interested in joining our team, our doors are always open.
              </p>
            </div>
            <div className="flex flex-col xl:space-y-8 space-y-6 w-full ">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  number: "",
                  companyName: "",
                  feedback: "",
                }}
                validationSchema={validationSchema}
                onSubmit={sumbitContact}
              >
                <Form>
                  <div className="flex flex-col xl:space-y-8 pt-8 space-y-6 ">
                    <Field
                      type="text"
                      name="name"
                      className={`bg-transparent p-4 focus:outline-none text-primaryTx border border-primaryTx ${
                        fromBlog && "border-slate-900"
                      } border-primaryTx w-full ${
                        fromBlog && "placeholder-slate-900"
                      } placeholder-secondaryTx Gilroy-Bold text-lg`}
                      placeholder="You should have a name"
                    />
                    <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                      <Field
                        type="email"
                        name="email"
                        className={`bg-transparent p-4 focus:outline-none border border-primaryTx flex-1 placeholder-secondaryTx Gilroy-Bold text-lg ${
                          fromBlog && "border-slate-900"
                        } ${fromBlog && "placeholder-slate-900"}`}
                        placeholder="Obviously, an email"
                      />
                      <Field
                        type="number"
                        name="number"
                        className={`bg-transparent p-4 focus:outline-none border border-primaryTx flex-1 placeholder-secondaryTx Gilroy-Bold text-lg ${
                          fromBlog && "placeholder-slate-900"
                        } ${fromBlog && "border-slate-900"}`}
                        placeholder="Your contact number"
                      />
                    </div>
                    <Field
                      type="text"
                      name="companyName"
                      className={`bg-transparent p-4 focus:outline-none border border-primaryTx ${
                        fromBlog && "border-slate-900"
                      } border-[#ffffff67] w-full ${
                        fromBlog && "placeholder-slate-900"
                      } placeholder-secondaryTx Gilroy-Bold text-lg`}
                      placeholder="What's your company name?"
                    />
                    <Field
                      type="text"
                      name="feedback"
                      className={`bg-transparent p-4 focus:outline-none border border-primaryTx ${
                        fromBlog && "border-slate-900"
                      } border-[#ffffff67] w-full ${
                        fromBlog && "placeholder-slate-900"
                      } placeholder-secondaryTx Gilroy-Bold text-lg`}
                      placeholder="Tell us, Everything!"
                    />
                    <HomeButton type="submit" fromBlog={fromBlog}>
                      Submit
                    </HomeButton>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
