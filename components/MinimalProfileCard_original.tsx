import React from "react";
import Image from "next/image";

interface MinimalProfileCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
  };
}

const MinimalProfileCard: React.FC<MinimalProfileCardProps> = ({
  name,
  role,
  bio,
  image,
  skills,
  social,
}) => {
  return (
    <div className="group bg-gray-800 rounded-xl border border-gray-600 p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:border-purple-400">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 overflow-hidden rounded-full border-2 border-gray-600 group-hover:border-purple-400 transition-colors duration-300">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors duration-300">
          {name}
        </h3>

        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-3">
          {role}
        </p>

        <p className="text-sm text-gray-300 mb-4 line-clamp-3">{bio}</p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded-md"
            >
              {skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-700 text-gray-200 rounded-md">
              +{skills.length - 3}
            </span>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-700 hover:bg-blue-900 transition-colors duration-300"
              aria-label={`${name}'s LinkedIn`}
            >
              <svg
                className="w-4 h-4 text-gray-300 hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
              aria-label={`${name}'s GitHub`}
            >
              <svg
                className="w-4 h-4 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-700 hover:bg-blue-900 transition-colors duration-300"
              aria-label={`${name}'s Twitter`}
            >
              <svg
                className="w-4 h-4 text-gray-300 hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          )}
          {social.facebook && (
            <a
              href={social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-700 hover:bg-blue-900 transition-colors duration-300"
              aria-label={`${name}'s Facebook`}
            >
              <svg
                className="w-4 h-4 text-gray-300 hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinimalProfileCard;
