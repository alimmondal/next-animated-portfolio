import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col ">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2">
        <h1 className="">Crafting Digital Experience, Designing Tomorrow </h1>
        <p className="">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect
          commitment to excellence.
        </p>
        <div className="">
          <button className="">View My Work</button>
          <button className="">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
