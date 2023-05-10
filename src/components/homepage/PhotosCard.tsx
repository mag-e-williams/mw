import { Box, Button, Modal, Typography } from '@mui/material';
import { useData } from 'api/useData';
import { ContentCard } from 'components/ContentCard';
import * as React from 'react';

export function PhotosCard() {
  const { data: photos } = useData('photos');
  console.log('PHOTOS', photos);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!photos) {
    return null;
  }
  return (
    <ContentCard
      overlay="Photography"
      sx={{
        padding: 2.5,
        display: 'flex',
      }}
    >
      Hello
    </ContentCard>
  );
}
