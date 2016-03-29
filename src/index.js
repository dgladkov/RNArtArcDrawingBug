import React, {
  ART,
  Component,
  StyleSheet,
  View,
} from 'react-native';
import Wedge from './Wedge.art';

const Surface = ART.Surface;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Surface
          width={120}
          height={320}
        >
          <Wedge
            outerRadius={50}
            startAngle={0}
            endAngle={60}
            fill="blue"
          />
          <Wedge
            outerRadius={25}
            startAngle={60}
            endAngle={120}
            fill="red"
            y={110}
            x={25}
          />
          <Wedge
            outerRadius={40}
            startAngle={120}
            endAngle={20}
            fill="green"
            y={170}
            x={10}
          />
          <Wedge
            outerRadius={30}
            startAngle={-60}
            endAngle={80}
            fill="orange"
            y={260}
            x={20}
          />
        </Surface>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
