import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";

export default function MainPage(props) {
  return (
    <>
      <Menu menu={props.page}/>
        {props.children}
      <Footer />
    </>
  );
}
