import React, { JSX } from 'react';

import { ArtBoard } from '../../widgets/art-board/art-board';
import { SignUpArea } from '../../widgets/signup-area/signup-area';


export const SignupPage = () => {
  return (
    <>
        <SignUpArea />
        <ArtBoard title = {'Sign Up to name'} />
    </>
  );
}

export default SignupPage;