import Image from "next/image";

type VidasProps = {
  vidas: number;
};

export default function Vidas({ vidas }: VidasProps) {
  return (
    <div className="absolute left-0 top-0 m-16 flex w-[30%] flex-row justify-start ">
      {Array.from({ length: vidas }, (_, index) => (
        <Image
          className="mr-10"
          src="/heart.png"
          alt="heart"
          width={50}
          height={50}
          key={index}
        />
      ))}
    </div>
  );
}
