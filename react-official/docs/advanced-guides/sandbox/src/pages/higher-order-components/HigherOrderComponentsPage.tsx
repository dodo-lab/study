import { Button, Input } from '@mui/material';
import React, { useEffect, useState } from 'react';

type InjectProps = {
  log: string;
};

function withLogger<T>(Component: React.ComponentType<T & InjectProps>) {
  // 引数のComponentをラップした高階コンポーネントを作成
  const WithLogger: React.FC<T & InjectProps> = (props) => {
    const { log } = props;

    useEffect(() => {
      console.log(`${log} mount`);
      return () => console.log(`${log} unmount`);
    }, [log]);

    return <Component {...props} />;
  };
  // 表示名に引数のComponentも含めることでデバッグしやすくする
  WithLogger.displayName = `WithLogger(${
    Component.displayName || 'Component'
  })`;

  return WithLogger;
}

const HigherOrderComponentsPage: React.FC = () => {
  const LoggerButton = withLogger(Button);
  const [log, setLog] = useState('loggerButton');

  return (
    <>
      <Input
        value={log}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLog(e.target.value)
        }
      />
      <LoggerButton variant="contained" color="primary" log={log}>
        BUTTON
      </LoggerButton>
    </>
  );
};

export default HigherOrderComponentsPage;
