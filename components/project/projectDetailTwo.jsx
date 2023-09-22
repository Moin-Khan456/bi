import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="">
 
        <div className="w-full relative flex justify-center">
          <Image
            src="https://d1u4arv5y5eda6.cloudfront.net/images/project/Image 3.png"
            alt="Image"
            width={1800} height={1800}
            className="w-[80%] h-full object-cover"
          />
          <div className="absolute top-96 inset-0 bg-gradient-to-b from-transparent to-black opacity-70 h-96 w-full"/>
        </div>
        <div className="px-4 lg:px-48">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">
            What is Numetric.work?
          </h1>
          <p className="text-center font-thin tracking-wide text-2xl leading-10 opacity-50 lg:my-24">
          NuMetric.work is an online accounting tool designed for self-employed individuals and small businesses, allowing them to efficiently manage their finances. With features such as invoice creation, expense and purchase tracking, and other accounting transactions, users can easily handle their bookkeeping tasks. The platform caters specifically to entrepreneurs and small business owners, empowering them to maintain their complete financial records independently. However, for those seeking professional guidance, NuMetric.work enables easy access for advisors to monitor their activities. The application supports the creation of aesthetically pleasing estimates and invoices in Arabic or English, with the option to use any currency. Additionally, it provides powerful and user-friendly financial reports, allowing users to monitor their business transactions and performance metrics effectively, facilitating smarter decision-making. Additional features included in the project encompassed the creation of budgets, tracking of inventory items, generation of employee payrolls, and the incorporation of a learning platform to educate users on how to utilize the software effectively. These enhancements were aimed at providing a comprehensive and versatile solution that caters to various financial needs and ensures seamless management of financial processes within the software.
          </p>
        </div>
        <div className="flex justify-center w-full">
          <Image src="https://d1u4arv5y5eda6.cloudfront.net/images/project/Image+2.png" alt="" width={1000} height={1000} />
        </div>
      </div>
    </>
  );
};

export default Index;
