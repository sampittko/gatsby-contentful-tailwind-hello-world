import React from "react"
import PropTypes from "prop-types"
import "../../src/assets/css/main.css"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className="relative min-h-screen pb-20 bg-gradient-to-r from-gray-100 to-red-100">
    <main className="pb-12">{children}</main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
