import React from 'react';
import { ChangeEvent } from 'react';
import ButtonMaster from "../ButtonMaster/ButtonMaster";


type ProfileStatusPropsType = {
    status: string
    updateStatus:(status:string)=>void;
}

type ProfileStatusStateType = {
    editMode: boolean
    status:string
}


class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
        status:this.props.status,
    }


    fuc = () => {
        this.setState({editMode: false})
        this.setState({status: this.props.status})
        document.body.removeEventListener("click", this.fuc)
    }

    activateEditMode = () => {
        this.setState({editMode: true})
        document.body.addEventListener("click", this.fuc)
    }

    deactivateEditModeAndSave = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
        document.body.removeEventListener("click", this.fuc)
    }

    onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({status:e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status ? this.state.status : "-----"}</span>
                </div>
                }
                {this.state.editMode &&

                <div>
                    <input value={this.state.status} onChange={this.onChangeHandler} autoFocus/>
                    <ButtonMaster onClickMaster={this.deactivateEditModeAndSave} name={"Save"}/>
                </div>

                }

            </div>
        )
    }
}

export default ProfileStatus;