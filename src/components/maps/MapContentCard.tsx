import { CardProps } from '@mui/material';
import { ContentCard, ContentCardProps } from 'components/ContentCard';
import { mixinSx } from 'ui/helpers/mixinSx';

// In px, the min/max size of the card - matches standard size
const MIN_DIMENSION = 297;

// In px, the height of the expanded card
const EXPANDED_HEIGHT = 500;

export function MapContentCard({ isExpanded, sx, ...props }: ContentCardProps & CardProps) {
  return (
    <ContentCard
      {...props}
      sx={mixinSx(
        (theme) => ({
          border: 'none',
          minHeight: isExpanded ? EXPANDED_HEIGHT : MIN_DIMENSION,
          height: isExpanded ? EXPANDED_HEIGHT : undefined,
          [theme.breakpoints.down('md')]: {
            minHeight: isExpanded ? 360 : 200,
            height: isExpanded ? 360 : 200,
          },
        }),
        sx,
      )}
    />
  );
}
