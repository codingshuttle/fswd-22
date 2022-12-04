// const response = fetch('https://dummyjson.com/products/1')
//     .then((response) => {

//     })
//     .catch(err => {

//     })

async function fetchData() {
    try {

        const loadingElement = document.getElementById('loading');
        const phoneBox = document.getElementById('box');

        loading.style.display = 'block';
        phoneBox.style.display = 'none';

        const response = await fetch('https://dummyjson.pom/products/1');

        console.log(response);

        if(response.statusText == "OK") {
            const jsonData = await response.json();
            console.log(jsonData);
    
            phoneBox.style.display = 'block';
            loading.style.display = 'none';
    
            loadData(jsonData);
        } else {
            loading.innerHTML = "Invalid response";
        }

        

    } catch (err) {
        console.log(err);
        loading.innerHTML = "Invalid response";
    } 
    
}

function loadData(jsonData) {
    const phoneTextElement = document.getElementById('phone-title');
    const phoneDescElement= document.getElementById('phone-desc');
    const phoneImg = document.getElementById('phone-img');

    const { title, description, thumbnail } = jsonData;

    phoneTextElement.innerHTML = title;
    phoneDescElement.innerHTML = description;
    phoneImg.src = thumbnail;
}

fetchData();