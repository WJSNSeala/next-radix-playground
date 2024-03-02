import { Box, Flex, Heading, Section, Container } from "@radix-ui/themes";

export default function SectionPage() {
  return (
    <div className="w-full">
      <Container className="border border-red-200">
        <Flex gap="3" direction={"column"} className="border border-pink-400">
          <Heading>Section API Reference</Heading>
          <Section size="1" className="border border-black">
            <div>Size 1</div>
          </Section>
          <Section size="2" className="border border-black">
            <div>Size 2</div>
          </Section>
          <Section size="3" className="border border-black">
            <div>Size 3</div>
          </Section>
        </Flex>
      </Container>
    </div>
  );
}
