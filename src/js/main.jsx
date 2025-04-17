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
import Footer from './components/Footer.jsx';

let cardInfo = [
  {title: "Switzerland",
    body: "Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. Its cities contain medieval quarters, with landmarks like capital Bern's Zytglogge clock tower and Lucerne's wooden chapel bridge.",
    imageUrl: "https://images.zicasso.com/a5416f42d302172f48d884a275426c26.jpg",
    buttonLabel: "Find Out More!",
    buttonUrl: "https://en.wikipedia.org/wiki/Switzerland"},
  
  {title: "Germany",
    body: "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes.",
    imageUrl:  "https://www.german-way.com/wp-content/uploads/2023/11/s-widua-iPOZf3tQfHA-unsplash-BER_1024.jpg",
    buttonLabel: "Find Out More!",
    buttonUrl: "https://en.wikipedia.org/wiki/Germany"},

  {title: "Brazil",
    body: "Brazil is the largest and easternmost country in South America. It is the world's fifth-largest country by area and the seventh largest by population, with over 212 million people.",
    imageUrl: "https://images.goway.com/production/styles/wide/s3/featured_images/shutterstock_1276835941.jpg?VersionId=8J5kvtmyfQvvXxvXnm3qGW2JAq6oIiOX&itok=rsqgjKoT",
    buttonLabel: "Find Out More!",
    buttonUrl: "https://en.wikipedia.org/wiki/Brazil"},

  {title: "Thailand",
    body: "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha.",
    imageUrl: "https://media.timeout.com/images/105240236/image.jpg",
    buttonLabel: "Find Out More!",
    buttonUrl: "https://en.wikipedia.org/wiki/Thailand"}
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <div className="container-fluid">
      <div className="row justify-content-center">
        {cardInfo.map((item, index) => (
          <Card key={index}
            title={item.title}
            body={item.body}
            imageUrl={item.imageUrl}
            buttonLabel={item.buttonLabel}
            buttonUrl={item.buttonUrl} />
        ))}
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
)
