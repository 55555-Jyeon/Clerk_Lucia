import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-12">
      <SignUp path="/sign-up" />
    </div>
  );
}
