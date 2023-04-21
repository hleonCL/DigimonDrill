
const url = 'https://digimon-api.vercel.app/api/digimon';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#table-body');
        const searchInput = document.querySelector('#search');

        let digimons = data;

        function renderTable() {
            tableBody.innerHTML = '';

            digimons
                .filter(digimon => {
                    return digimon.name.toLowerCase().includes(searchInput.value.toLowerCase());
                })
                .forEach(digimon => {
                    const row = document.createElement('tr');

                    const nameCell = document.createElement('td');
                    nameCell.textContent = digimon.name;
                    row.appendChild(nameCell);

                    const levelCell = document.createElement('td');
                    levelCell.textContent = digimon.level;
                    row.appendChild(levelCell);

                    const imageCell = document.createElement('td');
                    const image = document.createElement('img');
                    image.src = digimon.img;
                    image.width = 100;
                    image.height = 100;
                    imageCell.appendChild(image);
                    image.className= "zoom";
                    row.appendChild(imageCell);

                    tableBody.appendChild(row);
                });
        }

        renderTable();

        searchInput.addEventListener('input', () => {
            renderTable();
        });


    });
