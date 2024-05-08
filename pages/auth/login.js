import React from "react";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/router";
import signupImage from "../../public/signup.jpg";
import { RiErrorWarningFill } from "react-icons/ri";
import { Formik, Form, Field, ErrorMessage } from "formik";
import HomeButton from "../../components/buttons/HomeButton";

function Login() {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(<RiErrorWarningFill />)
      .required(<RiErrorWarningFill />),
    password: Yup.string()
      .min(8, "Password should have atleast 8 characters!")
      .required(<RiErrorWarningFill />),
  });
  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (data) => {
    fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
    });
    router.push("/auth/otpPage");
  };
  return (
    <div className="2xl:p-0 p-8 2xl:space-y-8 space-y-6  pb-24" id="signup">
      <div className="container h-screen">
        <div className="flex flex-col lg:flex-row pt-8 lg:pt-24 max-w-full justify-center items-center gap-20">
          <div className="blue-section mt-0 lg:mt-16 w-full lg:w-[30%]">
            <Image
              src={signupImage}
              className=""
              alt="sign up image"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="flex flex-col w-full lg:w-[30%]">
            <h2 className="Gilroy-Bold text-3xl text-white leading-10">
              Login
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
                      type="text"
                      name="email"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="Enter your email"
                    />
                    <p className="text-red-500 text-xl absolute top-4 right-2">
                      <ErrorMessage name="email" />
                    </p>
                  </div>

                  <div className="relative flex items-center">
                    <Field
                      type="password"
                      name="password"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="Enter password"
                    />
                    <p className="text-red-500 text-xl absolute top-4 right-2">
                      <ErrorMessage name="password" />
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
}
export default Login;
