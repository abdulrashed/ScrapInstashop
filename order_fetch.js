const API_URL = "https://data3.instashop.ae/dashboard-rest/orders-feed/search";

async function fetchOrder(orderCode) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "installation-id": "0c68954b-ac81-46b4-a028-9236709ecd5a",
                "instashop-session-token": "r:baf4298b70b0c1935fbe5e2613df6c90",
                "origin": "https://instashop.ae",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win32; x64) Chrome/141 Safari/537.36",
                "user-id": "emOiLQa7l3",
                "x-parse-session-token": "r:baf4298b70b0c1935fbe5e2613df6c90",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ input: orderCode }),
        });

        return await response.json();
    } catch (error) {
        return null;
    }
}

function extractDetails(apiResponse) {
    if (!apiResponse || !apiResponse.success || !apiResponse.data || !apiResponse.data.length) {
        return null;
    }

    const order = apiResponse.data[0];

    return {
        orderID: order.objectId || "",
        orderCode: order.code || "",

        customerName: order.deliveryDetails && order.deliveryDetails.name ? order.deliveryDetails.name : "",
        customerPhone: order.deliveryDetails && order.deliveryDetails.phoneNumber ? order.deliveryDetails.phoneNumber : "",
        customerAddressCreatedDate: order.deliveryDetails && order.deliveryDetails.createdAt ? order.deliveryDetails.createdAt : "",
        customerAddressUpdatedDate: order.deliveryDetails && order.deliveryDetails.updatedAt ? order.deliveryDetails.updatedAt : "",

        customerLocality: order.deliveryDetails &&
            order.deliveryDetails.locationInfo &&
            order.deliveryDetails.locationInfo.locality ?
            order.deliveryDetails.locationInfo.locality : "",

        customerSubLocality: order.deliveryDetails &&
            order.deliveryDetails.locationInfo &&
            order.deliveryDetails.locationInfo.subLocality ?
            order.deliveryDetails.locationInfo.subLocality : "",

        customerApartment: order.deliveryDetails && order.deliveryDetails.apartment ? order.deliveryDetails.apartment : "",

        customerAddress: order.deliveryDetails &&
            order.deliveryDetails.locationInfo &&
            order.deliveryDetails.locationInfo.addressLines ?
            order.deliveryDetails.locationInfo.addressLines.join(", ") : "",

        customerLatitude: order.deliveryDetails &&
            order.deliveryDetails.locationInfo &&
            order.deliveryDetails.locationInfo.coordinate &&
            order.deliveryDetails.locationInfo.coordinate.latitude ?
            order.deliveryDetails.locationInfo.coordinate.latitude : "",

        customerLongitude: order.deliveryDetails &&
            order.deliveryDetails.locationInfo &&
            order.deliveryDetails.locationInfo.coordinate &&
            order.deliveryDetails.locationInfo.coordinate.longitude ?
            order.deliveryDetails.locationInfo.coordinate.longitude : "",

        customerCreatedDate: order.user && order.user.createdAt ? order.user.createdAt : "",
        customerUpdatedDate: order.user && order.user.updatedAt ? order.user.updatedAt : "",
        customerOrderCount: order.user && order.user.orderCount ? order.user.orderCount : "",

        customerAccountPhone: order.user && order.user.digitsAuth && order.user.digitsAuth.phoneNumber ?
            order.user.digitsAuth.phoneNumber : "",

        paymentType: order.payment && order.payment.type ? order.payment.type : "",

        deliveryCharges: order.deliveryCharges || "",
        finalPrice: order.finalPrice || "",
        price: order.price || "",
        retailPrice: order.retailPrice || "",

        createdAt: order.createdAt || "",
        updatedAt: order.updatedAt || "",
        status: order.status || "",
    };
}

// ------------------ RANDOM 3–6 SEC WAIT ------------------
function waitRandomDelay() {
    const min = 2000; // 3 seconds
    const max = 3000; // 6 seconds
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;

    return new Promise(resolve => {
        setTimeout(() => resolve(delay), delay);
    });
}

// ----------------------------------------------------------

async function processOrders() {
    const input = document.getElementById("orderInput").value.trim();
    const logBox = document.getElementById("log");
    logBox.textContent = "Processing...\n";

    if (!input) {
        alert("Please paste order numbers first.");
        return;
    }

    const orderNumbers = input.split("\n").map(x => x.trim()).filter(x => x);
    let finalData = [];

    for (let order of orderNumbers) {
        logBox.textContent += `Fetching order ${order}...\n`;

        const response = await fetchOrder(order);
        const details = extractDetails(response);

        if (details) {
            finalData.push(details);
            logBox.textContent += `✔ Extracted ${order}\n`;
        } else {
            logBox.textContent += `✘ Failed for ${order}\n`;
        }

        // ---- WAIT 2–3 MINUTES BEFORE NEXT ORDER ----
        if (order !== orderNumbers[orderNumbers.length - 1]) {
            const delay = await waitRandomDelay();
            logBox.textContent += `⏳ Waiting ${(delay / 60000).toFixed(2)} minutes...\n`;
        }
    }

    logBox.textContent += "\nGenerating Excel...";
    downloadExcel(finalData);
    logBox.textContent += "\n✔ Excel downloaded!";
}

function downloadExcel(data) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(wb, ws, "Orders");
    XLSX.writeFile(wb, "instashop_orders.xlsx");
}