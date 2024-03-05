import { Theme } from "@radix-ui/themes";
import Link from "next/link";

export default function TypographyPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <h1>Welcome to the BUtton page</h1>
      <Link href={"/components"}>
        <button className={"rounded-md border px-4 border-black w-32"}>
          components
        </button>
      </Link>
      {children}
    </div>
  );
}
