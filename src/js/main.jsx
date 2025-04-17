import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron.jsx';
import Card from './components/Card.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <div className="row justify-content-center">
      <Card
        title="Switzerland"
        body="Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern's Zytglogge clock tower and Lucerne's wooden chapel bridge."
        imageUrl="https://images.zicasso.com/a5416f42d302172f48d884a275426c26.jpg"
        buttonLabel="Find Out More!"
        buttonUrl="https://en.wikipedia.org/wiki/Switzerland"
      />
      <Card />
      <Card />
      <Card />
    </div>
  </React.StrictMode>,
)
