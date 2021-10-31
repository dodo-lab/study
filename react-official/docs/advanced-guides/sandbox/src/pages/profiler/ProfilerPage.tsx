import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { Profiler, ProfilerOnRenderCallback } from 'react';

/**
 * Profilerのコールバック関数
 * @param id コミットされたProfilerのID
 * @param phase 'mount'ならツリーの初回マウント、'update'なら再レンダーを意味する
 * @param actualDuration コミットされた更新のレンダリングに要した時間
 * @param baseDuration メモ化などの最適化をせずにツリー全体をレンダリングするための推定時間
 * @param startTime Reactがこの更新のレンダリングを開始した時刻
 * @param commitTime Reactがこの更新をコミットした時間
 * @param interactions この更新に属するインタラクションのセット
 */
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
          <Box>
            {[...Array(10)].map((_, index) => (
              <Button key={index}>Button2</Button>
            ))}
            <Profiler id="button3" onRender={profilerCallback}>
              {[...Array(10)].map((_, index) => (
                <Button key={index}>Button3</Button>
              ))}
            </Profiler>
          </Box>
        </Profiler>
      </div>
    </>
  );
};

export default ProfilerPage;
