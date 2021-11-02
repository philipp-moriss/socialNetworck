import React from 'react';
import ButtonMaster from "../ButtonMaster/ButtonMaster";


type ProfileStatusPropsType = {
    status: string
}

type ProfileStatusStateType = {
    editMode: boolean
}


class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false
    }

    fuc = () => {
        this.setState({editMode: false})
        console.log("aa")
        document.body.removeEventListener("click", this.fuc)
    }

    activateEditMode = () => {
        this.setState({editMode: true})
        document.body.addEventListener("click", this.fuc)
    }

    deactivateEditModeAndSave = () => {
        console.log("save")
        this.setState({editMode: false})
        document.body.removeEventListener("click", this.fuc)
    }


    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&

                <div>
                    <input value={this.props.status} autoFocus/>
                    <ButtonMaster onClickMaster={this.deactivateEditModeAndSave} name={"Save"}/>
                </div>

                }

            </div>
        )
    }
}

export default ProfileStatus;