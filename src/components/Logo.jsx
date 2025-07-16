import React from "react";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Logo() {
  return (
    <Link
      to={`/wikipedia-redesign`}
      className="w-[350px] flex items-center gap-1">
      <BsGlobe className="text-4xl" />
      <h1 className="font-medium tracking-tight">WIKIPEDIA</h1>
    </Link>
  );
}
