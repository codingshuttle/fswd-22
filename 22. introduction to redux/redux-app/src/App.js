import "./App.css";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import NavBar from "./components/e-commerce/navbar/NavBar";
import ProductList from "./components/e-commerce/productList/ProductList";
import CreateNote from "./components/notes/CreateNote";
import ListNotes from "./components/notes/ListNotes";

function App() {
    return (
        <div className="App">
            {/* <Child1 />
            <Child2 /> */}
            {/* <CreateNote />
            <ListNotes /> */}

            <NavBar />
            <ProductList />

        </div>
    );
}

export default App;
