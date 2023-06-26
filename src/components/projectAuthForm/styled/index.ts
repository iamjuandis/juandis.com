import styled, { css } from 'styled-components';
import COLORS from '../../../assets/style/colors';
import Image from 'next/image';
import { responsiveMobile } from '../../../assets/utils/components';

export const ProjectAuthFormContainer = styled.section`
  align-items: center;
  border-radius: 48px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-column-gap: 64px;
  max-width: 996px;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 48;
  padding: 48px;
  width: calc(100% - 96px);
  p {
    color: ${COLORS.black_text};
  }
  ${responsiveMobile(css`
    display: flex;
    flex-direction: column-reverse;
    row-gap: 24px;
    padding: 16px;
    width: 100%;
  `)}
`;

export const ProjectFormContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  width: auto;
  ${responsiveMobile(css`
    row-gap: 16px;
  `)}
`;

export const FormAuth = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 0px !important;
  width: 100%;

  .input-container {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
    align-items: center;
    button {
      width: auto;
    }
  }
  .error-message {
    color: ${COLORS.red_vivid};
    padding-top: 4px;
  }
  ${responsiveMobile(css`
    .input-container {
      column-gap: 16px;
      margin-top: 16px;
      button {
        width: fit-content;
      }
    }
  `)}
`;

export const InputField = styled.input`
  border: 2px solid ${COLORS.gray_medium};
  border-radius: 32px;
  box-sizing: border-box;
  background: ${COLORS.gray_light};
  font-size: 16px;
  line-height: 24px;
  padding: 12px 24px;
  transition: all ease 0.3s;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  &:focus {
    border-color: ${COLORS.green_vibrant};
  }
  &.input-error {
    border-color: ${COLORS.red_vivid};
  }
`;

// PROJECT PREVIEW

export const ProjectPreview = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  width: 100%;
  .texts-prev {
    mask: linear-gradient(90deg, black, black, transparent);
    backdrop-filter: blur(8px);
    background-color: hsla(0, 0%, 0%, 0.4);
    border-radius: 24px;
    box-sizing: border-box;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    position: relative;
    bottom: 0px;
    left: 0px;
    padding: 24px;
    width: 100%;
    height: 100%;
  }
  h4,
  p {
    color: ${COLORS.white_cloud};
    width: 100%;
  }
`;

export const ProjectPrevImage = styled(Image)`
  border-radius: 24px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
`;

export const IconPrev = styled.div`
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.white_cloud};
  width: 48px;
  height: 48px;
  min-height: 48px;
`;
