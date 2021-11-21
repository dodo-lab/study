import React, {useState} from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

class Vec2 {
  constructor(public x: number, public y: number) {}
}

const Screen: React.FC = () => {
  const [currentPos, setCurrentPos] = useState<Vec2>({x: 0, y: -100});
  const [touchStartPos, setTouchStartPos] = useState<Vec2>({x: 0, y: 0});
  const [movePos, setMovePos] = useState<Vec2>({x: 0, y: 0});

  const translateX = currentPos.x + (movePos.x - touchStartPos.x);
  const translateY = currentPos.y + (movePos.y - touchStartPos.y);

  const handleMoveShouldSetResponder = () => {
    return true;
  };

  const handleResponderGrant = (event: GestureResponderEvent) => {
    setTouchStartPos({x: event.nativeEvent.pageX, y: event.nativeEvent.pageY});
  };

  const handleResponderMove = (event: GestureResponderEvent) => {
    setMovePos({x: event.nativeEvent.pageX, y: event.nativeEvent.pageY});
  };

  const handleResponderRelease = () => {
    setTouchStartPos({x: 0, y: 0});
    setMovePos({x: 0, y: 0});
    setCurrentPos({x: translateX, y: translateY});
  };

  return (
    <View style={styles.container}>
      <View
        style={{...styles.box, transform: [{translateX}, {translateY}]}}
        // style={styles.box}
        onMoveShouldSetResponder={handleMoveShouldSetResponder}
        onResponderGrant={handleResponderGrant}
        onResponderMove={handleResponderMove}
        onResponderRelease={handleResponderRelease}
      />
      <Text>
        Current: {currentPos.x}, {currentPos.y}
      </Text>
      <Text>
        TouchStart: {touchStartPos.x}, {touchStartPos.y}
      </Text>
      <Text>
        Move: {movePos.x}, {movePos.y}
      </Text>
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
