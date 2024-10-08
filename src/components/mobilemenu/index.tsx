import { FC, useState } from "react";
import { Link } from "react-router-dom";

export const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <>
      <div className={`kioto_tm_topbar ${isOpen ? 'active' : ''}`}>
        <div className="topbar_inner">
          <div className="logo" data-type="image">
            <h3>MILUTIN</h3>
          </div>
          <div className="trigger" onClick={handleToggle}>
            <div className={`hamburger hamburger--slider ${isOpen ? 'is-active' : ''}`}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`kioto_tm_mobile_menu ${isOpen ? 'opened' : ''}`}>
        <div className="menu_list">
          <ul className="transition_link">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/recentwork">Recent Work</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};


