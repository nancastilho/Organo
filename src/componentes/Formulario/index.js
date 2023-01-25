import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulrio = () => {

    const times = [
        '',
        'Spacestation Gaming',
        'G2 Esports',
        'Team BDS',
        'FURIA Esports',
        'FaZe Clan',
        'Version1',
        'Moist Esports',
    ]

    const ranks = [
        '',
        'Bronze',
        'Prata',
        'Ouro',
        'Platina',
        'Diamante',
        'Campeão',
        'Grande Campeão',
        'Lenda Supersônica',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }


    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio ={true} label="Nome" placeholder="Digite seu nome" />
                <ListaSuspensa label="Rank" itens={ranks}/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulrio;