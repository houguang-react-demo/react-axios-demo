import axios from "axios";

function App() {

    function getData()
    {
        axios.get("http://127.0.0.1:4523/mock/389130/list").then(
            res=>{
                console.log(res.data)
            },
            err=>{
                console.log(err)
            }
        )
    }

    return (
        <div className="App">
            <button
                onClick={getData}
            >获取数据
            </button>
        </div>
    );
}

export default App;
