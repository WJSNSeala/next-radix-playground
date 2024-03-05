"use client";

import { ChatBubbleIcon, Link1Icon, Share2Icon } from "@radix-ui/react-icons";
import {
  Container,
  Flex,
  Heading,
  Button,
  RadioGroup,
  Text,
} from "@radix-ui/themes";

export default function RadioGroupPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"} width={"max-content"}>
          <Heading size={"8"}>Radio Group</Heading>
          <Heading>Radio Group vanila</Heading>
          <RadioGroup.Root defaultValue="1">
            <Flex gap="2" direction="column">
              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="1" /> Default
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="2" /> Comfortable
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="3" /> Compact
                </Flex>
              </Text>
            </Flex>
          </RadioGroup.Root>

          <Heading>Size</Heading>
          <Flex align="center" gap="2">
            <RadioGroup.Root size="1" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root size="2" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>

            <RadioGroup.Root size="3" defaultValue="1">
              <RadioGroup.Item value="1" />
            </RadioGroup.Root>
          </Flex>

          <Heading>Variant</Heading>
          <Flex gap="2">
            <Flex direction="column" asChild gap="2">
              <RadioGroup.Root variant="surface" defaultValue="1">
                <RadioGroup.Item value="1" />
                <RadioGroup.Item value="2" />
              </RadioGroup.Root>
            </Flex>

            <Flex direction="column" asChild gap="2">
              <RadioGroup.Root variant="classic" defaultValue="1">
                <RadioGroup.Item value="1" />
                <RadioGroup.Item value="2" />
              </RadioGroup.Root>
            </Flex>

            <Flex direction="column" asChild gap="2">
              <RadioGroup.Root variant="soft" defaultValue="1">
                <RadioGroup.Item value="1" />
                <RadioGroup.Item value="2" />
              </RadioGroup.Root>
            </Flex>
          </Flex>

          <Heading>Automatically Align within Text</Heading>
          <Flex direction="column" gap="3">
            <RadioGroup.Root size="1" defaultValue="1">
              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="1" /> Default
                </Flex>
              </Text>

              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="2" /> Compact
                </Flex>
              </Text>
            </RadioGroup.Root>

            <RadioGroup.Root size="2" defaultValue="1">
              <Text as="label" size="3">
                <Flex gap="2">
                  <RadioGroup.Item value="1" /> Default
                </Flex>
              </Text>

              <Text as="label" size="3">
                <Flex gap="2">
                  <RadioGroup.Item value="2" /> Compact
                </Flex>
              </Text>
            </RadioGroup.Root>

            <RadioGroup.Root size="3" defaultValue="1">
              <Text as="label" size="4">
                <Flex gap="2">
                  <RadioGroup.Item value="1" /> Default
                </Flex>
              </Text>

              <Text as="label" size="4">
                <Flex gap="2">
                  <RadioGroup.Item value="2" /> Compact
                </Flex>
              </Text>
            </RadioGroup.Root>
          </Flex>

          <Heading>Diabled</Heading>
          <Flex direction="column" gap="2">
            <RadioGroup.Root defaultValue="2">
              <Flex direction="column" gap="2">
                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="1" />
                    Off
                  </Flex>
                </Text>

                <Text as="label" size="2">
                  <Flex gap="2">
                    <RadioGroup.Item value="2" />
                    On
                  </Flex>
                </Text>
              </Flex>
            </RadioGroup.Root>

            <RadioGroup.Root defaultValue="2">
              <Flex direction="column" gap="2">
                <Text as="label" size="2" color="gray">
                  <Flex gap="2">
                    <RadioGroup.Item value="1" disabled />
                    Off
                  </Flex>
                </Text>

                <Text as="label" size="2" color="gray">
                  <Flex gap="2">
                    <RadioGroup.Item value="2" disabled />
                    On
                  </Flex>
                </Text>
              </Flex>
            </RadioGroup.Root>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
