import React from "react";

import "./Footer.module.css"

export default function Footer() {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © AnnaBia Company ${year}`}</footer>;
}
