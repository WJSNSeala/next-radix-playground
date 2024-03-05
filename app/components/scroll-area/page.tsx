"use client";

import { ChatBubbleIcon, Link1Icon, Share2Icon } from "@radix-ui/react-icons";
import {
  Container,
  Flex,
  Heading,
  Button,
  Text,
  Box,
  ScrollArea,
  Grid,
} from "@radix-ui/themes";

export default function ScrollAreaPage() {
  return (
    <div className={"w-full"}>
      <Container size="3">
        <Flex gap="5" direction={"column"} width={"100%"}>
          <Heading size={"8"}>Scroll Area</Heading>
          <Heading>Scroll Area vanila</Heading>
          <ScrollArea
            type="always"
            scrollbars="vertical"
            style={{ height: 180 }}
          >
            <Box p="2" pr="8">
              <Heading size="4" mb="2" trim="start">
                Principles of the typographic craft
              </Heading>
              <Flex direction="column" gap="4">
                <Text as="p">
                  Three fundamental aspects of typography are legibility,
                  readability, and aesthetics. Although in a non-technical sense
                  “legible” and “readable” are often used synonymously,
                  typographically they are separate but related concepts.
                </Text>

                <Text as="p">
                  Legibility describes how easily individual characters can be
                  distinguished from one another. It is described by Walter
                  Tracy as “the quality of being decipherable and recognisable”.
                  For instance, if a “b” and an “h”, or a “3” and an “8”, are
                  difficult to distinguish at small sizes, this is a problem of
                  legibility.
                </Text>

                <Text as="p">
                  Typographers are concerned with legibility insofar as it is
                  their job to select the correct font to use. Brush Script is
                  an example of a font containing many characters that might be
                  difficult to distinguish. The selection of cases influences
                  the legibility of typography because using only uppercase
                  letters (all-caps) reduces legibility.
                </Text>
              </Flex>
            </Box>
          </ScrollArea>

          <Heading> Scrollbar size</Heading>
          <Flex direction="column" gap="2">
            <ScrollArea
              size="1"
              type="always"
              scrollbars="horizontal"
              style={{ width: 300, height: 12 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              size="2"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 16 }}
            >
              <Box style={{ width: 900, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 400, height: 20 }}
            >
              <Box style={{ width: 1000, height: 1 }} />
            </ScrollArea>
          </Flex>

          <Heading>Scrollbar Radius</Heading>
          <Flex direction="column" gap="3">
            <ScrollArea
              radius="none"
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 20 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              radius="large"
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 20 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>

            <ScrollArea
              radius="full"
              size="3"
              type="always"
              scrollbars="horizontal"
              style={{ width: 350, height: 20 }}
            >
              <Box style={{ width: 800, height: 1 }} />
            </ScrollArea>
          </Flex>

          <Heading>Scroll bar direction</Heading>
          <Grid columns="2" gap="2">
            <ScrollArea
              type="always"
              scrollbars="vertical"
              style={{ height: 150 }}
            >
              <Flex p="2" pr="8" direction="column" gap="4">
                <Text size="2" trim="both">
                  Three fundamental aspects of typography are legibility,
                  readability, and aesthetics. Although in a non-technical sense
                  "legible" and "readable" are often used synonymously,
                  typographically they are separate but related concepts.
                </Text>

                <Text size="2" trim="both">
                  Legibility describes how easily individual characters can be
                  distinguished from one another. It is described by Walter
                  Tracy as "the quality of being decipherable and recognisable".
                  For instance, if a "b" and an "h", or a "3" and an "8", are
                  difficult to distinguish at small sizes, this is a problem of
                  legibility.
                </Text>
              </Flex>
            </ScrollArea>

            <ScrollArea
              type="always"
              scrollbars="horizontal"
              style={{ height: 150 }}
            >
              <Flex gap="4" p="2" style={{ width: 700 }}>
                <Text size="2" trim="both">
                  Three fundamental aspects of typography are legibility,
                  readability, and aesthetics. Although in a non-technical sense
                  "legible" and "readable" are often used synonymously,
                  typographically they are separate but related concepts.
                </Text>

                <Text size="2" trim="both">
                  Legibility describes how easily individual characters can be
                  distinguished from one another. It is described by Walter
                  Tracy as "the quality of being decipherable and recognisable".
                  For instance, if a "b" and an "h", or a "3" and an "8", are
                  difficult to distinguish at small sizes, this is a problem of
                  legibility.
                </Text>
              </Flex>
            </ScrollArea>
          </Grid>
        </Flex>
      </Container>
    </div>
  );
}
