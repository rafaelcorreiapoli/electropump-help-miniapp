import { TabNavigator } from 'react-navigation'
import HomeScreen from './HomeScreen'
import FetchTestScreen from './FetchTestScreen'

export default TabNavigator({
  HomeStack: { screen: HomeScreen },
  SettingsStack: { screen: FetchTestScreen },
}, {
  tabBarPosition: 'bottom',
});
