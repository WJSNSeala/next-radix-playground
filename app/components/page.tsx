import Link from "next/link";

export default function TypographyPage() {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <Link href="/components/aspect-ratio">
        <button className={"rounded-md border px-4 border-black"}>
          Aspect Ratio
        </button>
      </Link>
      <Link href="/components/avatar">
        <button className={"rounded-md border px-4 border-black"}>
          Avatar
        </button>
      </Link>
      <Link href="/components/badge">
        <button className={"rounded-md border px-4 border-black"}>badge</button>
      </Link>
      <Link href="/components/Button">
        <button className={"rounded-md border px-4 border-black"}>
          Button
        </button>
      </Link>
      <Link href="/components/callout">
        <button className={"rounded-md border px-4 border-black"}>
          callout
        </button>
      </Link>
    </div>
  );
}
