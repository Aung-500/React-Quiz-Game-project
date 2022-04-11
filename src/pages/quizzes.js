import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { QuizListResults } from '../components/quiz/quiz-list-results';
import { QuizListToolbar } from '../components/quiz/quiz-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { quizzes } from '../__mocks__/quizzes';

const Quizzes = () => (
  <>
    <Head>
      <title>
        Quizzes
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <QuizListToolbar />
        <Box sx={{ mt: 3 }}>
          <QuizListResults quizzes={quizzes} />
        </Box>
      </Container>
    </Box>
  </>
);
Quizzes.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Quizzes;
