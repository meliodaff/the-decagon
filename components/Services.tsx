const Services = () => {
  return (
    <section className="mb-40 " id="services">
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
        <h2 className="text-center text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-2 gap-y-10">
          <div className="card bg-base-100 w-140 shadow-sm rounded-2xl hover:shadow-2xl duration-200 group">
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="card-actions z-10 flex justify-end gap-x-1 mt-3 text-white absolute left-3">
                <div className="rounded-4xl py-.5 px-2 bg-cyan-300">
                  Management
                </div>
                <div className="rounded-4xl py-.5 px-2 bg-cyan-300">
                  Legal Tech
                </div>
              </div>
              <figure>
                <img
                  src="F&MLawFirm.png"
                  alt="Shoes"
                  className="rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                />
              </figure>
            </div>
            <div className="card-body p-5">
              <h2 className="card-title text-2xl font-semibold mb-2">
                F&M Law Firm Management System
              </h2>
              <p className="text-justify text-gray-500">
                A Web-Based Application that helps law firms manage their cases,
                clients, and documents efficiently. It offers features such as
                case tracking, client management, document storage, and billing.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 w-140 shadow-sm rounded-2xl hover:shadow-2xl duration-200 group">
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="card-actions flex justify-end gap-x-1 mt-3 text-white absolute left-3 z-10">
                <div className="rounded-4xl py-.5 px-2 bg-cyan-300">
                  Management
                </div>
                <div className="rounded-4xl py-.5 px-2 bg-cyan-300">
                  Human Resources
                </div>
              </div>
              <figure>
                <img
                  src="FurEver.png"
                  alt="Shoes"
                  className="rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                />
              </figure>
            </div>
            <div className="card-body p-5">
              <h2 className="card-title text-2xl font-semibold mb-2">
                FurEver HR Information System
              </h2>
              <p className="text-justify text-gray-500">
                A Web-Based Application that streamlines HR processes such as
                employee onboarding, attendance tracking, performance
                management, and payroll. It provides a centralized platform for
                HR professionals to manage employee data and improve
                productivity.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-140 shadow-sm rounded-2xl hover:shadow-2xl duration-200 group">
            <div className="relative overflow-hidden rounded-t-2xl">
              <div className="card-actions flex justify-end gap-x-1 mt-3 text-white absolute left-3 z-10">
                <div className="rounded-4xl py-.5 px-2 bg-cyan-300">
                  Management
                </div>
                <div className="rounded-4xl py-.5 px-2 bg-cyan-300">
                  Human Resources
                </div>
              </div>
              <figure>
                <img
                  src="FurEver.png"
                  alt="Shoes"
                  className="rounded-t-2xl transition-transform duration-300 group-hover:scale-110"
                />
              </figure>
            </div>
            <div className="card-body p-5">
              <h2 className="card-title text-2xl font-semibold mb-2">
                FurEver HR Information System
              </h2>
              <p className="text-justify text-gray-500">
                A Web-Based Application that streamlines HR processes such as
                employee onboarding, attendance tracking, performance
                management, and payroll. It provides a centralized platform for
                HR professionals to manage employee data and improve
                productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
