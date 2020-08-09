import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonData {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  align-content: center;

  padding: 175px;

  h1 {
    font-size: 40px;
  }

  h3 {
    color: #dec0f1;
  }
`;

export const Content = styled.div`
  margin-top: 45px;

  h3 {
    margin-left: 15px;
  }
`;

export const TitleText = styled.h2`
  margin-top: 25px;
  color: #7f7eff;

  &:first-child {
    margin-top: 0;
  }
`;

export const ResultPrice = styled.h2`
  margin-top: 60px;

  display: flex;
  color: #7f7eff;

  p {
    margin-left: 10px;
    color: #7159c1;
  }
`;

export const ResultTime = styled.h2`
  display: flex;
  color: #7f7eff;

  p {
    margin-left: 10px;
    color: #957fef;
  }
`;

export const MiniTable = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RemakeButton = styled.button`
  margin-top: 50px;

  border: 0;
  width: 170px;
  height: 60px;
  border-radius: 10px;

  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  svg {
    margin-left: 5px;
  }

  &:hover {
    background: ${shade(0.3, '#f9fbf2')};
  }
`;
