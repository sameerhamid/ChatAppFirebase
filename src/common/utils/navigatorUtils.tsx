import {
  NavigationContainerRefWithCurrent,
  ParamListBase,
  StackActions,
} from '@react-navigation/native';
import React from 'react';

export const navigationRef: React.RefObject<
  NavigationContainerRefWithCurrent<ParamListBase>
> = React.createRef();

export const navigate = (name: string, params?: object): void => {
  navigationRef.current?.navigate(name, params);
};

export const navigateToAnotherStack = (
  stackName: string,
  screenName: string,
  params?: object,
): void => {
  navigationRef.current?.navigate(stackName, {
    screen: screenName,
    params,
  });
};

export const reset = (routeName: string, params?: object): void => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: routeName, params}],
  });
};

export const goBack = (): void => {
  navigationRef.current?.goBack();
};

export const replace = (routeName: string): void => {
  navigationRef.current?.dispatch(StackActions.replace(routeName));
};
