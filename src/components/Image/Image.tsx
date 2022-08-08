import React from 'react';

// Styles
import {
  StyledContainerAvatar,
  StyledImageContainer,
  StyledPlaceholder,
  StyledImage,
  StyledRemoveImageContainer,
  StyledCloseIcon
} from './style';

interface ImageProps {
  className?: string;
  pictureURL?: string;
  onClear?: () => void;
}

const Image = ({
  className,
  pictureURL,
  onClear,
  children
}: React.PropsWithChildren<ImageProps>) => {
  // State
  const [imageError, setImageError] = React.useState<boolean>(false);
  // Effects
  React.useEffect(() => {
    setImageError(false);
  }, [pictureURL]);

  // Handlers
  const handleonErrorPicture = React.useCallback(() => {
    setImageError(true);
  }, []);

  return (
    <StyledContainerAvatar
      className={className}
    >
      <StyledImageContainer>
        {
          pictureURL && !imageError && onClear && (
            <StyledRemoveImageContainer onClick={onClear}>
              <StyledCloseIcon />
            </StyledRemoveImageContainer>
          )
        }
        {
          (pictureURL && !imageError) ? (
            <StyledImage
              src={pictureURL}
              onError={handleonErrorPicture}
            />
          ) : (
            <StyledPlaceholder id="placeholder">
              {children}
            </StyledPlaceholder>
          )
        }
      </StyledImageContainer>
    </StyledContainerAvatar>
  );
};
export default React.memo(Image);
