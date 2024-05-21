import styled from "@emotion/styled";
import { CustomRadioFieldProps } from "../types/types";

function CustomRadioField({ label, htmlFor, children }: CustomRadioFieldProps) {
  return (
    <Container className="custom-radio-field">
      {children}
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;

  & > input:checked {
    background-color: hsl(var(--clr-primary-100));
  }
`;
const Label = styled.label`
  cursor: pointer;
`;

export default CustomRadioField;
