import React, { Component } from 'react';
import { FormContext } from '../context';

export default class Form extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    get formContext() {
        return {
            formId: this.props.id,
            values: {}
        }
    }

    render() {
        return (
            <FormContext.Provider value={this.formContext}>
                { this.props.children }
            </FormContext.Provider>
        );
    }
}