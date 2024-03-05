import {
  Card,
  Heading,
  Container,
  Flex,
  Avatar,
  Box,
  Text,
  Responsive,
  Inset,
  Strong,
} from "@radix-ui/themes";

type RSize = Responsive<"1" | "2" | "3">;

function SizedCard({ size }: { size: RSize }) {
  return (
    <Card style={{ maxWidth: 240 }} size={size}>
      <Flex gap="3" align="center">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="full"
          fallback="T"
        />
        <Box>
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="2" color="gray">
            Engineering
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}

export default function CardPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading>Card Default</Heading>
          <Card style={{ maxWidth: 240 }}>
            <Flex gap="3" align="center">
              <Avatar
                size="3"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                radius="full"
                fallback="T"
              />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Teodros Girmay
                </Text>
                <Text as="div" size="2" color="gray">
                  Engineering
                </Text>
              </Box>
            </Flex>
          </Card>

          <Heading>Card AsChild</Heading>
          <Card asChild style={{ maxWidth: 350 }}>
            <a href="#">
              <Text as="div" size="2" weight="bold">
                Quick start
              </Text>
              <Text as="div" color="gray" size="2">
                Start building your next project in minutes
              </Text>
            </a>
          </Card>
          <Heading>Same Card AsChild false</Heading>
          <Card style={{ maxWidth: 350 }}>
            <a href="##">
              <Text as="div" size="2" weight="bold">
                Quick start
              </Text>
              <Text as="div" color="gray" size="2">
                Start building your next project in minutes
              </Text>
            </a>
          </Card>

          <Heading>Card Size</Heading>
          <Flex gap="3" direction="column">
            <Card size="1" style={{ width: 350 }}>
              <Flex gap="3" align="center">
                <Avatar size="3" radius="full" fallback="T" color="indigo" />
                <Box>
                  <Text as="div" size="2" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="2" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
            </Card>

            <Card size="2" style={{ width: 425 }}>
              <Flex gap="4" align="center">
                <Avatar size="4" radius="full" fallback="T" color="indigo" />
                <Box>
                  <Text as="div" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
            </Card>

            <Card size="3" style={{ width: 500 }}>
              <Flex gap="4" align="center">
                <Avatar size="5" radius="full" fallback="T" color="indigo" />
                <Box>
                  <Text as="div" size="4" weight="bold">
                    Teodros Girmay
                  </Text>
                  <Text as="div" size="4" color="gray">
                    Engineering
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Flex>

          <Heading>Card Variant</Heading>
          <Flex direction="column" gap="3" style={{ maxWidth: 350 }}>
            <Card variant="surface">
              <Text as="div" size="2" weight="bold">
                Quick start
              </Text>
              <Text as="div" color="gray" size="2">
                Start building your next project in minutes
              </Text>
            </Card>

            <Card variant="classic">
              <Text as="div" size="2" weight="bold">
                Quick start
              </Text>
              <Text as="div" color="gray" size="2">
                Start building your next project in minutes
              </Text>
            </Card>
          </Flex>

          <Flex direction={"row"} gap={"3"}>
            <Flex direction={"column"} gap={"3"}>
              <Heading>Card with Inset</Heading>
              <Card size="2" style={{ maxWidth: 240 }}>
                <Inset clip="padding-box" side="top" pb="current">
                  <img
                    src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Bold typography"
                    style={{
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                      height: 140,
                      backgroundColor: "var(--gray-5)",
                    }}
                  />
                </Inset>
                <Text as="p" size="3">
                  <Strong>Typography</Strong> is the art and technique of
                  arranging type to make written language legible, readable and
                  appealing when displayed.
                </Text>
              </Card>
            </Flex>
            <Flex direction={"column"} gap={"3"}>
              <Heading>Card without Inset</Heading>
              <Card size="2" style={{ maxWidth: 240 }}>
                <img
                  src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Bold typography"
                  style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                  }}
                />
                <Text as="p" size="3">
                  <Strong>Typography</Strong> is the art and technique of
                  arranging type to make written language legible, readable and
                  appealing when displayed.
                </Text>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
