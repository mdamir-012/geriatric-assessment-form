import { Container, Paper, Stack, Title } from '@mantine/core';
import { AssessmentForm } from '../features/assessment/AssessmentForm';

export function HomePage() {
  return (
    <Container size="sm" py="xl">
      <Paper withBorder shadow="sm" p="lg" radius="md">
        <Stack gap="lg">
          <Title order={1}>Geriatric Care Assessment</Title>
          <AssessmentForm />
        </Stack>
      </Paper>
    </Container>
  );
}
