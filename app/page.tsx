import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Link from "next/link";

export default function Home() {
  const teamMembers = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <Header />
      <main className="w-[80%] min-w-[320px] max-w-[1200px] mx-auto font-sans">
        <section className="p-50 border-2 text-center mb-40">
          <h1 className="text-6xl font-black">Ten Minds, One Mission</h1>
          <h2 className="text-3xl text-gray-500">
            to Create Solutions that Work!
          </h2>
        </section>

        <section className="border-2 pt-10 mb-40" id="about">
          <h2 className="text-center text-4xl font-bold">About Us!</h2>
          <div className="grid grid-cols-2 text-center py-10 mb-20">
            <div className="ml-30 mr-10 border-1 p-10 pt-10 rounded-4xl hover:shadow-2xl duration-200">
              <h3 className="text-3xl font-semibold mb-5">Mission</h3>
              <p className="text-justify text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                aperiam necessitatibus, corrupti ut dolores pariatur
                perspiciatis corporis minus ipsa mollitia quidem deleniti
                consequuntur laborum est aliquid iste inventore quaerat
                delectus.
              </p>
            </div>
            <div className=" mr-30 ml-10 border-1 p-10 rounded-4xl hover:shadow-2xl duration-200">
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
                <ProfileCard key={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
