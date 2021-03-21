import styled from 'styled-components';
import COLOR from '../../../assets/style/colors';

export const ErrorContainer = styled.section`
  padding-top: 100px;
  width: 100%;
`;

export const ErrorContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: auto;
  max-height: 400px;
  max-width: 1200px;
  min-height: 100px;
  width: calc(100% - 60px);
  a {
    color: ${COLOR.blue_universe};
    font-size: 20px;
    margin-top: 30px;
  }
`;
