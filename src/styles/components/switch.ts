import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input { 
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #171719;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      border-radius: 50%;
      left: 5px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: var(--red);
  }

  input:checked + .slider:before {
    transform: translateX(23px);
  }
`;