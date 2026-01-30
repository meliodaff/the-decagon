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
    <div className="w-full group border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-fuchsia-500 duration-200 rounded-2xl pt-5 px-5 pb-2 flex flex-col items-center min-h-[300px] sm:min-h-[420px] md:min-h-[450px]">
      <Image
        src={`/${props.imageUrl}`}
        alt={props.name}
        className="group-hover:border-fuchsia-500 border-2 border-gray-200 transition-transform duration-200 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 object-cover mb-2 shadow-sm"
        width={120}
        height={120}
      />

      <h3 className="sm:text-md font-bold text-center">{props.name}</h3>
      <h4 className="text-gray-700 text-xs sm:text-sm font-semibold leading-2 mb-3 text-center">
        {props.role}
      </h4>
      <p className="text-gray-500 text-center text-xs sm:text-sm flex-grow">
        {props.description}
      </p>
      <div className="flex gap-2 mt-auto pt-3">
        {props.socials?.linkedin && (
          <Link href={props.socials.linkedin} target="_blank">
            <Image
              src="/linkedin-brands-solid-full.svg"
              alt={""}
              width={24}
              height={24}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </Link>
        )}
        {props.socials?.github && (
          <Link href={props.socials.github} target="_blank">
            <Image
              src="/github-brands-solid-full.svg"
              alt={""}
              width={24}
              height={24}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </Link>
        )}
        {props.socials?.facebook && (
          <Link href={props.socials.facebook} target="_blank">
            <Image
              src="/facebook-brands-solid-full.svg"
              alt={""}
              width={24}
              height={24}
              className="w-6 h-6 sm:w-7 sm:h-7"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
