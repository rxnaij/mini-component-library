/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let SizedWrapper
  if (size === 'small') {
    SizedWrapper = Small
  } else if (size === 'medium') {
    SizedWrapper = Medium
  } else {
    SizedWrapper = Large
  }

  return (
    <SizedWrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <VisuallyHidden>
        {value}%
      </VisuallyHidden>
      <BarTrimmer>
        <ValueBar value={value} />
      </BarTrimmer>
    </SizedWrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px 0 #80808035;
`
/* Trims the corners of the ValueBar when the end of the bar is near the edge */
const BarTrimmer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`
  
const ValueBar = styled.div`
  width: ${props => props.value}%;
  border-radius: 4px 0 0 4px;
  background-color: ${COLORS.primary};
`

const Large = styled(Wrapper)`
  padding: 4px;
  border-radius: 8px;
  ${ValueBar} {
    height: 16px;
  }
`

const Medium = styled(Wrapper)`
  ${ValueBar} {
    height: 12px;
  }
`

const Small = styled(Wrapper)`
  ${ValueBar} {
    height: 8px;
  }
`