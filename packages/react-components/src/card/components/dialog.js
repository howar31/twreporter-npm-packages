import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// constant
import { SIZE, SIZE_PROP_TYPES } from '../constants/size'
// component
import { P1, P2 } from '../../text/paragraph'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Text = styled.div`
  padding: 16px 24px;
  background-color: white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
`

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 12px solid white;
  transform: translateX(-16px);
`

const Dialog = ({ text = '', size = SIZE.S, ...props }) => {
  const textIcon =
    size === SIZE.S ? (
      <P2 text={text} weight="bold" />
    ) : (
      <P1 text={text} weight="bold" />
    )
  return (
    <Container {...props}>
      <Triangle />
      <Text>{textIcon}</Text>
    </Container>
  )
}
Dialog.propTypes = {
  text: PropTypes.string,
  size: SIZE_PROP_TYPES,
}

export default Dialog
