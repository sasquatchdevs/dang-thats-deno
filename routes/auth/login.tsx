import { Layout } from "../../components/Layout.tsx";

export default function LoginPage() {
  return (
    <Layout pageTitle="Login">
      <div class="container mx-auto max-w-7xl">
        <div class="p-8">
          <h2 class="text-6xl text-gray-800 my-12">
            Register
          </h2>
          <div class="-ml-8 -mt-8">
            <form>
              <label htmlFor="name">
                <input type="text" name="name" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
