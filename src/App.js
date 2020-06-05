import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    t: 0,
  };

  componentDidMount() {
    setInterval(() => {

      // Получаем текущую дату
      let dateCurrent = new Date();

      // Создаём дату ближайшего 8ого числа
      let date8 = new Date(
        
        // Извлекаем год из текущей даты
        dateCurrent.getFullYear(),

        // Получаем месяц (от 0 до 11) из текущей даты, а если день месяца больше или равен 8, то добавляем единичку
        (dateCurrent.getDate() < 8) && dateCurrent.getMonth() || (dateCurrent.getMonth() + 1) % 12,

        // Собственно сабж
        8
      );


      // Получаем время из текущей и полученой даты в миллисекундах и перегоняем в секунды
      let tCurrent = Math.floor(dateCurrent.getTime() / 1000);
      let t8 = Math.floor(date8.getTime() / 1000);


      // Получаем разницу в секундах
      let t = t8 - tCurrent;

      // Ставим титл (заголовок) приложения / вкладки в браузере
      document.title = t;


      // Записываем в state, при записи в state - приложение перерисовывается (можешь пока не вникать)
      this.setState({
        t,
      })
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* выводим t */}
            {this.state.t}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
