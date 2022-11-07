import { GroupSkills } from '../../Componets/svg/GroupSkills';
import { Wrapper } from './styles';
import * as S from './styles';

export const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Conteudo>
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
            <span>Vamos Codar?</span>
          </S.Question>

          <S.Experience>
            <div>11 </div>
            <span>
              Anos de <br />
              Experiência
            </span>
          </S.Experience>
        </S.Conteudo>
        <S.Skills>
          <GroupSkills />
        </S.Skills>
      </S.Container>
    </S.Wrapper>
  );
};
