import React, {useState} from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

class Vec2 {
  constructor(public x: number, public y: number) {}
}

const TextVec2: React.FC<{text: string; vec2: Vec2}> = ({text, vec2}) => {
  return (
    <Text>
      {text}：( {Math.round(vec2.x)} , {Math.round(vec2.y)} )
    </Text>
  );
};

const Screen: React.FC = () => {
  const [beforeMovePos, setBeforeMovePos] = useState<Vec2>({x: 0, y: -100});
  const [touchStartPos, setTouchStartPos] = useState<Vec2>({x: 0, y: 0});
  const [movingPos, setMovingPos] = useState<Vec2>({x: 0, y: 0});

  const translateX = beforeMovePos.x + (movingPos.x - touchStartPos.x);
  const translateY = beforeMovePos.y + (movingPos.y - touchStartPos.y);

  const handleMoveShouldSetResponder = () => {
    return true;
  };

  const handleResponderGrant = (event: GestureResponderEvent) => {
    setTouchStartPos({x: event.nativeEvent.pageX, y: event.nativeEvent.pageY});
  };

  const handleResponderMove = (event: GestureResponderEvent) => {
    setMovingPos({x: event.nativeEvent.pageX, y: event.nativeEvent.pageY});
  };

  const handleResponderRelease = () => {
    setTouchStartPos({x: 0, y: 0});
    setMovingPos({x: 0, y: 0});
    setBeforeMovePos({x: translateX, y: translateY});
  };

  return (
    <View style={styles.container}>
      <View
        style={{...styles.box, transform: [{translateX}, {translateY}]}}
        onMoveShouldSetResponder={handleMoveShouldSetResponder}
        onResponderGrant={handleResponderGrant}
        onResponderMove={handleResponderMove}
        onResponderRelease={handleResponderRelease}
      />
      <TextVec2 text="Before move position" vec2={beforeMovePos} />
      <TextVec2 text="Touch start position" vec2={touchStartPos} />
      <TextVec2 text="Moving position" vec2={movingPos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});

export const GestureResponderScreen: ScreenProps = {
  name: 'GestureResponder',
  component: Screen,
  options: {
    title: 'GestureResponder',
  },
};
