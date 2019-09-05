// import * as React from 'react';
// import LinearGradient from 'react-native-linear-gradient';
// import { shallow } from 'enzyme';

// import { Colors } from '@/resources/styles';

// import Button from './';

// describe('Button', () => {
//   it('render correctly button component', () => {
//     const wrapper = shallow(/>) as Button

//                             expect(wrapper.find('View')).toHaveLength(1);
//   });

//   it('should render a disabled button', () => {
//     const wrapper = shallow(disabled as Button / >);

//     expect(wrapper.find('TouchableOpacity').props().disabled).toBeTruthy();
//   });

//   it('should have the correct theme', () => {
//     const theme = 'light';
//     const gradient = [Colors.white, Colors.white];
//     const wrapper = shallow(theme as Button= { theme } / >);

//     expect(wrapper.find(LinearGradient).props().colors).toEqual(gradient);
//   });

//   it('should have the correct text', () => {
//     const text = 'Test button';
//     const wrapper = shallow(text as Button= { text } / >);

//     expect(wrapper.find('Text').props().children).toEqual(text);
//   });

//   it('should call event on click of native button element', () => {
//     const onPress = jest.fn();
//     const wrapper = shallow(onPress as Button= { onPress } / >);

//     expect(onPress).not.toBeCalled();

//     wrapper.instance().onPress();

//     expect(onPress).toBeCalled();
//   });
// });
