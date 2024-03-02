export default function TypographyPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <h1>Welcome to the BUtton page</h1>
      {children}
    </div>
  );
}
