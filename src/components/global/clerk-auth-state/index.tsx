import React from "react";
import {
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { User2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

function ClerkAuthState({}: Props) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignInClick = () => {
    setIsLoading(true);
    // Add a slight delay to simulate loading or use actual logic.
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <ClerkLoading>
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </ClerkLoading>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <SignedOut>
            <SignInButton>
              <Button
                onClick={handleSignInClick}
                className="rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70"
              >
                <User2 className="mr-2 h-4 w-4" />
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </>
      )}
    </>
  );
}

export default ClerkAuthState;
