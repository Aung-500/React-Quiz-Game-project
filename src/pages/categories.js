import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CategoryListResults } from '../components/category/category-list-results';
import { CategoryListToolbar } from '../components/category/category-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { categories } from '../__mocks__/categories';

const Categories = () => (
  <>
    <Head>
      <title>
        Categories
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
        <CategoryListToolbar />
        <Box sx={{ mt: 3 }}>
          <CategoryListResults categories={categories} />
        </Box>
      </Container>
    </Box>
  </>
);
Categories.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Categories;
