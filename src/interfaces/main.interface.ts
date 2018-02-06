export interface ISignUpProcess {
    firstName: string;
    lastName: string;
    // email: string;
    // password: string;
    passwordConfirmation: string;

    signUp();
}

export interface ISignInProcess {
    username: string,
    email: string;
    password: string;
    onSuccessEmitter;
    onErrorEmitter;

    resetPassword();

    signIn();

    signInWithExternalProvider(provider: any);

    signInWithGoogle();

    signInWithFaceBook();

    signInWithTwitter();

    signInWithGithub();

    signInWithPhoneNumber();
}