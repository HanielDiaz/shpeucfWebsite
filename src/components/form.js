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
            required
        } = field;

        let input = null;
        switch(type) {
            case "textInput":
                input = <input required={required} type="text" placeholder={name} value={this.state[name]} onChange={(event) => this.changeState(name, event.target.value)} />
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
            <form onSubmit= {() => this.props.saveTo(this.state)} >
                {this.props.fields.map((field) => this.createField(field))}
                <input type="submit" value="Submit" />
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
    saveTo: PropTypes.func.isRequired
}

export { Form }
