export const EMAIL_REGEX = /\S+@\S+\.\S+/;

export const validateEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};
