import { TextAnimate } from "./ui/text-animate";

export default function TextAnimation({ text }: { text: string }) {
  return (
    <TextAnimate
      animation="blurIn"
      as="h2"
      className="text-shadow-lg text-xl md:text-4xl text-gray-500"
      duration={1}
      once={true}
    >
      {text}
    </TextAnimate>
  );
}
