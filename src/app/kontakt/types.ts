export interface ContactFormState {
  success: boolean;
  error: string | null;
  fieldErrors: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
    captcha?: string;
  };
}
