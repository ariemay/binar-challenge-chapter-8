import React from "react";

class FormInput extends React.Component {
    state = {
        playerName : "",
        email : "",
        address : "",
        ktp : "",
    }

    changeName = (value) => {
        this.setState({
            playerName: value.target.value
        })
    }

    changeEmail = (value) => {
        this.setState({
            email: value.target.value
        })
    }

    changeAddress = (value) => {
        this.setState({
            address: value.target.value
        })
    }

    changeKTP = (value) => {
        this.setState({
            ktp: value.target.value
        })
    }

    render() {
        return (
            <div style={{ width: 500, height: 200, marginLeft: 50, marginTop: 50 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h2>{ !this.props.isEdit ? "Create Player" : "Edit Player" }</h2>
                    <input value={this.state.playerName} placeholder={"Input name"} onChange={(v) => this.changeName(v)}/>
                    <input placeholder={"Input email"} onChange={(v) => this.changeEmail(v)}/>
                    <input placeholder={"Input Address"} onChange={(v) => this.changeAddress(v)}/>
                    {/* input di bawah hanya pada saat bikin baru */}
                    { !this.props.isEdit ?
                        <input placeholder={"Nomor KTP"} onChange={(v) => this.changeKTP(v)}/> : null
                    }
                    <h4>{this.state.playerName}</h4>
                </div>
            </div>
        )
    }
}

export default FormInput;