import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="navbar bg-blue-200">
      <div className="flex-1 ">
        <a href="/" className="btn btn-ghost text-xl font-bold">
          wonder why wonder wash
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="relative">
              <details className="group">
                  <summary className="cursor-pointer">Information</summary>
                  <ul className="absolute left-0 bg-base-100 rounded-t-none p-2 hidden group-open:block z-50">
                      <li><a href="/information">information & promotion</a></li>
                      <li><a href="/trivia">knowledge</a></li>
                  </ul>
              </details>
          </li>
          <li>
            <a href="/Dashbord">Dashbord</a>
          </li>
          <li>
            <a >Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
