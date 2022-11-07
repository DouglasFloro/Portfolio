import { GroupSkills } from '../../Componets/svg/GroupSkills';
import * as S from './styles';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <S.Info>
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
              <h2>11 </h2>
              <span>
                Anos de <br />
                Experiência
              </span>
            </S.Experience>
          </S.Info>
          <S.SkillsCircle>
            <GroupSkills />
          </S.SkillsCircle>
        </S.Content>
      </S.Container>
      <S.Skills>
        <S.Container>
          <h1>Skillks</h1>
        </S.Container>
      </S.Skills>
    </S.Wrapper>
  );
};
