import "./App.css";
import Avatar from "./components/Avatar";
import Card from "./components/Card";

function App() {
    const gridBox = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
    };

    return (
        <div style={gridBox}>
            <Card
                name="Anuj"
                email="anuj@gmail.com"
                image="https://via.placeholder.com/200"
            />
            <Card
                name="Chandni"
                email="chandni@gmail.com"
                image="https://via.placeholder.com/200"
            />
            <Card
                name="Bhavisya"
                email="bhavisya@gmail.com"
                image="https://via.placeholder.com/200"
            />
            <Avatar name="Random" image="https://via.placeholder.com/100" />
        </div>
    );
}

export default App;
