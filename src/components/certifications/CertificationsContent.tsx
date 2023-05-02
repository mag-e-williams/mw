import type { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { ContentCardProps } from 'components/ContentCard';
import { Divider, Grid } from '@mui/material';
import { Certification } from './Certification';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certifications: Array<CertificationBadge> | undefined;
};

export function CertificationsContent({ certifications }: CertificationCardProps) {
  return (
    <Grid
      container
      columns={3}
      sx={(theme) => ({
        padding: theme.spacing(3, 3),
      })}
    >
      {certifications
        ?.filter((cert) => cert.visible)
        .map((cert, i) => (
          <>
            <Certification key={cert.title} certification={cert} />
            {i < certifications.length - 1 ? (
              <Divider variant="inset" flexItem sx={{ m: '-1px', width: '100%' }} />
            ) : undefined}
          </>
        ))}
    </Grid>
  );
}
