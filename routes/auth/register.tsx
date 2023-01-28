import { Handlers, PageProps } from "$fresh/server.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";
import { encode, Hash } from "https://deno.land/x/checksum@1.2.0/mod.ts";
import prisma from "../../db/client.ts";
import { Layout } from "../../components/Layout.tsx";
import { InputField } from "../../components/forms/InputField.tsx";

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const handler: Handlers = {
  POST: async (_req, _ctx) => {
    const redirectTo = new URL(_req.url).origin + "/auth/login";
    const formData = await _req.formData();
    const registerForm: IRegisterFormData | Partial<IRegisterFormData> = {};

    formData.forEach((val, key) => {
      Object.assign(registerForm, { [key]: val });
    });

    const validationError: Partial<IRegisterFormData> = {};
    if (!registerForm.name) {
      validationError["name"] = "Missing Name field";
    }
    if (!registerForm.email) {
      validationError["email"] = "Missing email field";
    }
    if (registerForm?.password !== registerForm?.confirmPassword) {
      validationError["password"] = "Passwords do no match";
    }

    if (Object.keys(validationError)?.length) {
      return _ctx.render({ errors: validationError });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(
      formData.get("password") as string,
      salt,
    );
    const hashEmail = new Hash("md5").digest(
      encode(formData.get("email") as string),
    ).hex();
    const avatar = `https://www.gravatar.com/avatar/${hashEmail}.jpg?s=400`;

    // const userCount = await prisma.user.count();
    const user = await prisma.user.create({
      data: {
        avatar,
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        hash: hashedPass,
        salt,
      },
    });

    console.log({ user });

    return Response.redirect(redirectTo);
  },
};

export default function RegisterPage(
  props: PageProps<{ errors: Record<string, string> }>,
) {
  console.log({ props });
  return (
    <Layout pageTitle="Register">
      <div class="container mx-auto max-w-7xl pt-12">
        <div class="p-8 bg-white ">
          <div class="m-0 pb-6 mb-2 border-b-1 border-solid border-gray-300">
            <h2 class="text-2xl text-gray-800">
              Register
            </h2>
          </div>
          <div class="">
            <form method="POST">
              <InputField name="name" error={props?.data?.errors?.name} />
              <InputField
                name="email"
                type="email"
                error={props?.data?.errors?.email}
              />
              <InputField
                name="password"
                type="password"
                error={props?.data?.errors?.password}
              />
              <InputField name="confirmPassword" type="password" />
              <button
                type="submit"
                class="border-none bg-yellow-400 text-gray-800 font-semibold w-full p-3 mt-6"
              >
                Register →
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// form.form(action="/register" method="POST")
//     h2 Register
//     label(for="name") Name
//     input(type="text" name="name")

//     label(for="email") Email
//     input(type="email" name="email")

//     label(for="password") Password
//     input(type="password" name="password")

//     label(for="password-confirm") Confirm Password
//     input(type="password" name="password-confirm")

//     input.button(type="submit" value="Register →")
