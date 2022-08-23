/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: 0;
  border-radius: 8px;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: 0;
  overflow: hidden;
  width: 370px;

  progress {
    color: ${COLORS.primary};
  }

  progress::-moz-progress-bar {
    background: transparent;
  }

  progress::-webkit-progress-value {
    background: ${COLORS.primary};
  }

  progress::-webkit-progress-bar {
    background: transparent;
  }
`;

const ProgressBarWrapperSmall = styled(ProgressBarWrapper)`
  height: ${8 / 16}rem;
`;

const ProgressBarWrapperMedium = styled(ProgressBarWrapper)`
  height: ${12 / 16}rem;
`;

const ProgressBarWrapperLarge= styled(ProgressBarWrapper)`
  height: ${24 / 16}rem;
  padding: ${4 / 16}rem;
`;

const ProgressBarProgress = styled.progress`
  border-radius: 4px;
  margin: 0;
  overflow: hidden;
  width: 100%;
`;

const ProgressBar = ({ value, size }) => {

  let ComponentWrapper = ProgressBarWrapperSmall;

  switch (size) {
    case 'medium':
      ComponentWrapper = ProgressBarWrapperMedium;

      break;
    case 'large':
      ComponentWrapper = ProgressBarWrapperLarge;
      break;
    default:
      break;

  }

  return (
    <ComponentWrapper>
      <ProgressBarProgress
        value= {value}
        max="100"
      />
    </ComponentWrapper>);
};

export default ProgressBar;
