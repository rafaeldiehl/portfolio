import styled from 'styled-components';

export const Container = styled.div`
  width: 29px;
  height: 23px;
  position: relative;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 999;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background: ${props => props.theme.colors.textPrimary};
    opacity: 1;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(even) {
      left: 50%;
      border-radius: 0 9px 9px 0;
    }

    &:nth-child(odd) {
      left:0px;
      border-radius: 9px 0 0 9px;
    }
  }

  span:nth-child(1), span:nth-child(2) {
    top: 0px;
  }

  span:nth-child(3), span:nth-child(4) {
    top: 10px;
  }

  span:nth-child(5), span:nth-child(6) {
    top: 20px;
  }

  &.open span:nth-child(1),&.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(2),&.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(1) {
    left: 3px;
    top: 5px;
  }

  &.open span:nth-child(2) {
    left: calc(50% - 3px);
    top: 5px;
  }

  &.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-child(5) {
    left: 3px;
    top: 15px;
  }

  &.open span:nth-child(6) {
    left: calc(50% - 3px);
    top: 15px;
  }
`;