import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import ReactViewAdobe from 'react-adobe-embed';

const resumeURL = '/MargretWilliamsResume2023.pdf';
const ADOBE_CLIENT_ID = 'e27e45c3ad08494daca6109061436878';
const divId = 'pdf-div';

const adobePreviewConfig = {
  embedMode: 'IN_LINE',
  showAnnotationTools: false,
  showLeftHandPanel: false,
  showDownloadPDF: false,
};

const reactViewConfig = {
  clientId: ADOBE_CLIENT_ID,
  divId,
  url: resumeURL,
  fileMeta: {
    fileName: '23andMe%20Ancestry%20Book%20-%20Part%201%20of%202_encrypted_.pdf',
    title: "23andMe's Legal Notice",
  },
};

export function ResumeContent() {
  const resumeContainer = useMemo(
    () => (
      <ReactViewAdobe
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        previewConfig={adobePreviewConfig}
        config={reactViewConfig}
      />
    ),
    [],
  );

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      {resumeContainer}
    </Box>
  );
}
