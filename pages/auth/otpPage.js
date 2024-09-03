import React from "react";
import * as Yup from "yup";
import Image from "next/image";
import otpImage from "../../public/otp.gif";
import { RiErrorWarningFill } from "react-icons/ri";
import HomeButton from "../../components/buttons/HomeButton";
import { ErrorMessage, Field, Form, Formik } from "formik";

const otpPage = () => {
  const validationSchema = Yup.object().shape({
    otp: Yup.number().required(<RiErrorWarningFill />),
  });
  const initialValues = {
    otp: "",
  };

  const handleSubmit = (data) => {
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
    router.push("/login");
  };
  return (
    <div className="2xl:p-0 p-8 2xl:space-y-8 space-y-6  pb-24" id="signup">
      <div className="container h-screen">
        <div className="h-screen flex flex-col lg:flex-row   max-w-full justify-center items-center  gap-20">
          <div className="blue-section w-full lg:w-[30%]">
            <Image
              src={otpImage}
              className=""
              alt="sign up image"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className=" flex flex-col w-full lg:w-[30%]">
            <h2 className="Gilroy-Bold text-3xl text-white leading-10">
              Enter OTP
            </h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form
                id="GTM-MWMG4P2"
                className="flex flex-col xl:space-y-4 pt-4 space-y-6 lg:w-full "
              >
                <div className="flex flex-col xl:space-y-8 pt-8 space-y-6 lg:w-full">
                  <div className="relative flex items-center">
                    <Field
                      type="number"
                      name="otp"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="Enter 6 digit otp.."
                    />
                    <p className="text-red-500 text-xl absolute top-4 right-2">
                      <ErrorMessage name="otp" />
                    </p>
                  </div>
                  <HomeButton type="submit">
                    <span className="text-base">Submit</span>
                  </HomeButton>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default otpPage;
