"use client";

import {
  Flex,
  Container,
  Heading,
  HoverCard,
  Button,
  Text,
  Avatar,
  Box,
  Strong,
  Inset,
} from "@radix-ui/themes";

import Link from "next/link";

export default function HoverCardPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading size={"8"}>HoverCard</Heading>
          <Heading>HoverCard vanila</Heading>
          <Text>
            Follow{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link
                  href="https://twitter.com/radix_ui"
                  target="_blank"
                  className="underline"
                >
                  @radix_ui
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Content>
                <Flex gap="4">
                  <Avatar
                    size="3"
                    fallback="R"
                    radius="full"
                    src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
                  />
                  <Box>
                    <Heading size="3" as="h3">
                      Radix
                    </Heading>
                    <Text as="div" size="2" color="gray">
                      @radix_ui
                    </Text>

                    <Text as="div" size="2" style={{ maxWidth: 300 }} mt="3">
                      React components, icons, and colors for building
                      high-quality, accessible UI.
                    </Text>
                  </Box>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>{" "}
            for updates.
          </Text>

          <Flex gap="4">
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="#">Size one</Link>
              </HoverCard.Trigger>
              <HoverCard.Content size="1">
                <Text as="div" size="1" style={{ maxWidth: 325 }}>
                  <Strong>Typography</Strong> is the art and technique of
                  arranging type to make written language legible, readable and
                  appealing when displayed.
                </Text>
              </HoverCard.Content>
            </HoverCard.Root>

            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="#">Size two</Link>
              </HoverCard.Trigger>
              <HoverCard.Content size="2">
                <Text as="div" size="2" style={{ maxWidth: 350 }}>
                  <Strong>Typography</Strong> is the art and technique of
                  arranging type to make written language legible, readable and
                  appealing when displayed.
                </Text>
              </HoverCard.Content>
            </HoverCard.Root>

            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="#">Size three</Link>
              </HoverCard.Trigger>
              <HoverCard.Content size="3">
                <Text as="div" size="3" style={{ maxWidth: 400 }}>
                  <Strong>Typography</Strong> is the art and technique of
                  arranging type to make written language legible, readable and
                  appealing when displayed.
                </Text>
              </HoverCard.Content>
            </HoverCard.Root>
          </Flex>

          <Heading>With Inset</Heading>
          <Text>
            Technology revolutionized{" "}
            <HoverCard.Root>
              <HoverCard.Trigger>
                <Link href="#">typography</Link>
              </HoverCard.Trigger>

              <HoverCard.Content>
                <Flex>
                  <Inset side="left" pr="current">
                    <img
                      src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?&auto=format&fit=crop&w=300&q=80"
                      alt="Bold typography"
                      style={{
                        display: "block",
                        objectFit: "cover",
                        height: "100%",
                        width: 150,
                        backgroundColor: "var(--gray-5)",
                      }}
                    />
                  </Inset>

                  <Text size="2" style={{ maxWidth: 250 }} as="p">
                    <Strong>Typography</Strong> is the art and technique of
                    arranging type to make written language legible, readable
                    and appealing when displayed. The arrangement of type
                    involves selecting typefaces, point sizes, line lengths,
                    line-spacing (leading), and letter-spacing (tracking)…
                  </Text>
                </Flex>
              </HoverCard.Content>
            </HoverCard.Root>{" "}
            in the latter twentieth century.
          </Text>
        </Flex>
      </Container>
    </div>
  );
}
