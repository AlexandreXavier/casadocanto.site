import { SignIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = async () => {

  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
    <div>Galeria</div>
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignIn>
        <UserButton></UserButton>
      </SignIn>

    </div>
  </nav>
  );
};

export default Navbar;