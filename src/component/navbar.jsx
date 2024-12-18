import logo from "../assets/logo.png";
import { navItems } from "../constants";
const navbar = () => {
  return (
    <nav classname="sticky top-1 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex item-center flex-shrink-0">
            <img className="h-10 w-10 m-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">LOGO HERE</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-[#5B4B9A] via-[#00A1E4] to-[#D5006D] transition-all duration-500 hover:from-[#E4B5F4] hover:to-[#191970] py-2 px-3 rounded-md"
            >
              Build With AI 
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
