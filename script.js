const inputForm = document.querySelector('#inputForm');
const apiUrl = 'https://fruits-backend-student-neog.replit.app/fruits';
const alertMsg = document.querySelector('#alertMsg')

inputForm.addEventListener('submit', function (event) {
    event.preventDefault();

    alertMsg.style.display = "block"
    alertMsg.className = 'alert alert-primary my-3'
    alertMsg.textContent = "Saving fruitData..."

    const fruitNameInput = document.querySelector('#fruitNameInput');
    const quantityInput = document.querySelector('#quantityInput');
    const categoryInput = document.querySelector('#categoryInput');
    const newFruitObj = {
        name: fruitNameInput.value,
        quantity: quantityInput.value,
        category: categoryInput.value
    };

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newFruitObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data) {
                inputForm.reset();
                alertMsg.className = 'alert alert-success my-3'
                alertMsg.textContent = 'Fruits added successfully.';
            }
        })
        .catch(function (error) {
            console.log("Error", error);
            alertMsg.className = 'alert alert-danger my-3'
            alertMsg.textContent = 'Oops, Something went wrong!....';
        })

})