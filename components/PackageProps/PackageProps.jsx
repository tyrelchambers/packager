import React from "react";

const PackageProps = ({ pkg, clickHandler }) => {
  return (
    <div
      className="bg-white p-2 px-3 rounded-md shadow-md my-2 border-2 cursor-pointer hover:border-green-400 transition-all"
      onClick={() => clickHandler(pkg)}
    >
      <p className="text-sm text-gray-700">{pkg.label}</p>
    </div>
  );
};

export default PackageProps;
