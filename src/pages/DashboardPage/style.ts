import styled from 'styled-components';
import { theme } from 'theme';

// Components
import Text from 'components/UI/Text';

export const PageMainContainer = styled.div`
  flex: 1;
  max-width: ${theme.pageContainerWidth}px;
`;

export const StyledTempText = styled(Text)`
  text-align: center;
  color: ${theme.colors.white};
`;

export const StyledWrapper = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const StyledTable = styled.table`
    width: 100%;
      border-spacing: 0;
      font-family: ${theme.fontNames.inter};
      font-size: 0.875rem; // 14px
      line-height: 1rem; // 16px;
`;

export const StyledTableHead = styled.thead`
  color: ${theme.colors.grey2};
`;

export const StyledTableHeadRow = styled.tr`
  height: 48px;
  font-weight: ${theme.fontWeights.normal};
  background: ${theme.colors.grey3};
`;

export const StyledTableHeadCell = styled.th`
  text-align: left;
  padding: 16px 8px;
  font-weight: ${theme.fontWeights.semiBold};

  &:last-child{
    & div {
      cursor: default;
    }
    
    & svg {
      display: none;
    }
  } 
`;

export const StyledTableBody = styled.tbody`
  color: ${theme.colors.lightGrey2};
  height: 490px;
`;

export const StyledTableBodyRow = styled.tr`
  min-height: 40px;
  height: auto;
  padding: 0 23px;
`;

export const StyledTableBodyCell = styled.td<{ $withOverFlow: boolean }>`
  padding: 12px 10px;
  padding-left: 8px;
  border-bottom: 2px solid ${theme.colors.grey3};
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ $withOverFlow }) => ($withOverFlow ? `
    overflow: hidden;
  ` : 'display: flex; justify-content: flex-end;')}
`;
