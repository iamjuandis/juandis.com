import React from 'react';
import { LoadingContainer, LoadingContent, LoadingSkeleton } from './styled';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingContent>
        <LoadingSkeleton className="image" />
        <LoadingSkeleton className="headline" />
        <LoadingSkeleton className="paragraph" />
      </LoadingContent>
    </LoadingContainer>
  );
};

export default Loading;
