import { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [inputField, setInputField] = useState("");
  const [navBg, setNavBg] = useState();
  const navigate = useNavigate();

  const changeNavbg = () => {
    if (window.scrollY >= 450) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  window.addEventListener("scroll", changeNavbg);

  const handleClick = () => {
    console.log('search icon clicked');
    if (inputField.trim() !== "") {
      navigate(`/searchresult/${inputField}`);
    }
  };

  const handleInputField = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 w-full" style={{ zIndex: 100 }}>
      <header
        className={
          navBg
            ? "bg-slate-950 transition-all duration-100 ease-in py-[22px] flex items-center justify-between h-[80px] w-full px-[30px] lg:px-[50px] xl:px-[95px]"
            : "bg-transparent py-[22px] flex items-center justify-between w-full h-[80px] px-[30px] lg:px-[50px] xl:px-[95px]"
        }
      >
        <Link to="/">
          <div className="flex gap-6 items-center">
            <img src={logo} alt="Moviebox-logo" className="w-[50px] h-[50px]" />
            <p className="font-bold text-white text-2xl hidden sm:block">
              MovieBox
            </p>
          </div>
        </Link>

        <div className="relative w-[60%] lg:w-[550px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-1.5 px-4 rounded-md border-2 bg-transparent border-gray-300 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-50 placeholder:text-white text-white"
            onChange={handleInputField}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center " onClick={handleClick}>
              <AiOutlineSearch className="h-5 w-5 text-white"  />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}