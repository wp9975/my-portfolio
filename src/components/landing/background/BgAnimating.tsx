import React from "react";
import classes from "./bganimating.module.css";
import { FaAddressBook, FaGit } from "react-icons/fa";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
type Props = {};

const BgAnimating = (props: Props) => {
  return (
<div className="z-10 min-h-screen">
  <ul className={classes.background}>
    <li style={{backgroundImage: 'url(/images/landing/1.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/2.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/5.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/4.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/5.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/6.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/6.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/3.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/4.png)'}}></li>
    <li style={{backgroundImage: 'url(/images/landing/1.png)'}}></li>
  </ul>
</div>
  );
};

export default BgAnimating;
