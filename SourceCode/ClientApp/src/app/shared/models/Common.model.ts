export interface IRouteConfig {
  title: string;
  path: string;
  exact: boolean;
  component: any;
  auth?: boolean;
  layout?: boolean;
  isNavMenu?: boolean;
  navIcon?: any;
  permissions?: string;
  children?: IRouteConfig[];
}

export interface IStorageItem {
  key: string | null;
  value: any;
}
