import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "react-hot-toast";

import Fieldset from "../components/Fieldset";
import Field from "../components/Field";
import { ContactFormSchema } from "../schema/schemas";
import CustomRadioField from "../components/CustomradioField";
import CustomToast from "../components/CustomToast";

type ContactFormTypes = z.infer<typeof ContactFormSchema>;

function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormTypes>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormTypes> = (data) => {
    console.log(data);
    toast.custom(<CustomToast />);
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Fieldset legend="Contact Us">
        <RowContainer>
          <Field
            label="First Name"
            htmlFor="firstname"
            error={errors.firstname?.message}
          >
            <Input
              error={!!errors.firstname}
              {...register("firstname")}
              id="firstname"
              type="text"
            />
          </Field>
          <Field
            label="Last Name"
            htmlFor="lastname"
            error={errors.lastname?.message}
          >
            <Input
              error={!!errors.lastname}
              id="lastname"
              type="text"
              {...register("lastname")}
            />
          </Field>
        </RowContainer>
        <Field
          label="Email Address"
          htmlFor="email"
          error={errors.email?.message}
        >
          <Input
            error={!!errors.email}
            id="email"
            type="text"
            {...register("email")}
          />
        </Field>
        <Field label="Query Type" error={errors.querytype?.message}>
          <RowContainer>
            <CustomRadioField label="General Enquiry" htmlFor="generalenquiry">
              <input
                id="generalenquiry"
                type="radio"
                {...register("querytype")}
                value="generalenquiry"
              />
            </CustomRadioField>
            <CustomRadioField label="Support Request" htmlFor="supportrequest">
              <input
                id="supportrequest"
                type="radio"
                {...register("querytype")}
                value="supportrequest"
              />
            </CustomRadioField>
          </RowContainer>
        </Field>
        <Field
          label="Message"
          htmlFor="message"
          error={errors.message?.message}
        >
          <Textarea
            error={!!errors.message}
            id="message"
            {...register("message")}
            draggable={false}
          ></Textarea>
        </Field>

        <Field
          label="I consent to being contacted by the team *"
          htmlFor="consent"
          row={true}
          error={errors.consent?.message}
        >
          <input id="consent" type="checkbox" {...register("consent")} />
        </Field>

        <Field>
          <Button>Submit</Button>
        </Field>
      </Fieldset>
      <Toaster />
    </FormContainer>
  );
}

const FormContainer = styled.form`
  width: min(90%, 40rem);
  padding: 2rem;
  background: hsl(var(--clr-neutral-100));
  border-radius: 10px;

  @media screen and (max-width: 40em) {
    padding: 1rem;
  }
`;
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  & div {
    flex-basis: 50%;
  }

  @media screen and (max-width: 40em) {
    flex-direction: column;
  }
`;
const Input = styled.input<{ error: boolean }>`
  border-color: ${(props) =>
    props.error ? "hsl(var(--clr-primary-failure))" : "black"};

  :hover {
    border-color: ${(props) =>
      props.error
        ? "hsl(var(--clr-primary-failure))"
        : "hsl(var(--clr-primary-success))"};
  }
`;

const Textarea = styled.textarea<{ error: boolean }>`
  border-color: ${(props) =>
    props.error ? "hsl(var(--clr-primary-failure))" : "black"};

  height: 8rem;
  max-width: 100%;

  @media screen and (max-height: 40em) {
    height: 12rem;
  }
`;

const Button = styled.button`
  padding: 1rem;
  font-weight: var(--fw-bold);
  background-color: hsl(var(--clr-primary-success));
  color: hsl(var(--clr-neutral-100));
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  transition: all 0.3s;

  :hover {
    background-color: hsl(171, 83%, 14%);
  }
`;
export default ContactUs;
