// Distributor detection will go here
function findDistributor(address) {

    address = address.toLowerCase();

    if (
        address.includes("sydney") ||
        address.includes("newcastle") ||
        address.includes("central coast")
    ) {
        return "Ausgrid";
    }

    if (
        address.includes("penrith") ||
        address.includes("parramatta") ||
        address.includes("wollongong")
    ) {
        return "Endeavour Energy";
    }

    return "Essential Energy";

}
