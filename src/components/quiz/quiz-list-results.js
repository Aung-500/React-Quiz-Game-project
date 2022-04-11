import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import Quizzes from 'src/pages/quizzes';  
// import { quizzes } from 'src/__mocks__/quizzes';
export const QuizListResults = ({ quizzes, ...rest }) => {
  const [selectedQuizIds, setSelectedQuizIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedQuizIds;

    if (event.target.checked) {
      newSelectedQuizIds = quizzes.map((quiz) => quiz.id);
    } else {
      newSelectedQuizIds = [];
    }

    setSelectedQuizIds(newSelectedQuizIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedQuizIds.indexOf(id);
    let newSelectedQuizIds = [];

    if (selectedIndex === -1) {
      newSelectedQuizIds = newSelectedQuizIds.concat(selectedQuizIds, id);
    } else if (selectedIndex === 0) {
      newSelectedQuizIds = newSelectedQuizIds.concat(selectedQuizIds.slice(1));
    } else if (selectedIndex === selectedQuizIds.length - 1) {
      newSelectedQuizIds = newSelectedQuizIds.concat(selectedQuizIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedQuizIds = newSelectedQuizIds.concat(
        selectedQuizIds.slice(0, selectedIndex),
        selectedQuizIds.slice(selectedIndex + 1)
      );
    }

    setSelectedQuizIds(newSelectedQuizIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedQuizIds.length === quizzes.length}
                    color="primary"
                    indeterminate={
                      selectedQuizIds.length > 0
                      && selectedQuizIds.length < quizzes.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quizzes.slice(0, limit).map((quiz) => (
                <TableRow
                  hover
                  key={quiz.id}
                  selected={selectedQuizIds.indexOf(quiz.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedQuizIds.indexOf(quiz.id) !== -1}
                      onChange={(event) => handleSelectOne(event, quiz.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={quiz.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(quiz.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {quiz.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {quiz.email}
                  </TableCell>
                  <TableCell>
                    {`${quiz.address.city}, ${quiz.address.state}, ${quiz.address.country}`}
                  </TableCell>
                  <TableCell>
                    {quiz.phone}
                  </TableCell>
                  <TableCell>
                    {format(quiz.createdAt, 'dd/MM/yyyy')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={quizzes.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

QuizListResults.propTypes = {
    quizzes: PropTypes.array.isRequired
};
