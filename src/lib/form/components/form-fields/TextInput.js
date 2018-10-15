import React, { Component } from 'react';
import { FormContext } from '../../context';

export default class TextInput extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <FormContext.Consumer>
                {value => <p>{value.test}</p>}
            </FormContext.Consumer>
        )
    }
}

