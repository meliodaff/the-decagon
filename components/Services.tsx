import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  categories: string[];
}

const Services = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "F&M Law Firm Management System",
      description:
        "A Web-Based Application that helps law firms manage their cases, clients, and documents efficiently. It offers features such as case tracking, client management, document storage, and billing.",
      imageURL: "/F&MLawFirm.png",
      categories: ["Management", "Legal Tech"],
    },
    {
      id: 2,
      title: "FurEver HR Information System",
      description:
        "A Web-Based Application that streamlines HR processes such as employee onboarding, attendance tracking and performance management. It provides a centralized platform for HR professionals to manage employee data and improve productivity.",
      imageURL: "/FurEverHR.png",
      categories: ["Management", "Human Resources"],
    },
    {
      id: 3,
      title: "FurEver Finance System",
      description:
        "A Web-Based Application that helps businesses manage their finances effectively. It includes features such as payroll, expense tracking, invoicing, and financial reporting to provide insights into the company's financial health.",
      imageURL: "/FurEverFinance.png",
      categories: ["Management", "Finance"],
    },
    {
      id: 4,
      title: "KodeGlass",
      description:
        "KodeGlass is a cybersecurity SaaS (Software as a Service) website that helps humans protect software source code from leaks, theft, and misuse while allowing developers to work safely and efficiently.",
      imageURL: "/KodeGlass.png",
      categories: ["CyberSecurity", "AI"],
    },
  ];

  return (
    <section
      className="mb-20 w-[80%] min-w-[320px] max-w-[1200px] mx-auto"
      id="services"
    >
      <div className="core-services mb-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
          <div className="shadow-sm hover:shadow-2xl duration-200 px-6 md:px-8 py-5 rounded-2xl">
            <h3 className="text-center font-semibold text-xl md:text-2xl mb-5">
              Web Development 💻
            </h3>
            <p className="text-justify text-sm md:text-base text-gray-500">
              We specialize in creating modern, responsive web applications
              using cutting-edge technologies. From frontend design to backend
              architecture, we build scalable solutions that deliver exceptional
              user experiences. Our expertise includes React, Next.js,
              TypeScript, and cloud deployment to ensure your web projects are
              robust and performant.
            </p>
          </div>
          <div className="shadow-sm hover:shadow-2xl duration-200 px-6 md:px-8 py-5 rounded-2xl">
            <h3 className="text-center font-semibold text-xl md:text-2xl mb-5">
              Mobile Development 📱
            </h3>
            <p className="text-justify text-sm md:text-base text-gray-500">
              Our team excels in building high-quality mobile applications for
              both iOS and Android platforms. We leverage frameworks like React
              Native and Flutter to create cross-platform apps that offer
              seamless performance and engaging user interfaces. Whether you
              need a simple app or a complex solution, we deliver mobile
              experiences that meet your business goals.
            </p>
          </div>
          <div className="shadow-sm hover:shadow-2xl duration-200 px-6 md:px-8 py-5 rounded-2xl">
            <h3 className="text-center font-semibold text-xl md:text-2xl mb-5">
              Iot Solutions 🤖
            </h3>
            <p className="text-justify text-sm md:text-base text-gray-500">
              We provide innovative IoT solutions that connect devices and
              enable smart functionalities. From sensor integration to data
              analytics, we design and implement IoT systems that enhance
              operational efficiency and user convenience
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.length > 0
            ? projects.map((project) => (
                <div
                  key={project.id}
                  className="card bg-base-100 w-full shadow-sm rounded-2xl hover:shadow-2xl duration-200 transition-shadow group"
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="card-actions z-10 flex justify-end gap-x-1 mt-3 text-white absolute right-3 flex-wrap">
                      {project.categories.map((category, index) => (
                        <div
                          key={index}
                          className="rounded-4xl py-0.5 px-2 text-xs md:text-sm text-white bg-violet-500/80 shadow-lg backdrop-blur-xl border border-white/20"
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                    <figure>
                      <Image
                        src={project.imageURL}
                        alt={project.title}
                        className="rounded-t-2xl transition-transform duration-300 group-hover:scale-110 w-full h-auto"
                        width={600}
                        height={400}
                      />
                    </figure>
                  </div>
                  <div className="card-body p-4 md:p-5">
                    <h2 className="card-title text-lg md:text-2xl font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-justify text-gray-500 text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))
            : "No projects yet"}
        </div>
      </div>
    </section>
  );
};

export default Services;
