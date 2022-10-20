import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useState } from "react";

function Todo(props) {

    const [isModalOpen, updateModelOpenStatus] = useState(false)

    let handleDelete = (e) => {
        console.log('delete button clicked, with event fired as :-')
        console.log(e)
        updateModelOpenStatus(true)
    }

    return (
        <div className="card">
            <h1>{props.text}</h1>
            <div className="actions">
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>
            { isModalOpen && < Modal updateParentCompState={updateModelOpenStatus} />}
            { isModalOpen && <Backdrop updateParentCompState={updateModelOpenStatus} />}
        </div>
    );
}

export default Todo;
