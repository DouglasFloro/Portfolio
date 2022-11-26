import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 0;
  gap: 32px;
  background: #25262a;

  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 1140px;
  width: 100%;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;

    background: linear-gradient(90deg, #7c4ee4 -17.54%, #05885a 106.89%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const Story = styled.div`
  width: 660px;
  margin: 32px 0 46px;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 15px;

    color: #ffffff;
  }
  span {
    font-weight: bold;
  }
`;

export const Social = styled.div`
  display: flex;

  li {
    display: flex;
    gap: 24px;
  }

  a {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #25262a;

    padding: 10px;
  }
`;

export const Instagram = styled.div`
  background: #eeeeee;
  border: 2px solid #272829;
  border-radius: 10px;
`;

export const Youtube = styled.div`
  background: #eeeeee;
  border: 2px solid #272829;
  border-radius: 10px;
`;

export const GitHub = styled.div`
  background: #eeeeee;
  border: 2px solid #272829;
  border-radius: 10px;
`;
