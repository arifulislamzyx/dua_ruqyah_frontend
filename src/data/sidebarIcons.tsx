import {
  Bookmark,
  BookOpen,
  CopyPlus,
  Home,
  LayoutDashboard,
  Lightbulb,
  MessagesSquare,
} from "lucide-react";
import { ReactNode } from "react";

export interface IASidebar {
  icon: ReactNode;
  id?: number;
}

export const sidebarIcon = [
  {
    id: 1,
    icon: <Home size={20} />,
  },
  {
    id: 2,
    icon: <LayoutDashboard size={20} />,
  },
  {
    id: 3,
    icon: <Lightbulb size={20} />,
  },
  {
    id: 4,
    icon: <Bookmark size={20} />,
  },
  {
    id: 5,
    icon: <CopyPlus size={20} />,
  },
  {
    id: 6,
    icon: <MessagesSquare size={20} />,
  },
  {
    id: 7,
    icon: <BookOpen size={20} />,
  },
];
