import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import DownArrow from "../../public/assets/career-assets/DownIcon.webp"
import Image from "next/image";

function Opening({OpeningJob}) {
  const { register, handleSubmit, reset } = useForm();

  const sumbitContact = (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("doc", data.file[0]);
    formData.append("email", data.email);
    formData.append("number", data.number);
    formData.append("exp", data.exp);
    formData.append("role", data.role);
    axios
      .post("/api/career", formData)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
    Swal.fire({
      icon: "success",
      title: "Thank you for your interest in working with Brain Inventory.",
      text: "We have received your application and our Talent Acquisition Team would get back to you if your resume gets shortlisted.",
      showConfirmButton: true,
    });
  };

  const roleShowing = (role) => {
    reset({ role: role });
  };

  const collapsed = (id) => {
    const element = document.getElementById(id);
    element.classList.toggle("collapse-open");
  };

  return (
    <div className="2xl:p-10 p-8 2xl:space-y-8 space-y-6">
      <div className="container">
        <div>
          <h2 className="text-4xl Gilroy-Bold mb-8">Current Openings</h2>
        </div>
        <div>
          {OpeningJob.map((el) => {
            return (
              <>
                <div
                  key={el.JobTitle}
                  id={el.JobTitle}
                  className="collapse bg-secondaryBg mb-6 py-3 border-2 border-primaryTx"
                >
                  <div className="collapse-title text-xl font-medium">
                    <div className="md:flex block justify-between items-center">
                      <div className="md:w-[30%]">
                      <div className="flex items-center gap-2">
                        <label className="experiene-label">Job Id :</label>
                        <h4 className="lg:text-base text-sm Gilroy-Light">{el.JobId}</h4>
                      </div>
                        <h2 className="text-2xl text-secondaryTx Gilroy-Bold">
                          {el.JobTitle}
                        </h2>
                      </div>
                      <div>
                        <label className="text-secondaryTx experiene-label">Experience</label>
                        <h4 className="lg:text-base text-xl Gilroy-Bold">
                          {el.Experience}
                        </h4>
                      </div>
                      <div className="text-secondaryTx">
                        <label className="experiene-label">Positions</label>
                        <h4 className="lg:text-base text-sm">{el.Position}</h4>
                      </div>
                      <div className="flex md:block">
                        <label
                          htmlFor="my-modal"
                          onClick={() => roleShowing(el.JobTitle)}
                          className="btn-apply inline-block cursor-pointer modal-button px-3 py-1"
                        >
                          Apply Now
                        </label>
                        <button
                          onClick={() => collapsed(el.JobTitle)}
                          className="ml-4"
                        >
                          <Image
                          src={DownArrow}
                          alt="Brain Inventory Software Company"
                          width={18}
                          height={12}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-content flex">
                    <div>
                      <p>Key Skills: {el.description}</p>
                      <h2 className="text-2xl my-4">Description</h2>
                      <ul className="ml-4">
                        {el.roles &&
                          el.roles.map((item) => {
                            return (
                              <li key={item} className="w-full list-disc">
                                {item}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <label htmlFor="my-modal" />
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <form onSubmit={handleSubmit(sumbitContact)}>
            <div className="modal-box w-full max-w-5xl">
              <div className="flex justify-between w-full items-center mb-4">
                <h2 className="text-2xl text-black Gilroy-Bold">Apply Now</h2>
                <label
                  htmlFor="my-modal"
                  className="bg-primaryTx rounded-full w-10 h-10 text-primaryBg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 relative top-2 left-2 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>
              <div>
                <label className="text-black mb-2">Job Title</label>

                <select
                  {...register("role")}
                  className="w-full text-black border focus:outline-0 p-3 mb-4"
                  required
                >
                  {OpeningJob.map((el) => {
                    return (
                      <option key={el.JobTitle} value={el.JobTitle}>
                        {el.JobTitle}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-black mb-2">Firstname</label>
                  <input
                    {...register("firstName")}
                    type="text"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Firstname"
                  />
                </div>
                <div>
                  <label className="text-black mb-2">Lastname</label>
                  <input
                    {...register("lastName")}
                    type="text"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Lastname"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-black mb-2">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="text-black mb-2">Mobile Number</label>
                  <input
                    {...register("number")}
                    type="number"
                    required
                    className="w-full text-black border focus:outline-0 p-3 mb-4"
                    placeholder="Number"
                  />
                </div>
                <div className="">
                  <div>
                    <label className="text-black mb-2">
                      No year of Experience
                    </label>
                    <input
                      {...register("exp")}
                      type="text"
                      required
                      className="w-full text-black border focus:outline-0 p-3 mb-4"
                      placeholder="Experience"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-black mb-2">Attachment</label>
                <input
                  type="file"
                  {...register("file")}
                  className="w-full text-black border focus:outline-0 p-2 mb-4"
                  required
                  placeholder="Experience"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="m-auto text-center block bg-primaryTx text-primaryBg w-40 p-3 rounded-lg mt-4"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Opening;
