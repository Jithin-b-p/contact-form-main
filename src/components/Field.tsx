import styled from "@emotion/styled";
import { FieldPropsTypes, StyledContainerProps } from "../types/types";

function Field({ label, htmlFor, error, row, children }: FieldPropsTypes) {
  return (
    <div>
      <Container row={row}>
        {label && !row && (
          <Label htmlFor={htmlFor}>
            {label} <Starspan>*</Starspan>
          </Label>
        )}
        {children}
        {label && row && <Label htmlFor={htmlFor}>{label}</Label>}
      </Container>
      {error && <Error role="alert">{error}</Error>}
    </div>
  );
}

const Container = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  gap: 0.625rem;
`;
const Label = styled.label``;
const Error = styled.span`
  margin-block-start: 0.5rem;
  display: block;
  color: hsl(var(--clr-primary-failure));
`;
const Starspan = styled.span`
  color: hsl(var(--clr-primary-success));
`;

export default Field;
