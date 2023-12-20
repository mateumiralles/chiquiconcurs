import Image from "next/image";

type VidasProps = {
  vidas: number;
};

export default function Vidas({ vidas }: VidasProps) {
  return (
    <div className="absolute top-0 left-0 flex flex-row m-16 w-[200px] ">
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
