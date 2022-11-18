import { Handlers } from "$fresh/server.ts";
// import { User } from "../../../db/models/User.ts";
import prisma from "../../../db/client.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";
import { encode, Hash } from "https://deno.land/x/checksum@1.2.0/mod.ts";

interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const handler: Handlers = {
  POST: async (_req, _ctx) => {
    const redirectTo = new URL(_req.url).origin + "/auth/register";
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
