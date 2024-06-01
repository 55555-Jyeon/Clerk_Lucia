import { currentUser } from "@clerk/nextjs/server";
import { SignUp } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  if (!user)
    return (
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto pt-16",
            formButtonPrimary: {
              backgroundColor: "#F0DF95",
            },
          },
        }}
      />
    );
  return (
    <main className="flex flex-col justify-center items-center gap-12 pt-16">
      <p className="text-2xl">
        👋 Hello, {user.emailAddresses[0].emailAddress}
      </p>
    </main>
  );
}
