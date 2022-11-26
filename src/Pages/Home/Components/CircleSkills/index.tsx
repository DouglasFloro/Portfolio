import * as S from './styles';
import { Next } from '../../../../Componets/svg/Next';
import { Vector } from '../../../../Componets/svg/Vector';
import { React } from '../../../../Componets/svg/React';
import { JavaScript } from '../../../../Componets/svg/JavaScript';
import { Html } from '../../../../Componets/svg/Html';
import { Css3 } from '../../../../Componets/svg/Css3';

export const CircleSkills: React.FC = () => {
  return (
    <S.CircleMain>
      <S.React>
        <React />
      </S.React>

      <S.JavaScript>
        <JavaScript />
      </S.JavaScript>

      <S.Html>
        <Html />
      </S.Html>

      <S.Css3>
        <Css3 />
      </S.Css3>

      <S.Next>
        <Next />
      </S.Next>

      <S.Vector>
        <Vector />
      </S.Vector>

      <S.Circles>
        <S.CircleBig />

        <S.CircleMedium />

        <S.CircleSmall />
      </S.Circles>
    </S.CircleMain>
  );
};
