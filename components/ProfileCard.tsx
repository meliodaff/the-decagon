import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="w-[230] group border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-fuchsia-500 duration-200 rounded-2xl pt-5 px-5 pb-2 flex flex-col items-center h-110">
      <img
        src={`/${props.imageUrl}`}
        alt={props.name}
        className="group-hover:border-fuchsia-500 border-2 border-gray-200 transition-transform duration-200 rounded-full w-30 h-30 object-cover mb-2 shadow-sm"
        width={30}
        height={30}
      />

      <h3 className="text-l font-bold">{props.name}</h3>
      <h4 className="text-gray-700 text-sm font-semibold leading-2 mb-4">
        {props.role}
      </h4>
      <p className="text-gray-500 text-center">{props.description}</p>
      <div className="flex gap-2 mt-auto">
        {props.socials?.linkedin && (
          <Link href={props.socials.linkedin} target="_blank">
            <Image
              src="/linkedin-brands-solid-full.svg"
              alt={""}
              width={30}
              height={30}
            />
          </Link>
        )}
        {props.socials?.github && (
          <Link href={props.socials.github} target="_blank">
            <Image
              src="/github-brands-solid-full.svg"
              alt={""}
              width={30}
              height={30}
            />
          </Link>
        )}
        {props.socials?.facebook && (
          <Link href={props.socials.facebook} target="_blank">
            <Image
              src="/facebook-brands-solid-full.svg"
              alt={""}
              width={30}
              height={30}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
