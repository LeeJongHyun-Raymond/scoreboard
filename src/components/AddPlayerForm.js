import React from 'react';

export class AddPlayerForm extends React.Component {
    state = {
        value : ''
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        // 화면을 리프레쉬하는 기본 이벤트 막기
        e.preventDefault();
        this.props.addPlayer(this.state.value);
    }

    render() {
        return (
            <form action="" className="form">
                <input type="text" className="input" placeholder="Enter a player's name" value={this.state.value} onChange={this.handleValueChange}/>
                <input type="submit" className="input" value="Add Player" onClick={this.handleSubmit}/>
            </form>
        );
    }
}