import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components';

interface SwitchProps {
  onClick?: () => void;
}
/* Custom Styling for the Switch but the changing mode functionality is in App.tsx */
const SwitchComp = styled.div`
  display: flex;
  flex-direction: row;
`;
const SwitchTitle = styled.div`
  display: flex;
  margin-top: 6px;
  color: #8292af;
  font-size: 12px;
  font-weight: 700;
`;
const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 55px;
  height: 28px;
  background: hsl(230, 22%, 74%);
  display: block;
  border-radius: 100px;
  position: relative;
  margin-left: 10px;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(55, 143, 230) 0%,
      rgba(62, 218, 130) 100%
    );
  }

  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '2px' : 'calc(60% - 4px)')};
    top: 2px;
    width: 24px;
    height: 24px;
    background: #ffffff;
    border-radius: 90px;
    transition: 0.3s;
  }
`;

const Switch: React.FC<SwitchProps> = ({ onClick }) => {
  const [switchState, setSwitchState] = useState(false);
  const toggleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchState(!switchState);
  };
  return (
    <SwitchComp className="switch">
      <SwitchTitle>Dark Mode</SwitchTitle>
      <StyledLabel htmlFor="checkbox" checked={switchState}>
        <input
          id="checkbox"
          type="checkbox"
          checked={switchState}
          onChange={toggleDarkMode}
          onClick={onClick}
        />
      </StyledLabel>
    </SwitchComp>
  );
};

export default Switch;
