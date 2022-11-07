import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 19px;
  margin: 0px 100px;

  width: 1280px;
  height: 550px;
`;

export const Conteudo = styled.div`
  width: 496px;
  height: 481px;

  h2 {
    width: 213px;
    font-size: 1.125rem;
    font-weight: 700;
    color: #fff;
    background: #7c4ee4;
    border-radius: 5px;
    text-align: center;

    padding: 10px;
  }

  h3 {
    font-size: 3rem;
    font-weight: 400;
    color: #fff;
    padding-top: 52px;
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #6f7076;
    padding-top: 22px;
  }
`;
export const Question = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: #7c4ee4;
  text-decoration: underline;
  margin-top: 75px;
`;

export const Experience = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;

  div {
    font-size: 3rem;
    font-weight: 400;
    color: #cacaca;
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #6f7076;
  }
`;

export const Skills = styled.div`
  width: 747px;
  height: 481px;
`;
