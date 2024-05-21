import { z } from "zod";

export const ContactFormSchema = z.object({
  firstname: z.string().min(1, { message: "This field is required" }),
  lastname: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  querytype: z
    .string()
    .nullable()
    .refine((val) => val !== null, { message: "Please select a query type" }),
  message: z.string().min(1, { message: "This field is required" }),
  consent: z.boolean().refine((val) => val === true, {
    message: "To submit this form, please consent to be contacted",
  }),
});
