import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';
import Nav from './Components/Nav';




function App() {
  return (
    <div className="App">
      <Header />
      <div className="main"> 
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
