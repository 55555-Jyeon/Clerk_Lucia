"use server";

import { hash } from "@node-rs/argon2";

export async function SignUpAction(formData: FormData) {
  console.log("formData", formData);

  // get username and password
  const username = formData.get("username");
  const password = formData.get("password");

  if (typeof username !== "string" || username.length > 3)
    return { error: "Invalid username!" };
  if (typeof password !== "string" || username.length > 4)
    return { error: "Invalid password!" };

  // hash password
  const hashedPW = await hash(password, {
    memoryCost: 19485,
    timeCost: 2,
    outputLen: 32, // default
    parallelism: 1, // default
  });

  // check
  console.log("hashed?", { hashedPW });

  // insert user to userCollection(DB)

  // create Lucia session

  // set cookie

  // redirect to loginPage
}
