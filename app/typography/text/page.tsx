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

export default function TextPage() {
  return (
    <div className={"flex flex-col gap-5 w-full p-10"}>
      <h1>Typography</h1>
      <p>
        This is a page dedicated to typography. You can use this page to test
        out different fonts, sizes, and colors.
      </p>
      <div className={"flex flex-col gap-2"}>
        <h1>API Reference</h1>
        <Text as="p">
          This is a <Strong>paragraph</Strong> element.
        </Text>
        <Text as="label">
          This is a <Strong>label</Strong> element.
        </Text>
        <Text as="div">
          This is a <Strong>div</Strong> element.
        </Text>
        <Text as="span">
          This is a <Strong>span</Strong> element.
        </Text>
      </div>
      <div className={"flex flex-col gap-1"}>
        <h1>API Reference</h1>
        <Text size="1">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="2">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="3">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="4">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="5">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="6">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="7">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="8">The quick brown fox jumps over the lazy dog.</Text>
        <Text size="9">The quick brown fox jumps over the lazy dog.</Text>
      </div>
      <div>
        <h1>Long content</h1>
        <Text as="p" mb="5" size="4">
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>

        <Text as="p" mb="5" size="3">
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>

        <Text as="p" size="2" color="gray">
          The goal of typography is to relate font size, line height, and line
          width in a proportional way that maximizes beauty and makes reading
          easier and more pleasant. The question is: What proportion(s) will
          give us the best results? The golden ratio is often observed in nature
          where beauty and utility intersect; perhaps we can use this “divine”
          proportion to enhance these attributes in our typography.
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <Grid align="center" columns="2" gap="5" p="3">
          <Flex direction="column">
            <Text size="3" weight="bold">
              Get started
            </Text>
            <Text color="gray" size="2">
              Start your next project in minutes
            </Text>
          </Flex>

          <Flex direction="column">
            <Text size="2" weight="bold">
              Get started
            </Text>
            <Text color="gray" size="2">
              Start your next project in minutes
            </Text>
          </Flex>

          <Flex direction="column">
            <Text size="2" weight="bold">
              Get started
            </Text>
            <Text color="gray" size="1">
              Start your next project in minutes
            </Text>
          </Flex>

          <Flex direction="column">
            <Text size="1" weight="bold">
              Get started
            </Text>
            <Text color="gray" size="1">
              Start your next project in minutes
            </Text>
          </Flex>
        </Grid>
      </div>
      <div className="flex flex-col gap-1">
        <h1>Weight</h1>
        <Text weight="regular" as="div">
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text weight="medium" as="div">
          The quick brown fox jumps over the lazy dog.
        </Text>

        <Text weight="bold" as="div">
          The quick brown fox jumps over the lazy dog.
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <h1>Align</h1>
        <Text align="left" as="div">
          Left-aligned
        </Text>
        <Text align="center" as="div">
          Center-aligned
        </Text>
        <Text align="right" as="div">
          Right-aligned
        </Text>
      </div>
      <div className="flex flex-col gap-1">
        <h1>Trim</h1>
        <Flex direction="column" gap="3">
          <Text
            trim="normal"
            style={{
              background: "var(--gray-a2)",
              borderTop: "1px dashed var(--gray-a7)",
              borderBottom: "1px dashed var(--gray-a7)",
            }}
          >
            Without trim
          </Text>
          <Text
            trim="both"
            style={{
              background: "var(--gray-a2)",
              borderTop: "1px dashed var(--gray-a7)",
              borderBottom: "1px dashed var(--gray-a7)",
            }}
          >
            With trim
          </Text>
        </Flex>
      </div>
      <div className="flex flex-col gap-1">
        <Flex direction="column" gap="3">
          <Box
            style={{
              background: "var(--gray-a2)",
              border: "1px dashed var(--gray-a7)",
            }}
            p="4"
          >
            <Heading mb="1" size="3">
              Without trim
            </Heading>
            <Text>
              The goal of typography is to relate font size, line height, and
              line width in a proportional way that maximizes beauty and makes
              reading easier and more pleasant.
            </Text>
          </Box>

          <Box
            p="4"
            style={{
              background: "var(--gray-a2)",
              border: "1px dashed var(--gray-a7)",
            }}
          >
            <Heading mb="1" size="3" trim="start">
              With trim
            </Heading>
            <Text trim="end">
              The goal of typography is to relate font size, line height, and
              line width in a proportional way that maximizes beauty and makes
              reading easier and more pleasant.
            </Text>
          </Box>
        </Flex>
      </div>
      <Flex direction="column">
        <Text color="indigo">The quick brown fox jumps over the lazy dog.</Text>
        <Text color="cyan">The quick brown fox jumps over the lazy dog.</Text>
        <Text color="orange">The quick brown fox jumps over the lazy dog.</Text>
        <Text color="crimson">
          The quick brown fox jumps over the lazy dog.
        </Text>
      </Flex>
      <Text size="5">
        Look, such a helpful <Link href="#">link</Link>, an{" "}
        <Em>italic emphasis</Em>, a piece of computer <Code>code</Code>, and
        even a hotkey combination <Kbd>⇧⌘A</Kbd> within the text.
      </Text>
      <Box style={{ maxWidth: 300 }}>
        <Text as="label" size="3">
          <Flex gap="2">
            <Checkbox defaultChecked /> I understand that these documents are
            confidential and cannot be shared with a third party.
          </Flex>
        </Text>
      </Box>
    </div>
  );
}
