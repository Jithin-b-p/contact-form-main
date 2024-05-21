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
  border: 0.2px solid hsl(var(--clr-neutral-300));
  border-radius: 5px;

  & > input:checked {
    background-color: hsl(var(--clr-primary-100));
  }
`;
const Label = styled.label`
  cursor: pointer;
  @media screen and (max-width: 26.5625em) {
    & {
      font-size: 0.825rem;
    }
  }
`;

export default CustomRadioField;
