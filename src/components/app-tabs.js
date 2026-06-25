import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import CreateScreen from './CreateScreen';
import ScanScreen from './ScanScreen';

export default function AppTabs() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'create', title: 'Create', focusedIcon: 'plus-box', unfocusedIcon: 'plus-box-outline' },
    { key: 'scan', title: 'Scan', focusedIcon: 'qrcode-scan', unfocusedIcon: 'camera' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    create: CreateScreen,
    scan: ScanScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: 'transparent' }} // Let container theme bleed through
    />
  );
}