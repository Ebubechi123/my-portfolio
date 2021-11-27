import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faSmile,
  faCode,
  faGamepad,
  faLaptopCode,
  faGlasses,
  faFlask,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faSmile,
  faCode,
  faGamepad,
  faLaptopCode,
  faGlasses,
  faFlask,
  faHeadphones
);

export const MenuIcon = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon="bars" />
    </>
  );
};
export const SmileIcon = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon="code" />
    </>
  );
};
export const GamePad = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon="gamepad" />
    </>
  );
};
export const LaptopCode = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon="laptop-code" />
    </>
  );
};
export const Glasses = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon="glasses" />
    </>
  );
};
export const Flask = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon="flask" />
    </>
  );
};
export const Headphones = ({ className }) => {
  return (
    <>
      <FontAwesomeIcon className={className} icon="headphones" />
    </>
  );
};
