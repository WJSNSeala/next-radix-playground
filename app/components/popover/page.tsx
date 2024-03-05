"use client";

import { ChatBubbleIcon, Link1Icon, Share2Icon } from "@radix-ui/react-icons";
import {
  Flex,
  Container,
  Heading,
  Button,
  Inset,
  Text,
  Strong,
  Card,
  Popover,
  Avatar,
  Box,
  TextArea,
  Checkbox,
  HoverCard,
  Grid,
} from "@radix-ui/themes";

export default function PopoverPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"} width={"max-content"}>
          <Heading size={"8"}>Popover</Heading>
          <Heading>Popover vanila</Heading>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft">
                <ChatBubbleIcon width="16" height="16" />
                Comment
              </Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 360 }}>
              <Flex gap="3">
                <HoverCard.Root>
                  <HoverCard.Trigger>
                    <Avatar
                      size="2"
                      src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                      fallback="A"
                      radius="full"
                    />
                  </HoverCard.Trigger>
                  <HoverCard.Content size="2">
                    <Text as="div" size="2" style={{ maxWidth: 350 }}>
                      This <Strong>Avatar</Strong> is awesome!
                    </Text>
                  </HoverCard.Content>
                </HoverCard.Root>

                <Box grow="1">
                  <TextArea
                    placeholder="Write a comment…"
                    style={{ height: 100 }}
                  />
                  <Flex gap="3" mt="3" justify="between">
                    <Flex align="center" gap="2" asChild>
                      <Text as="label" size="2">
                        <Checkbox />
                        <Text>Send to group</Text>
                      </Text>
                    </Flex>

                    <Popover.Close>
                      <Button size="1">Comment</Button>
                    </Popover.Close>
                  </Flex>
                </Box>
              </Flex>
            </Popover.Content>
          </Popover.Root>
          <Heading>Popover with Inset</Heading>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft">
                <Share2Icon width="16" height="16" />
                Share image
              </Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 360 }}>
              <Grid columns="120px 1fr">
                <Inset side="left" pr="current">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?&auto=format&fit=crop&w=400&q=80"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Inset>

                <div>
                  <Heading size="2" mb="1">
                    Share this image
                  </Heading>
                  <Text as="p" size="2" mb="4" color="gray">
                    Minimalistic 3D rendering wallpaper.
                  </Text>

                  <Flex direction="column" align="stretch">
                    <Popover.Close>
                      <Button size="1" variant="soft">
                        <Link1Icon width="16" height="16" />
                        Copy link
                      </Button>
                    </Popover.Close>
                  </Flex>
                </div>
              </Grid>
            </Popover.Content>
          </Popover.Root>
        </Flex>
      </Container>
    </div>
  );
}
