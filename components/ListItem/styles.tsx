import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  font-size: 18px;
  gap: 20px;
  list-style: none;

  > :last-child {
    margin-left: auto;
  }

  &:nth-child(even) {
    background: #f7f7fa;
  }
`;
