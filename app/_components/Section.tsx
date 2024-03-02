import { Heading } from "@radix-ui/themes";

export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <Heading as="h2" size={"6"}>
        {title}
      </Heading>
      {children}
    </div>
  );
}
