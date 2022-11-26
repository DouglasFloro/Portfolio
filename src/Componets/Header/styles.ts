import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  h1 {
    font-size: 2rem;
    color: #fff;
  }
  & > span {
    font-size: 1rem;
    color: #6f7076;
  }
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 0 20;

  a {
    color: #fff;
    font-size: 1.125rem;
    font-weight: 700;
    position: relative;
    &:hover {
      color: #7c4ee4;

      &::before {
        content: '<';
        position: absolute;
        left: -13px;
      }
      &::after {
        content: '>';
        position: absolute;
        right: -13px;
      }
    }
  }
`;

export const Social = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  li a {
    color: #fff;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    svg {
      font-size: 15px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;
