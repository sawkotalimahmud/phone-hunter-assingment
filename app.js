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
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card ">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${phone.brand}</p>
                <h4 class="card-title">${phone.phone_name}</h4>
                <button onclick="loadPhoneDetail('${phone.slug}')" type="button" class="btn btn-outline-primary">Details</button>
            </div>
        </div>`;
        searchResult.appendChild(div);
    });
}

const loadPhoneDetail = (phoneDetail) => {
    // console.log(phoneDetail);
    const url = `
    https://openapi.programming-hero.com/api/phone/${phoneDetail}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetaile(data.data))
}

const displayPhoneDetaile = displayDetail => {
    console.log(displayDetail);
    const phoneDetails = document.getElementById('phone-details')
    const div = document.createElement('div')
    div.innerHTML = `
        <img src="${displayDetail.image}" alt="...">
        <div class="card-body">
        <h4 class="card-title">${displayDetail.name}</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
        </div>`;
    phoneDetails.appendChild(div);
}