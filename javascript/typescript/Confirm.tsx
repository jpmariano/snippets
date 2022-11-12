// Easiest way to declare a Function Component; return type is inferred.
const Confirm: React.FC <IProps> = (props) => {
    useEffect(() => {
        console.log('rendered');
        //this useEffect runs each time the variable inside the array changes
      }, [props.open]);
    Confirm.defaultProps = {
        cancelCaption: "Cancel",
        okCaption: "Okay"
    }

    const [cancelClickCount, setCancelClickCount] = React.useState(0);

    const handleCancelClick = () => {
        const newCount = cancelClickCount + 1;
        setCancelClickCount(newCount);
        if(newCount >= 2){
            props.onCancelClick();
        }
        
    }

    const handleOkClick = () => {
        props.onOkClick();
    }


    return (
        <div className={props.open? "open" : "close"}>
            {props.title}
            {props.content}
            
            <button onClick={handleCancelClick}>
                {cancelClickCount === 0 ? props.cancelCaption : "really?"}
            </button>
            <button onClick="this.handleOkClick">
                {props.handleOkClick}
            </button>
        </div>
    );
};

export default Confirm;