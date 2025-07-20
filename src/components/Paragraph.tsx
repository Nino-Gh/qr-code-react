import { paragraph } from "../data";

const Paragraph = () => {
  //I use tailwind here as well
  return <p className="text-center text-[#7B879D] text-[15px] font-[400] font-sans mr-[12px] ml-[12px]">{paragraph}</p>
};

export default Paragraph;