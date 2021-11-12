import styled from "styled-components";

export const Wrapper = styled.button<{ variant: "primary" | "secondary" }>`
  display: inline;
  padding: 1rem;
  border: solid 0.0625rem blue;
  border-radius: 0.3125rem;
  background: ${({ variant }) => (variant === "primary" ? "blue" : "white")};
  color: ${({ variant }) => (variant === "primary" ? "white" : "blue")};
  outline: none;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.5rem;
  appearance: none;
  letter-spacing: -0.3px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;

  &:active {
    border: solid 0.0625rem lightblue;
  }
`;
