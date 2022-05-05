import React from "react";
import { useAlert } from 'react-alert'
// import JobButton from "../JobButton/index.js";
// buttons for job acceptance or rejection
const JobButton =(props) => {
    const alert = useAlert()

    const theme = `btn btn-${props.theme}`
    return (
        <button
            onClick={() => {
                alert.show(props.message)
            }}
            type="button"
            className={theme}>
            {props.name}
        </button>
    )
}

export default JobButton;