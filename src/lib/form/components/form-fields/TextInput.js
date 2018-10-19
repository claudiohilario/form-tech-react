import React, { Component } from 'react';
import { FormContext } from '../../context';
import { withForm } from '../../HOC/withForm';

class TextInput extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    render() {
        return (
            <input type="text"/>
        )
    }
}

export default withForm(TextInput)

