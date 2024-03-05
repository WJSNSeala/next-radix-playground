import Link from "next/link";

function ComponentLink({ href }: { href: string }) {
  return (
    <Link href={"/components/" + href}>
      <button className={"rounded-md border px-4 border-black w-32"}>
        {href}
      </button>
    </Link>
  );
}

export default function TypographyPage() {
  const components = [
    "aspect-ratio",
    "avatar",
    "badge",
    "button",
    "callout",
    "card",
    "checkbox",
    "context-menu",
    "dialog",
    "dropdown-menu",
    "hover-card",
    "icon-button",
    "inset",
    "popover",
    "radio-group",
    "scroll-area",
  ];

  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <h1>Components</h1>
      <div className={"flex flex-col gap-3"}>
        {components.map((component) => (
          <ComponentLink key={component} href={component} />
        ))}
      </div>
    </div>
  );
}
