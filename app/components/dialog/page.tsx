"use client";

import {
  Flex,
  Container,
  Text,
  Heading,
  Responsive,
  Dialog,
  Button,
  Box,
  Inset,
  Table,
  TableBody,
  Theme,
  TextField,
} from "@radix-ui/themes";

export default function DialogPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Theme>
          <Flex gap="5" direction={"column"}>
            <Heading size={"8"}>Dialog</Heading>
            <Heading>Dialog vanila</Heading>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button>Edit profile</Button>
              </Dialog.Trigger>

              <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                  Make changes to your profile.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                  <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                      Name
                    </Text>
                    <TextField.Input
                      defaultValue="Freja Johnsen"
                      placeholder="Enter your full name"
                    />
                  </label>
                  <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                      Email
                    </Text>
                    <TextField.Input
                      defaultValue="freja@example.com"
                      placeholder="Enter your email"
                    />
                  </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Cancel
                    </Button>
                  </Dialog.Close>
                  <Dialog.Close>
                    <Button>Save</Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>

            <Heading>Inset</Heading>
            <Dialog.Root>
              <Dialog.Trigger>
                <Button>View users</Button>
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Title>Users</Dialog.Title>
                <Dialog.Description>
                  The following users have access to this project.
                </Dialog.Description>

                <Inset side="x" my="5">
                  <Table.Root>
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeaderCell>
                          Full name
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <TableBody>
                      <Table.Row>
                        <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                        <Table.Cell>danilo@example.com</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                      </Table.Row>

                      <Table.Row>
                        <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                        <Table.Cell>zahra@example.com</Table.Cell>
                        <Table.Cell>Admin</Table.Cell>
                      </Table.Row>
                    </TableBody>
                  </Table.Root>
                </Inset>

                <Flex gap="3" justify="end">
                  <Dialog.Close>
                    <Button variant="soft" color="gray">
                      Close
                    </Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          </Flex>
        </Theme>
      </Container>
    </div>
  );
}
