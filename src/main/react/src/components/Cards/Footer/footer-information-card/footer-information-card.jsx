import * as React from 'react'
import './footer-information-card.scss'


function FooterInformationCard() {
    return (
        <div className='footerInformationBody'>
            <div className='displayDivMenu'>
            <h1 className='h1Information'>Menu</h1>
                <a href="#">Quem somos</a>
                <a href="#">Trabalhe com a gente</a>
                <a href="#">Contato</a>
                <a href="#">Acesse a plataforma</a>
                <a href="#"> Política de Privacidade</a>
            </div>
            <div className='displayDivSolucoes'>
                <h1 className='h1Information'>Nossas soluções</h1>
                <a href="#">Study | enem</a>
                <a href="#">Study | fund</a>
                <a href="#">Study | fuvest</a>
                <a href="#">Study | unicamp</a>
                <a href="#">Study | jornada</a>
            </div>
            <div className='displayDivContato'>
                <h1 className='h1Information'>Contatos</h1>
                <a href="#">+55 (48) 99823-7774</a>
                <a href="#">allanoliveiradev@gmail.com</a>
                <a href="#">Rua Avelino Esmério da Silva - 185.</a>
                <a href="#">Jardim Esperança - SP, 12.324-260</a>
            </div>

        </div>
)
}

export default FooterInformationCard;