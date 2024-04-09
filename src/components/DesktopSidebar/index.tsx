import { List, Divider, Toolbar } from "@mui/material";
import { useAtomValue } from "jotai";
import { ExpandDesktopSidebar } from "../../atoms";
import { Drawer } from "./utils";
import SidebarButton from "./SidebarButton";
import { SidebarActions } from "./settings";
import { Add, QueueMusic } from "@mui/icons-material";

export default function DesktopSidebar() {
  const open = useAtomValue(ExpandDesktopSidebar);

  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar></Toolbar>
      <List>
        {SidebarActions.map((action, index) => (
          <SidebarButton key={index} action={action} open={open} />
        ))}
      </List>
      <Divider />
      {open && (
        <List>
          <SidebarButton
            open={open}
            action={{
              name: "New Playlist",
              icon: <Add />,
              target: "/library/playlists/new",
            }}
          />
          <SidebarButton
            open={open}
            action={{
              name: "Playlist 1",
              icon: <QueueMusic />,
              target: "/library/playlists/playlist_id_goes_here",
            }}
          />
        </List>
      )}
    </Drawer>
  );
}
