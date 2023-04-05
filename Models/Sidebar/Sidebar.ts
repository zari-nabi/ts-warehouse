interface SidebarMenuItem {
  name: string;
  menuTitle: string;
  type: number;
  menuIcon?: any;
  componentName?: string;
  url: string;
  open?: boolean;
}

export interface SidebarItems {
  menu: SidebarMenuItem;
  childs: SidebarItems[] | [];
}
