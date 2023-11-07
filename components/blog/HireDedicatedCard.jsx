// import Image from "next/image";
// import React from "react";
import Contact from "./Contact";

import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { BiEnvelope } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { MdCall } from "react-icons/md";
import { FaRegWindowMinimize } from "react-icons/fa";

// const HireDedicatedCard = () => {
//   return (
//     <div className="relative lg:w-[400px] lg:min-w-[400px] lg:max-w-[300px] lg:mt-12 p-4 bg-gradient-to-b from-[#6302dd] to-[#4601a1] max-h-[500px] rounded-md">
//       <h2 className="text-lg font-bold">
//         Hire Dedicated Remote Developers From Brain Inventory
//       </h2>
// <span className='flex justify-end -mr-8'>
//                     <FaRegWindowMinimize onClick={() => setLocal(false)} className='text-black cursor-pointer' />
//                 </span>
//       <h3 className="text-sm flex items-start my-2">
//         {" "}
//         <Image
//           src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
//           alt=""
//           width={25}
//           height={25}
//           className="pr-2 mt-1"
//         />{" "}
//         Onboard dedicated remote developers to your project as quickly as
//         in 2 days.
//       </h3>
//       <h3 className="text-sm flex items-start my-2">
//         {" "}
//         <Image
//           src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
//           alt=""
//           width={25}
//           height={25}
//           className="pr-2 mt-1"
//         />{" "}
//         Resources are thoroughly matched based on your particular skills
//         and requirements.
//       </h3>

//       <h2 className="text-2xl font-bold my-2">Contact Us!</h2>
//       <Contact/>
//       {/* <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/Group+6051.png" alt="" width={1400} height={1400} className="w-[410px]"/> */}
//     </div>
//   );
// };

const HireDedicatedCard = ({ setLocal }) => {
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
    // const router = useRouter();

    // console.log("User:- ", data)
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
      <div className="relative max-w-[70vw] lg:w-[400px] lg:min-w-[400px] lg:max-w-[300px] lg:mt-12 p-4 bg-gradient-to-b from-[#6302dd] to-[#4601a1] max-h-[750px] rounded-md">
        <h2 className="text-lg font-bold">
          Hire Dedicated Remote Developers From Brain Inventory
        </h2>
        <span className="flex justify-end absolute top-1 right-4 text-white"> 
          <FaRegWindowMinimize
            onClick={() => setLocal(false)}
            className="text-white cursor-pointer"
          />
        </span>
        <h3 className="text-xs font-semibold flex items-start my-2">
          {" "}
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
            alt=""
            width={25}
            height={25}
            className="pr-2"
          />{" "}
          Onboard dedicated remote developers to your project as quickly as in 2
          days.
        </h3>
        <h3 className="text-xs font-semibold flex items-start my-2">
          {" "}
          <Image
            src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/correct.svg"
            alt=""
            width={25}
            height={25}
            className="pr-2"
          />{" "}
          Resources are thoroughly matched based on your particular skills and
          requirements.
        </h3>

        <h2 className="text-xl font-bold my-1">Contact Us!</h2>
        <Contact />
        {/* <Image src="https://braininventory.s3.us-east-2.amazonaws.com/images/hire-dedicated-developer-contact-card/Group+6051.png" alt="" width={1400} height={1400} className="w-[350px] pl-4 flex justify-center"/> */}
      </div>
    </>
  );
};

export default HireDedicatedCard;
