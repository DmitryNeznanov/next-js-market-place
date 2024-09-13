export async function signup(formData: FormData) {
  const validatedFeilds = {
    email: formData.get("email"),
    password: formData.get("password"),
  }
}
