$(document).ready(function () {
    var invoice = localStorage.getItem("invoice");
    var price = localStorage.getItem("price");
    $("#invoice_num").val(invoice);
    $("#price_pay").val(price);

    $("#checkout-btn").click(async function () {
        //Get all data to be sent through the form
        var name = $("#name").val();
        var email = $("#email").val();
        var phone_num = $("#phone").val();
        var key = "Bij89Gbgf64ub";
        var data = {
            "live": "1",
            "oid": "112",
            "inv": "112020102292999",
            "ttl": "900",
            "tel": "254724512285",
            "eml": "dumboperson15@gmail.com",
            "vid": "donpedro",
            "curr": "KES",
            "cbk": "https://design.kenyabuildersguide.co.ke/payment-success.html",
            "cst": "1",
            "crl": "0",

        };
        //modify data here
        data.oid = invoice;
        data.inv = invoice;
        data.ttl = price;
        data.tel = phone_num;
        data.eml = email;

        // making it suitable for ipay
        var concatstring = "";
        for (var names in data) {
            concatstring += data[names];
        }
        console.log(concatstring)
        var hmac = hasher(concatstring, key)
        console.log(hmac);
        Object.assign(data, {"hsh": hmac})
        console.log(data);

        try {
            $.redirect("https://payments.ipayafrica.com/v3/ke", data, "POST");

        } catch (err) {
            console.log(err);
            alert(err);

        }
    })


})

function hasher(data_string, key) {
    const shaObj = new jsSHA("SHA-1", "TEXT", {
        hmacKey: {value: key, format: "TEXT"},
    });
    shaObj.update(data_string);
    const hmac = shaObj.getHash("HEX");
    return hmac
}
