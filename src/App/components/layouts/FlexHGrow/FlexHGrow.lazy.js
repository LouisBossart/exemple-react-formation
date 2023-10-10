import React, { lazy, Suspense } from 'react';

const LazyFlexHGrow = lazy(() => import('./FlexHGrow'));

const FlexHGrow = props => (
  <Suspense fallback={null}>
    <LazyFlexHGrow {...props} />
  </Suspense>
);

export default FlexHGrow;
