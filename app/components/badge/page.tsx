import { Badge, Flex, Container, Heading, Text } from "@radix-ui/themes";

export default function BadgePage() {
  return (
    <div className={"flex flex-col gap-3  w-full"}>
      <Container size="3">
        <Heading>Badge</Heading>
        <Flex gap="2">
          <Badge color="orange">In progress</Badge>
          <Badge color="blue">In review</Badge>
          <Badge color="green">Complete</Badge>
        </Flex>

        <Heading>Badge Size</Heading>
        <Flex align="center" gap="2">
          <Badge size="2" color="indigo">
            New
          </Badge>

          <Badge size="1" color="indigo">
            New
          </Badge>
        </Flex>

        <Heading>Badge Variant</Heading>
        <Flex gap="2">
          <Badge variant="solid" color="indigo">
            solid
          </Badge>
          <Badge variant="soft" color="indigo">
            soft
          </Badge>
          <Badge variant="outline" color="indigo">
            outline
          </Badge>
          <Badge variant="surface" color="indigo">
            surface
          </Badge>
        </Flex>

        <Heading>Badge Radius</Heading>
        <Flex gap="2">
          <Badge variant="solid" radius="none" color="indigo">
            New
          </Badge>
          <Badge variant="solid" radius="large" color="indigo">
            New
          </Badge>
          <Badge variant="solid" radius="full" color="indigo">
            New
          </Badge>
        </Flex>
      </Container>
    </div>
  );
}
