"use client";

import {
  Flex,
  Container,
  Heading,
  Button,
  Inset,
  Text,
  Strong,
  Card,
} from "@radix-ui/themes";

export default function InsetPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading size={"8"}>Inset</Heading>
          <Heading>Inset vanila</Heading>
          <Flex direction={"row"} gap="5">
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
            <Card size="2" style={{ maxWidth: 240 }}>
              <Inset clip="padding-box" side="all" pb="current">
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
            <Card size="2" style={{ maxWidth: 240 }}>
              <Inset clip="border-box" side="all" pb="current">
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
        </Flex>
      </Container>
    </div>
  );
}
