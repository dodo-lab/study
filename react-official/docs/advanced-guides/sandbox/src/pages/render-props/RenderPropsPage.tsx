import React from 'react';
import Cat from './parts/Cat';
import Mouse from './parts/Mouse';

const RenderPropsPage: React.FC = () => {
  return (
    <div>
      <Mouse render={(mouse) => <Cat mouse={mouse} />}>
        <h1>Move the mouse around</h1>
      </Mouse>
    </div>
  );
};

export default RenderPropsPage;
