import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WEIGHT, WEIGHT_PROP_TYPES } from './constants/font-weight'
import { fontWeight, fontFamily } from '@twreporter/core/lib/constants/font'

const defaultContainer = styled.div`
  font-weight: ${props => fontWeight[props.weight]};
  font-family: ${fontFamily.default};
  line-height: 150%;
  display: flex;
  align-items: center;
`

const P1Container = styled(defaultContainer)`
  font-size: 16px;
`

const P2Container = styled(defaultContainer)`
  font-size: 14px;
`

const P3Container = styled(defaultContainer)`
  font-size: 12px;
`

const P4Container = styled(defaultContainer)`
  font-size: 10px;
`

const withContainer = ParagraphContainer => {
  const paragraph = ({
    text = '',
    weight = WEIGHT.normal,
    className = '',
    ...props
  }) => {
    return (
      <ParagraphContainer weight={weight} className={className} {...props}>
        {text}
      </ParagraphContainer>
    )
  }

  paragraph.displayName = 'paragraph'
  paragraph.propTypes = {
    text: PropTypes.string,
    weight: WEIGHT_PROP_TYPES,
    className: PropTypes.string,
  }

  return paragraph
}

export const P1 = withContainer(P1Container)
export const P2 = withContainer(P2Container)
export const P3 = withContainer(P3Container)
export const P4 = withContainer(P4Container)

export default { P1, P2, P3, P4 }
