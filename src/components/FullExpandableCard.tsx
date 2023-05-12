import type { ContentCardProps } from 'components/ContentCard';
import React, { useState, useMemo } from 'react';
import { useTheme } from '@mui/material';
import { Minimize2 } from 'lucide-react';
import { Control } from 'components/baseControls/Control';
import { ExpandableContentCard } from 'components/ExpandableContentCard';
import Emitter from 'services/Emitter';

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

  const isExpandable = true;

  const expansionControl = useMemo(() => {
    const toggleExpanded = () => {
      Emitter.emit('TOGGLE', isExpanded);
    };

    if (isExpanded) {
      return additionalControls ? (
        <Control position="top-right" theme={theme}>
          {additionalControls}
          <Minimize2 size="1em" onClick={toggleExpanded} />
        </Control>
      ) : (
        <Control onClick={toggleExpanded} position="top-right" theme={theme}>
          <Minimize2 size="1em" />
        </Control>
      );
    }
    return null;
  }, [additionalControls, isExpanded, theme]);

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
