import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Bio from '../components/Bio'
import Layout from '../components/layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            display: 'block',
          }}
        >
          {post.frontmatter.date} - {post.frontmatter.location}
        </p>
        {post.frontmatter.tags && (
          <p
            style={{
              display: 'block',
            }}
          >
            {post.frontmatter.tags.map(tag => (
              <span key={tag}>#{tag}</span>
            ))}
          </p>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        {previous || (next && <hr />)}

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        location
        tags
      }
    }
  }
`
