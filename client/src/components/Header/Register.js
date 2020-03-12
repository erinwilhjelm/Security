import React, {Component} from 'react'
import {register} from '/UserFunctions'


class Register extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {}
        
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,

        }

        register(newUser).then(res => {
            this.props.history.push('/login')
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt -5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            h1.

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}