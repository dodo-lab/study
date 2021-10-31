import { Button } from '@mui/material';
import React, { Profiler, ProfilerOnRenderCallback } from 'react';

const profilerCallback: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  const data = {
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  };
  const log = JSON.stringify(data);
  console.log(log);
};

const ProfilerPage: React.FC = () => {
  return (
    <>
      <div>
        <Profiler id="button1" onRender={profilerCallback}>
          <Button>Button1</Button>
        </Profiler>
      </div>
      <div>
        <Profiler id="button2" onRender={profilerCallback}>
          {[...Array(10)].map((_, index) => (
            <Button key={index}>Button2</Button>
          ))}
        </Profiler>
      </div>
    </>
  );
};

export default ProfilerPage;
