import Link from "next/link";

export default function MainPage() {
  return (
    <div className={"flex flex-col gap-3 items-center"}>
      <h1>Welcome to the main page</h1>
      <Link href="/typography">
        <button className={"rounded-md border px-4 border-black"}>
          typography
        </button>
      </Link>
      <Link href="/layout">
        <button className={"rounded-md border px-4 border-black"}>
          layout
        </button>
      </Link>
      <Link href="/components">
        <button className={"rounded-md border px-4 border-black"}>
          components
        </button>
      </Link>
      <Link href="/primitives">
        <button className={"rounded-md border px-4 border-black"}>
          primitives
        </button>
      </Link>
    </div>
  );
}
