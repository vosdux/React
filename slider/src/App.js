import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
              <div className="wrapper">
                <SayFullName name="Ivan" surname="Ivanov" link="vk.ru" />
                <SayFullName name="Artem" surname="Petrov" link="facebook.com" />
                <SayFullName name="Sergey" surname="Sidorov" link="twiter.com" />
                <Hello />
              </div>
    );
  }
}

function Hello() {
  return (
    <h1>Hello</h1>
  )
}

function SayFullName(props) {
  return (
    <div>
      <h1>Мое имя {props.name}, Фамилия {props.surname}</h1>
      <a href={props.link}>Ссылка на профиль</a>
    </div>
  )
}

export default App;
