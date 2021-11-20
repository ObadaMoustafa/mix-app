import Header from "./components/header/Header";
import Converter from "./components/converter/Converter";
import { ConverterContextProv } from "./context/ConverterContext";
import "./style/App.css";
function App() {
    return (
        <div>
            <Header />

            <div id='app'>
                <div className='main-container'>
                    <ConverterContextProv>
                        <Converter />
                    </ConverterContextProv>
                </div>
            </div>
        </div>
    );
}

export default App;
