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

        // 퐄체크, 입력폼 체크
        const playerInput = document.getElementById("player").validity.valid;
        console.log(playerInput);
        console.log(document.getElementById("form").checkValidity());
        if (!playerInput) {
            // 에러메세지 보여주기
            return;
        }

        this.props.addPlayer(this.state.value);
    }

    render() {
        return (
            <form action="" className="form" onSubmit={this.handleSubmit} noValidate id="form">
                <input type="text" className="input" placeholder="Enter a player's name" value={this.state.value} onChange={this.handleValueChange} required={true} id="player"/>
                <input type="submit" className="input" value="Add Player"/>
            </form>
        );
    }
}