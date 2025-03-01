import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
const HeroSection = ({ title, paragraph, button, url }) => {
  const buttonVariant = {
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 300 } },
  };
  const router = useRouter();
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const handleNavigate = () => {
    router.push(`${url}`);
  };
  const backgroundVariant = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/HeroSectionVideo.mp4"
        autoPlay
        loop
        muted
      />

      {/* Centered Content */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl uppercase font-bold mb-4">{title}</h1>
        <h2 className="text-2xl uppercase md:text-[34px] text-white  font-medium mb-6">
          {paragraph}
        </h2>
        <motion.button
          className="mt-5 px-6 py-3 bg-transparent  font-bold uppercase  shadow-lg border-white border text-white "
          variants={buttonVariant}
          whileHover="hover"
          onClick={handleNavigate}
        >
          {button}
        </motion.button>
        {/* <Link
          href={"/shop"}
          className=" w-auto px-6 flex items-center border text-sm  justify-center gap-4  py-3 text-white    font-medium underline transition"
        >
          {button} <FaArrowDown className=" underline " />
        </Link> */}
      </div>
    </div>
  );
};

export default HeroSection;
