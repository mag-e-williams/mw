import { Box } from '@mui/material';
import { Project } from 'api/types/generated/contentfulApi.generated';
import React, { useMemo } from 'react';
import ReactViewAdobe from 'react-adobe-embed';

const ADOBE_CLIENT_ID = 'e14e630439794f9aa456b0f89615c3a4';
const divId = 'pdf-div';

type ResumeCardProps = {
  resume?: Project;
};

export function ResumeContent({ resume }: ResumeCardProps) {
  const url = resume?.file?.url || '';
  const fileName = resume?.file?.fileName || '';
  const title = resume?.file?.title || '';

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
        previewConfig={{
          embedMode: 'IN_LINE',
          showAnnotationTools: false,
          showLeftHandPanel: false,
          showDownloadPDF: false,
        }}
        config={{
          clientId: ADOBE_CLIENT_ID,
          divId,
          url,
          fileMeta: {
            fileName,
            title,
          },
        }}
      />
    ),
    [fileName, title, url],
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
