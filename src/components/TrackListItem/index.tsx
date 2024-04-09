import { MoreVert } from "@mui/icons-material";
import {
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function TrackListItem() {
  return (
    <ListItem
      secondaryAction={
        <IconButton sx={{ p: 1.5 }}>
          <MoreVert />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary="Track Name" secondary="Track Artist - 1:23" />
      </ListItemButton>
    </ListItem>
  );
}
