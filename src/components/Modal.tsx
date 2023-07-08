import WhiskeyForm from './WhiskeyForm'


type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return <></>;
    return (
        <div 
            onClick={ props.onClose } 
            className='modal-1'
        
        >
            <div
                className='modal-2'
                onClick={(e) => {
                    e.stopPropagation()
                }}
            >
                <div className="modal-3">
                    <div className="modal-4">
                        <p className="modal-5"
                        onClick={props.onClose}>
                            X
                        </p>
                    </div>
                    <div className="modal-6">
                        <WhiskeyForm id={props.id } onClose={props.onClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal