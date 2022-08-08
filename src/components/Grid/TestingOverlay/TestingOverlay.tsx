import React from 'react';
import classnames from 'classnames';
import { Col, Row } from 'react-grid-system';

// Styles
import {
  StyledContainer,
  FillableItem,
} from './style';

interface TestingOverlayProps {
  className?: string;
}

const colArray = new Array(12).fill(null);

const TestingOverlay = function TestingOverlay({
  className,
}: TestingOverlayProps) {
  // States
  const [show] = React.useState<boolean>(() => {
    const activeGridItem = localStorage.getItem('grid');
    return activeGridItem ? activeGridItem.trim() === 'true' : false;
  });

  if (!show) {
    return null;
  }

  return (
    <StyledContainer
      className={classnames('TestingOverlay', className)}
    >
      <Row>
        {
          colArray.map((_, idx) => (
            <Col
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
            >
              <FillableItem />
            </Col>
          ))
        }
      </Row>
    </StyledContainer>
  );
};

export default React.memo(TestingOverlay);
