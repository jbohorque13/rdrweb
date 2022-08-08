
declare interface ISignInVariables {
  jwtToken: string;
}

declare interface ISignInResponse {
  success: boolean;
  user?: IUser;
}

declare interface ISignOutResponse {
  success: boolean;
}

declare interface AuthState {
  user?: Entity.IAdmin;
  isSignedIn: boolean;
  role?: string;
}

declare interface AuthContext extends AuthState{
  // Management
  signIn: (params: ISignInVariables) => Promise<SignInResult | null>;
  signOut: () => Promise<ISignOutResponse | null>;
  // Helpers
  loadingCurrentUser: boolean;
}
