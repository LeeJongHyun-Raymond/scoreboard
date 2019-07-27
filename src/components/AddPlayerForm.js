import React from 'react';

export class AddPlayerForm extends React.Component {
    state = {
        value : ''
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <form action="" className="form">
                <input type="text" className="input" placeholder="Enter a player's name" value={this.state.value} onChange={this.handleValueChange}/>
                <input type="submit" className="input" value="Add Player"/>
            </form>
        );
    }
}