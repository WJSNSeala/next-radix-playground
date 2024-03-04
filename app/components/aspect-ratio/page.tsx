import { AspectRatio, Container, Heading } from "@radix-ui/themes";

export default function AspectRatioPage() {
  return (
    <div className={"flex flex-col gap-3 w-full h-full"}>
      <Container size={"3"} className="border h-full">
        <Heading>Aspect Ratio 2 / 1</Heading>
        <AspectRatio ratio={2 / 1}>
          <img
            src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
            alt="A house in a forest"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-2)",
            }}
          />
        </AspectRatio>
        <Heading>Aspect Ratio 4 / 1</Heading>
        <AspectRatio ratio={4 / 1}>
          <img
            src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
            alt="A house in a forest"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-2)",
            }}
          />
        </AspectRatio>
      </Container>
    </div>
  );
}
