import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';

interface SliderStyleProps {
  active?: any;
  marginTop?: any;
  translate?: any;
  cantSlides?: any;
  direction?: any;
  opacity?: any;
  widthComponent?: any;
  widthImage?: any;
}

interface SliderContentProps {
  translate: any;
  cantSlides: any;
}

export const SliderComponent = styled.section<SliderStyleProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : 0)};
  padding: 0 30px;
  width: 100%;
  @media screen and (max-width: 700px) {
    padding: 0;
    margin-top: 0;
  }
`;

export const SliderComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  position: relative;
  width: 100%;
`;

export const SliderElement = styled.div`
  display: flex;
  flex-direction: column;
  height: 457px;
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

export const SliderContent = styled.div<SliderContentProps>`
  transform: translateX(-${(props) => props.translate}%);
  transition: all ease-in-out 0.5s;
  height: 100%;
  width: calc(100% * ${(props) => props.cantSlides});
  display: flex;
  flex-direction: row;
`;

export const ContainerArrows = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  position: absolute;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin-top: -30%;
    margin-bottom: 20%;
  }
`;

export const SliderFooter = styled.div`
  box-sizing: border-box;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 0 30px 30px 30px;
  position: absolute;
  width: 100%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLOR.blue_universe};
    svg {
      margin-left: 10px;
    }
    &:hover {
      color: ${COLOR.yellow_sunrise};
    }
  }
  @media screen and (max-width: 700px) {
    padding: 0 30px;
  }
`;

export const SliderNumbers = styled.p`
  white-space: nowrap;
  width: 50px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
