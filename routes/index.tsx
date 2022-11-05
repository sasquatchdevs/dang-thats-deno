import { Head } from "$fresh/runtime.ts";
import { NavigationBar } from "../components/NavigationBar.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="">
        <NavigationBar />
        hello world
      </div>
    </>
  );
}
