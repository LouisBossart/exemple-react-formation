import React, { lazy, Suspense } from 'react';

const LazyFlexWGrow = lazy(() => import('./FlexWGrow'));

const FlexWGrow = props => (
  <Suspense fallback={null}>
    <LazyFlexWGrow {...props} />
  </Suspense>
);

export default FlexWGrow;
