import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linksList = links.map((link) => {
  //   return <nav><a key ={link} href="#">{link}</a></nav>
  // })
  return <nav>
    {links.map((link) => (
      <a key ={link} href={"#"+ link}>{link}</a>
    ))}
  </nav>
}

export default NavBar;
