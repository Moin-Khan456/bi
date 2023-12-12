import Image from "next/image";
import HomeButton from "../buttons/HomeButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

export default function KeepInTouch() {
  const router = useRouter();

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
    console.log(data);
    fetch("/api/contact", {
      method: "POST",
      body: {data: JSON.stringify(data), subject: "Thank You For Applying At Brain Inventory"},
    }).then(()=>{
      window.location.href = "/thank-you";
    })
  };
// subj: 'Thank You For Applying At Brain Inventory'
  return (
    <div id="talk" className="container px-4 lg:px-16 2xl:space-y-8 space-y-6">
      <div className="container padding-left-all-section">
        <div className="mobile-padding grid lg:grid-cols-2 grid-cols-1">
          <div className="flex flex-col space-y-6">
            <div className="relative h-[100px] w-full lg:w-1/2">
              <Image
                src={
                  "https://braininventory.s3.us-east-2.amazonaws.com/images/keepInTouch.svg"
                }
                loading="lazy"
                layout="fill"
                objectFit="contain"
                alt="Keep In Touch With Brain Inventory Sales Executive"
              />
            </div>

            <h2 className="text-heading-1 Gilroy-Bold leading-normal w-[90%]">
              Have an idea? <br /> Get in touch, we’d be <br /> happy to hear
              from you
            </h2>

            <p className="2xl:text-2xl xl:text-xl text-lg Gilroy-Light leading-normal w-4/5">
              We are always looking out for new collaborations, whether you are
              a client who is passionate about a project or a talent who is
              interested in joining our team, our doors are always open.
            </p>
          </div>

          <div className="flex lg:justify-end justify-start ">
            <div className="flex flex-col xl:space-y-8 space-y-6 w-full">
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
                  <div className="flex flex-col xl:space-y-8 pt-8 space-y-6">
                    <Field
                      type="text"
                      name="name"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="You should have a name"
                    />
                    <div className="flex lg:flex-row flex-col xl:space-x-8 lg:space-x-6 lg:space-y-0 space-y-6">
                      <Field
                        type="email"
                        name="email"
                        className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]"
                        placeholder="Obviously, an email"
                      />
                      <Field
                        type="number"
                        name="number"
                        className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] flex-1 placeholder-[#ffffffd7]"
                        placeholder="Your contact number"
                      />
                    </div>
                    <Field
                      type="text"
                      name="companyName"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="What's your company name?"
                    />
                    <Field
                      type="text"
                      name="feedback"
                      className="bg-transparent p-4 focus:outline-none border border-[#ffffff67] w-full placeholder-[#ffffffd7]"
                      placeholder="Tell us, Everything!"
                    />
                    <HomeButton type="submit">Submit</HomeButton>
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
