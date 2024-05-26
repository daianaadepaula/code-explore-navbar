import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceDropdown } from "../constants";

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <ul
      className={
        dropdown ? "clicked" : "w-40 absolute top-10 right-28 align-top gap-10"
      }
      onClick={() => setDropdown(!dropdown)}
    >
      {serviceDropdown.map((item, index) => {
        return (
          <li
            key={index}
            className="bg-slate-200 cursor-pointer hover:bg-red-500"
          >
            <Link
              to={item.path}
              className="block w-full h-full text-orange-600 p-4 hover:text-white"
              onClick={() => setDropdown(false)}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
