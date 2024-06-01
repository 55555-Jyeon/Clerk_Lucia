import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="container w-screen min-w-full h-20 pt-4 shadow-md bg-glass-morphism backdrop-blur">
      <div className="grid grid-flow-row-dense grid-cols-5">
        <div className="col-span-4 mt-2">
          <Link href={"/"} className="m-16 text-xl font-semibold text-gray-800">
            Auth Explained 🔑
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center">
            <li className="mt-2">
              <SignedIn>
                <UserButton showName />
              </SignedIn>
            </li>
            <li>
              <SignedOut>
                <SignInButton>
                  <button className="btn btn-primary">sign in</button>
                </SignInButton>
              </SignedOut>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
