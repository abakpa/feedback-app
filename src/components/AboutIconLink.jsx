import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        About <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
