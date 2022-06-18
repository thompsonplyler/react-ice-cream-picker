import { useState, React } from "react";
import {
  Card,
  Button,
  Badge,
  useMantineTheme,
  Text,
  Title,
} from "@mantine/core";

export default function IceCream({ propsEntry }) {
  const [entry, setEntry] = useState(propsEntry);

  const clickHandler = async (clickEntry) => {
    let response = await fetch(
      `https://polar-everglades-83135.herokuapp.com/ice_cream/${clickEntry.id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          ...clickEntry,
          favorites: clickEntry.favorites++,
        }),
      }
    );
    response = await response.json();
    console.log("Response from PUT: ", response);
    setEntry(response);
  };

  return (
    <div>
      <Card shadow="sm">
        <Title>{propsEntry.flavor.charAt(0).toUpperCase()}</Title>
        <Badge>❤️ Likes: {propsEntry.favorites}</Badge>
        <Button key={propsEntry.id} onClick={() => clickHandler(propsEntry)}>
          ❤️ Add Like
        </Button>
      </Card>
    </div>
  );
}
