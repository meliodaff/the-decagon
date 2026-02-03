import Footer from "@/components/Footer";
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
        "Helping businesses identify pain points, solve them and achieve their goals through innovative tech solutions. Passionate about coding, problem-solving, and a life long learner.",
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
        "A project manager with strong communication and leadership skills, responsible for coordinating team efforts and ensuring projects stay on track.",
      imageUrl: "KurtLonganilla1.png",
      socials: {
        facebook: "https://www.facebook.com/kurt.longanilla",
      },
    },
    {
      id: 3,
      name: "Russell Calinawan",
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
      name: "Ren Tentia",
      role: "Technical Writer",
      description:
        "Currently building a strong foundation in technical writing and UI/UX design focusing on clear documentation, user-centered interfaces.",
      imageUrl: "RenTentia.png",
      socials: {
        github: "https://github.com/RenLeeMay",
        facebook: "https://www.facebook.com/renlee.tentia.3",
      },
    },
    {
      id: 5,
      name: "Alyssa Casan",
      role: "Systems Analyst",
      description:
        "Detail-oriented analyst focused on undestanding user needs and system processes. Skilled in documentation and workflow analysis",
      imageUrl: "AlyssaCasan1.png",
      socials: {
        github: "https://github.com/alysrc",
        facebook: "https://www.facebook.com/aly.rcsn",
      },
    },
    {
      id: 6,
      name: "Lawrence Bermudo",
      role: "UI/UX Designer",
      description:
        "A UI/UX designer skilled in Figma, with a passion for user-centered design and clean interface solutions. Motivated to learn, grow, and contribute to meaningful digital experiences.",
      imageUrl: "LawrenceBermudo.png",
      socials: {
        facebook: "https://www.facebook.com/rnc.eeee",
      },
    },
    {
      id: 7,
      name: "Marian Basmayor",
      role: "QA Engineer",
      description:
        "Currently building my foundation in Software Quality Assurance.  Learning: Test Cases, Documentation, and the basics of Automation.",
      imageUrl: "MarianBasmayor.png",
      socials: {
        github: "https://github.com/vinamirara",
        linkedin:
          "https://www.linkedin.com/in/basmayor-marian-victoria-m-b680a5310/",
        facebook: "https://www.facebook.com/alloy.wrench1",
      },
    },
    {
      id: 8,
      name: "Staniel Bautista",
      role: "UI/UX Designer",
      description:
        "As a UI/UX Designer and Researcher, I use rigorous inquiry to drive creative execution. I specialize in turning complex user behavior into seamless, high-fidelity interfaces that solve problems and delight users.",
      imageUrl: "StanielBautista.png",
      socials: {
        facebook: "https://www.facebook.com/staniel.bautista11",
      },
    },
    {
      id: 9,
      name: "Raphael Ocampo",
      role: "Full Stack Developer",
      description:
        "Experienced in building responsive frontend interfaces and functional backend systems, integrating APIs and databases, and contributing to feature development and maintenance while continuously improving development skills.",
      imageUrl: "RaphaelOcampo.png",
      socials: {
        facebook: "https://www.facebook.com/r.aphyraen",
      },
    },
    {
      id: 10,
      name: "Michael Macapagal",
      role: "FrontEnd Engineer",
      description:
        "Frontend Engineer focused on building scalable, performant, and accessible web applications. I bridge the gap between design and engineering, utilizing a modern tech stack to deliver seamless UI/UX across all devices.",
      imageUrl: "MichaelMacapagal.jpg",
      socials: {
        facebook: "https://www.facebook.com/menen08",
      },
    },
  ];
  return (
    <div>
      <Header />
      <main className=" mx-auto font-sans">
        <section className="w-[80%] min-w-[320px] max-w-[1200px] mx-auto p-4 md:p-12 text-center mb-60 mt-40 my-60 md:mb-72 md:mt-30">
          <h1 className="drop-shadow-2xl text-6xl md:text-8xl font-black bg-linear-to-b sm:bg-linear-to-r from-cyan-500 to-fuchsia-500 text-transparent bg-clip-text mb-4">
            Ten Minds, One Mission
          </h1>
          <h2 className="text-shadow-lg text-xl md:text-4xl text-gray-500">
            to Create Solutions that Work!
          </h2>
        </section>

        {/*  */}
        <div className="text-white pt-20">
          <section className="mb-20 md:mb-20 bg w-[80%] min-w-[320px] max-w-[1200px] mx-auto pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-30 md:mb-15">
              <h2 className="text-[#353935] text-2xl md:text-3xl font-bold text-center md:text-left my-auto mx-auto fade-in">
                What is Decagon?
                <div className="bg-[#8A2BE2] mt-5 h-2"></div>
              </h2>

              <p className="bg-linear-to-tl from-violet-800 fade-in to-fuchsia-400 text-lg text-white text-justify shadow-2xl rounded-2xl p-6 md:p-10">
                Decagon is a tech startup dedicated to transforming how
                businesses handle their daily operations. We specialize in
                creating intelligent solutions that optimize workflows, automate
                repetitive tasks, and eliminate operational bottlenecks that
                slow your business down. Our platform combines cutting-edge
                technology with deep business insights to deliver systems that
                don't just work—they evolve with your needs. Whether you're
                managing complex projects, coordinating teams, or streamlining
                processes, Decagon provides the tools and expertise to help you
                work smarter, faster, and more efficiently. We're not just a
                software provider—we're your partner in building a more
                productive, reliable, and scalable business operation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
              <ul className="bg-linear-to-tr from-violet-800 to-fuchsia-400 fade-in rounded-2xl p-6 md:p-10 order-2 md:order-1 shadow-2xl ">
                <li className="mb-5">
                  <h3 className="text-xl mb-1 text-[#FAEB92] font-semibold ">
                    1. Solutions That Actually Work
                  </h3>
                  <p className="text-lg pl-5 text-white">
                    We don't believe in theoretical fixes. Every solution we
                    create is tested, proven, and built for real-world
                    application. Our track record speaks for itself—businesses
                    that partner with Decagon see measurable improvements in
                    efficiency and productivity.
                  </p>
                </li>
                <li className="mb-5">
                  <h3 className="text-xl mb-1 font-semibold text-[#FAEB92]">
                    2. Built for Your Business
                  </h3>
                  <p className="text-lg pl-5 text-white">
                    No two businesses are the same, so why should their
                    solutions be? We take the time to understand your unique
                    challenges, workflows, and goals. Our tailored approach
                    ensures that what we build fits seamlessly into your
                    operations.
                  </p>
                </li>
                <li className="mb-5">
                  <h3 className="text-xl mb-1 font-semibold text-[#FAEB92]">
                    3. Continuous Optimization
                  </h3>
                  <p className="text-lg pl-5 text-white">
                    Business needs change, and your systems should too. Decagon
                    solutions are designed to adapt and scale as you grow. We
                    don't just set you up and walk away—we're committed to your
                    ongoing success.
                  </p>
                </li>
              </ul>
              <h2 className="text-[#353935] mx-auto items-cente fade-in text-2xl md:text-3xl font-bold text-center my-auto order-1 md:order-2">
                Why choose Decagon?
                <div className="bg-[#8A2BE2] mt-5 h-2"></div>
              </h2>
            </div>
          </section>
        </div>

        {/*  */}
        <Services />

        <div className="text-white py-20 mb-20">
          <section className="w-[80%] min-w-[320px] max-w-[1200px] mx-auto">
            <h2 className="text-[#353935] text-center text-3xl md:text-4xl font-bold fade-in">
              About Us!
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center pt-10">
              <div className="bg-linear-to-tl from-violet-800 to-fuchsia-400 fade-in p-6 md:p-10 rounded-4xl shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                  Mission
                </h3>
                <p className="text-justify text-sm md:text-base">
                  To empower businesses by providing innovative, reliable, and
                  efficient tech solutions that streamline operations and
                  enhance productivity
                </p>
              </div>
              <div className="bg-linear-to-br from-violet-800 to-fuchsia-400 fade-in p-6 md:p-10 rounded-4xl shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                  Vision
                </h3>
                <p className="text-justify text-sm md:text-base">
                  To be a global leader in providing innovative tech solutions
                  that empower businesses to achieve operational excellence and
                  sustainable growth
                </p>
              </div>
            </div>
          </section>
        </div>
        <section
          className="pt-10 mb-20 md:mb-40 w-[80%] min-w-[320px] max-w-[1200px] mx-auto"
          id="about"
        >
          <div className="">
            <h2 className="text-[#353935] text-center text-3xl md:text-3xl font-bold mb-10">
              Meet the Team!
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-10">
              {teamMembers.map((member, index) => (
                <ProfileCard key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
