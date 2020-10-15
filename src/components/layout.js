import React from "react"
import PropTypes from "prop-types"
import "../../src/assets/css/main.css";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
