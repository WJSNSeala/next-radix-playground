import {
  Button,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";
import { BookmarkIcon } from "@radix-ui/react-icons";

export default function ButtonPage() {
  return (
    <div className={" w-full border border-black"}>
      <Container size={"4"} className="border-pink-300 border">
        <Heading>Button API Reference</Heading>
        <Button>
          <BookmarkIcon width={"16"} height={"16"} />
          Click me
        </Button>
        <Button asChild>
          <Text>Click me</Text>
        </Button>
        <Section>
          <Heading>Button Size Example</Heading>
          <Flex gap="3" align="center">
            <Button size="1">Small</Button>
            <Button size="2">Medium</Button>
            <Button size="3">Large</Button>
          </Flex>
        </Section>
        <Section>
          <Heading>Button Variant Example</Heading>
          <Flex gap="3" align="center">
            <Button variant="classic">Classic</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="solid">Solid</Button>
            <Button variant="soft">Soft</Button>
            <Button variant="surface">Surface</Button>

            <Button variant="ghost">Ghost</Button>
          </Flex>
        </Section>
        <Section>
          <Heading>Button Radius Example</Heading>
          <Flex gap="3" align="center">
            <Button radius="none" variant="solid">
              None
            </Button>
            <Button radius="small" variant="solid">
              small
            </Button>
            <Button radius="medium" variant="solid">
              medium
            </Button>

            <Button radius="large" variant="solid">
              large
            </Button>
            <Button radius="full" variant="solid" className="w-24">
              Full
            </Button>
          </Flex>
        </Section>
      </Container>
    </div>
  );
}
