import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/Layout.tsx";
import { InputField } from "../../components/forms/InputField.tsx";

export default function RegisterPage(
  props: PageProps<{ errors: Record<string, string> }>,
) {
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
            <form method="POST" action="/api/auth/register">
              {/* <InputField name="name" error={props?.data?.errors?.name} /> */}
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
              {/* <InputField name="confirmPassword" type="password" /> */}
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
