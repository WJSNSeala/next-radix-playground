"use client";

import { CaretDownIcon } from "@radix-ui/react-icons";
import {
  Flex,
  Container,
  Heading,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";

export default function DropdownMenuPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading size={"8"}>Dialog</Heading>
          <Heading>Dialog vanila</Heading>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="solid">
                Options
                <CaretDownIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
              <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                  <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Share</DropdownMenu.Item>
              <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Container>
    </div>
  );
}
