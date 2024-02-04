import React, { JSX } from 'react';

import { ArtBoard } from './../../widgets/art-board/art-board';
import { ConfirmEmailArea } from './../../widgets//confirmEmail-area/confirmEmail-area';


export const ConfirmEmailPage = () => {
  return (
    <>
        <ConfirmEmailArea />
        <ArtBoard title = {'Sign Up to name'} />
    </>
  );
}

export default ConfirmEmailPage;