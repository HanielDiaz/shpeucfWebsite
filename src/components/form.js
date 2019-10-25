import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../style/components/form.css'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        
    }

    changeState(name, val) {
        if(!val) val = "";
        this.setState({
            [name]: val
        })

    }

    createField(field){
        const {
            name,
            type,
            required,
            css
        } = field;

        let input = null;
        switch(type) {
            case "text":
            case "email":
            case "password":
            case "date":
                input = <input required={required} type={type} placeholder={name} value={this.state[name]} onChange={(event) => this.changeState(name, event.target.value)} />
            break;
        }
        return (
        <label className="fieldContainer">
            <div className="inputContainer">
                {input}
            </div>
        </label>
        )
    }

    render() {
        return (
            <form onSubmit= {(event) => {
                event.preventDefault();
                this.props.saveTo(this.state)}}
                 >
                {this.props.fields.map((field) => this.createField(field))}
                <input type="submit" value={this.props.submitName} />
            </form>
        )
    }
}


Form.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.objectOf({
        name: PropTypes.string,
        type: PropTypes.string,
        required: PropTypes.bool
    })).isRequired,
    saveTo: PropTypes.func.isRequired,
    submitName: PropTypes.string
}

export { Form }
