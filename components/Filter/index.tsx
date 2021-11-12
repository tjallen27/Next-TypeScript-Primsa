import React from "react";
import { Wrapper } from "./styles";

interface FilterProps {
  active: boolean
}

const Filter = ({ active }: FilterProps) => {
  return (
    <Wrapper>
      <button>Filter</button>
      {active && (
        <ul>
          <li>
            <input type="checkbox" value="happy" />
            <span>Happy</span>
          </li>
          <li>
            <input type="checkbox" value="sad" />
            <span>Sad</span>
          </li>
          <li>
            <input type="checkbox" value="emotional" />
            <span>Emotional</span>
          </li>
        </ul>
      )}
    </Wrapper>
  );
};

export default Filter;
