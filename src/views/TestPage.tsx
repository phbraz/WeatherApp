import { Button } from "tamagui";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import {  StyleSheet, View } from "react-native";




const TestPage = () => {
    const width = useSharedValue<number>(100);

    const increaseBbarHandler = () => {
        width.value = withSpring(width.value + 50);
    };

    const decreaseBbarHandler = () => {
        width.value = withSpring(width.value - 50);
    }

    return (
        <View style={styles.container}>
           <Animated.View
               style={{...styles.box, width}}
           />
            <Button onPress={increaseBbarHandler}>Increase bar</Button>
            <Button style={{marginVertical: 20}} onPress={decreaseBbarHandler}>Decrease bar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        height: 100,
        backgroundColor: '#b58df1',
        borderRadius: 20,
        marginVertical: 64,
    },
});


export { TestPage }


