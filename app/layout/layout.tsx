export default function LayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <h1>Welcome to the Layout page</h1>
      {children}
    </div>
  );
}
