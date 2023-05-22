import './style/style.scss'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom'
import Main from "./components/pages/main";
import Menu from "./components/pages/menu";
import Similar from "./components/pages/Similar";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/menu'} element={<Menu/>}/>
                <Route path={'/similar'} element={<Similar/>}/>
                <Route path={'/similar/:id'} element={<Similar/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
