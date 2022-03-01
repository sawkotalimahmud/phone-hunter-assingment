document.getElementById('error-massage').style.display = 'none'

// Search Section 
const searchPhone = () => {
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;
    searchField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

// Search Result Section 
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    if (phones.lenght == Number) {
        document.getElementById('error-massage').style.display = "block";
    }

    else {
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
}

// Phone Detaile Section 
const loadPhoneDetail = (phoneDetail) => {
    // console.log(phoneDetail);
    const url = `
    https://openapi.programming-hero.com/api/phone/${phoneDetail}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetaile(data.data))
}

// Phone Detaile Show Section 
const displayPhoneDetaile = displayDetail => {
    console.log(displayDetail);
    const phoneDetails = document.getElementById('phone-details')
    phoneDetails.textContent = "";

    const div = document.createElement('div')
    div.innerHTML = `
    <div>
    <img src="${displayDetail.image}" alt="...">
        <div class="card-body">
        <p class="card-text">${displayDetail.brand}</p>
        <h4 class="card-title">Name: ${displayDetail.name}</h4>
        <h6 >Release Date: ${displayDetail.releaseDate}</h6>
        <p class="card-title">Prosesor: ${displayDetail.mainFeatures.chipSet}</p>
        <p class="card-title">Display: ${displayDetail.mainFeatures.displaySize}</p>
        <p class="card-title">Mamory: ${displayDetail.mainFeatures.memory}</p>
        <p class="card-title">Storage: ${displayDetail.mainFeatures.storage}</p>
        <p class="card-title"> Sensors: ${displayDetail.mainFeatures.sensors[0]}</p>
        <p class="card-title">* ${displayDetail.mainFeatures.sensors[1]}</p>
        <p class="card-title">* ${displayDetail.mainFeatures.sensors[2]}</p>
        <p class="card-title">* ${displayDetail.mainFeatures.sensors[3]}</p>
        <p class="card-title">* ${displayDetail.mainFeatures.sensors[4]}</p>
        <p class="card-title">* ${displayDetail.mainFeatures.sensors[5]}</p>
        </div>
</div>`;
    phoneDetails.appendChild(div);
}