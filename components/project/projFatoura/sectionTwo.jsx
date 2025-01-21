import React from "react";
const Index = () => {
  return (
    <div className="py-8 relative flex flex-col justify-center bg-primaryBg">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl text-center font-bold text-secondaryTx">
          OVERVIEW
        </h3>
        <div className="px-2 lg:px-48 py-4">
          <p className="font-bold text-secondaryTx py-4 text-center leading-5 lg:leading-[3rem] text-sm lg:text-2xl opacity-50">
            Fatoura is a comprehensive project designed to cater to the needs of
            freelancers and small to mid-size business owners, offering a wide
            range of invoicing and payment tools to enhance their business
            operations. The primary focus of the project is on accurate and
            secure invoicing, ensuring that users can easily create professional
            and elegant estimates and invoices in both Arabic and English
            languages. These invoices can be customized to support any currency,
            enabling seamless transactions with clients worldwide. The platform
            also facilitates the efficient delivery of invoices to clients,
            streamlining the billing process. One of the standout features of
            Fatoura is its capability to enable instant online invoice payments.
            Users can receive payments from their clients using PayPal, allowing
            for quick and hassle-free transactions. Moreover, the platform
            supports partial payments, providing flexibility to both users and
            clients. To ensure the accessibility and reliability of the
            platform, Fatoura leverages the power of AWS cloud hosting. This
            enables users to access their data securely from anywhere in the
            world. The hosting environment is fast, robust, and highly
            dependable, contributing to a seamless user experience. Overall,
            Fatoura empowers freelancers and business owners with a suite of
            invoicing and payment tools, helping them streamline their
            operations, improve financial transactions, and enhance their
            business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
