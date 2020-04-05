import React, { useState } from 'react';
import './style.css';
import logoImage from '../../assets/logo.svg' ;
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'
import api from '../../services/api';

export default function NewIncident(){
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [value, setValue]=useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

   async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId
                }
            })

            history.push('/profile');

        }catch{
            alert('Erro no registro, tente novamente');
        }
    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontar um doador</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={18} color="#E02041" />
                        Voltar para Home.
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />

                    <button className="button" type="submit">Cadastrar incidente</button>

                </form>
            </div>
        </div>
    );
}