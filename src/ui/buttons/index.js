import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.bgColor || "transparent"};
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 3px 1px rgb(220, 220, 220);
  margin: 2rem;
  padding: ${(props) => props.padding || "0.25rem 1.5rem"};
  color: ${(props) => props.color || "grey"};
  font-size: ${(props) => props.size || "1rem"};
`;

export { Button };
