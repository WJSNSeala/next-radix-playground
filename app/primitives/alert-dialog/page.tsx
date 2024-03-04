"use client";

import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Flex, Text, Heading, Button, Container } from "@radix-ui/themes";

export default function AlertDialogPage() {
  return (
    <div className={"flex flex-col gap-3 w-full h-full"}>
      <Container size={"3"} className="border h-full">
        <Heading>Basic Alert Dialog</Heading>
        <AlertDialog.Root>
          <AlertDialog.Trigger>
            <Button color="red" asChild>
              <Text className="text-white">Revoke access</Text>
            </Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content style={{ maxWidth: 450 }}>
            <AlertDialog.Title>Revoke access</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure? This application will no longer be accessible and
              any existing sessions will be expired.
            </AlertDialog.Description>

            <Flex gap="3" mt="4" justify="end">
              <AlertDialog.Cancel>
                <Button variant="soft" color="gray">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button variant="solid" color="red">
                  Revoke access
                </Button>
              </AlertDialog.Action>
            </Flex>
          </AlertDialog.Content>
        </AlertDialog.Root>
      </Container>
    </div>
  );
}
