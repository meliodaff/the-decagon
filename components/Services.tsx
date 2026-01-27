import Image from "next/image";

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
}

const Services = () => {
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: "FM Law Firm",
      description:
        "A comprehensive legal services platform with client management, case tracking, and document management systems.",
      image: "/FMLawFirm.png",
      category: "Legal Tech",
      technologies: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "TailwindCSS",
      ],
    },
    {
      id: 2,
      title: "FurEver Clinic",
      description:
        "Centralized platform for managing employee data, payroll, benefits, attendance, performance reviews, and recruitment processes to streamline HR operations and workforce administration.",
      image: "/FurEverClinic.png",
      category: "Information System",
      technologies: ["React", "PHP", "PostgreSQL", "Express.js", "TailwindCSS"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-4">
          Our Services & Projects
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover our portfolio of innovative solutions and services that drive
          business growth and digital transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 overflow-hidden border border-gray-600 hover:border-purple-400"
          >
            {/* Card Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-sm font-medium bg-purple-600 text-white rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Additional Services Section */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-white mb-8">
          Our Core Services
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "🚀",
              title: "Web Development",
              description:
                "Modern, responsive web applications built with cutting-edge technologies",
            },
            {
              icon: "📱",
              title: "Mobile Apps",
              description:
                "Native and cross-platform mobile applications for iOS and Android",
            },
            {
              icon: "🔌",
              title: "IoT Solutions",
              description:
                "Connecting physical devices to the internet to collect data, automate processes, and enable smart monitoring and control systems across homes, industries, and cities.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-600 hover:border-purple-400 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h4>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;