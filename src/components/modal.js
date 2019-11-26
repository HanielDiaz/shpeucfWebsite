import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../components'
import '../style/components/modal.css'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: "false",

        }
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if (!this.props.visible) {
        return null;
        }
        return (
        <div 
        class="modal" 
        id="modal" 
        onClick={(e) => e.stopPropagation()} 
        onMouseOver={(e) => e.stopPropagation()}
        >
            <div className="content">{this.props.children}</div>
            <div className="actions">
            <button className="toggle-button" onClick={(event) => this.onClose(event)}>
                CLOSE
            </button>
            </div>
        </div>
        );
    }
}

export { Modal }
