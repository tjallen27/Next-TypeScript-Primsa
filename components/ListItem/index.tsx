import React from "react";
import { Wrapper } from "./styles";

interface ListItemProps {
  children: React.ReactNode
}

const ListItem = ({ children }: ListItemProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ListItem;
