export type ContactFormState = {
  success: boolean;
  error: string | null;
};

export const contactFormInitialState: ContactFormState = {
  success: false,
  error: null,
};
