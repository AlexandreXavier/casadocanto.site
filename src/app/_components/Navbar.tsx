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
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <Link href='/photos'>Fotos</Link>
        <UploadButton
        appearance={{
          button({ ready, isUploading }) {
            return {
              fontSize: "1rem",
              color: "black",
              ...(ready && { color: "#ecfdf5" }),
              ...(isUploading && { color: "#d1d5db" }),
            };
          },
          container: {
            marginTop: "1rem",
          },
          allowedContent: {
            color: "#a1a1aa",
          },
        }}
        content={{
          button({ ready }) {
            if (ready) return <div>Carregar Fotos</div>;
      
            return "Preparado...";
          },
          allowedContent({ ready, fileTypes, isUploading }) {
            if (!ready) return "A verificar se é permitido";
            if (isUploading) return "Está a carregar";
            return `Fotos max 4MB: ${fileTypes.join(", ")}`;
          },
        }} 
        endpoint="imageUploader"
        onClientUploadComplete={()=>{router.refresh()}}
        />
        <UserButton afterSignOutUrl='/' />
      </SignedIn>
      
    </nav>
  );
};

export default Navbar;