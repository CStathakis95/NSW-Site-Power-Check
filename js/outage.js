// Outage checking will go here
async function checkOutage(distributor, address) {

    if (distributor === "Endeavour Energy") {
        return await checkEndeavour(address);
    }

    return {
        status: "No live outage check available yet",
        details: "This distributor is coming soon."
    };

}


async function checkEndeavour(address) {

    return {
        status: "Testing connection",
        details: "Endeavour Energy outage lookup will be connected here."
    };

}
