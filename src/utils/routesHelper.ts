import React from 'react';
import {IconDashboardActiveSVG, IconDashboardNotActiveSVG, IconManagerActiveSVG, IconManagerNotActiveSVG} from "components/UI/Icon";

//components
const DashboarPage = React.lazy(() => import('pages/DashboardPage'))
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
        component: DashboarPage,
        roleGuards: [Roles.ADMIN]
    },
    PERSONSTOGROUP: {
        path: '/personas/consolidar',
        component: DashboarPage,
        roleGuards: [Roles.ADMIN]
    }
}

export const sideBarRoutes: CommonJSON<ISideBarRoute> = {
    DASHBOARD: {
        id: 'dashboard',
        label: 'Dashboard',
        labelFallback: 'Dashboard labelFallback',
        to: routes.DASHBOARD.path,
        isBottom: false,
        icons: {
            active: IconDashboardActiveSVG,
            notActive: IconDashboardNotActiveSVG
        }
    },
    PERSONSTOGROUP: {
        id: 'personToGroup',
        label: 'Personas a Consolidar',
        labelFallback: 'Personas a Consolidar labelFallback',
        to: routes.DASHBOARD.path,
        isBottom: false,
        icons: {
            active: IconManagerActiveSVG,
            notActive: IconManagerNotActiveSVG
        }
    },
}
