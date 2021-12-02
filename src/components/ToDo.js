import React from 'react'

class ToDo extends React.Component {
    render() {
        return (
            <li className="list-group d-flex align-tiems-center">
                {this.props.task.name}
                <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
            </li>
        )
    }
}
export default ToDo