import React, {Component} from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'

export default class Main extends Component{
    render(){
        return(
            <div id="main-container">
                <form action="">
                    <img src={logo} alt="logo" />
                    <input 
                        placeholder="criar um box"
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        )
    }
}