import {createBottomTabNavigator,createAppContainer} from "react-navigation";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";

const BottomTabs = createBottomTabNavigator({
    tab1:{screen:Tab1},
    tab2:{screen:Tab2},
});

export default createAppContainer(BottomTabs)