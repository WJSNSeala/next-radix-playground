"use client";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import {
  Flex,
  Container,
  Heading,
  Button,
  IconButton,
  Text,
} from "@radix-ui/themes";

export default function IconButtonPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading size={"8"}>IconButton</Heading>
          <Heading>IconButton vanila</Heading>
          <IconButton>
            <MagnifyingGlassIcon width="18" height="18" />
          </IconButton>
          <Heading>IconButton size</Heading>
          <Flex align="center" gap="3">
            <IconButton size="3" variant="soft">
              <MagnifyingGlassIcon width="22" height="22" />
            </IconButton>

            <IconButton size="2" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>

            <IconButton size="1" variant="soft">
              <MagnifyingGlassIcon width="15" height="15" />
            </IconButton>
          </Flex>

          <Heading>Variant</Heading>
          <Flex gap="3">
            <IconButton variant="classic">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton variant="solid">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton variant="surface">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton variant="outline">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
          </Flex>
          <IconButton variant="ghost">
            <MagnifyingGlassIcon width="18" height="18" />
          </IconButton>
          <Text>abcd</Text>
          <Heading>Color</Heading>
          <Flex gap="3">
            <IconButton color="crimson" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton color="indigo" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton color="grass" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton color="orange" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
          </Flex>

          <Heading>Radius</Heading>
          <Flex gap="3">
            <IconButton radius="none" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton radius="large" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
            <IconButton radius="full" variant="soft">
              <MagnifyingGlassIcon width="18" height="18" />
            </IconButton>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
