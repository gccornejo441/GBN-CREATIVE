type SignupStrapiThunkResponse = {
  id: number;
  email: string;
}

type SignupStrapiThunkBody = {
  email: string;
  password: string;
  username: string;
}

type ValidateTokenStrapiThunkResponse = SignupStrapiThunkResponse;

type ValidateTokenStrapiThunkBody = string;

type SignupThunkBody = {
  email: string;
  password: string;
  // standard fields
}

type SignupThunkResponse = {
  id: number;
  email: string;
  username: string;
  // other data here based on user model
}

type ResetPasswordThunkBody = {
  password: string;
  passwordConfirmation: string;
  code: string;
}






