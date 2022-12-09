import { useState } from "react";
import Hooks from "./19. forms and hooks/Hooks";
import NewsApp from "./19. forms and hooks/NewsApp";
import UseEffectHook from "./19. forms and hooks/UseEffectHook";
import UserForm from "./19. forms and hooks/UserForm";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Notes from "./components/Notes";

function App() {

	const [countInParent, setCountInParent] = useState(0);

	function updateCountInParent(count) {
		setCountInParent(count)
	}

	function uploadData() {
		console.log('I will start uploading the data now');
	}

    return (
        <div>
            {/* <Counter /> */}
            {/* <Fruits /> */}
            {/* <Notes /> */}
			{/* <p>Inside the parent: {countInParent}</p>
            <Child1 onCountUpdate={updateCountInParent}/>
            <Child2 countFromParent={countInParent} uploadData={uploadData}/> */}

            {/* lecture 19 components */}

            {/* <UserForm /> */}
            {/* <UseEffectHook /> */}

            {/* <Hooks /> */}

            <NewsApp />

        </div>
    );
}

export default App;
