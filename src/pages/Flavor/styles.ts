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
`;

export const Content = styled.div`
  margin-top: 150px;
`;

export const FlavorButton = styled.button<ButtonData>`
  border: ${(props) => (props.selected ? '3px solid #DEC0F1' : 0)};
  margin-left: 30px;
  width: 150px;
  height: 75px;
  border-radius: 10px;
  font-size: 26px;

  color: #f9fbf2;
  background: #7159c1;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.3, '#7159C1')};
  }
`;

export const NextButton = styled.button`
  margin-top: 50px;

  border: 0;
  width: 125px;
  height: 60px;
  border-radius: 10px;

  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
