import React from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";
import MinimalProfileCard from "@/components/MinimalProfileCard";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Jv Bialen",
      role: "Fullstack Developer",
      bio: "Passionate about creating seamless user experiences and robust backend solutions.",
      image: "/Jv%20Bialen.png",
      skills: ["React", "Node.js", "TypeScript", "Python"],
      social: {
        linkedin: "https://linkedin.com/in/jv-bialen",
        github: "https://github.com/jv-bialen",
        twitter: "https://twitter.com/jv-bialen",
        facebook: "https://facebook.com/jv.bialen",
      },
    },
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-6">
          About The Decagon
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          We are a passionate team of developers, designers, and innovators
          dedicated to crafting exceptional digital experiences that transform
          businesses and delight users.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        <SpotlightCard
          className="h-96 w-full"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="relative h-full w-full rounded-3xl bg-slate-900 p-20 pb-4 pt-20 flex items-center justify-center">
            <div className="relative z-20 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses through innovative technology solutions
                that drive growth, efficiency, and digital transformation in an
                ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="h-96 w-full"
          spotlightColor="rgba(139, 92, 246, 0.15)"
        >
          <div className="relative h-full w-full rounded-3xl bg-slate-900 p-20 pb-4 pt-20 flex items-center justify-center">
            <div className="relative z-20 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔮</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become the leading technology partner for businesses
                worldwide, known for our expertise, innovation, and commitment
                to delivering exceptional results.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>

      {/* Team Section */}
      <div>
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The talented individuals behind The Decagon, each bringing unique
            skills and passion to our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <MinimalProfileCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              skills={member.skills}
              social={member.social}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Us?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Let's bring your ideas to life with our expertise and passion for
            innovation.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
