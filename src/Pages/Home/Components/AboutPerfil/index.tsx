import { Github } from '../../../../Componets/svg/GitHub';
import { Instagram } from '../../../../Componets/svg/Instagram';
import { Youtube } from '../../../../Componets/svg/Youtube';
import * as S from './styles';
export const AboutPerfil: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Quem sou eu?</h2>
        <S.Story>
          <p>
            Antes de tudo, deixa eu me apresentar - Prazer, sou o
            <span> Douglas Floro!</span>
          </p>
          <p>
            Sou desenvolvedor autodidata há quase 1 anos, diga-se de passagem,
            sou apaixonado por programação, design e empreendedorismo.
          </p>
          <p>
            Atualmente atuo como desenvolvedor full-stack na minha própria
            empresa e também em uma BigTech no segmento de Débitos Veiculares.
            Além disso, produzo conteúdo no Instagram e no YouTube.
          </p>
          <p>Segue lá pra acompanhar todas as dicas!</p>
          <p>
            Bom, e agora que estamos devidamente apresentados, chegou a hora de
            falarmos um pouco mais sobre todas as Stacks!
          </p>
        </S.Story>
        <S.Social>
          <li>
            <S.Instagram>
              {' '}
              <a href="#instagram">
                <Instagram /> douglasfloro
              </a>
            </S.Instagram>
            <S.Youtube>
              <a href="#youtube">
                <Youtube /> Douglas Floro
              </a>
            </S.Youtube>
            <S.GitHub>
              <a href="#github">
                {' '}
                <Github /> DouglasFloro
              </a>
            </S.GitHub>
          </li>
        </S.Social>
      </S.Container>
    </S.Wrapper>
  );
};
