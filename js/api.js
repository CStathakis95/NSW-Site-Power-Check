async function getOutage(address) {

    try {

        const response = await fetch(`${CONFIG.API_URL}/check`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                address: address
            })

        });

        return await response.json();

    } catch (error) {

        return {

            status: "Error",

            details: "Unable to contact outage service."

        };

    }

}
