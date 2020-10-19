import { graphql, StaticQuery } from "gatsby"
import React from "react"

const Footer = () => (
  <div className="absolute bottom-0 pb-12 px-4 w-screen">
    <p className="mx-auto max-w-screen-xl sm:px-6 lg:px-8 lg:py-14 text-gray-400">
      <StaticQuery
        query={graphql`
          query {
            contentfulAuthor {
              firstName
              lastName
              email
            }
            contentfulSite {
              copyright
            }
          }
        `}
        render={data => {
          const { firstName, lastName, email } = data.contentfulAuthor
          const { copyright } = data.contentfulSite

          return (
            <>
              &copy; {copyright}{" "}
              <a
                href={`mailto:${email}`}
                title={email}
                className="hover:text-gray-500 transition ease-in-out duration-150"
              >
                {firstName} {lastName}
              </a>
            </>
          )
        }}
      />
    </p>
  </div>
)

export default Footer
