import { List } from "@mui/material";
import TrackListItem from "../components/TrackListItem";

export default function HomePage() {
  return (
    <>
      <div>Home</div>
      <List>
        <TrackListItem />
        <TrackListItem />
        <TrackListItem />
        <TrackListItem />
        <TrackListItem />
      </List>
    </>
  );
}
