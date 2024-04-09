import {
  Album,
  AlbumOutlined,
  FavoriteOutlined,
  Home,
  HomeOutlined,
  LibraryMusic,
  LibraryMusicOutlined,
} from "@mui/icons-material";

export const SidebarCompactWidth = "64px";
export const SidebarExpandedWidth = "240px";

export const SidebarActions = [
  {
    name: "Home",
    icon: <HomeOutlined />,
    activeIcon: <Home />,
    target: "/home",
    end: true,
  },
  {
    name: "Library",
    icon: <LibraryMusicOutlined />,
    activeIcon: <LibraryMusic />,
    target: "/library",
  },
  {
    name: "Albums",
    icon: <AlbumOutlined />,
    activeIcon: <Album />,
    target: "/library/albums",
  },
  {
    name: "Favorites",
    icon: <FavoriteOutlined />,
    target: "/library/favorites",
  },
];
