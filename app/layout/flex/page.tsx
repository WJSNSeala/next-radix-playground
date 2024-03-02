import Section from "@/app/_components/Section";
import { Box, Flex, Heading } from "@radix-ui/themes";

export default function FlexPage() {
  return (
    <div className={"flex flex-col gap-3 items-center w-full border"}>
      <Section title={"Flex"}>
        <Flex gap="3">
          <Box width="9" height="9" className="rounded-md border">
            <div />
          </Box>
          <Box width="9" height="9" className="rounded-md border">
            <div />
          </Box>
          <Box width="9" height="9" className="rounded-md border">
            <div />
          </Box>
          <Box width="9" height="9" className="rounded-md border">
            <div />
          </Box>
        </Flex>
      </Section>
    </div>
  );
}
