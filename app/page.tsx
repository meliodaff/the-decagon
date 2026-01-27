import Image from "next/image";
import TextType from "@/components/TextType";
import GradientText from "@/components/GradientText";
import Services from "@/components/Services";
import About from "@/components/About";
export default function Home() {
  return (
    <>
      <section className="p-50 mb-40">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-6xl font-black black mb-3">
            {/* <TextType
              text={["DECODING THE GRAVITY", "KAYA BA NG OLD GADZ"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            /> */}
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              Ten Minds, One Mission
            </GradientText>
          </h1>
          <h1 className="text-4xl font-bold">
            {/* <TextType
              text={["Uncovering Discoveries", "Sumabay sa Current"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="|"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            /> */}
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className="custom-class"
            >
              Building solutions that work!
            </GradientText>
          </h1>
        </div>
      </section>
      <Services />
      <About />
    </>
  );
}
