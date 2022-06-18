import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Badge,
  useMantineTheme,
  Text,
  Title,
} from "@mantine/core";
import "./App.css";
import IceCream from "./IceCream";

function App() {
  let [iceCreams, setIceCreams] = useState([]);
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  async function getIceCream() {
    let response = await fetch(
      "https://polar-everglades-83135.herokuapp.com/ice_cream/"
    );
    response = await response.json();
    setIceCreams(response);
  }

  async function clickHandler(e, entry) {}

  useEffect(() => {
    getIceCream();
  }, []);

  let iceCreamCards = iceCreams.map((entry) => {
    return <IceCream propsEntry={entry} key={entry.id} />;
  });
  return (
    <div>
      <header>
        <h1>Ice Cream</h1>
      </header>
      {iceCreamCards}
    </div>
  );
}

export default App;
