import './ErrorMessage.css'

const ErrorMessage = ({ message }) => {
    return (
        <div id="main-error">
            <div className='fof'>
                <h4>{message}</h4>
            </div>
        </div>);
}
export default ErrorMessage;