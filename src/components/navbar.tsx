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
    <AppShell.Header h={{ base: 64, sm: 72 }} px={{ base: "sm", sm: "md" }}>
      <Container size="lg" h="100%">
        <Group h="100%" justify="space-between" align="center">
          <Title order={4} fw={600}>
            Parvani Wellness
          </Title>

          <Group
            gap="lg"
            visibleFrom="sm"
          >
            <Text fw={500} onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>
              Services
            </Text>
            <Text fw={500} onClick={() => scrollTo("about")} style={{ cursor: "pointer" }}>
              About
            </Text>
            <Button radius="xl" size="sm" onClick={() => scrollTo("contact")}>
              Book Appointment
            </Button>
          </Group>
        </Group>
      </Container>
    </AppShell.Header>
  );
}
