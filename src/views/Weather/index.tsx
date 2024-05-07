import { useEffect } from "react";
import { View } from "@tamagui/core";
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import { Button, Input, XStack } from "tamagui";

const Cloud = Animated.createAnimatedComponent(View);

const WeatherView = () => {
    const animation1 = useSharedValue(0);
    const animation2 = useSharedValue(0);

    useEffect(() => {
        animation1.value = withRepeat(
            withTiming(1, { duration: 5000, easing: Easing.linear }),
            -1,
            false,
        );

        animation2.value = withRepeat(
            withTiming(1, { duration: 7000, easing: Easing.inOut(Easing.ease) }),
            -1,
            false
        );
    }, []);

    const animatedStyles1 = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animation1.value * 1100 - 100 }], // replace 1100 with your screen width
        };
    });

    const animatedStyles2 = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: animation2.value * 900 - 100 }], // replace 900 with your screen width
        };
    });

    return (
        <View
            style={{
                backgroundColor: "skyblue",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <XStack alignItems="center" space="$2">
                <Input flex={1} size={"$4"} width={100}  placeholder={"Search city or post code"} />
            </XStack>
            <Button size={"$3"}>Go</Button>
            <Cloud
                style={[
                    {
                        height: 100,
                        width: 200,
                        backgroundColor: "#fff",
                        position: "absolute",
                        top: "20%",
                    },
                    animatedStyles1,
                ]}
            />
            <Cloud
                style={[
                    {
                        height: 50,
                        width: 150,
                        backgroundColor: "#ddd",
                        position: "absolute",
                        top: "30%",
                    },
                    animatedStyles2,
                ]}
            />
        </View>
    );
};

export { WeatherView };