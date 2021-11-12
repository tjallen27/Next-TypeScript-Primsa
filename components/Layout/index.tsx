import React from "react";
import Link from "next/link";
import { Wrapper, List, ListItem } from "./styles";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Wrapper>
        <List>
          <ListItem>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/profile">
              <a>Profile</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/">
              <a>a</a>
            </Link>
          </ListItem>
        </List>
      </Wrapper>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
