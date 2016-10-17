import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import OnBoard from './OnBoard';
import MaizeScreen from './MaizeScreen';
import GoldScreen from './GoldScreen';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ModalScreen from './ModalScreen';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">
        {/* Tab Container */}
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* Tab and it's scenes */}
          <Scene key="start" title="START" icon={TabIcon}>
            <Scene
              key="scarlet"
              component={ScarletScreen}
              title="Start"
            />
            <Scene
              key="gray"
              component={GrayScreen}
              title="Gray"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="tour" title="TOUR" icon={TabIcon}>
            <Scene
              key="OnBoard"
              component={OnBoard}
              title="OnBoard"
              hideNavBar
              hideTabBar
            />
            <Scene
              key="maize"
              component={MaizeScreen}
              title="Maize"
            />
          </Scene>

          {/* Tab and it's scenes */}
          <Scene key="other" title="OTHER" icon={TabIcon}>
            <Scene
              key="gold"
              component={GoldScreen}
              title="Gold"
            />
            <Scene
              key="one"
              component={ScreenOne}
              title="One"
            />
            <Scene
              key="two"
              component={ScreenTwo}
              title="Two"
            />
          </Scene>
        </Scene>

        <Scene
          key="modal"
          direction="vertical"
          component={ModalScreen}
          title="Modal"
          hideNavBar
        />
      </Scene>
    </Router>
  );
}

export default App;
