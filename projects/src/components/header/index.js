import './styles.css';

import BtnMobile from '../../images/menu-mobile.svg'
import { useState } from 'react';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(true)

    const abrir = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <div className="header">
                <div className='navbar'>
                    <a href='/'><h1>Donatto | Agência de Viagens</h1></a>
                    {
                        menuOpen ?
                            (
                                <>
                                    <ul className='active'>
                                        <li>
                                            Home
                                        </li>
                                        <li>
                                            Serviços
                                        </li>
                                        <li>
                                            Login
                                        </li>
                                        <li>
                                            Cadastro
                                        </li>
                                    </ul>
                                </>
                            ) : null
                    }
                    <img className='abrir' src={BtnMobile} width={30} height={30} onClick={abrir} />
                </div>
            </div>
        </>
    );
};

export default Header;