import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="flex items-center justify-center bg-gray-500 px-[95px] py-8">
      <div className="w-[500px]">
        <div className="flex items-center justify-center gap-x-5 ">
          <FaFacebook className="text-[20px] cursor-pointer" />

          <FaInstagram className="text-[20px] cursor-pointer" />

          <FaYoutube className="text-[20px] cursor-pointer" />

          <FaXTwitter className="text-[20px] cursor-pointer" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-x-12 text-lg font-bold text-gray-800 my-5 cursor-pointer">
          <h1>Condition of Use</h1>
          <h1>Privacy & Policy</h1>
          <h1>Press Room</h1>
        </div>

          <h1 className="text-lg text-red-800 text-center font-bold">&#9400; 2023 MovieBox by Dami100</h1>
      </div>
    </section>
  );
}
