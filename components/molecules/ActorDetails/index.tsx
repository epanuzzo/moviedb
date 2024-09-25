import React from "react";

export type ActorDetailsProps = {
  name: string;
  role: string;
};

const ActorDetails: React.FC<ActorDetailsProps> = ({ name, role }) => {
  return (
    <div key={name} className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
        {name[0]}
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-400 text-sm">as {role}</p>
      </div>
    </div>
  );
};

export default ActorDetails;
