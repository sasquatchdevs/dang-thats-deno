import { PageProps } from "$fresh/server.ts";
import { InputField } from "../../components/forms/InputField.tsx";
import { Layout } from "../../components/Layout.tsx";

export default function LoginPage(
  props: PageProps<{ errors: Record<string, string> }>,
) {
  return (
    <Layout pageTitle="Login">
      <div class="container mx-auto max-w-7xl pt-12">
        <div class="p-8 bg-white">
          <div class="m-0 pb-6 mb-2 border-b-1 border-solid border-gray-300">
            <h2 class="text-2xl text-gray-800">
              Login
            </h2>
          </div>
          <div class="">
            <form method="POST" action="/api/auth/login">
              <InputField name="email" error={props?.data?.errors?.email} />
              <InputField
                name="password"
                type="password"
                error={props?.data?.errors?.password}
              />
              <button
                type="submit"
                class="border-none bg-yellow-400 text-gray-800 font-semibold w-full p-3 mt-6"
              >
                Login →
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
