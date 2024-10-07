import styled from 'styled-components';

export const ProjectContainer = styled.div<any>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${(props) => props.accentColor};
  min-width: 300px;
  width: 30%;
  .texts {
    padding: 40px;
    padding-bottom: 20px;
  }
  h5 {
    margin: 8px 0;
  }
  img {
    width: 100%;
  }
  a {
    position: absolute;
    left: 40px;
    bottom: 40px;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  }
`;
