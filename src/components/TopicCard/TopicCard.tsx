import React from 'react';

import {
  StyledContainer,
  StyledWrapper,
  StyledTopicContainer,
  StyledText,
  StyledEmptyText,
  StyledIconContainer,
  StyledIconClose
} from './style';

interface TopicCardProps {
  className?: string;
  topic?: string;
  emptyLabel?: string;
  onClose?: () => void;
}

const TopicCard = ({
  className,
  topic,
  emptyLabel = '',
  onClose
}: TopicCardProps) => (
  <StyledContainer className={className}>
    {
      !emptyLabel ? (
        <StyledWrapper>
          <StyledTopicContainer>
            <StyledText variant="INTER-12-16-400">
              {topic}
            </StyledText>
          </StyledTopicContainer>
          <StyledIconContainer onClick={onClose}>
            <StyledIconClose />
          </StyledIconContainer>
        </StyledWrapper>
      ) : <StyledEmptyText variant="INTER-14-16-400">{emptyLabel}</StyledEmptyText>
    }
  </StyledContainer>
);

export default React.memo(TopicCard);
