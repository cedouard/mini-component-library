import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const ComponentInput = styled.input`
  border: 0;
  color: ${COLORS.gray700};
  font-weight: 700;
  width: ${props => props.width}px;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    border: 1px solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
    ::placeholder {
      color: ${COLORS.black};
    }
  }
`;

const ComponentInputLarge = styled(ComponentInput)`
  border-bottom: 1px solid ${COLORS.black};
  padding: 8px 4px 8px 26px;
  font-size: ${18/16}rem;
  line-height: ${21/16}rem;
`;

const ComponentInputSmall = styled(ComponentInput)`
  border-bottom: 2px solid ${COLORS.black};
  padding: 4px 2px 4px 20px;
  font-size: ${14/16}rem;
  line-height: 1rem;
`;

const AbsoluteIcon = styled(Icon)`
    display: inline;
    position: absolute;
    margin-top: ${props => props.inputSize==='large' ? 10 : 5 }px;
`;

const InoutWrapper = styled.div`
  position: relative;
`;

const IconInput = ({
  icon='search',
  size,
  width = 250,
  placeholder='Search...',
}) => {

  let Component = ComponentInputSmall;

  switch (size) {
    case 'large':
      Component = ComponentInputLarge;
      break;
    default:
      break;
  }

  return (
    <InoutWrapper>
      <AbsoluteIcon id="search" size={size==='large' ? 18 : 14}  inputSize={size} />
      <Component placeholder={placeholder} width={width} />
    </InoutWrapper>
  );
};

export default IconInput;
