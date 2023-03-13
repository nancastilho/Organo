import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='content'>
                <div className='redes'>
                    <img src='imagens/fb.png' alt='Redes Sociais'></img>
                    <img src='imagens/ig.png' alt='Redes Sociais'></img>
                    <img src='imagens/tw.png' alt='Redes Sociais'></img>
                </div>
                <div className='imagemOrgano'>
                    <img src='imagens/logo.png' alt='Logo Organo'></img>
                </div>
                <div className='desenvolvido'>
                    <p>Desenvolvido por Renan.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;