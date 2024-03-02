import {
  Box,
  Checkbox,
  Code,
  Em,
  Flex,
  Grid,
  Heading,
  Kbd,
  Link,
  Strong,
  Text,
  Theme,
} from "@radix-ui/themes";

export default function HeadingPage() {
  return (
    <div className={"flex flex-col gap-5 w-full p-10"}>
      <h1>Heading</h1>
      <div className={"flex flex-col gap-2"}>
        <h1>AS</h1>
        <Heading as="h1">Level 1</Heading>
        <Heading as="h2">Level 2</Heading>
        <Heading as="h3">Level 3</Heading>
      </div>
    </div>
  );
}
