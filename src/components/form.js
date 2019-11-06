import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom'
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
            case "time":
                input = <input className="general" required={required} type={type} placeholder={name} value={this.state[name]} onChange={(event) => this.changeState(name, event.target.value)} />
            break;
            case "select":
                input = <select className="general">{field.options.map(option => <option value={option}>option</option>)}</select>
            break;
            default:
                console.error("Please choose a supported type.\nSupported types include: ['text','email','password','date','time','select'...]\n View more types in the form.js component");            
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
                onClick={(e)=> e.stopPropagation()}
                 >
                {this.props.fields.map((field) => this.createField(field))}
                <input className="general" type="submit" value={this.props.submitName} />
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
