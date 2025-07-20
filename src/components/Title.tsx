import { title } from "../data";

const Title = () => {
  //I use tailwind here as well
  return <h1 className="font-sans text-[22px] font-[600] text-center text-[#1F3251] mb-[20px] mr-[12px] ml-[12px]">{title}</h1>
};

export default Title;