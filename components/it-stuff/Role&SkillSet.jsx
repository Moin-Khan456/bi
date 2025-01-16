import React from "react";

const RolesSkillSets = ({ roles }) => {
  return (
    <div className="container mx-auto p-6 lg:p-10 space-y-8">
      <h2 className="text-2xl lg:text-3xl font-bold mb-6">
        {roles.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {roles.content.map((role, index) => (
          <div
            key={index}
            className="w-full h-[228px] p-4 bg-secondaryBg shadow-md hover:shadow-lg transition-shadow duration-200 border-2 border-primaryTx"
          >
            <h3 className="text-xl Gilroy-Bold mb-2 text-start">{role.title}</h3>
            <p className="text-secondaryTx Gilroy-SemiBold text-sm text-start">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RolesSkillSets;
