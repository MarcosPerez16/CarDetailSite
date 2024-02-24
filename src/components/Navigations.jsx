// imports here

import { Link } from "react-router-dom";
const Navigations = () => {
  // logic here
  return (
    <nav>
      <Link to={"/"}>About</Link>
      <Link to={"/services"}>Services</Link>
      <Link to={"/gallery"}>Gallery</Link>
      <Link to={"/faq&reviews"}>FAQ & Reviews</Link>
      <Link to={"/contact"}>Contact</Link>
    </nav>
  );
};

export default Navigations;
