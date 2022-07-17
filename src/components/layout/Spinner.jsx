import loader from './assets/spinner.gif';

function Spinner() {
    return (
        <img src={loader} width={250} className='mx-auto' alt="loading..." />
    )
}

export default Spinner
