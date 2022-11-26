import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  max-width: 1140px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;

  width: 100%;
`;

export const Information = styled.div`
  width: 46.75%;

  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;

  padding-top: 50px;

  & > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    background: linear-gradient(90deg, #7c4ee4 -17.54%, #05885a 106.89%);
    border-radius: 5px;
    text-align: center;

    width: 220px;
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

    margin: 22px 0 45px;
  }
`;

export const Question = styled.div`
  /* margin-top: 75px; */
  a {
    font-size: 1.5rem;
    font-weight: 400;
    color: #7c4ee4;
    text-decoration: underline;
    text-transform: uppercase;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Experience = styled.div`
  display: flex;
  align-items: center;

  margin: 30px 0 0;

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: #cacaca;
    text-transform: uppercase;
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: uppercase;
    color: #6f7076;
  }
`;

export const Skills = styled.div`
  position: relative;
  width: 53.25%;
`;
