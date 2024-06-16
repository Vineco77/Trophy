import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { v4 as uuidv4 } from 'uuid'

const Formulario = ({ aoCadastrar, times, cadastrarTime}) => {
  
    const [id, setId] = useState(uuidv4())
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            id,
            nome,
            cargo,
            imagem,
            time
        })

        setId(uuidv4())
        setNome("")
        setCargo("")
        setTime("")
        setImagem("")
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Caso queira criar um novo departamento</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do departamento'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                    />
                <Campo
                    obrigatorio={true}
                    type='color'
                    label='Cor' 
                    placeholder='Digite a cor do departamento'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                    />
                <Botao texto='Criar um novo departamento' />
            </form>
        </section>
    )
}

export default Formulario