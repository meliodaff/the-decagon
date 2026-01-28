import React from "react";
import Image from "next/image";
interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  socials?: {
    linkedin?: string;
    github?: string;
    facebook?: string;
  };
}

const ProfileCard = (props: Member) => {
  return (
    <div className="group border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-fuchsia-500 duration-200 rounded-2xl pt-5 px-3 flex flex-col items-center h-100">
      <img
        src={`/${props.imageUrl}`}
        alt={props.name}
        className="group-hover:border-fuchsia-500 border-2 border-gray-200 transition-transform duration-200 rounded-full w-30 h-30 object-cover mb-2 shadow-sm"
        width={30}
        height={30}
      />

      <h3 className="text-l font-bold">{props.name}</h3>
      <h4 className="text-gray-700 text-sm font-semibold leading-2 mb-3">
        {props.role}
      </h4>
      <p className="text-gray-500 text-center">{props.description}</p>
    </div>
  );
};

export default ProfileCard;
