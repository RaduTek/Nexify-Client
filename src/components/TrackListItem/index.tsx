import { Audiotrack, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function TrackListItem({ last }: { last?: boolean }) {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton sx={{ p: 1.5 }}>
            <MoreVert />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              variant="rounded"
              sx={{ width: "56px", height: "56px", mr: 2 }}
            >
              <Audiotrack fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Track Name" secondary="Track Artist - 1:23" />
        </ListItemButton>
      </ListItem>
      {!last && <Divider />}
    </>
  );
}
