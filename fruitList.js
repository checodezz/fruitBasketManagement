const unorderedList = document.querySelector('#unorderedList');

function getFruitsData() {
    const apiUrl = 'https://fruits-backend-student-neog.replit.app/fruits';

    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            createFruitList(data)
            deleteItemBtn()
        })

}
getFruitsData()

function createFruitList(data) {

    for (let i = 0; i < data.length; i++) {

        const liElement = document.createElement('li');
        liElement.className = 'list-group-item';
        liElement.innerHTML = `${data[i].name} - Quantity: ${data[i].quantity} - Category: ${data[i].category} <button id="deleteItem" data-id="${data[i]._id}"  class="btn btn-danger d-flex float-end">Delete</button>`
        unorderedList.appendChild(liElement)

    }
}

function deleteItemBtn() {

    const deleteItem = document.querySelectorAll('#deleteItem');

    for (let i = 0; i < deleteItem.length; i++) {
        deleteItem[i].addEventListener('click', function (event) {
            listItemId = event.target.getAttribute('data-id');

            const deleteApiUrl = `https://fruits-backend-student-neog.replit.app/fruits/${listItemId}`

            unorderedList.textContent = 'Deleting.. Please Wait...';

            fetch(deleteApiUrl, {
                method: 'DELETE'
            })
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    console.log(data);
                    unorderedList.innerHTML = '';
                    getFruitsData()
                })

        })
    }


    /* fetch(apiUrl, {
        method: "DELETE"
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        }) */
}
