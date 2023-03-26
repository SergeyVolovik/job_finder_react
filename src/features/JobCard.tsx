import { useCallback, useState, memo } from 'react';
import { useStore } from 'react-redux';
import { toast } from 'react-toastify';
import { Work, WorkOutline } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  Grid,
  Typography
} from '@mui/material';
import { BtnVariant, CardProps } from '@/types';
import { Button } from '@/components';
import { toastMessage } from '@/utils';

export const JobCard = memo(
  ({ logo, createdDate, position, location, jobDescription }: CardProps) => {
    const store = useStore();
    const [checkStatus, setCheckStatus] = useState(true);
    const message = checkStatus ? toastMessage.addFavorite : toastMessage.removedFavorite;

    const handleCheck = useCallback(() => {
      setCheckStatus(!checkStatus);
      toast.info(message);

      const action = checkStatus ? 'INCREMENT_FAVORITE' : 'DECREMENT_FAVORITE';
      store.dispatch({ type: action });
    }, [checkStatus]);

    return (
      <Grid item sm={12} md={6} lg={4}>
        <Card className="p-8 bg-blue-light rounded-xl space-y-4 shadow-none dark:bg-silver-light">
          <CardContent className="p-0 space-y-4">
            <Box className="flex items-center justify-between">
              <Avatar className="w-12 h-12" src={logo} alt="Company Logo" />
              <Box className="flex items-center justify-between space-x-4">
                <span className="text-gray">{`${createdDate}`}</span>
                <Checkbox
                  icon={<WorkOutline />}
                  checkedIcon={<Work className="fill-blue" />}
                  onChange={handleCheck}
                />
              </Box>
            </Box>
            <Box className="flex items-center justify-between space-x-2">
              <Typography variant="h6" className="truncate">
                {position}
              </Typography>
              <Typography variant="subtitle1" className="whitespace-nowrap text-blue">
                12 replies
              </Typography>
            </Box>
            <Box className="flex flex-wrap gap-2">
              <Chip label="primary" className="bg-violet/25 text-violet" />
              <Chip label="primary tes" className="bg-green/25 text-green" />
              <Chip label="success test" className="bg-orange/25 text-orange" />
            </Box>
            <Box className="space-y-1">
              <Typography variant="subtitle1" className="font-medium">
                {location}
              </Typography>
              <Typography component="span" variant="body2" className="text-gray line-clamp-3">
                {jobDescription}
              </Typography>
            </Box>
          </CardContent>
          <CardActions className="p-0">
            <Button variant={BtnVariant.primary}>Apply</Button>
            <Button variant={BtnVariant.outlined}>Contacts</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  },
  () => true
);
