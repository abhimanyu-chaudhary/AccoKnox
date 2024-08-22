import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

function Header({ setTheme, theme }) {
    
  const handleChange = () => {
    setTheme(!theme);
  };

  return (
    <div className="flex justify-between px-5 pt-4 items-center">
      <h1 className={`${theme ? "text-black" : "text-white"} font-semibold`}>CMAPP DASHBOARD</h1>
      <div className="flex items-center gap-2">
        <button className="px-2 py-[6px] bg-slate-300 rounded-md">
          Add Widget +{" "}
        </button>
        <button
          className="text-xl px-2 py-2 bg-slate-300 rounded-md"
          onClick={handleChange}
        >
            {theme? <MdLightMode /> :  <MdDarkMode />}
        </button>
      </div>
    </div>
  );
}

export default Header;
