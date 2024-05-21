import styled from "@emotion/styled";
import { FieldPropsTypes, StyledContainerProps } from "../types/types";

function CustomRadioField({
  label,
  htmlFor,
  error,
  row,
  children,
}: FieldPropsTypes) {
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
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  gap: 0.4rem;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
`;
const Label = styled.label``;
const Error = styled.span`
  display: block;
  color: hsl(var(--clr-primary-failure));
`;
const Starspan = styled.span`
  color: hsl(var(--clr-primary-success));
`;

export default CustomRadioField;
