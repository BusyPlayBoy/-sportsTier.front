declare module 'react-native-keyboard-aware-scrollview' {
  import * as React from 'react';
  import {Constructor, ViewProps} from 'react-native';
  class keyboardAwareScrollViewComponent extends React.Component<ViewProps> {}
  const keyboardAwareScrollViewBase: keyboardAwareScrollViewComponent &
    Constructor<any>;
  class KeyboardAwareScrollView extends keyboardAwareScrollViewComponent {}
  export {KeyboardAwareScrollView};
}
