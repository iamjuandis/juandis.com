import styled from 'styled-components';

interface ArrowProps {
  direction: any;
  opacity: any;
}

export const ArrowComponent = styled.div<ArrowProps>`
  display: flex;
  ${(props) => (props.direction === 'right' ? `right: 25px` : `left: 25px`)};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.2s;
  opacity: ${(props) => props.opacity};
  pointer-events: ${(props) => (props.opacity && props.opacity === 1 ? 'all' : 'none')};
  &:hover {
    transform: scale(1.1);
  }
  img {
    transform: translateX(${(props) => (props.direction === 'left' ? '-2' : '2')}px);
    &:focus {
      outline: 0;
    }
  }
  @media screen and (max-width: 500px) {
    height: 40px;
    width: 40px;
    margin-top: 5px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
