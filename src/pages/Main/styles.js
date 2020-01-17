import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const RenderCards = styled.div`
display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: #000;
  h1 {
      color: #fff;
      font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-weight: bold;
  }
`;

export const ContainerInputAndButton = styled.div`
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;

  input {
    width: 200px;
    height: 40px;
    border-radius: 8px;
    font-size: 20px;

    ::placeholder {
      color: #959595;
    }

  }

  button {
    background: #000;
    color: #fff;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 18px;
    margin-left: 10px;
    border-radius: 8px;
    height: 50px;
    width: 75px;
    border: 3px solid #000;

    :hover {
      background: #00bfff;
      cursor: pointer;
    }
  }
`;

export const AddButton = styled.button`
  background: #fff;
  margin-top: 30px;
  margin-left: 40px;
  width: 200px;
  height: 200px;
  box-shadow: 0px 0px 6px 0px;
`;
