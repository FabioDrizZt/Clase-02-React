import styled from "styled-components";

const Title = styled.h1`
  font-weight: bold;
  color: deeppink;
  text-align: center;
  font-size: 2rem;
`;

const StyledButton = styled.button`
  font-size: 1.5em;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e74c3c;
    transform: scale(1.1);
  }
`;

export default function AnimatedButton() {
  return (
    <div>
      <Title>Botoncito animado !</Title>
      <StyledButton onClick={() => console.log("click")}>
        Click me!
      </StyledButton>
    </div>
  );
}
