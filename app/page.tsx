import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Services from "@/components/Services";
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
export default function Home() {
  const teamMembers: Member[] = [
    {
      id: 1,
      name: "Jv Bialen",
      role: "CEO & Tech Lead",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "JvBialen.png",
      socials: {
        linkedin: "https://www.linkedin.com/in/jv-bialen-905b8a32b/",
        github: "https://github.com/meliodaff",
        facebook: "https://www.facebook.com/Jbialen23",
      },
    },
    {
      id: 2,
      name: "Kurt Longanilla",
      role: "Project Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "KurtLonganilla.png",
    },
    {
      id: 3,
      name: "Russel Calinawan",
      role: "Developer",
      description:
        "Passionate about coding and building hardware and IoT projects. Skilled at turning user needs into functional systems and optimizing workflows for efficiency",
      imageUrl: "RusselCalinawan.png",
      socials: {
        github: "https://github.com/CalinawanRussell",
        facebook: "https://www.facebook.com/russell.calinawan.09",
      },
    },
    {
      id: 4,
      name: "Alyssa Casan",
      role: "Systems Analyst",
      description:
        "Detail-oriented analyst focused on undestanding user needs and system processes. Skilled in documentation and workflow analysis",
      imageUrl: "Placeholder.png",
      socials: {
        github: "https://github.com/alysrc",
      },
    },
    {
      id: 5,
      name: "Ren Tentia",
      role: "Technical Writer",
      description:
        "Currently building a strong foundation in technical writing and UI/UX design focusing on clear documentation, user-centered interfaces.",
      imageUrl: "Placeholder.png",
      socials: {
        github: "https://github.com/RenLeeMay",
      },
    },
    {
      id: 6,
      name: "Lawrence Bermudo",
      role: "UI/UX Designer",
      description:
        "A UI/UX designer skilled in Figma, with a passion for user-centered design and clean interface solutions. Motivated to learn, grow, and contribute to meaningful digital experiences.",
      imageUrl: "LawrenceBermudo.png",
    },
    {
      id: 7,
      name: "Team Member",
      role: "QA Engineer",
      description: "Ensuring quality through comprehensive testing.",
      imageUrl: "Placeholder.png",
    },
    {
      id: 8,
      name: "Team Member",
      role: "DevOps Engineer",
      description: "Optimizing deployment and infrastructure.",
      imageUrl: "Placeholder.png",
    },
    {
      id: 9,
      name: "Team Member",
      role: "Data Analyst",
      description: "Turning data into actionable insights.",
      imageUrl: "Placeholder.png",
    },
    {
      id: 10,
      name: "Team Member",
      role: "UX Researcher",
      description: "Understanding user needs and behaviors.",
      imageUrl: "Placeholder.png",
    },
  ];
  return (
    <div>
      <Header />
      <main className="w-[80%] min-w-[320px] max-w-[1200px] mx-auto font-sans">
        <section className="p-50 text-center mb-40">
          <h1 className="text-6xl font-black bg-linear-to-r from-cyan-500 to-fuchsia-500 text-transparent bg-clip-text">
            Ten Minds, One Mission
          </h1>
          <h2 className="text-3xl text-gray-500">
            to Create Solutions that Work!
          </h2>
        </section>
        <Services />
        <section className="pt-10 mb-40" id="about">
          <h2 className="text-center text-4xl font-bold">About Us!</h2>
          <div className="grid grid-cols-2 text-center py-10 mb-20">
            <div className="ml-30 mr-10 shadow-sm p-10 pt-10 rounded-4xl hover:shadow-2xl duration-200">
              <h3 className="text-3xl font-semibold mb-5">Mission</h3>
              <p className="text-justify text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                aperiam necessitatibus, corrupti ut dolores pariatur
                perspiciatis corporis minus ipsa mollitia quidem deleniti
                consequuntur laborum est aliquid iste inventore quaerat
                delectus.
              </p>
            </div>
            <div className=" mr-30 ml-10 shadow-sm p-10 rounded-4xl hover:shadow-2xl duration-200">
              <h3 className="text-3xl font-semibold mb-5">Vision</h3>
              <p className="text-justify text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                voluptatum modi fugiat sint, dolore delectus cum quibusdam
                facilis aspernatur debitis veniam quisquam expedita possimus
                magni officiis vitae tempore quas! Ipsa.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-center text-4xl font-bold mb-10">
              Meet the Team!
            </h2>
            <div className="grid grid-cols-5 gap-10">
              {teamMembers.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
