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
      name: "Ren Tentia",
      role: "Technical Writer",
      description:
        "Currently building a strong foundation in technical writing and UI/UX design focusing on clear documentation, user-centered interfaces.",
      imageUrl: "Placeholder.png",
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
      imageUrl: "AlyssaCasan.png",
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
        facebook: "#",
        github: "#",
        linkedin: "#",
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
      role: "DevOps Engineer",
      description: "Optimizing deployment and infrastructure.",
      imageUrl: "StanielBautista.png",
    },
    {
      id: 9,
      name: "Raphael Ocampo",
      role: "Data Analyst",
      description: "Turning data into actionable insights.",
      imageUrl: "RaphaelOcampo.png",
    },
    {
      id: 10,
      name: "Michael Macapagal",
      role: "UX Researcher",
      description: "Understanding user needs and behaviors.",
      imageUrl: "MichaelMacapagal.png",
    },
  ];
  return (
    <div>
      <Header />
      <main className="w-[80%] min-w-[320px] max-w-[1200px] mx-auto font-sans">
        <section className="p-4 md:p-12 text-center mb-20 md:mb-60 my-60 mb-100 md:mb-50 md:mt-40">
          <h1 className="text-4xl md:text-6xl font-black bg-linear-to-r from-cyan-500 to-fuchsia-500 text-transparent bg-clip-text mb-4">
            Ten Minds, One Mission
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-500">
            to Create Solutions that Work!
          </h2>
        </section>

        {/*  */}
        <section className="mb-20 md:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-15">
            <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left my-auto mx-auto">
              What is Decagon?
            </h2>
            <p className="text-gray-500 text-justify shadow-sm hover:shadow-lg duration-200 rounded-2xl p-6 md:p-10">
              Decagon is a tech startup dedicated to transforming how businesses
              handle their daily operations. We specialize in creating
              intelligent solutions that optimize workflows, automate repetitive
              tasks, and eliminate operational bottlenecks that slow your
              business down. Our platform combines cutting-edge technology with
              deep business insights to deliver systems that don't just
              work—they evolve with your needs. Whether you're managing complex
              projects, coordinating teams, or streamlining processes, Decagon
              provides the tools and expertise to help you work smarter, faster,
              and more efficiently. We're not just a software provider—we're
              your partner in building a more productive, reliable, and scalable
              business operation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
            <ul className="shadow-sm hover:shadow-lg duration-200 rounded-2xl p-6 md:p-10 order-2 md:order-1">
              <li className="mb-5">
                <h3 className="text-lg mb-1">
                  1. Solutions That Actually Work
                </h3>
                <p className="pl-5 text-gray-500 text-sm md:text-base">
                  We don't believe in theoretical fixes. Every solution we
                  create is tested, proven, and built for real-world
                  application. Our track record speaks for itself—businesses
                  that partner with Decagon see measurable improvements in
                  efficiency and productivity.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="text-lg mb-1">2. Built for Your Business</h3>
                <p className="pl-5 text-gray-500 text-sm md:text-base">
                  No two businesses are the same, so why should their solutions
                  be? We take the time to understand your unique challenges,
                  workflows, and goals. Our tailored approach ensures that what
                  we build fits seamlessly into your operations.
                </p>
              </li>
              <li className="mb-5">
                <h3 className="text-lg mb-1">3. Continuous Optimization</h3>
                <p className="pl-5 text-gray-500 text-sm md:text-base">
                  Business needs change, and your systems should too. Decagon
                  solutions are designed to adapt and scale as you grow. We
                  don't just set you up and walk away—we're committed to your
                  ongoing success.
                </p>
              </li>
            </ul>
            <h2 className="text-2xl md:text-3xl font-bold text-center my-auto order-1 md:order-2">
              Why choose Decagon?
            </h2>
          </div>
        </section>

        {/*  */}
        <Services />
        <section className="pt-10 mb-20 md:mb-40" id="about">
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            About Us!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center py-10 mb-20">
            <div className="shadow-sm p-6 md:p-10 rounded-4xl hover:shadow-2xl duration-200">
              <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                Mission
              </h3>
              <p className="text-justify text-gray-500 text-sm md:text-base">
                To empower businesses by providing innovative, reliable, and
                efficient tech solutions that streamline operations and enhance
                productivity
              </p>
            </div>
            <div className="shadow-sm p-6 md:p-10 rounded-4xl hover:shadow-2xl duration-200">
              <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                Vision
              </h3>
              <p className="text-justify text-gray-500 text-sm md:text-base">
                To be a global leader in providing innovative tech solutions
                that empower businesses to achieve operational excellence and
                sustainable growth
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-center text-3xl md:text-3xl font-bold mb-10">
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
