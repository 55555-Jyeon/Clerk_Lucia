import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <SignIn
        path="/sign-in"
        appearance={{
          elements: {
            rootBox: "mx-auto pt-16",
            formButtonPrimary: {
              backgroundColor: "#F0DF95",
            },
          },
        }}
      />
    </div>
  );
}
