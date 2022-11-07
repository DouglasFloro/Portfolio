import { InstagramLogo, YoutubeLogo } from 'phosphor-react';
import { AiFillGithub } from 'react-icons/ai';
import * as S from './styles';

export const Header: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <h1>
            Douglas <span>Floro</span>
          </h1>
          <span>Front-End</span>
        </S.Logo>
        <S.Menu>
          <a href="#skills">Skills</a>
          <a href="#trabalhos">Trabalhos</a>
          <a href="#videos">Vídeos</a>
          <a href="#contato">Contato</a>
        </S.Menu>
        <S.Social>
          <li>
            <a href="#youtube">
              <YoutubeLogo /> Youtube
            </a>
          </li>
          <li>
            <a href="#instagram">
              <InstagramLogo /> Instagram
            </a>
          </li>
          <li>
            <a href="#github">
              <AiFillGithub /> GitHub
            </a>
          </li>
        </S.Social>
      </S.Container>
    </S.Wrapper>
  );
};
