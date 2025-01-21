import React from "react";
const Index = () => {
  return (
    <div className="container py-8 relative flex flex-col justify-center ">
      <h3 className="text-3xl lg:text-5xl text-center font-bold text-secondaryTx">
        Project <span className="text-primaryTx">Overview</span>
      </h3>
      <div className="px-2 lg:px-48 py-4">
        <p className="font-bold text-secondaryTx py-4 text-center leading-5 lg:leading-[3rem] text-sm lg:text-2xl opacity-60">
          Virifi.io serves as the foundational digital infrastructure supporting
          our strategic solutions across various business domains. With its
          robust technology, Virifi.io underpins a wide range of applications in
          FinTech, HR, EdTech, and eGovernment. Virifi is the utilization of a
          private and secure blockchain network. This network enables the
          storage, retrieval, and validation of critical data in a safe and
          tamper-proof manner. The secure exchange of information between Virifi
          and other entities is governed by channel-level security protocols and
          authentication mechanisms. It leverages a cloud-native Hyperledger
          platform. This cloud-based approach enhances scalability, flexibility,
          and accessibility, empowering the private Virifi Blockchain to deliver
          optimal performance and reliability. To ensure seamless integration,
          Virifi was designed with a focus on API development. The APIs were
          built as a primary component, allowing easy and controlled access to
          the Virifi platform through a fully managed API gateway. This gateway
          enables granular control over access and usage, providing users with
          minute-level management capabilities. It offers robust identity
          verification capabilities and supports e-KYC (electronic Know Your
          Customer) processes.
        </p>
      </div>
    </div>
  );
};

export default Index;
