// Main import
import React from "react";

// Style - Footer
import "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © AnnaTrajano Company ${year}`}</footer>;
}
