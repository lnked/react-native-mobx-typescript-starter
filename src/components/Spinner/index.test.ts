// import * as React from 'react';
// import renderer from 'react-test-renderer';
// import { mount } from 'enzyme';

// import Spinner from './';

// describe('Spinner', () => {
//   const props = {
//     size: 'large',
//   };

//   it('renders without crashing', () => {
//     const rendered = renderer.create(/>).toJSON() as Spinner

//                                      expect(rendered).toBeTruthy();
//   });

//   it('should have the correct size', () => {
//     const rendered = renderer.create({ ...props } as Spinner / > );
//     const tree = rendered.toTree();

//     expect(tree.props).toEqual(props);
//   });

//   it('should have the correct size', () => {
//     const wrapper = mount({ ...props } as Spinner / > );

//     expect(wrapper.props().size).toEqual('large');

//     wrapper.setProps({ size: 'small' });

//     expect(wrapper.props().size).toEqual('small');
//   });
// });
