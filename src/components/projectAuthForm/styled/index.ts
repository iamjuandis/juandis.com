import styled from 'styled-components';
import COLORS from '../../../assets/style/colors';

export const ProjectAuthFormContainer = styled.section`
  border-radius: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  max-width: 996px;
  margin: auto;
  margin-top: 110px;
  margin-bottom: 110px;
  padding: 48px;
  width: calc(100% - 96px);
  p {
    color: ${COLORS.black_text};
    a {
      color: ${COLORS.green_vibrant};
      text-decoration-style: dotted;
      text-decoration-line: underline;
      text-decoration-color: ${COLORS.green_pale};
    }
  }
`;

export const FormAuth = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 0px !important;
  max-width: 500px;
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
`;

export const InputField = styled.input`
  border: 2px solid ${COLORS.gray_medium};
  border-radius: 12px;
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
`;
