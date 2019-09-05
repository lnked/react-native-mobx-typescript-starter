// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { mount, shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

// import { Colors } from '@/resources/styles';

// import Badge from './';

// describe('Badge', () => {
//   const title = 'Test badge';

//   it('renders without crashing', () => {
//     const rendered = renderer.create(<Badge />).toJSON()
//     expect(rendered).toBeTruthy();
//   });

//   it('should have the correct title', () => {
//     const rendered = renderer.create(<Badge title={title} />).toTree();
//     expect(rendered.props.title).toEqual(title);
//   });

//   it('should be the correct default color', () => {
//     const rendered = shallow(<Badge />);
//     expect(rendered.find(View).prop('style').backgroundColor).toEqual(Colors.greenishTeal20);
//   });

//   it('should be the correct color', () => {
//     const rendered = shallow(<Badge color='red' / >);
//     expect(rendered.find(View).prop('style').backgroundColor).toEqual(Colors.radicalRed20);
//   });
// });
