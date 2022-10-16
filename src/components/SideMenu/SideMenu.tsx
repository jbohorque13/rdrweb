import React from 'react';

// Utils
import {
  sideBarRoutes,
} from 'utils/routesHelper';

// Styles
import {
  StyledSideMenuContainer,
  StyledTitleSideMenu,
  StyledPagesContainer,
  StyledBottomOptionsContainer,
  StyledNavItem,
  StyledNavItemText,
  StyledNavItemIconContainer,
} from './style';

  const routing = Object.values(sideBarRoutes).reduce<{
  pagesRoutes: ISideBarRoute[],
  bottomRoutes: ISideBarRoute[],
}>((pV, cV) => {
  const { isBottom } = cV;
  if (isBottom) {
    pV.bottomRoutes.push(cV);
  } else {
    pV.pagesRoutes.push(cV);
  }
  return pV;
}, { pagesRoutes: [], bottomRoutes: [] });

interface SideMenuProps {
  className?: string;
}

const SideMenu = ({
  className,
}: SideMenuProps) => {
  // Hooks

  // Renders
  const renderSideBarRoute = React.useCallback((sideBarRoute: ISideBarRoute) => (
    <StyledNavItem
      key={sideBarRoute.id}
      to={sideBarRoute.to}
      exact
      activeClassName="active-nav-item"
    >
      <StyledNavItemIconContainer
        className="nav-item-icon-container"
      >
        <sideBarRoute.icons.active
          className="active-nav-item-icon-active"
        />
        <sideBarRoute.icons.notActive
          className="active-nav-item-icon-not-active"
        />
      </StyledNavItemIconContainer>

      <StyledNavItemText
        variant="INTER-16-19-500"
        className="nav-item-text"
      >
        {sideBarRoute.label}
      </StyledNavItemText>
    </StyledNavItem>
  ), []);
  return (
    <StyledSideMenuContainer
      className={className}
    >
      <StyledTitleSideMenu>
        Admin
      </StyledTitleSideMenu>
      {/* Pages */}
      <StyledPagesContainer>
        {routing.pagesRoutes.map(renderSideBarRoute)}
      </StyledPagesContainer>

      {/* Bottom Options */}
      <StyledBottomOptionsContainer>
        {routing.bottomRoutes.map(renderSideBarRoute)}
      </StyledBottomOptionsContainer>
    </StyledSideMenuContainer>
  );
};

export default React.memo(SideMenu);
