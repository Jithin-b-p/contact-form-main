import styled from "@emotion/styled";
import { FieldSetPropsTypes } from "../types/types";

function Fieldset({ legend, children }: FieldSetPropsTypes) {
  return (
    <Container>
      <Legend>{legend}</Legend>
      {children}
    </Container>
  );
}

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block-start: 1.5rem;
  border: 0;
`;
const Legend = styled.legend`
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  color: hsl(var(--clr-neutral-300));
`;
export default Fieldset;
