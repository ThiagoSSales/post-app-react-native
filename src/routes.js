import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from './styles/colors';

import Feed from '~/pages/Feed';
import FilterPosts from '~/pages/FilterPosts';

const {Navigator, Screen} = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
          },
          tabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: 'roboto_400',
            fontSize: 11,
            marginTop: 5,
          },
          inactiveTintColor: colors.secundary,
          activeTintColor: colors.purple,
        }}>
        <Screen
          name="Feed"
          component={Feed}
          options={{
            title: 'My home',
            tabBarIcon: ({size, focused}) => {
              return (
                <Icon
                  name="home"
                  size={size}
                  color={focused ? colors.purple : colors.secundary}
                />
              );
            },
          }}
        />
        <Screen
          name="FilterPosts"
          component={FilterPosts}
          options={{
            tabBarIcon: ({size, focused}) => {
              return (
                <Icon
                  name="filter-list-alt"
                  size={size}
                  color={focused ? colors.purple : colors.secundary}
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
