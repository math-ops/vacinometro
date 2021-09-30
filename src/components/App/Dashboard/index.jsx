import React, { useEffect, useState } from 'react'
import { CardTitle, CardSubtitle, Subtitle } from '../../common/Dashboard'
import Health from '../../../styles/assets/Syringe.svg'
import axios from '../../../services/api'
import { CountUp } from 'use-count-up'
import './style.css'
import { Link,useLocation } from 'react-router-dom'

export default function Dashboard() {

    const [colaboradoresVacinados, setColaboradoresVacinados] = useState(0);
    const [colaboradores_elegiveis, setColaboradores_elegiveis] = useState(0);
    const [total_primeira_dose, setTotal_primeira_dose] = useState(0);
    const [total_segunda_dose, setTotal_segunda_dose] = useState(0);
    const [total_dose_unica, setTotal_dose_unica] = useState(0);
    const [total_alimentos_arrecadados, setTotal_alimentos_arrecadados] = useState(0);
    const [valorPercentual, setValorPercentual] = useState(0);

    let location = useLocation();

    useEffect(() => {

        const {site} = location;

        axios.get(`vacinometro/${site}`)
            .then((res) => {
                const { colaboradores_elegiveis,
                    total_alimentos_arrecadados,
                    total_dose_unica,
                    total_doses_aplicadas,
                    total_primeira_dose,
                    total_segunda_dose,
                    percentual,
                } = res.data[0];

                setColaboradoresVacinados(total_doses_aplicadas);
                setColaboradores_elegiveis(colaboradores_elegiveis);
                setTotal_primeira_dose(total_primeira_dose);
                setTotal_segunda_dose(total_segunda_dose);
                setTotal_dose_unica(total_dose_unica);
                setTotal_alimentos_arrecadados(total_alimentos_arrecadados);
                setValorPercentual(percentual);
            });

        const intervalId = setInterval(() => {

            axios.get(`vacinometro/${site}`)
                .then((res) => {
                    const { colaboradores_elegiveis,
                        total_alimentos_arrecadados,
                        total_dose_unica,
                        total_doses_aplicadas,
                        total_primeira_dose,
                        total_segunda_dose,
                        percentual
                    } = res.data[0];

                    setColaboradoresVacinados(total_doses_aplicadas);
                    setColaboradores_elegiveis(colaboradores_elegiveis);
                    setTotal_primeira_dose(total_primeira_dose);
                    setTotal_segunda_dose(total_segunda_dose);
                    setTotal_dose_unica(total_dose_unica);
                    setTotal_alimentos_arrecadados(total_alimentos_arrecadados);
                    setValorPercentual(percentual);
                });

        }, 30000);

        return () => clearInterval(intervalId);

    }, []);



    return (
        <>  
            <div className="dashboard">
            <TotalVacinados colaboradoresVacinados={colaboradoresVacinados} />
            <Elegiveis colaboradores_elegiveis={colaboradores_elegiveis} />
            <First total_primeira_dose={total_primeira_dose} />
            <Second total_segunda_dose={total_segunda_dose} />
            <Unic total_dose_unica={total_dose_unica} />
            <Alimentos total_alimentos_arrecadados={total_alimentos_arrecadados} />
            <Porcentagem valorPercentual={valorPercentual} />
            </div>
        </>
    )
}

export function TotalVacinados({ colaboradoresVacinados }) {

    return (
        <>
            <div className="totalvacinados">
                <CardTitle>Total de Colaboradores Totalmente Vacinados:</CardTitle>
                <Subtitle>(2ª Dose / Dose Única)</Subtitle>
                <Link to="/">
                <img src={Health} alt="Syringe" className="svg" />
                </Link>
                <div className="number">
                    <p><CountUp isCounting end={colaboradoresVacinados} duration={3.2} /></p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export function Elegiveis({ colaboradores_elegiveis }) {
    return (
        <>
            <div className="elegiveis">
                <CardSubtitle>Total de Colaboradores Elegíveis:</CardSubtitle>
                <div className="number">
                    <p><CountUp isCounting end={colaboradores_elegiveis} duration={3.2} /></p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export function First({ total_primeira_dose }) {
    return (
        <>
            <div className="dose-um">
                <CardSubtitle>Colaboradores Vacinados com a 1ª Dose:</CardSubtitle>
                <div className="number">
                    <p><CountUp isCounting end={total_primeira_dose} duration={3.2} /></p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export function Second({ total_segunda_dose }) {
    return (
        <>
            <div className="dose-dois">
                <CardSubtitle>Colaboradores Vacinados com a 2ª Dose:</CardSubtitle>
                <div className="number">
                    <p><CountUp isCounting end={total_segunda_dose} duration={3.2} /></p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export function Unic({ total_dose_unica }) {
    return (
        <>
            <div className="unica">
                <CardSubtitle>Colaboradores Vacinados com a Dose Única:</CardSubtitle>
                <div className="number">
                    <p><CountUp isCounting end={total_dose_unica} duration={3.2} /></p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export function Alimentos({ total_alimentos_arrecadados }) {
    return (
        <>
            <div className="alimentos">
                <CardSubtitle>Total de alimentos arrecadados (Kg):</CardSubtitle>
                <div className="number">
                    <p><CountUp isCounting end={total_alimentos_arrecadados} duration={3.2} /></p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export function Porcentagem({ valorPercentual }) {
    return (
        <>
            <div className="porcento">
                <CardSubtitle>Ciclo Vacinal Completo:</CardSubtitle>
                <div className="number">
                    <p><CountUp isCounting end={valorPercentual} duration={3.2} />%</p>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

