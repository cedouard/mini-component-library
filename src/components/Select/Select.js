import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const ComponentSelect = styled.select`
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border-radius : 8px;
  border: 1px solid transparent;
  color: ${COLORS.gray700};
  font-size: 1rem;
  font-weight: 400;
  padding: 11px 40px 11px 15px;
  position: relative;

  &:focus {
    border: 1px solid ${COLORS.primary};
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.div`
  align-items: center;
  display: inline-block;
`;

const AbsoluteIcon = styled(Icon)`
    display: inline;
    position: absolute;
    margin-top: 9px;
    margin-left: -35px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <ComponentSelect value={value} onChange={onChange}>
        {children}
      </ComponentSelect>
      <AbsoluteIcon id="chevron-down" />
    </SelectWrapper>
  );
};

export default Select;
