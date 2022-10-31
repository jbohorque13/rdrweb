declare interface IRoute {
  path: string;
  component: React.ReactNode<React.NamedExoticComponent<any>>;
  getPath?: {
    [k: string]: (...params) => string;
  },
  roleGuards?: string[];
  developmentRoute?: boolean;
}

declare interface ISideBarRoute {
  id: string;
  label: string;
  labelFallback: string;
  to: string;
  isBottom: boolean;
  icons: {
    active: React.FC<{ className?: string }>;
    notActive: React.FC<{ className?: string }>;
  };
}
