import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { ComponentChildren } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";
import { NavigationBar } from "./NavigationBar.tsx";

type Props = {
  pageTitle: string;
  children?: ComponentChildren;
};

export function Layout({ pageTitle = "Fresh", children }: Props) {
  return (
    <>
      <Head>
        <title>{pageTitle} | Dang that&apos;s Deno!</title>
      </Head>
      <main>
        <NavigationBar />
        <div>
          {children}
        </div>
      </main>
    </>
  );
}
