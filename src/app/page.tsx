import {Button} from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  //server component by default
  return (
    <div className="m-4">
      <h1>
        Home page content
      </h1>
    </div>
  );
}
