import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 3.25rem;
  height: 1.475rem;

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
    background-color: #0a0a0c;
    transition: .4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      left: 5px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
  }

  input:checked + .slider {
    background-color: #B12F4E;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #B12F4E;
  }

  input:checked + .slider:before {
    transform: translateX(24px);
  }
`;