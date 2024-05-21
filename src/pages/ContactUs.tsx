import styled from "@emotion/styled";

import Fieldset from "../components/Fieldset";
import Field from "../components/Field";

function ContactUs() {
  return (
    <Container>
      <Fieldset legend="Contact Us">
        <RowContainer>
          <Field label="First Name" htmlFor="firstname">
            <input id="firstname" type="text" name="firstname" />
          </Field>
          <Field label="Second Name" htmlFor="secondname">
            <input id="secondname" type="text" name="secondname" />
          </Field>
        </RowContainer>
        <Field label="Email Address" htmlFor="email">
          <input id="email" type="text" name="email" />
        </Field>
        <RadioContainer>
          <span>Query Type</span>
          <RowContainer>
            <Field label="General Enquiry" htmlFor="generalenquiry" row={true}>
              <input
                id="generalenquiry"
                type="radio"
                name="querytype"
                value="generalenquiry"
              />
            </Field>
            <Field label="Support Request" htmlFor="supportrequest" row={true}>
              <input
                id="supportrequest"
                type="radio"
                name="querytype"
                value="supportrequest"
              />
            </Field>
          </RowContainer>
        </RadioContainer>
        <Field label="Message" htmlFor="message">
          <textarea id="message" name="message"></textarea>
        </Field>

        <Field
          label="I consent to being contacted by the team"
          htmlFor="consent"
          row={true}
        >
          <input id="consent" type="checkbox" name="consent" value="true" />
        </Field>

        <Field>
          <button>Submit</button>
        </Field>
      </Fieldset>
    </Container>
  );
}

const Container = styled.section`
  width: min(90%, 50rem);
  padding: 2rem;
  background: hsl(var(--clr-neutral-100));
  border-radius: 10px;
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & div {
    flex-basis: 50%;
  }
`;
const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ContactUs;
