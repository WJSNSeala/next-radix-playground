import Link from "next/link";

export default function TypographyPage() {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <Link href="/layout/box">
        <button className={"rounded-md border px-4 border-black"}>Box</button>
      </Link>
      <Link href="/layout/flex">
        <button className={"rounded-md border px-4 border-black"}>Flex</button>
      </Link>
      <Link href="/layout/container">
        <button className={"rounded-md border px-4 border-black"}>
          Container
        </button>
      </Link>
      <Link href="/layout/section">
        <button className={"rounded-md border px-4 border-black"}>
          Section
        </button>
      </Link>
    </div>
  );
}
