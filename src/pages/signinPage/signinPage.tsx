import React, { JSX } from 'react';

import { ArtBoard } from './../../widgets/art-board/art-board';
import { SignInArea } from './../../widgets/signin-area/signin-area';


export const SigninPage = () => {
  return (
    <>
        <SignInArea />
        <ArtBoard title = {'Sign in to name'} />
    </>
  );
}

export default SigninPage;