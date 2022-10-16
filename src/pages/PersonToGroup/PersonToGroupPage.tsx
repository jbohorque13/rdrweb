import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import {
  PageMainContainer,
  StyledTempText,
} from './style';

const PersonToGroupPage: React.FC = () => {
    React.useEffect(() => {
        console.log('prueba');
    }, []);

  return (
    <>
      <Helmet
        titleTemplate="%s - Rdr App"
      >
        <title>Lista de Guias</title>
      </Helmet>
      <PageMainContainer>
        <StyledTempText
          variant="QANELAS-14-28-600"
        >
          Lista de Guias
        </StyledTempText>
      </PageMainContainer>
    </>
  );
};

export default React.memo(PersonToGroupPage);
