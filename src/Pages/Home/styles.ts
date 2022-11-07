import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  max-width: 1140px;
`;

export const Content = styled.section`
  width: 100%;
  height: 550px;

  display: flex;
  align-items: flex-end;
`;

export const Info = styled.div`
  width: 44.75%;
  height: 481px;

  & > h2 {
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
  margin-top: 75px;
  a {
    font-size: 1.5rem;
    font-weight: 400;
    text-decoration: underline;
    color: #7c4ee4;
    text-transform: uppercase;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Experience = styled.div`
  display: flex;
  align-items: center;
  padding-top: 30px;

  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: #cacaca;
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #6f7076;
    text-transform: uppercase;
  }
`;

export const SkillsCircle = styled.div`
  width: 55.25%;
  display: flex;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const Skills = styled.section`
  width: 100%;
  background: #25262a;
  height: 300px;
`;
