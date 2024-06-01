import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <SignUp
        path="/sign-up"
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
