import Header from "./components/header/Header";
import { ConverterContextProv } from "./context/ConverterContext";
import "./style/App.css";
import { Outlet } from "react-router";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <div>
            <Header />

            <div id='app'>
                <div className='main-container'>
                    <ConverterContextProv>
                        <Outlet />
                    </ConverterContextProv>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
