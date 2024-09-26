import React from "react";

export type ActorDetailsProps = {
  name: string;
  role: string;
};

/**
 * Component to display actor details including their name and role.
 *
 * @component
 * @param {ActorDetailsProps} props - The properties for the component.
 * @param {string} props.name - The name of the actor.
 * @param {string} props.role - The role of the actor.
 * @returns {JSX.Element} A JSX element displaying the actor's initial, name, and role.
 */
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
