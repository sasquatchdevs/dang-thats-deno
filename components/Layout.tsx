import { asset, Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { ComponentChildren } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";
import { NavigationBar } from "./NavigationBar.tsx";
import { type User } from "supabase";

type Props = {
  pageTitle: string;
  children?: ComponentChildren;
  user?: User;
};

export function Layout({ pageTitle = "Fresh", children, user }: Props) {
  const isAuthenticated = !!user;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,600;1,300;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href={asset("style.css")} />
        <title>{pageTitle} | Dang that&apos;s Deno!</title>
      </Head>
      <main class=" h-screen">
        <NavigationBar isAuthenticated={isAuthenticated} />
        <div className="bg-gray-200 h-full">
          {children}
        </div>
      </main>
    </>
  );
}
