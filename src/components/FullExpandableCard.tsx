import type { ContentCardProps } from 'components/ContentCard';
import { useState, useMemo } from 'react';
import { useTheme } from '@mui/material';
import { Minimize2 } from 'lucide-react';
import { Control } from 'components/baseControls/Control';
import { ExpandableContentCard } from 'components/ExpandableContentCard';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  bannerContent: React.ReactNode;
  expandedContent: React.ReactNode;
  overlay: string | undefined;
};

export function FullExpandableCard({
  bannerContent,
  expandedContent,
  overlay,
  turnOnAnimation,
}: CertificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const expandedWidth = 2;
  const expandedHeight = 3;
  const isExpandable = true;

  const expansionControl = useMemo(
    () =>
      isExpanded ? (
        <Control
          onClick={isExpanded ? () => setIsExpanded(!isExpanded) : undefined}
          position="top-right"
          theme={theme}
        >
          <Minimize2 size="1em" />
        </Control>
      ) : undefined,
    [isExpanded, theme],
  );

  return (
    <ExpandableContentCard
      expandable={isExpandable}
      isExpanded={isExpanded}
      onExpansion={setIsExpanded}
      turnOnAnimation={turnOnAnimation}
      expandedWidth={expandedWidth}
      expandedHeight={expandedHeight}
      overlay={overlay}
    >
      <>
        {expansionControl}
        {isExpanded ? expandedContent : bannerContent}
      </>
    </ExpandableContentCard>
  );
}
