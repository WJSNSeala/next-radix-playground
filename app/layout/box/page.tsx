import Section from "@/app/_components/Section";
import { Box, Heading } from "@radix-ui/themes";

export default function BoxPage() {
  return (
    <div className={"flex flex-col gap-3 items-center w-full border"}>
      <Section title="Box API Ref">
        <Box width="9" height="9" className="border rounded-md">
          <div>Box</div>
        </Box>
        <Box width="9" height="9" inset={"0"} className="border rounded-md">
          Inset 0000
        </Box>
        <Box width="9" height="9" inset={"auto"} className="border rounded-md">
          Inset auto
        </Box>
        <Box width="9" height="9" inset={"50%"} className="border rounded-md">
          Inset 50%
        </Box>
        <Box width="9" height="9" inset={"100%"} className="border rounded-md">
          Inset 100%
        </Box>
        <Box width="9" height="9" top={"100%"} className="border rounded-md">
          TOP 100%
        </Box>
        <Box width={"auto"} height={"9"} className="border rounded-md">
          width Auto
        </Box>
        <Box
          width={"min-content"}
          height={"auto"}
          className="border rounded-md"
        >
          width min-content A AA AAA AAAA AAAAA AAAAAA
        </Box>
        <Box width={"max-content"} height={"9"} className="border rounded-md">
          width max-content
        </Box>
        <Box width={"100%"} height={"9"} className="border rounded-md">
          width 100%
        </Box>
        <Box
          width="9"
          height="9"
          top={"100%"}
          shrink="0"
          className="border rounded-md"
        >
          TOP 100%
        </Box>
      </Section>
    </div>
  );
}
