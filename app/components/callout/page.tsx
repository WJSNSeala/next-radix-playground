"use client";

import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Callout,
  Flex,
  Container,
  Text,
  Heading,
  Responsive,
} from "@radix-ui/themes";

type RSize = Responsive<"1" | "2" | "3">;

function SizedCallout({ size }: { size: RSize }) {
  return (
    <Callout.Root size={size}>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        You will need admin privileges to install and access this application.
      </Callout.Text>
    </Callout.Root>
  );
}

function VariantCallout({
  variant,
}: {
  variant: "soft" | "outline" | "surface";
}) {
  return (
    <Callout.Root variant={variant}>
      <Callout.Icon>
        <InfoCircledIcon />
      </Callout.Icon>
      <Callout.Text>
        You will need admin privileges to install and access this application.
      </Callout.Text>
    </Callout.Root>
  );
}

export default function CalloutPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"}>
          <Heading>Callout Deefault</Heading>
          <Callout.Root>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You will need admin privileges to install and access this
              application.
            </Callout.Text>
          </Callout.Root>

          <Heading>Callout size</Heading>
          <Flex gap="2" direction={"column"}>
            <SizedCallout size="1" />
            <SizedCallout size="2" />
            <SizedCallout size="3" />
          </Flex>

          <Heading>Callout Varaint</Heading>
          <Flex gap="2" direction={"column"}>
            <VariantCallout variant="soft" />
            <VariantCallout variant="outline" />
            <VariantCallout variant="surface" />
          </Flex>

          <Heading>Callout as Alert</Heading>
          <Callout.Root color="red" role="alert">
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              You will need admin privileges to install and access this
              application.
            </Callout.Text>
          </Callout.Root>
        </Flex>
      </Container>
    </div>
  );
}
