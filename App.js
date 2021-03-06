import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import SquareScreen from "./src/screens/SquareScreen";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: "Square",
    defaultNavigationOptions: {
      title: "Random Color Generator"
    }
  }
);

export default createAppContainer(navigator);
