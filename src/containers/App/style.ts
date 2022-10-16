import styled from "styled-components";
import {theme} from 'theme';

export const AppMainContainer = styled.div`
    background-color: ${theme.colors.grey};
`;

export const StyledMainApp = styled.div`
    background-color: ${theme.colors.grey3};
`;

export const StyledRoutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;
