import React from "react";
import { Wrapper } from "./styles";

interface ListProps {
  children: React.ReactNode
}

const List = ({ children }: ListProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default List;
