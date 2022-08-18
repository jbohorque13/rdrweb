import React from 'react';
import { Helmet } from 'react-helmet';

// Styles
import {
  PageMainContainer,
  StyledTempText,
} from './style';

const DashboardPage: React.FC = () => {

  return (
    <>
      <Helmet
        titleTemplate="%s - Coliseum Admin"
      >
        <title>Dashboard</title>
      </Helmet>
      <PageMainContainer>
        <StyledTempText
          variant="QANELAS-14-28-600"
        >
          Dashboard
        </StyledTempText>
      </PageMainContainer>
    </>
  );
};

export default React.memo(DashboardPage);
