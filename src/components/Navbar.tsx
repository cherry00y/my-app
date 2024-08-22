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
                  <summary className="cursor-pointe font-bold">Information</summary>
                  <ul className="absolute left-0 bg-base-100 rounded-t-none p-2 hidden group-open:block z-50">
                      <li><a href="/information">information & promotion</a></li>
                      <li><a href="/trivia">knowledge</a></li>
                  </ul>
              </details>
          </li>
          <li>
            <a className="font-bold" href="/Dashbord">Dashbord</a>
          </li>
          <li>
            <a>
            <svg className="w-5 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
            </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
