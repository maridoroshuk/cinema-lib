interface ISignUp {
  type: 'signUp';
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface ILogIn {
  type: 'logIn';
  email: string;
  password: string;
}

type TAuth = ISignUp | ILogIn;

type TAuthType = ISignUp['type'] | ILogIn['type'];
