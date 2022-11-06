import { Layout } from "../../components/Layout.tsx";

export default function RegisterPage() {
  return (
    <Layout pageTitle="Register">
      <div class="container mx-auto max-w-7xl">
        <div class="p-8 bg-white mt-12">
          <div class="m-0 pb-6 mb-2 border-b-1 border-solid border-gray-300">
            <h2 class="text-2xl text-gray-800">
              Register
            </h2>
          </div>
          <div class="">
            <form action="/api/auth/register" method="POST">
              <InputField name="name" />
              <InputField name="email" type="email" />
              <InputField name="password" type="password" />
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

const InputField = (
  { name, type = "text" }: { name: string; type?: string },
) => {
  return (
    <fieldset>
      <label class="py-4 block capitalize" htmlFor={name}>
        {name}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        class="w-full p-3 border border-solid border-gray-300 overflow-visible m-0"
        autocomplete="on"
      />
    </fieldset>
  );
};

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
