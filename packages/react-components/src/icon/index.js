import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// enum
import { IconType, ArrowDirection, BookmarkType, MediaType } from './enum'
// @twreporter
import { BRANCH } from '@twreporter/core/lib/constants/release-branch'

const baseGCSDir = 'https://www.twreporter.org/assets/icon/'

const IconContainer = styled.svg`
  height: 24px;
  width: 24px;
  background-color: black;
  mask-image: url(${props => props.src});
  mask-size: cover;
`
const RawIconContainer = styled.img`
  height: 24px;
  width: 24px;
`
export const Icon = ({
  type = IconType.MASK,
  filename = '',
  releaseBranch = BRANCH.master,
  ...restProps
}) => {
  const src = `${baseGCSDir}${releaseBranch}/${filename}.svg`
  const IconComponent = type === IconType.RAW ? RawIconContainer : IconContainer
  return <IconComponent alt={filename} src={src} {...restProps} />
}
Icon.propTypes = {
  type: PropTypes.oneOf(Object.values(IconType)),
  filename: PropTypes.string,
  releaseBranch: PropTypes.oneOf(Object.values(BRANCH)),
}
Icon.type = IconType
Icon.releaseBranch = BRANCH

const getIcon = gcsFileName => {
  const gcsIcon = ({ releaseBranch = BRANCH.master, ...props }) => (
    <Icon filename={gcsFileName} releaseBranch={releaseBranch} {...props} />
  )
  gcsIcon.propTypes = {
    type: PropTypes.oneOf(Object.values(IconType)),
    releaseBranch: PropTypes.oneOf(Object.values(BRANCH)),
  }
  gcsIcon.displayName = gcsFileName || 'icon'
  gcsIcon.type = IconType
  gcsIcon.releaseBranch = BRANCH

  return gcsIcon
}

export const Hamburger = getIcon('hamburger')
export const Cross = getIcon('cross')
export const Search = getIcon('search')
export const Member = getIcon('member')
export const Home = getIcon('home')
export const Share = getIcon('share')
export const Text = getIcon('text')
export const Clock = getIcon('clock')
export const Article = getIcon('article')
export const Topic = getIcon('topic')
export const Copy = getIcon('copy')
export const Loading = getIcon('loading')
export const Printer = getIcon('printer')
export const Letter = getIcon('letter')
export const Facebook = getIcon('facebook')
export const Instagram = getIcon('instagram')
export const Medium = getIcon('medium')
export const Twitter = getIcon('twitter')
export const Youtube = getIcon('youtube')
export const Line = getIcon('line')
export const Google = getIcon('google')

export const Arrow = ({
  direction = ArrowDirection.RIGHT,
  releaseBranch,
  ...props
}) => {
  const filename = `arrow_${direction}`
  return <Icon filename={filename} releaseBranch={releaseBranch} {...props} />
}
Arrow.propTypes = {
  direction: PropTypes.oneOf(Object.values(ArrowDirection)),
  releaseBranch: PropTypes.oneOf(Object.values(BRANCH)),
}
Arrow.direction = ArrowDirection
Arrow.releaseBranch = BRANCH

export const Bookmark = ({ type = BookmarkType.BASIC, releaseBranch }) => {
  const filename = `bookmark_${type}`
  return <Icon filename={filename} releaseBranch={releaseBranch} />
}
Bookmark.propTypes = {
  type: PropTypes.oneOf(Object.values(BookmarkType)),
  releaseBranch: PropTypes.oneOf(Object.values(BRANCH)),
}
Bookmark.type = BookmarkType
Bookmark.releaseBranch = BRANCH

export const SocialMedia = ({ mediaType = MediaType.GOOGLE, ...args }) => (
  <Icon filename={mediaType} {...args} />
)
SocialMedia.propTypes = {
  releaseBranch: PropTypes.oneOf(Object.values(BRANCH)),
  mediaType: PropTypes.oneOf(Object.values(MediaType)),
}
SocialMedia.type = IconType
SocialMedia.mediaType = MediaType
SocialMedia.releaseBranch = BRANCH

export default {
  Arrow,
  Article,
  Bookmark,
  Clock,
  Copy,
  Cross,
  Facebook,
  Hamburger,
  Home,
  Instagram,
  Line,
  Loading,
  Printer,
  Letter,
  Medium,
  Member,
  Search,
  Share,
  Text,
  Topic,
  Twitter,
  Youtube,
  Google,
  SocialMedia,
}
