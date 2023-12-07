import '../../App.css'

export default function Footer() {

    return (
        <>
            <footer className='footer container-fluid'>
<br/>
                <h3 className='text-center'>Essam Konafa</h3>

                <div className='justify-content-center'>

                    <ul className='Ficon d-flex'>
                        <li className='mx-3'>
                            <a href='https://www.facebook.com/essam.konafa/' target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className='mx-3'>
                            <a href='https://www.linkedin.com/in/essam-konafa-589310286/' target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className='mx-3'>
                            <a href='https://github.com/EssamKonafa' target='_blank' rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                    <p className='text-center'>@ konafa. all right resreved</p>
                </div>
            </footer>
        </>
    )
}

