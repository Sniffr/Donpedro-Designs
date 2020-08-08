$(document).ready(function () {
        //on change of plan value
        var price_input = $("#plan_price_input");
        var plan = $("#plan_select");
        plan.change(
            function () {
                //Get The selcted value index
                var plan_index = parseInt(plan[0].selectedIndex);
                //compare indexes and set prices
                if (plan_index === 0) {
                    price_input.val(30000);

                } else if (plan_index === 1) {
                    price_input.val(30000);

                } else if (plan_index === 2) {
                    price_input.val(25000);

                }
            }
        );

        //on change of plan value

        var design_select = $("#design_select");
        var design_materials = $("#design_price_material");
        var design_price_input = $("#design_price");

        design_materials.on("keyup paste", function () {
            var price = parseInt(design_materials.val());
            design_price_input.val(0.4 * price);

        })
        var invoice_num;
        //on clickong the pkan button
        $("#plan-btn").click(function () {
            var plan_price = parseInt(price_input.val());
            var plan_index = parseInt(plan[0].selectedIndex);
            //compare indexes and set prices
            if (plan_index === 0) {
                invoice_num = "PLP" + rand();

            } else if (plan_index === 1) {
                invoice_num = "PLE" + rand()

            } else if (plan_index === 2) {
                invoice_num = "PLL" + rand()

            }
            localStorage.setItem("invoice", invoice_num);
            localStorage.setItem("price", plan_price);
            window.location.href = './payments.html'; //relative to domain
        })

        $("#design-btn").click(function () {
            var plan_price = parseInt(design_price_input.val());
            var plan_index = parseInt(design_select[0].selectedIndex);
            //compare indexes and set prices
            if (plan_index === 0) {
                invoice_num = "DSF" + rand();

            } else if (plan_index === 1) {
                invoice_num = "DSG" + rand()

            }
            localStorage.setItem("invoice", invoice_num);
            localStorage.setItem("price", plan_price);
            window.location.href = './payments.html'; //relative to domain
        })
        $("#render-btn").click(function () {
            invoice_num = "DSF" + rand();
            var plan_price = 1000
            //compare indexes and set prices

            localStorage.setItem("invoice", invoice_num);
            localStorage.setItem("price", plan_price);
            window.location.href = './payments.html'; //relative to domain
        })

    }
);

// using Math.floor
function rand(maxLimit = 10000000) {
    let rand = Math.random() * maxLimit;
    return Math.floor(rand);
}