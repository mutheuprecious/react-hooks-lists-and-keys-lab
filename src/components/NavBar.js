import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(links=>{
    return <a href={"#"+links} key={link}>{link}</a>
  })}</nav>
}

export default NavBar;
