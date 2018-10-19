import React from 'react';

import { FormContext } from '../context';

export function withForm(Component) {
    return function FormComponent(props) {
      return (
        <FormContext.Consumer>
          {context => <Component {...props} context={context} />}
        </FormContext.Consumer>
      );
    };
};