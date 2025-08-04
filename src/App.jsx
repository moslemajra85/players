import Navbar from "./components/Navbar"
import PlayerList from "./components/PlayerList"
import Footer from "./components/Footer"


const players = [
  {
    name: "Lionel Messi",
    age: 36,
    team: "Inter Miami", 
    pic: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Cristiano Ronaldo",
    age: 39,
    team: "Al Nassr", 
    pic: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Kylian Mbappé",
    age: 25,
    team: "Paris Saint-Germain", 
    pic: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Erling Haaland",
    age: 23,
    team: "Manchester City", 
    pic: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    name: "Kevin De Bruyne",
    age: 32,
    team: "Manchester City", 
    pic: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Mohamed Salah",
    age: 31,
    team: "Liverpool", 
    pic: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    name: "Robert Lewandowski",
    age: 35,
    team: "FC Barcelona", 
    pic: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Neymar Jr",
    age: 32,
    team: "Al Hilal",
    pic: "https://images.unsplash.com/photo-1508672019048-805c876b67e2"
  }
] 


const App = () => {
  return (
    <div>


      <Navbar />
      <PlayerList players={players} />
      <Footer />

    </div>
  )
}

export default App