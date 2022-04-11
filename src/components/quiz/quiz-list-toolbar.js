
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
  import { Search as SearchIcon } from '../../icons/search';
  import { Upload as UploadIcon } from '../../icons/upload';
  import { Download as DownloadIcon } from '../../icons/download';
  import DeleteIcon from '@mui/icons-material/Delete';
  
  
  export const QuizListToolbar = (props) => (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h3"
          // fontSize={100}
        >
          &nbsp;&nbsp;&nbsp;Quizzes
        </Typography>
        <Box sx={{ m: 1 }}>
  
  
  
          {/* <Button
            startIcon={(<UploadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Import
          </Button>
          <Button
            startIcon={(<DownloadIcon fontSize="small" />)}
            sx={{ mr: 1 }}
          >
            Export
          </Button> */}
  
  
  
          <Button
            color="primary"
            variant="contained"
          >
            Add Quizzes
          </Button>
          &nbsp;&nbsp;
          <Button 
            // variant="outlined" 
            // startIcon={<DeleteIcon />}
            color="primary"
            variant="contained"
          >
            Delete Quizzes
          </Button>
  
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        color="action"
                        fontSize="small"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search Quizzes"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
  