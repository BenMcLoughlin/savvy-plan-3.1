import React, { FC } from "react"
import styled from "styled-components"

export interface IButton {
  label: string
  onClick: () => void
}

export const Button: FC<IButton> = ({ label, onClick }) => <Wrapper onClick={() => onClick()}>{label}</Wrapper>

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.button`
  height: 4.2rem;
  min-width: 14rem;
  max-width: 17rem;
  background: #5e9090;
  border-radius: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0.01, 0.08);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in;
  text-transform: capitalize;
  &:hover {
    background: #548181;
  }
`
