import { Link } from 'react-router-dom'
import { OptionTitle, ButtonSubtitle} from '../common/Dashboard'
import './style.css'

export default function Sites() {


    return (
        <>
            <div className="selection">
            <Title />
            <Jag />
            <Mns />
            <Sao />
            </div>
        </>
    )
}

export function Title() {

    return (
        <>
            <div className="title">
                <OptionTitle>Selecione uma opção abaixo: </OptionTitle>            
            </div>
        </>
    )
}


export function Jag() {
    return (
        <>
        <Link to={{ pathname: "Dashboard", site:"JAG" }}>
            <div className="jag">                                       
                <ButtonSubtitle>Acessar Vacinômetro:</ButtonSubtitle>
                <div className="number">
                    <p>JAG</p>
                </div>
            </div>
            </Link> 
        </>
    )
}

export function Mns() {
    return (
        <>
        <Link to={{ pathname: "Dashboard", site:"MNS" }}>
            <div className="mns">
                <ButtonSubtitle>Acessar Vacinômetro:</ButtonSubtitle>
                <div className="number">
                    <p>MNS</p>
                </div>
            </div>
            </Link>
        </>
    )
}



export function Sao() {
    return (
        <>
        <Link to={{ pathname: "Dashboard", site:"SAO" }}>
            <div className="sao">
                <ButtonSubtitle>Acessar Vacinômetro:</ButtonSubtitle>
                <div className="number">
                    <p>SAO</p>
                </div>
            </div>
            </Link>
        </>
    )
}
