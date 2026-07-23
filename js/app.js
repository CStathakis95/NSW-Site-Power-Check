async function checkOutages() {

    const address = document.getElementById("address").value;

    if (address.trim() === "") {
        alert("Please enter an address.");
        return;
    }

    const outage = await getOutage(address);

    document.getElementById("results").innerHTML = `

        <h2>Checking:</h2>

        <p>${address}</p>

        <div class="company">

            <h3>Electricity Distributor</h3>

            <p class="ok">
            ⚡ ${outage.distributor}
            </p>


            <h3>Power Status</h3>

            <p>
                ${outage.status}
            </p>

            <p>
                ${outage.details}
            </p>

        </div>


        <p>
            Last checked:
            ${new Date().toLocaleTimeString()}
        </p>

    `;
}
