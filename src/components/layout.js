import React from "react"
import PropTypes from "prop-types"
import "../../src/assets/css/main.css";

const Layout = ({ children }) => <main>{children}</main>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
