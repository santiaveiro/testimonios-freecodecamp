import './App.css';
import Testimonio from './components/testimonio.js'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla neque tempora unde voluptas obcaecati, quia nesciunt eos natus laboriosam provident excepturi ipsam est quasi asperiores quidem, delectus eaque recusandae.' />
        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla neque tempora unde voluptas obcaecati, quia nesciunt eos natus laboriosam provident excepturi ipsam est quasi asperiores quidem, delectus eaque recusandae.' />
        <Testimonio 
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nulla neque tempora unde voluptas obcaecati, quia nesciunt eos natus laboriosam provident excepturi ipsam est quasi asperiores quidem, delectus eaque recusandae.' />
      </div>
    </div>
  );
}

export default App;
