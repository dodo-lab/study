import {useState} from 'react';
import {InputProps} from 'react-native-elements';

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChangeText = (text: string) => setValue(text);

  const props: InputProps = {
    value,
    onChangeText,
  };

  return [value, props] as const;
};
