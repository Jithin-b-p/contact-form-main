import styled from "@emotion/styled";

function CustomToast() {
  return (
    <ToastContainer>
      <ToastTitle>
        <img
          style={{ display: "inline" }}
          src="/icon-success-check.svg"
          width={20}
          height={20}
        />
        <Toastspan>Message Sent!</Toastspan>
      </ToastTitle>

      <ToastDescription>
        Thanks for completing the form. We'll be in touch soon!
      </ToastDescription>
    </ToastContainer>
  );
}

const ToastContainer = styled.div`
  padding: 1rem;
  background-color: hsl(var(--clr-neutral-300));
  color: hsl(var(--clr-neutral-100));
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const ToastTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Toastspan = styled.span`
  font-weight: var(--fw-bold);
`;
const ToastDescription = styled.p`
  font-size: 0.8rem;
`;

export default CustomToast;
