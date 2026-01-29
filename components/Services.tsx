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
    <section className="mb-20" id="services">
      <div className="core-services mb-20">
        <h2 className="text-center text-4xl font-bold mb-10">Our Services</h2>
        <div className="flex gap-x-7 justify-around">
          <div className="shadow-sm hover:shadow-2xl duration-200 px-8 py-5 rounded-2xl">
            <h3 className="text-center font-semibold text-2xl mb-5">
              Web Development 💻
            </h3>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              tempore itaque omnis sunt numquam odit est reiciendis dignissimos
              ipsa rerum! Corrupti culpa ipsam quod consequatur nostrum itaque
              quidem fuga sunt!
            </p>
          </div>
          <div className="shadow-sm hover:shadow-2xl duration-200 px-8 py-5 rounded-2xl">
            <h3 className="text-center font-semibold text-2xl mb-5">
              Mobile Development 📱
            </h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Excepturi eum, porro maiores non dolore tempore amet. Temporibus
              fugiat fugit qui, repudiandae sit veritatis quod ex dignissimos ut
              nesciunt et est.
            </p>
          </div>
          <div className="shadow-sm hover:shadow-2xl duration-200 px-8 py-5 rounded-2xl">
            <h3 className="text-center font-semibold text-2xl mb-5">
              Iot Solutions 🤖
            </h3>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              sed est neque. Molestias, voluptate deserunt. Architecto magnam
              vero porro, beatae autem et sapiente numquam quam, reiciendis
              suscipit quo unde error?
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center text-3xl font-bold mb-10">Projects</h3>
        <div className="grid grid-cols-2 gap-y-10">
          {projects.length > 0
            ? projects.map((project) => (
                <div
                  key={project.id}
                  className="card bg-base-100 w-140 shadow-sm rounded-2xl hover:shadow-2xl duration-200 group"
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <div className="card-actions z-10 flex justify-end gap-x-1 mt-3 text-white absolute right-3">
                      {project.categories.map((category, index) => (
                        <div
                          key={index}
                          className="rounded-4xl py-.5 px-2  text-white bg-violet-500/80 shadow-lg backdrop-blur-xl border border-white/20"
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                    <figure>
                      <Image
                        src={project.imageURL}
                        alt="Shoes"
                        className="rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                        width={600}
                        height={600}
                      />
                    </figure>
                  </div>
                  <div className="card-body p-5">
                    <h2 className="card-title text-2xl font-semibold mb-2">
                      {project.title}
                    </h2>
                    <p className="text-justify text-gray-500">
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
