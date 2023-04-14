import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// utils
import pathUtil from '../utils/path'
// @twreporter
import { BRANCH } from '@twreporter/core/lib/constants/release-branch'

const LogoContainer = styled.img``

const logoType = {
  DEFAULT: 'default',
  BLACK: 'black',
  WHITE: 'white',
}
const LogoSymbol = ({
  type = logoType.DEFAULT,
  releaseBranch = BRANCH.master,
  ...props
}) => {
  const logoSrc = pathUtil.selectLogoPath('symbol', releaseBranch, type)

  return <LogoContainer src={logoSrc} alt="The Reporter Logo" {...props} />
}
LogoSymbol.propTypes = {
  type: PropTypes.oneOf(Object.values(logoType)),
  releaseBranch: PropTypes.oneOf(Object.values(BRANCH)),
}
LogoSymbol.releaseBranch = BRANCH
LogoSymbol.type = logoType

export default LogoSymbol
