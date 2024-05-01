"use client";

import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs';
import { UploadButton } from '~/utils/uploadthings';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const router =useRouter();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5 bg-slate-600'>
    
      <Link href='/'>CasadoCanto</Link>
      <Link href='/photos'>Fotografias</Link>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      
    </nav>
  );
};

export default Navbar;