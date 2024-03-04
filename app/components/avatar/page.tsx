import { Container, Heading, Avatar, Flex, Responsive } from "@radix-ui/themes";

type RSize = Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;

export default function AvatarPage() {
  return (
    <div className={"flex flex-col gap-3 items-center w-full"}>
      <Container>
        <Heading>Avatar</Heading>
        <Flex gap="2">
          <Avatar
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <Avatar color="indigo" fallback="A" />
        </Flex>
        <Heading>Avatar Radius</Heading>
        <Flex gap="2">
          <Avatar color="indigo" fallback="N" radius="none" />
          <Avatar color="indigo" fallback="S" radius="small" />
          <Avatar color="indigo" fallback="M" radius="medium" />
          <Avatar color="indigo" fallback="L" radius="large" />
          <Avatar color="indigo" fallback="F" radius="full" />
        </Flex>
        <Heading>Avatar Variant</Heading>
        <Flex gap="2">
          <Avatar color="indigo" fallback="SD" variant="solid" />
          <Avatar color="indigo" fallback="SF" variant="soft" size={"4"} />
        </Flex>
        <Heading>Avatar Size</Heading>
        <Flex gap="2">
          {Array.from({ length: 9 }).map((_, i) => (
            <Avatar
              key={i}
              color="indigo"
              fallback="A"
              size={(i + 1).toString() as RSize}
            />
          ))}
        </Flex>
        <Heading>Avatar Fallback</Heading>
        <Flex gap="2">
          <Avatar color="indigo" fallback="TEXT" variant="solid" />
          <Avatar
            color="indigo"
            fallback={<div>DIV</div>}
            variant="soft"
            size={"4"}
          />
        </Flex>
      </Container>
    </div>
  );
}
