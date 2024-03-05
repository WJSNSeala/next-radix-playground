"use client";

import {
  Flex,
  Container,
  Text,
  Heading,
  Responsive,
  ContextMenu,
  Button,
  Box,
} from "@radix-ui/themes";

export default function CheckboxPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading size={"8"}>Context Menu</Heading>
          <Heading>Context Menu vanila</Heading>
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div>Right click zone</div>
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item onClick={() => alert("more project")}>
                    Move to project…
                  </ContextMenu.Item>
                  <ContextMenu.Item>Move to folder…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Advanced options…</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Sub2</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />
              <ContextMenu.Item>Share</ContextMenu.Item>
              <ContextMenu.Item>Add to favorites</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>

          <Heading>Context Menu size</Heading>
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div>Right click zone</div>
            </ContextMenu.Trigger>
            <ContextMenu.Content size={"1"}>
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item onClick={() => alert("more project")}>
                    Move to project…
                  </ContextMenu.Item>
                  <ContextMenu.Item>Move to folder…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Advanced options…</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Sub2</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />
              <ContextMenu.Item>Share</ContextMenu.Item>
              <ContextMenu.Item>Add to favorites</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div>Right click zone</div>
            </ContextMenu.Trigger>
            <ContextMenu.Content size={"2"}>
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item onClick={() => alert("more project")}>
                    Move to project…
                  </ContextMenu.Item>
                  <ContextMenu.Item>Move to folder…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Advanced options…</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Sub2</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />
              <ContextMenu.Item>Share</ContextMenu.Item>
              <ContextMenu.Item>Add to favorites</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>

          <Heading>Context menu variant</Heading>
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div>Group click zone</div>
            </ContextMenu.Trigger>
            <ContextMenu.Content variant="soft">
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.Group>
                <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
              </ContextMenu.Group>
              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item onClick={() => alert("more project")}>
                    Move to project…
                  </ContextMenu.Item>
                  <ContextMenu.Item>Move to folder…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Advanced options…</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Sub2</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />
              <ContextMenu.Item>Share</ContextMenu.Item>
              <ContextMenu.Item>Add to favorites</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div>Right click zone</div>
            </ContextMenu.Trigger>
            <ContextMenu.Content variant="solid">
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>More</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item onClick={() => alert("more project")}>
                    Move to project…
                  </ContextMenu.Item>
                  <ContextMenu.Item>Move to folder…</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Advanced options…</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Sub2</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Sub 2 item</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />
              <ContextMenu.Item>Share</ContextMenu.Item>
              <ContextMenu.Item>Add to favorites</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ ⌫" color="red">
                Delete
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu.Root>

          <Heading>Radio Items</Heading>
          <ContextMenu.Root>
            <ContextMenu.Trigger>
              <div>Right click zone</div>
            </ContextMenu.Trigger>
            <ContextMenu.Content variant="solid">
              <ContextMenu.Item shortcut="⌘ E">Edit</ContextMenu.Item>
              <ContextMenu.Item shortcut="⌘ D">Duplicate</ContextMenu.Item>
              <ContextMenu.Separator />
              <ContextMenu.Item shortcut="⌘ N">Archive</ContextMenu.Item>

              <ContextMenu.RadioGroup>
                <ContextMenu.RadioItem value="1">Radio1</ContextMenu.RadioItem>
                <ContextMenu.RadioItem value="2">Radio1</ContextMenu.RadioItem>
                <ContextMenu.RadioItem value="3">Radio1</ContextMenu.RadioItem>
              </ContextMenu.RadioGroup>
              <ContextMenu.CheckboxItem>Checkbox</ContextMenu.CheckboxItem>
            </ContextMenu.Content>
          </ContextMenu.Root>
        </Flex>
      </Container>
    </div>
  );
}
