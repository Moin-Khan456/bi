import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { FaRegWindowMinimize } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BiEnvelope } from "react-icons/bi";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Link from "next/link";

export default function HireBanner({
  content,
  btn,
  image,
  pop,
  setPop,
  localForm,
  setLocal,
}) {
  const [country, setCountry] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      require("aos/dist/aos.css");

      AOS.init({});
    }
  });
  useEffect(() => {
    axios.get("https://ipapi.co/json/").then((res) => {
      setCountry(res.data);
    });
  }, []);

  return (
    <>
      <div className="container padding-left-all-section-1 lg:pb-20">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="px-2">
            <div className="w-full lg:ml-0 flex flex-col items-center lg:items-start">
              <div className="lg:-ml-8">
                <Image
                  width={1200}
                  height={600}
                  priority={true}
                  src="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/Group+6755.png"
                  alt="Custom Software Development Company | Application Development Company"
                />
              </div>
              <h3 className="text-4xl leading-[3rem] Gilroy-Bold font-bold text-center lg:text-start lg:my-2">
                We Develop Highly Engaging Custom Social Networks
              </h3>
            </div>
            <div className="rounded-xl lg:m-0 m-6 lg:my-[2.3em]">
              <p className="text-slate-500 text-sm w-full Gilroy-Semibold font-bold leading-6 text-center lg:text-start">
                {content}
              </p>
            </div>
            <div className="flex justify-center lg:block cursor-pointer">
              <div
                className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-fit px-5 py-3 mt-4 pr-12 cursor-pointer "
                onClick={() => setPop(true)}
              >
                <button className="flex flex-col justify-center Gilroy cursor-pointer">
                  <span className="flex items-center justify-between w-full cursor-pointer">
                    {btn} <BsArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-full">
            <div className="lg:-mt-14 mr-14 lg:mr-0 -ml-8 lg:ml-0 bg-none w-full flex justify-center lg:block">
              <Image
                width={750}
                height={750}
                src={image}
                alt="Custom Software Development Company | Application Development Company"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed z-50 bottom-4 right-4 justify-end w-fit">
        {localForm ? (
          <PopForm setLocal={setLocal} country={country} />
        ) : (
          <div
            className="text-white bg-gradient-to-r from-[#000076] to-[#7600EB] p-4 rounded-full max-w-fit text-2xl m-2 lg:m-8"
            onClick={() => {
              setLocal(true);
            }}
          >
            <FiMail />
          </div>
        )}
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {pop && <Popup setPop={setPop} country={country} />}
    </>
  );
}

const PopForm = ({ setLocal, country }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const AOS = require("aos");
      require("aos/dist/aos.css");

      AOS.init({});
    }
  });

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contactNumber: Yup.string().min(10).required("Phone Number is required"),
    budget: Yup.string().required("Budget is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    contactNumber: "",
    budget: "",
    message: "",
  };

  const handleSubmit = (data) => {
    data = {
      ...data,
      country: country.city + " " + country.region + " " + country.country_name,
    };

    fetch("/api/ppcmail", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      axios.post("/api/admin/fetch_user", { user: { ...data } });
    });

    toast.success("Inquiry message has been sent...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setLocal(false);
    window.location.href = "/thankyou";
  };

  const validateField = (value) => {
    if (/^ +$/.test(value)) {
      toast.error(
        "Field cannot be empty or contain only whitespace characters.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }

    if (/^[0-9!@#$%^&*(){}]+$/.test(value)) {
      toast.error("Field cannot contain special characters.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    return undefined; // No validation error
  };

  return (
    <>
      <div
        className="fixed bottom-[4rem] right-2 lg:right-8 z-50 px-12 py-2 bg-white rounded-md"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <span className="flex justify-end -mr-8">
          <FaRegWindowMinimize
            onClick={() => setLocal(false)}
            className="text-black cursor-pointer"
          />
        </span>
        <div className="flex justify-center text-black">
          <h4 className="text-2xl font-bold">Enquire Now</h4>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="lg:my-4">
            <div className="flex">
              <div>
                <div className="flex flex-col">
                  <Field
                    className="my-[3px] outline-none px-2 py-2 w-[220px] bg-transparent border-b-2 border-slate-400 text-black"
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Name*"
                    validate={validateField}
                  />
                  <p className="text-red-500">
                    <ErrorMessage name="fullName" />
                  </p>
                </div>
                <div className="flex flex-col">
                  <Field
                    className="my-[3px] outline-none px-2 py-2 w-[220px] bg-transparent border-b-2 border-slate-400 text-black"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email*"
                  />
                  <p className="text-red-500">
                    <ErrorMessage name="email" />
                  </p>
                </div>
                <div className="flex lg:flex-col flex-col">
                  <Field
                    className="my-[3px] outline-none px-2 py-2 w-[220px] bg-transparent border-b-2 border-slate-400 text-black"
                    type="number"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Phone*"
                  />
                  <p className="text-red-500 block">
                    <ErrorMessage name="contactNumber" />
                  </p>
                </div>
                <div className="flex flex-col">
                  <Field
                    as="select"
                    id="budget"
                    name="budget"
                    className="my-[3px] outline-none px-2 py-2 w-[220px] bg-transparent border-b-2 border-slate-400 text-slate-400"
                  >
                    <option value="" selected disabled hidden>
                      Budget*
                    </option>
                    <option value="Not-decided" className="text-black">
                      Not decided
                    </option>
                    <option value="$7000-$10000" className="text-black">
                      $7000-$10,000
                    </option>
                    <option value="$10000-$25000" className="text-black">
                      $10000-$25000
                    </option>
                    <option value="$25000-$50000" className="text-black">
                      $25000-$50000
                    </option>
                    <option value="$50000-above" className="text-black">
                      $50000-above
                    </option>
                  </Field>
                  <p className="text-red-500">
                    <ErrorMessage name="budget" />
                  </p>
                </div>
                <div className="flex flex-col">
                  <Field
                    as="textarea"
                    className="resize-none my-[3px] outline-none px-2 py-2 w-[220px] bg-transparent border-b-2 border-slate-400 text-black"
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message*"
                  />
                  <p className="text-red-500">
                    <ErrorMessage name="message" />
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-full px-5 py-3 mt-4 pr-12 text-white font-bold"
            >
              <span className="flex justify-center items-center">
                <span>Submit &nbsp;</span>
                <BsArrowRight />
              </span>
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

const Popup = ({ setPop, country }) => {
  // window.scrollTo(0, 0);
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Add styles to disable scrolling
  document.body.style.overflowY = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  const enableScroll = () => {
    // Add styles to disable scrolling
    document.body.style.overflowY = "scroll";
    document.body.style.position = "relative";
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contactNumber: Yup.string()
      .min(10)
      .max(10)
      .required("Phone Number is required"),
    budget: Yup.string().required("Budget is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    fullName: "",
    email: "",
    contactNumber: "",
    budget: "",
    message: "",
  };

  const handleSubmit = (data) => {
    // const router = useRouter();
    data = {
      ...data,
      country: country.city + " " + country.region + " " + country.country_name,
    };
    fetch("/api/ppcmail", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      axios.post("/api/admin/fetch_user", { user: { ...data } });
    });

    toast.success("Inquiry message has been sent...", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    enableScroll();
    setPop(false);
    window.location.href = "/thankyou";
  };

  const validateField = (value) => {
    if (/^ +$/.test(value)) {
      toast.error(
        "Field cannot be empty or contain only whitespace characters.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }

    if (/^[0-9!@#$%^&*(){}]+$/.test(value)) {
      toast.error("Field cannot contain number or special characters.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    return undefined; // No validation error
  };

  const [off, setOff] = useState(true);

  const makeOff = () => {
    off && setPop(false);
    enableScroll();
  };

  return (
    <>
      <main className="fixed w-full top-0 left-0 h-screen flex items-center justify-center">
        <div
          className="absolute z-40 w-screen h-screen bg-black opacity-90"
          onClick={() => makeOff()}
        />
        <section
          className="bg-white w-[90%] relative z-50 lg:w-[35%] h-auto p-8 text-red-500 "
          data-aos="zoom-in"
        >
          <div className="flex justify-between text-black mt-2">
            <h3 className="font-bold text-3xl">Enquire Now</h3>
            <span
              className="p-2 border-2 border-black rounded-full"
              onClick={() => {
                setPop(false);
                enableScroll();
              }}
            >
              <GrClose />
            </span>
          </div>
          <div className="flex items-end flex-col lg:flex-row">
            <div className="flex flex-col items-center">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="lg:my-4 w-full">
                  <div className="flex">
                    <div className="w-full">
                      <div className="flex lg:flex-col flex-col">
                        <Field
                          className="my-[3px] outline-none py-1 lg:py-0 px-2 lg:w-[220px] w-full bg-transparent border-b-2 border-slate-400 text-black"
                          type="text"
                          id="fullName"
                          name="fullName"
                          placeholder="Name*"
                          onKeyDown={() => setOff(false)}
                          validate={validateField}
                        />
                        <p className="text-red-500">
                          <ErrorMessage name="fullName" />
                        </p>
                      </div>
                      <div className="flex lg:flex-col flex-col">
                        <Field
                          className="my-[3px] outline-none py-1 lg:py-0 px-2 lg:w-[220px] w-full bg-transparent border-b-2 border-slate-400 text-black"
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email*"
                          disabled={false}
                          onKeyDown={() => setOff(false)}
                        />
                        <p className="text-red-500 block">
                          <ErrorMessage name="email" />
                        </p>
                      </div>
                      <div className="flex lg:flex-col flex-col">
                        <Field
                          className="my-[3px] outline-none py-1 lg:py-0 px-2 lg:w-[220px] w-full bg-transparent border-b-2 border-slate-400 text-black"
                          type="number"
                          id="contactNumber"
                          name="contactNumber"
                          placeholder="Phone*"
                          onKeyDown={() => setOff(false)}
                        />
                        <p className="text-red-500 block">
                          <ErrorMessage name="contactNumber" />
                        </p>
                      </div>
                      <div className="flex lg:flex-col flex-col">
                        <Field
                          as="select"
                          id="budget"
                          name="budget"
                          className="my-[5px] outline-none px-2 py-2 lg:w-[220px] w-full bg-transparent border-b-2 border-slate-400 text-slate-400"
                          onKeyDown={() => setOff(false)}
                        >
                          <option value="" selected disabled hidden>
                            Budget*
                          </option>
                          <option value="Not-decided" className="text-black">
                            Not decided
                          </option>
                          <option value="$7000-$10000" className="text-black">
                            $7000-$10,000
                          </option>
                          <option value="$10000-$25000" className="text-black">
                            $10000-$25000
                          </option>
                          <option value="$25000-$50000" className="text-black">
                            $25000-$50000
                          </option>
                          <option value="$50000-above" className="text-black">
                            $50000-above
                          </option>
                        </Field>
                        <ErrorMessage
                          name="budget"
                          component="p"
                          className="text-red-500"
                        />
                      </div>
                      <div className="flex lg:flex-col flex-col">
                        <Field
                          as="textarea"
                          rows={2}
                          className="resize-none my-[5px] outline-none px-2 py-2 lg:w-[220px] w-full bg-transparent border-b-2 border-slate-400 text-black"
                          type="text"
                          id="message"
                          name="message"
                          placeholder="Message*"
                          onKeyDown={() => setOff(false)}
                        />
                        <p className="text-red-500">
                          <ErrorMessage name="message" />
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#000076] to-[#7600EB] w-full px-5 py-3 mt-4 pr-12 text-white font-bold flex justify-center"
                  >
                    <span className="flex justify-center items-center pl-8">
                      <span>Submit &nbsp;</span>
                      <BsArrowRight />
                    </span>
                  </button>
                </Form>
              </Formik>
              <div className="flex items-center justify-between font-bold py-2 px-4 mt-2 rounded-full bg-[#e5e5e5] text-black lg:hidden">
                <MdCall />
                &nbsp; OR &nbsp;
                <BiEnvelope />
              </div>
              <div className="grid grid-cols-2 py-2 px-4 mt-2 text-black lg:hidden">
                <div className="border-2 border-transparent border-r-slate-300 text-xs px-3 flex flex-col items-end">
                  <p className="font-bold">CALL</p>
                  <p className="font-light">+1(206) 653 3419</p>
                </div>
                <div className="border-2 border-transparent px-4 text-xs">
                  <p className="font-bold">E-MAIL</p>
                  <Link
                    href={"mailto:askus@braininventory.com"}
                    className="font-normal"
                  >
                    askus@braininventory.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="max-w-28 lg:block hidden">
              <Image
                width={500}
                height={400}
                src="https://braininventory.s3.us-east-2.amazonaws.com/images/ppc/ILLUSTRATION.png"
                alt="Custom Software Development Company | Application Development Company"
              />
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-center w-full">
            <div className="hidden lg:flex items-center justify-between font-bold py-2 px-4 w-fit rounded-full bg-[#e5e5e5] text-black ">
              <MdCall />
              &nbsp; OR &nbsp;
              <BiEnvelope />
            </div>
            <div className="lg:grid grid-cols-2 px-4 mt-1 text-black hidden">
              <div className="border-2 border-transparent border-r-slate-300 text-xs px-3 flex flex-col items-end">
                <p className="font-bold">CALL</p>
                <p className="font-light">+1(206) 653 3419</p>
              </div>
              <div className="border-2 border-transparent px-4 text-xs">
                <p className="font-bold">E-MAIL</p>
                <Link
                  href={"mailto:askus@braininventory.com"}
                  className="font-normal"
                >
                  askus@braininventory.com
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
