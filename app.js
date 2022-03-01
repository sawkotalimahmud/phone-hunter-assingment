document.getElementById('error-massage').style.display = 'none'

// Search Section 
const searchPhone = () => {
    const searchField = document.getElementById("search-field")
    const searchText = searchField.value;
    document.getElementById('error-massage').style.display = 'none'
    document.getElementById('phone-details').innerText = "";
    searchField.value = "";

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data))
}

// Search Result Section 
const displaySearchResult = phones => {
    const searchResult = document.getElementById('search-result');
    console.log(phones);
    console.log(phones.length);
    searchResult.innerText = "";
    if (phones.length == 0) {
        document.getElementById('error-massage').style.display = "block";
    }

    else {
        const totalPhones = phones.length;
        if (totalPhones <= 20) {
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
        else {
            for (let i = 0; i < 20; i++) {
                const div = document.createElement('div');
                div.classList.add('col');
                div.innerHTML = `
            <div class="card ">
                <img src="${phones[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${phones[i].brand}</p>
                    <h4 class="card-title">${phones[i].phone_name}</h4>
                    <button onclick="loadPhoneDetail('${phones[i].slug}')" type="button" class="btn btn-outline-primary">Details</button>
                </div>
            </div>`;
                searchResult.appendChild(div);

            }
            const btnDiv = document.createElement('div');
            btnDiv.classList.add('col');
            btnDiv.innerHTML = `
                <button onclick="showMorePhone('${phones}')" type="button" class="btn btn-outline-primary">Show More</button>
                </div >`
            searchResult.appendChild(btnDiv);
        }

    }
}
const showMorePhone = (phones) => {
    const searchResult = document.getElementById('search-result');
    for (let i = 20; i < phones.length; i++) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card ">
        <img src="${phones[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">${phones[i].brand}</p>
            <h4 class="card-title">${phones[i].phone_name}</h4>
            <button onclick="loadPhoneDetail('${phones[i].slug}')" type="button" class="btn btn-outline-primary">Details</button>
        </div>
    </div>`;
        searchResult.appendChild(div);
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
    if (displayDetail.releaseDate == '') {
        displayDetail.releaseDate = "Release Date Not Found"
    }
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

