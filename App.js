import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FetchFamilias } from './ModulosFinal/FetchFamilias';
import { Cartas } from './ModulosFinal/Cartas';
import { BusinessCards } from './ModulosFinal/BusinessCards';
import { Mapa } from "./ModulosFinal/Mapa";
import { StopWatch } from "./ModulosFinal/StopWatch";
import { RealmCartas } from "./ModulosFinal/RealmCartas";
import { Redux } from "./ModulosFinal/Redux";
import { Menu } from "./ModulosFinal/Menu";

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="FetchFamilias" component={FetchFamilias}/>
        <Stack.Screen name="Cartas" component={Cartas}/>
        <Stack.Screen name="BusinessCards" component={BusinessCards}/>
        <Stack.Screen name="Mapa" component={Mapa}/>
        <Stack.Screen name="StopWatch" component={StopWatch}/>
        <Stack.Screen name="RealmCartas" component={RealmCartas}/>
        <Stack.Screen name="Redux" component={Redux}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );

}
