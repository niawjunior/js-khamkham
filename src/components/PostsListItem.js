import React from 'react'
import { Link } from 'gatsby'
import Flag from './Flag/Flag'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { colors } from '../styles-config'
import { Bull, ReadingTime } from './Commons'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  color: ${colors.textLightest};
  border: 1px solid ${colors.blueAlpha};
  border-radius: 3px;
  background-color: ${colors.blueAlpha};
  padding: 0.2rem;

  &:hover {
    background-color: ${colors.textLightest};
    color: ${colors.blueAlpha};
    border: 1px solid ${colors.blueAlpha};
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  color: ${colors.textTitle};
  &:hover {
    border-bottom: 1px dotted ${colors.primary};
  }
`

const FooterLine = styled.div`
  color: ${colors.textLight};
  font-size: 0.8em;
`

const PostsListItem = props => {
  const { title, excerpt, slug, language, tags, timeToRead } = props
  const { defaultLang } = useSiteMetadata()
  return (
    <Post>
      <PostHeader>
        <h2>
          <PostTitleLink to={`/${slug}`}>
            {defaultLang !== language && <Flag language={language} />}
            {title}
          </PostTitleLink>
        </h2>
      </PostHeader>
      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>
      <br />
      <footer>
        <FooterLine>
          <ReadingTime min={timeToRead} />
          <Bull />
          <TagList tags={tags} />
        </FooterLine>
        <ReadPost to={`/${slug}`} aria-label={`View ${title} article`}>
          อ่านบทความนี้ ›
        </ReadPost>
      </footer>
    </Post>
  )
}
export default PostsListItem
