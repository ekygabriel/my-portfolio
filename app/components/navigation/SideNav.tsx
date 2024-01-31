"use client";

import { useState } from "react";
import Link from "next/link";

import classes from "./SideNav.module.scss";
import Backdrop from "../modal/Backdrop";

const navData = [
  { label: "Work", link: "/work" },
  { label: "About Me", link: "/about" },
  { label: "Contact", link: "/contact" },
];
const SideNav = ({ ActiveLink }: { ActiveLink: string }) => {
  const [Open, setOpen] = useState(false);

  return (
    <>
      <div className={classes.Container}>
        <div
          className={`${classes.Hamburger} ${Open ? classes.Open : ""}`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${Open ? classes.Open : ""} ${classes.NavItems}`}>
          {navData.map((item) => {
            return (
              <li key={item.label} className={`${classes.Links} `}>
                <Link
                  scroll={true}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={ActiveLink === item.link ? "!text-yellow-500" : ""}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* {Open && (
        <div className={classes.Backdrop} onClick={() => setOpen(false)}></div>
      )} */}
      {Open && <Backdrop />}
    </>
  );
};

export default SideNav;
