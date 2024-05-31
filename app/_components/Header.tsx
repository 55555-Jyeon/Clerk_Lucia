import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container w-screen min-w-full h-20 pt-4 shadow-md">
      <div className="grid grid-flow-row-dense grid-cols-4">
        <div className="col-span-3 mt-2">
          <Link href={"/"} className="m-16 text-xl font-semibold text-gray-800">
            Auth Explained 🔑
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <SignedIn>
                <UserButton showName />
              </SignedIn>
            </li>
            <li className="w-32 h-12 bg-sky-200 rounded-lg flex justify-center">
              <SignedOut>
                <SignInButton>SignIn</SignInButton>
              </SignedOut>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
