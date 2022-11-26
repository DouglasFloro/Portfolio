import { AboutPerfil } from './Components/AboutPerfil';
import { CircleSkills } from './Components/CircleSkills';
import * as S from './styles';
export const Home: React.FC = () => {
  return (
    <>
      <>
        <S.Wrapper>
          <S.Container>
            <S.Content>
              <S.Information>
                <h2>Front-End Developer</h2>
                <h3>
                  Falar é Facíl <br />
                  Então mostra o código!
                </h3>
                <p>
                  Codar com código limpo e simples está no sangue! <br />
                  Design e progamação é minha paixão.
                </p>

                <S.Question>
                  <a href="#">Vamos Codar?</a>
                </S.Question>

                <S.Experience>
                  <h2>1 </h2>
                  <span>
                    Anos de <br />
                    Experiência
                  </span>
                </S.Experience>
              </S.Information>
              <S.Skills>
                <CircleSkills />
              </S.Skills>
            </S.Content>
          </S.Container>
        </S.Wrapper>
        <div></div>
      </>
      <AboutPerfil />
    </>
  );
};
