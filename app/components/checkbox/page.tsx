"use client";

import {
  Flex,
  Container,
  Text,
  Heading,
  Responsive,
  Checkbox,
  Button,
  Box,
  Grid,
} from "@radix-ui/themes";

export default function CheckboxPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading size={"8"}>Checkbox API Reference</Heading>
          <Heading>Checkbox vanila</Heading>
          <Text as="label" size="2">
            <Flex gap="2">
              <Checkbox defaultChecked /> Agree to Terms and Conditions
            </Flex>
          </Text>

          <Heading>Size</Heading>
          <Flex align="center" gap="2">
            <Checkbox size="1" defaultChecked />
            <Checkbox size="2" defaultChecked />
            <Checkbox size="3" defaultChecked />
          </Flex>

          <Heading>Variant</Heading>
          <Grid rows="2" gap="2" display="inline-grid" flow="column">
            <Checkbox variant="surface" defaultChecked />
            <Checkbox variant="surface" />
            <Checkbox variant="classic" defaultChecked />
            <Checkbox variant="classic" />
            <Checkbox variant="soft" defaultChecked />
            <Checkbox variant="soft" />
          </Grid>

          <Heading>Colors</Heading>
          <Flex gap="2">
            <Checkbox color="indigo" defaultChecked />
            <Checkbox color="cyan" defaultChecked />
            <Checkbox color="orange" defaultChecked />
            <Checkbox color="crimson" defaultChecked />
          </Flex>

          <Heading>Alignment</Heading>
          <Flex direction="column" gap="3">
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox size="1" defaultChecked /> Agree to Terms and
                Conditions
              </Flex>
            </Text>

            <Text as="label" size="3">
              <Flex gap="2">
                <Checkbox size="2" defaultChecked /> Agree to Terms and
                Conditions
              </Flex>
            </Text>

            <Text as="label" size="4">
              <Flex gap="2">
                <Checkbox size="3" defaultChecked /> Agree to Terms and
                Conditions
              </Flex>
            </Text>
          </Flex>
          <Box style={{ maxWidth: 300 }}>
            <Text as="label" size="3">
              <Flex gap="2">
                <Checkbox defaultChecked /> I understand that these documents
                are confidential and cannot be shared with a third party.
              </Flex>
            </Text>
          </Box>

          <Heading>Diabled</Heading>
          <Flex direction="column" gap="2">
            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox />
                Not checked
              </Flex>
            </Text>

            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox defaultChecked />
                Checked
              </Flex>
            </Text>

            <Text as="label" size="2" color="gray">
              <Flex gap="2">
                <Checkbox disabled />
                Not checked
              </Flex>
            </Text>

            <Text as="label" size="2" color="gray">
              <Flex gap="2">
                <Checkbox disabled defaultChecked />
                Checked
              </Flex>
            </Text>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
}
