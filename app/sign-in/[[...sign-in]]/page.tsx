import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-12">
      <SignIn path="/sign-in" />
    </div>
  );
}
