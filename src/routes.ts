import {
  MdHome,
  MdNotifications,
  MdEmail,
  MdSettings,
  MdLogout,
  MdOutlineCreate,
  MdDeleteForever
} from "react-icons/md";

import {
  CreateMessage,
  Home,
  Logout,
  Messages,
  Notifications,
  RemovedMessages
} from "./pages";

export enum RoutePath {
  LOG_IN = "/logIn",
  FORGOT_PASSWORD = "/forgotPassword",
  REGISTER = "/register",
  HOME = "/",
  MESSAGES = "/messages",
  INBOX = "/inbox",
  NOTIFICATIONS = "/notifications",
  SETTINGS = "/settings",
  CREATE_MESSAGE = "/createMessage",
  REMOVED_MESSAGES = "/deletedMessages",
  LOG_OUT = "/logOut"
}

export const defaultSidebarNavItems: SidebarNavItem[] = [
  {
    name: "home",
    path: RoutePath.HOME,
    icon: MdHome
  },
  {
    name: "notifications",
    path: RoutePath.NOTIFICATIONS,
    icon: MdNotifications
  },
  {
    name: "inbox",
    path: RoutePath.MESSAGES,
    icon: MdEmail
  },
  {
    name: "settings",
    path: RoutePath.SETTINGS,
    icon: MdSettings
  },
  {
    name: "logout",
    path: RoutePath.LOG_OUT,
    icon: MdLogout
  }
];

export const messagesSidebarNavItems: SidebarNavItem[] = [
  {
    name: "Home",
    path: RoutePath.HOME,
    icon: MdHome
  },
  {
    name: "Create message",
    path: RoutePath.CREATE_MESSAGE,
    icon: MdOutlineCreate
  },
  {
    name: "Check messages",
    path: RoutePath.MESSAGES,
    icon: MdEmail
  },
  {
    name: "Removed messaged",
    path: RoutePath.REMOVED_MESSAGES,
    icon: MdDeleteForever
  }
];

export const routes: Route[] = [
  {
    name: "home",
    path: RoutePath.HOME,
    component: Home,
    sidebarNavItems: defaultSidebarNavItems
  },
  {
    name: "logout",
    path: RoutePath.LOG_OUT,
    component: Logout
  },
  {
    name: "notifications",
    path: RoutePath.NOTIFICATIONS,
    component: Notifications,
    sidebarNavItems: defaultSidebarNavItems
  },
  {
    name: "messages",
    path: RoutePath.MESSAGES,
    component: Messages,
    sidebarNavItems: messagesSidebarNavItems
  },
  {
    name: "createMessage",
    path: RoutePath.CREATE_MESSAGE,
    component: CreateMessage,
    sidebarNavItems: messagesSidebarNavItems
  },
  {
    name: "removedMessages",
    path: RoutePath.REMOVED_MESSAGES,
    component: RemovedMessages,
    sidebarNavItems: messagesSidebarNavItems
  }
];

export interface Route {
  name: string;
  path: RoutePath;
  sidebarNavItems?: SidebarNavItem[];
  component: React.ComponentType;
}

export interface SidebarNavItem {
  name: string;
  path: string;
  icon: React.ComponentType;
}
