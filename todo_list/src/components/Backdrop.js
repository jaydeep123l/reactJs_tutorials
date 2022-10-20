
function Backdrop(props) {

    let handleBackdropOnClick = (e) => {
        props.updateParentCompState(false)
    }

    return (<div className="backdrop" onClick={handleBackdropOnClick}/>);
}

export default Backdrop;
