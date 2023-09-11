import React from "react";
import HomeButton from "../buttons/HomeButton";
import Image from "next/image";

const meeting = [
  {
    image: "Sufiyan1.png",
    title: "Sufiyan Rao",
    designation: "Co-Founder",
  },
  {
    image: "Ibrahim.jpg",
    title: "Ibrahim Adil",
    designation: "Co-Founder",
  },
  {
    image: "Shivani.png",
    title: "Shivani Pathak",
    designation: "Human Resource Manager",
  },
  {
    image: "Aqsa.png",
    title: "Aqsa Shaikh",
    designation: "Talent Recruiter",
  },
  {
    image: "Tarun.png",
    title: "Tarun Upadhyay",
    designation: "Sr. Sales Strategist",
  },
  {
    image: "Alisha.png",
    title: "Alisha Khan",
    designation: "Sales Strategist",
  },
  {
    image: "Prakhar.png",
    title: "Prakhar Vyas",
    designation: "Sales Strategist",
  },
  {
    image: "Krishna.png",
    title: "Krishna Agrawal",
    designation: "UI/UX Designer",
  },
  {
    image: "Hussain.png",
    title: "Hussain Pithawala",
    designation: "Sr. JavaScript Developer",
  },
  {
    image: "Sidra.png",
    title: "Sidra Shahid",
    designation: "Sr. PHP Developer",
  },
  {
    image: "Gunjan.png",
    title: "Gunjan Jain",
    designation: "Sr. Back End Developer",
  },
  {
    image: "Shimon.png",
    title: "Shimon Chouhan",
    designation: "JavaScript Developer",
  },
  {
    image: "Prad.png",
    title: "Pradyumna Garg",
    designation: "Full Stack Developer",
  },
  {
    image: "Puneet.png",
    title: "Puneet Rajwani",
    designation: "Full Stack Developer",
  },
  {
    image: "Deepak.png",
    title: "Deepak Dangi",
    designation: "Sr. PHP Developer",
  },
  {
    image: "Shivam.png",
    title: "Shivam Yadav",
    designation: "Full Stack Developer",
  },
  {
    image: "Jaydeep.png",
    title: "Jaydeep Deshmukh",
    designation: "JavaScript Developer",
  },
  {
    image: "Himanshu.png",
    title: "Himanshu Goel",
    designation: "JavaScript Developer",
  },
  {
    image: "Ali.png",
    title: "Ali Asgar Dhariwala",
    designation: "JavaScript Developer",
  },
  {
    image: "Subhash.png",
    title: "Subhash Ajmera",
    designation: "Back End Developer",
  },
  {
    image: "Patil.png",
    title: "Gautam Patil",
    designation: "Backend Developer",
  },
  {
    image: "Tanu.png",
    title: "Tanushree Charvey",
    designation: "Jr. JavaScript Developer",
  },
  {
    image: "Vishal.png",
    title: "Vishal Patel",
    designation: "Software Trainee",
  },
  {
    image: "Surbhi.png",
    title: "Surbhi Kushwah",
    designation: "Jr. JavaScript Developer",
  },
  {
    image: "Priyanshu.png",
    title: "Priyanshu Sharma",
    designation: "Jr. JavaScript Developer",
  },
  {
    image: "Kashish.png",
    title: "Kashish Ahuja",
    designation: "Jr. JavaScript Developer",
  },
  {
    image: "Rahul.png",
    title: "Rahul Badwaya",
    designation: "JavaScript Developer",
  },
  {
    image: "Abhay.png",
    title: "Abhay Bhongadi",
    designation: "JavaScript Developer",
  },
];

function meetCrew() {
  return (
    <div className="bg-meet">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3 gap-4">
          <div className="flex self-center pr-6 pl-8">
            <div className="my-12 lg:my-0">
              <h2 className="text-black Gilroy-Bold text-5xl">meet the crew</h2>

              <p className="Gilroy-light text-black text-lg mt-6 mb-4">
                Meet our exceptional team of technology advisors, growth
                facilitators and subject matter experts with proven Industry
                experiences.
              </p>

              <HomeButton>
                <span className="text-sm text-black">See All Members</span>
              </HomeButton>
            </div>
          </div>
          <div className="col-span-2 bg-meeting p-8 overflow-div-height">
            <div className="lg:grid lg:grid-cols-3 gap-4 ">
              {meeting.map((el) => (
                <div key={el}>
                  <div className="w-[260px] h-[280px] mr-2 relative border-2 border-cutom object-fit-custom">
                    <Image
                      src={
                        "https://d1u4arv5y5eda6.cloudfront.net/images/" +
                        el.image
                      }
                      layout="fill"
                      alt=""
                    />
                  </div>
                  <h2 className="text-black Gilroy-Bold pt-2">{el.title}</h2>
                  <p className="text-black">{el.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default meetCrew;
