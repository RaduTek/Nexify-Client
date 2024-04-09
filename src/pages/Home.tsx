import { List } from "@mui/material";
import TrackListItem from "../components/TrackListItem";
import PageHeader from "../components/PageHeader";

export default function HomePage() {
  return (
    <>
      <PageHeader title="Home" />
      <List>
        {[...Array(15)].map((value, index) => (
          <TrackListItem key={index} />
        ))}
      </List>
    </>
  );
}
