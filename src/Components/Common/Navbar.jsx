import React, { useState } from "react";
import { DropdownItems, NavbarItems } from "./NavbarItems";

const Header = () => {
  const [getDropdown, setDropdown] = useState(false);

  return (
    <div>
      <header>
        {/* logo */}
        <div className="logo">
          <span>B</span>
          <span>B</span>
          <span>C</span>
        </div>

        <nav>
          <ul>
            <a href="#" className="nav_account">
              <i className="fa fa-user-circle" />
              <span> BBC Account</span>
            </a>

            {NavbarItems.map((i) => (
              <a href="#" className={i.cName} key={i.id}>
                {i.text}
              </a>
            ))}

            <a className="dropdown" onClick={() => setDropdown(!getDropdown)}>
              More <i className="fa fa-caret-down" />
            </a>
          </ul>
        </nav>

        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" />
        </div>
      </header>

      <div className={getDropdown ? "list_dropdown active" : "list_dropdown"}>
        <h2>More</h2>
        <ul>
          {DropdownItems.map((i) => (
            <a href="#" className={i.cName} key={i.id}>
              {i.text}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
