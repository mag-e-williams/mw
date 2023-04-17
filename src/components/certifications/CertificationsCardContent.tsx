// import type { Project } from 'api/types/generated/contentfulApi.generated';
import { BadgeType as Badge } from 'api/types/Badge';
import type { ContentCardProps } from 'components/ContentCard';
import { Stack } from '@mui/material';
import { Certification } from './Certification';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certifications: Array<Badge>;
};

export function CertificationsCardContent({
  certifications,
  turnOnAnimation,
}: CertificationCardProps) {
  return (
    <Stack
      direction="row"
      // spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {certifications
        ?.filter((cert) => cert.visible)
        .map((cert) => (
          <Certification key={cert.title} certification={cert} />
        ))}
    </Stack>
  );
}
