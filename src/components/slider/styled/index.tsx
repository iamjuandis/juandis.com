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

export const SliderComponent = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props: SliderStyleProps) => (props.marginTop ? `${props.marginTop}px` : 0)};
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
  max-width: 1240px;
  width: 100%;
`;

export const SliderElement = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: hidden;
  width: 100%;
  @media screen and (max-width: 700px) {
    height: auto;
  }
`;

export const SliderContent = styled.div`
  transform: translateX(-${(props: SliderContentProps) => props.translate}%);
  transition: all ease-in-out 0.5s;
  height: 100%;
  width: calc(100% * ${(props: SliderContentProps) => props.cantSlides});
  display: flex;
  flex-direction: row;
`;

export const ContainerArrows = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  margin-top: -325px;
  margin-bottom: 275px;
  width: 100%;
  @media screen and (max-width: 700px) {
    margin-top: -30%;
    margin-bottom: 20%;
  }
`;

export const SliderFooter = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 100px;
  max-width: 1240px;
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
