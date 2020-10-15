import React from "react"
import PropTypes from "prop-types"
import "../../src/assets/css/main.css"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="relative min-h-screen pb-20">
    <main>{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
