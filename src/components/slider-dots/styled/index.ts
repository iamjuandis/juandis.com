import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';

interface DotsStyledProps {
  active?: any;
}

export const DotComponent = styled.div<DotsStyledProps>`
  border-radius: 50%;
  display: flex;
  margin-right: 20px;
  cursor: pointer;
  width: ${(props) => (props.active ? '20px' : '15px')};
  height: ${(props) => (props.active ? '20px' : '15px')};
  background: ${(props) => (props.active ? COLOR.blue_universe : COLOR.white_cloud)};
  transition: all ease 0.3s;
  &:hover {
    background: ${COLOR.blue_universe};
    transform: scale(${(props) => (props.active ? 1 : 1.4)});
  }

  @media screen and (max-width: 700px) {
    width: ${(props) => (props.active ? '20px' : '15px')};
    height: ${(props) => (props.active ? '20px' : '15px')};
    margin-right: 15px;
  }
`;

export const DotsComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 270px;
  @media screen and (max-width: 700px) {
    position: relative;
    margin-left: 0;
  }
`;
