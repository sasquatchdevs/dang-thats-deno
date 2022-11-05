import { ComponentChildren } from "https://esm.sh/v96/preact@10.11.0/src/index.d.ts";

type Props = {
  href: string;
  label: string;
  children?: ComponentChildren;
};

export function NavLink({ href, label, children }: Props) {
  return (
    <a
      class="group px-4 flex flex-col items-center justify-center hover:underline"
      href={href}
    >
      {children}
      {label}
    </a>
  );
}
