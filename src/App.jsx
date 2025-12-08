import "./App.css";
import Header from "./componets/layout/Header/Header.jsx";
import Menu from './componets/Sections/menu.jsx';
import Footer from "./componets/layout/Footer/Footer.jsx";


const App = () => {
  return (
    <>
      <Header />
      <section id="menu">
        <Menu/>
      </section>
      <Footer />
    </>
  );
};

export default App;
