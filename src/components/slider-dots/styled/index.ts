import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';

interface DotsStyledProps {
  active?: any;
  mainColor?: string;
}

export const DotComponent = styled.div<DotsStyledProps>`
  border-radius: 50%;
  display: flex;
  margin: 0 10px;
  cursor: pointer;
  width: ${(props) => (props.active ? '15px' : '10px')};
  height: ${(props) => (props.active ? '15px' : '10px')};
  background: ${(props) =>
    props.active ? (props.mainColor ? props.mainColor : COLOR.green_dark) : COLOR.white_cloud};
  transition: all ease 0.3s;
  &:hover {
    background: ${COLOR.green_dark};
    transform: scale(${(props) => (props.active ? 1 : 1.4)});
  }

  @media screen and (max-width: 700px) {
    width: ${(props) => (props.active ? '20px' : '15px')};
    height: ${(props) => (props.active ? '20px' : '15px')};
    margin-right: 15px;
  }
`;

export const DotsComponent = styled.div`
  background: ${`${COLOR.green_dark}44`};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 0;
  position: absolute;
  margin-left: 100px;
  @media screen and (max-width: 700px) {
    position: relative;
    margin-left: 0;
  }
`;
