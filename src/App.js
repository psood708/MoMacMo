import { Amplify } from 'aws-amplify';
import ImageLooker from './pages/ImageLooker';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <>
      <ImageLooker/>
      <div className='flex items-center'>
      <button onClick={signOut}
                className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                
                Sign Out
            </button> 
            </div>
    </>
  );
}

export default withAuthenticator(App);