import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
        contentfulSite {
          keywords
          description
          title
          image {
            file {
              url
            }
          }
        }
        contentfulAuthor {
          nickname
          positions
        }
      }
    `}
    render={data => {
      const { positions: authorPositions } = data.contentfulAuthor
      const metaDescription = `${
        data.contentfulSite.description
      } — ${authorPositions.map((authorPosition, i) => {
        if (i === authorPositions.length - 1) {
          return authorPosition
        }
        return `${authorPosition}, `
      })}`
      const metaImage = `https:${data.contentfulSite.image.file.url}`
      const metaTitle = data.contentfulSite.title

      return (
        <Helmet
          {...(title
            ? {
                titleTemplate: `%s — ${metaTitle}`,
                title,
              }
            : {
                title: metaTitle,
              })}
          meta={[
            {
              name: "description",
              content: metaDescription,
            },
            {
              property: "og:url",
              content: data.site.siteMetadata.siteUrl,
            },
            {
              property: "og:title",
              content: title,
            },
            {
              property: "og:description",
              content: metaDescription,
            },
            {
              name: "twitter:card",
              content: metaDescription,
            },
            {
              name: "twitter:creator",
              content: `@${data.contentfulAuthor.nickname}`,
            },
            {
              name: "twitter:title",
              content: title,
            },
            {
              name: "twitter:description",
              content: metaDescription,
            },
          ].concat(
            metaImage
              ? [
                  {
                    property: "og:image",
                    content: metaImage,
                  },
                  {
                    name: "twitter:image",
                    content: metaImage,
                  },
                ]
              : []
          )}
        />
      )
    }}
  />
)

SEO.defaultProps = {
  title: ''
}

SEO.propTypes = {
  title: PropTypes.string,
}

export default SEO
