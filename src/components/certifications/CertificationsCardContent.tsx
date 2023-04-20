import type { CertificationBadge } from 'api/types/generated/contentfulApi.generated';
import type { ContentCardProps } from 'components/ContentCard';
import { Stack } from '@mui/material';
import { Certification } from './Certification';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  certifications: Array<CertificationBadge> | undefined;
};

export function CertificationsCardContent({ certifications }: CertificationCardProps) {
  return (
    <Stack
      direction="row"
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
