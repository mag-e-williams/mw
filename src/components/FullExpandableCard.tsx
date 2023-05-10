import type { ContentCardProps } from 'components/ContentCard';
import { useState, useMemo } from 'react';
import { useTheme } from '@mui/material';
import { Minimize2 } from 'lucide-react';
import { Control } from 'components/baseControls/Control';
import { ExpandableContentCard } from 'components/ExpandableContentCard';

type CertificationCardProps = Pick<ContentCardProps, 'turnOnAnimation'> & {
  bannerContent: React.ReactNode;
  expandedContent: React.ReactNode;
  additionalControls?: React.ReactNode;
  overlay: string | undefined;
  expandWidth?: number;
  expandHeight?: number;
};

export function FullExpandableCard({
  bannerContent,
  expandedContent,
  additionalControls,
  overlay,
  expandWidth,
  expandHeight,
  turnOnAnimation,
}: CertificationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const theme = useTheme();
  const expandedWidth = expandWidth ?? 2;
  const expandedHeight = expandHeight ?? 3;

  // const expandedWidth = 2;
  // const expandedHeight = 3;
  const isExpandable = true;

  const expansionControl = useMemo(
    () =>
      isExpanded ? (
        additionalControls ? (
          <Control position="top-right" theme={theme}>
            {additionalControls}
            <Minimize2
              size="1em"
              onClick={isExpanded ? () => setIsExpanded(!isExpanded) : undefined}
            />
          </Control>
        ) : (
          <Control
            onClick={isExpanded ? () => setIsExpanded(!isExpanded) : undefined}
            position="top-right"
            theme={theme}
          >
            <Minimize2 size="1em" />
          </Control>
        )
      ) : undefined,
    [additionalControls, isExpanded, theme],
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
