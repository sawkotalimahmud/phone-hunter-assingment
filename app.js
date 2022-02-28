const searchPhone = () => {
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;

    searchField.value = "";

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card ">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${phone.brand}</p>
                <h4 class="card-title">${phone.phone_name}</h4>
                <button type="button" class="btn btn-outline-primary">Details</button>
            </div>
        </div>`;
        searchResult.appendChild(div);
    });
}