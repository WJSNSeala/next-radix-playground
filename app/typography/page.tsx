import Link from "next/link";

export default function TypographyPage() {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <Link href="/typography/text">
        <button className={"rounded-md border px-4 border-black"}>text</button>
      </Link>
      <Link href="/typography/heading">
        <button className={"rounded-md border px-4 border-black"}>
          heading
        </button>
      </Link>
    </div>
  );
}
