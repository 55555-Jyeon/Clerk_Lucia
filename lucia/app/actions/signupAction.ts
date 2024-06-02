"use server";

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

  // insert user to userCollection(DB)

  // create Lucia session

  // set cookie

  // redirect to loginPage
}
