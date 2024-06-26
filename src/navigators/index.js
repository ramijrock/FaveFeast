import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ForgotPassword, RegisterPhoneScreen, SignInScreen, SignupScreen, SplashScreen, VerificationScreen, WelcomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

const Navigators = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignupScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="RegisterPhone" component={RegisterPhoneScreen} />
                <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigators;