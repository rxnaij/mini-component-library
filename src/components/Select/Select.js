import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit value={value} onChange={onChange}>
        { displayedValue }
        <IconWrapper style={{ '--size': `24px` }}>
          <Icon 
            id="chevron-down"
            size={24}
            strokeWidth={2}
          />
        </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;

// This wrapper is gonna use some neat tricks to contain both a
// semantic, functional <select> element and give it a designed
// "presentation"
const Wrapper = styled.div`
  position: relative;
  width: max-content;

  -webkit-appearance: none;
`

// Place the <select> element over the presentational version.
// Occupies same space, but invisible to the eye
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: 0;
`

// Styled version of the <select> element
// Note the NativeSelect:focus + & selector: the <select> will be
// the element accessed via focus/keyboard tabbing, BUT it will
// "pass" the visual styling to the PresentationalBit
const PresentationalBit = styled.div`
  padding: 12px 16px;
  padding-right: 48px;
  border: none;
  border-radius: 8px;

  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  font-size: 1rem;

  ${NativeSelect}:focus + & {
    outline: 2px solid ${COLORS.primary};
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`

// Position the icon using position: absolute
// Flexbox also works
// Icon sits within a 24px by 24px box
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);

  pointer-events: none;
`