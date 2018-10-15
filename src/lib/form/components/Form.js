import React, { Component } from 'react';
import { FormContext } from '../context';

export default class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormContext.Provider value={{test: 'Passing Context'}}>
                { this.props.children }
            </FormContext.Provider>
        );
    }
}