import React from 'react';
import {IconDashboardActiveSVG, IconDashboardNotActiveSVG, IconManagerActiveSVG, IconManagerNotActiveSVG} from "components/UI/Icon";

//components
const DashboardPage = React.lazy(() => import('pages/DashboardPage'))
const PersonToGroup = React.lazy(() => import('pages/PersonToGroup'))
// Roles

export enum Roles {
  ADMIN = 'ADMIN',
  USER = 'USER',
  CREATOR = 'CREATOR',
}

export const routes: CommonJSON<IRoute> = {
    //Private Routes
    DASHBOARD: {
        path: '/dashboard',
        component: DashboardPage,
    },
    PERSONSTOGROUP: {
        path: '/personas/consolidar',
        component: PersonToGroup,
    }
}

export const sideBarRoutes: CommonJSON<ISideBarRoute> = {
    DASHBOARD: {
        id: 'dashboard',
        label: 'Dashboard',
        labelFallback: 'Dashboard labelFallback',
        to: routes.DASHBOARD.path,
        isBottom: true,
        icons: {
            active: IconDashboardActiveSVG,
            notActive: IconDashboardNotActiveSVG
        }
    },
    PERSONSTOGROUP: {
        id: 'personToGroup',
        label: 'Personas a Consolidar',
        labelFallback: 'Personas a Consolidar labelFallback',
        to: routes.PERSONSTOGROUP.path,
        isBottom: true,
        icons: {
            active: IconManagerActiveSVG,
            notActive: IconManagerNotActiveSVG
        }
    },
}
