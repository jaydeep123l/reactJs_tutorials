
function Modal(props) {

    let handleCancel = (e) => {
        console.log('...... clicked handleCancel with event fired as .......')
        console.log(e)
        props.updateParentCompState(false)
    }

    let handleConfirm =(e) => {
        handleCancel(e)
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={handleCancel}>Cancel</button>
            <button className="btn" onClick={handleConfirm}>Confirm</button>
        </div>
    );
}

export default Modal;
