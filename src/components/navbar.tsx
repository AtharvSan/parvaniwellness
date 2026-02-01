import {
  AppShell,
  Container,
  Group,
  Title,
  Button,
  Text,
} from "@mantine/core";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  return (
    <AppShell.Header h={72} px="md">
      <Container size="lg" h="100%">
        <Group h="100%" justify="space-between">
          <Title order={4} fw={600}>
            Parvani Wellness
          </Title>

          <Group gap="xl">
            <Text
              fw={500}
              c="black"
              style={{ cursor: "pointer" }}
              onClick={() => scrollTo("services")}
              onMouseEnter={(e) => (e.currentTarget.style.color = "teal")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
            >
              Services
            </Text>

            <Text
              fw={500}
              c="black"
              style={{ cursor: "pointer" }}
              onClick={() => scrollTo("about")}
              onMouseEnter={(e) => (e.currentTarget.style.color = "teal")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
            >
              About
            </Text>

            <Button radius="xl" onClick={() => scrollTo("contact")}>
              Book Appointment
            </Button>
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
