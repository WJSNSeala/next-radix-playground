import Link from "next/link";

export default function TypographyPage() {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <Link href="/primitives/dialog">
        <button className={"rounded-md border px-4 border-black"}>
          Dialog
        </button>
      </Link>
      <Link href="/primitives/alert-dialog">
        <button className={"rounded-md border px-4 border-black"}>
          Alert Dialog
        </button>
      </Link>
    </div>
  );
}
