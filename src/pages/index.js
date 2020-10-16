import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Twitter from "../assets/images/socials/twitter.svg"
import LinkedIn from "../assets/images/socials/linkedin.svg"
import GitHub from "../assets/images/socials/github.svg"

export const pageQuery = graphql`
  query {
    contentfulAuthor {
      firstName
      lastName
      position
      github
      twitter
      linkedin
      boldClaim
      bio
      photo {
        fixed(width: 251, height: 334) {
          ...GatsbyContentfulFixed
        }
      }
      nickname
    }
    contentfulSite {
      title
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    firstName,
    lastName,
    position,
    twitter,
    linkedin,
    github,
    nickname,
    bio,
    photo,
    boldClaim,
  } = data.contentfulAuthor

  return (
    <Layout>
      <SEO />
      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h1 className="text-gray-900 text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">
                {boldClaim}
              </h1>
            </div>
            <div className="lg:col-span-2">
              <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
                <li className="sm:py-8">
                  <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                    <div className="relative pb-2/3 sm:pt-2/3">
                      <Image
                        fixed={photo.fixed}
                        className="absolute inset-0 object-cover h-full w-full shadow-lg rounded-lg"
                        alt=""
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <div className="space-y-4">
                        <div className="text-lg font-medium space-y-1">
                          <p className="leading-7 text-gray">
                            {firstName} {lastName}
                            <a
                              target="_blank"
                              className="ml-2 text-sm font-normal text-gray-100 hover:bg-red-800 bg-gray-900 rounded-full px-3 py-1 inline-block absolute transition ease-in-out duration-150"
                              href={`https://google.com/search?q=${nickname}`}
                              rel="noreferrer"
                              title="Find me on the Internet"
                            >
                              @{nickname}
                            </a>
                          </p>
                          <p className="-mt-3 text-red-800">{position}</p>
                        </div>
                        <div className="text-lg leading-7 py-2">
                          <p className="text-gray-500">{bio}</p>
                        </div>
                        <ul className="flex space-x-5">
                          <li>
                            <a
                              href={github}
                              rel="noreferrer"
                              title="GitHub"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                            >
                              <span className="sr-only">GitHub</span>
                              <GitHub className="w-6 h-6" fill="currentColor" />
                            </a>
                          </li>
                          <li>
                            <a
                              href={linkedin}
                              rel="noreferrer"
                              title="LinkedIn"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <LinkedIn
                                className="w-6 h-6"
                                fill="currentColor"
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href={twitter}
                              rel="noreferrer"
                              title="Twitter"
                              target="_blank"
                              className="text-gray-400 hover:text-gray-500 transition ease-in-out duration-150"
                            >
                              <span className="sr-only">Twitter</span>
                              <Twitter
                                className="w-6 h-6"
                                fill="currentColor"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
