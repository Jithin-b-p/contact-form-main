import styled from "@emotion/styled";
import { FieldPropsTypes, StyledContainerProps } from "../types/types";

function Field({ label, htmlFor, error, row, children }: FieldPropsTypes) {
  return (
    <Container row={row}>
      {label && !row && (
        <Label htmlFor={htmlFor}>
          {label} <Starspan>*</Starspan>
        </Label>
      )}
      {children}
      {error && <Error>{error}</Error>}
      {label && row && <Label htmlFor={htmlFor}>{label}</Label>}
    </Container>
  );
}

const Container = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
`;
const Label = styled.label``;
const Error = styled.div``;
const Starspan = styled.span`
  color: hsl(var(--clr-primary-success));
`;

export default Field;
