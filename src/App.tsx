import {
  AppShell,
  Container,
  Title,
  Text,
  Button,
  Stack,
  Card,
  SimpleGrid,
  Group,
  Box,
  Image,
} from "@mantine/core";
import Navbar from "./components/navbar";


export default function App() {
  return (
    <AppShell padding={0}>
      {/*  Navbar */}
      <Navbar />
      <AppShell.Main
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {/* HERO */}
        <Box id="home" bg="#f4faf7" py={100}>
          <Container size="lg">
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={60} align="center">
              <Stack gap="md">
                <Title size={48} fw={600} lh={1.15}>
                  Professional psychology counselling,
                  <br /> focused on healing & clarity
                </Title>

                <Text c="dimmed" size="lg">
                  Compassionate, confidential mental health support for individuals,
                  couples, and adolescents in Parbhani.
                </Text>

                <Group mt="md">
                  <Button size="md" radius="xl">
                    Book Appointment
                  </Button>
                  <Button size="md" radius="xl" variant="default">
                    Learn More
                  </Button>
                </Group>
              </Stack>

              <Image
                radius="xl"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Counselling session"
              />
            </SimpleGrid>
          </Container>
        </Box>

        {/* SERVICES */}
        <Container id="services" size="lg" py={100}>
          <Stack gap="xl">
            <Title order={2} ta="center">
              Areas of Support
            </Title>

            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
              {[
                "Stress & Anxiety",
                "Depression",
                "Relationship Therapy",
                "Adolescent Counselling",
              ].map((service) => (
                <Card
                  key={service}
                  radius="lg"
                  padding="xl"
                  withBorder
                  shadow="sm"
                >
                  <Title order={4}>{service}</Title>
                  <Text c="dimmed" mt="sm" size="sm">
                    Evidence-based counselling focused on long-term emotional
                    well-being.
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>

        {/* ABOUT */}
        <Box id="about" bg="gray.0" py={100}>
          <Container size="sm">
            <Stack gap="md" ta="center">
              <Title order={2}>About the Counsellor</Title>
              <Text c="dimmed" size="md">
                A qualified psychology counsellor offering a calm, supportive, and
                confidential environment. Every session is guided by empathy,
                ethics, and evidence-based practice.
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* CONTACT */}
        <Container id="contact" size="lg" py={100}>
          <Card radius="lg" padding="xl" withBorder>
            <Group justify="space-between">
              <Stack gap={4}>
                <Title order={4}>Visit the Clinic</Title>
                <Text c="dimmed">Parbhani, Maharashtra</Text>
                <Text c="dimmed">Mon – Sat · 10:00 AM – 6:00 PM</Text>
              </Stack>

              <Button radius="xl" variant="light">
                Call Now
              </Button>
            </Group>
          </Card>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}