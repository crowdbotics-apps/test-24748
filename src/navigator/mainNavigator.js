import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen19209848Navigator from '../features/BlankScreen19209848/navigator';
import BlankScreen18209847Navigator from '../features/BlankScreen18209847/navigator';
import ArticleList209846Navigator from '../features/ArticleList209846/navigator';
import Maps209833Navigator from '../features/Maps209833/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen19209848: { screen: BlankScreen19209848Navigator },
BlankScreen18209847: { screen: BlankScreen18209847Navigator },
ArticleList209846: { screen: ArticleList209846Navigator },
Maps209833: { screen: Maps209833Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
