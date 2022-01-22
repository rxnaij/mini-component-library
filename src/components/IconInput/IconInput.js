import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const styles = {
  small: {
    borderWidth: 1,
    fontSize: 14 / 16,
    height: 24,
    padding: {
      top: 4,
      bottom: 4,
      left: 24,
      right: 4
    },
  },
  large: {
    borderWidth: 2,
    fontSize: 18 / 16,
    height: 36,
    padding: {
      top: 8,
      bottom: 8,
      left: 36,
      right: 8
    },
  }
}

const IconInput = ({
  label,
  icon,
  width = 200,
  size,
  placeholder,
}) => {
  const sizeStyles = styles[size]
  return (
    <Wrapper>
      <VisuallyHidden>{ label }</VisuallyHidden>
      <IconWrapper style={{ '--size': 16 + 'px' }}>
        <Icon id={icon} size={sizeStyles.fontSize * 16} strokeWidth={2} />
      </IconWrapper>
      <Input
        style={{
          '--border-width': sizeStyles.borderWidth + 'px',
          '--font-size': sizeStyles.fontSize + 'rem',
          '--width': width + 'px',
          '--height': sizeStyles.height + 'px',
          '--padding': `${sizeStyles.padding.top}px ${sizeStyles.padding.right}px ${sizeStyles.padding.bottom}px ${sizeStyles.padding.left}px`,
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default IconInput;

const Wrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const Input = styled.input.attrs(props => ({
  type: 'text'
}))`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding: var(--padding);
  
  font-size: var(--font-size);

  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: 2px ${COLORS.primary} solid;
    outline-offset: 2px;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  // left: ${props => props.size === 'small' ? 2 : 8}px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  color: inherit;

  pointer-events: none;
`