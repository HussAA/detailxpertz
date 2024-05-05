import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import 'aos/dist/aos.css';
import "./src/styles/index.css"
import "./src/styles/packages.css"
import "./src/styles/services.css"
import "./src/styles/gallery.css"
import './src/styles/ReusableComponents.css'
import React from "react"
import Providers from "./src/providers"

export const wrapRootElement = ({ element }) => {
  return <Providers>{element}</Providers>
}