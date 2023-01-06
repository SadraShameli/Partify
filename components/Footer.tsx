import { faIdeal, faCcAmex, faCcApplePay, faCcPaypal, faCcMastercard, faCcVisa, faInstagram, faFacebook, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {
    return (
        <>
            <div className='divider' />
            <footer className='container mt-28 mb-6'>
                <div className='footer md:justify-around'>
                    <div className='md:justify-items-center gap-y-5 '>
                        <div className='grid gap-y-2'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className='footer-title normal-case'>Partify</span>
                        </div>
                        <div className='flex gap-4 w-72'>
                            <FontAwesomeIcon icon={faIdeal} />
                            <FontAwesomeIcon icon={faCcApplePay} />
                            <FontAwesomeIcon icon={faCcPaypal} />
                            <FontAwesomeIcon icon={faCcMastercard} />
                            <FontAwesomeIcon icon={faCcVisa} />
                            <FontAwesomeIcon icon={faCcAmex} />
                        </div>
                    </div>
                    <div>
                        <span className='footer-title normal-case'>Company</span>
                        <a className='link link-hover'>About us</a>
                        <a className='link link-hover'>Contact</a>
                        <a className='link link-hover'>Location</a>
                    </div>
                    <div>
                        <span className='footer-title normal-case'>Legal</span>
                        <a className='link link-hover'>Terms of use</a>
                        <a className='link link-hover'>Privacy policy</a>
                        <a className='link link-hover'>Cookie policy</a>
                    </div>
                </div>
                <div className='divider mt-28' />
                <div className='flex flex-wrap gap-10 justify-around md:justify-between'>
                    <p>Copyright © 2023 Partify</p>
                    <div className='flex gap-10 w-52'>
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faTelegram} />
                    </div >
                </div>
            </footer >
        </>
    );
}
