
var shopName = "ABC Super Mart";

const GST = 18;

function calculateBill(){

let customer = document.getElementById("customer").value;

let price = Number(document.getElementById("price").value);

let quantity = Number(document.getElementById("quantity").value);

if(customer==="" || price<=0 || quantity<=0){

alert("Please enter valid details.");

return;

}

let total = price * quantity;

let gstAmount = (total * GST) / 100;

let finalBill = total + gstAmount;

const bill={

customer,
price,
quantity,
finalBill

};

// Destructuring

const{

customer:name,
finalBill:amount

}=bill;

// Console Methods

console.log("Billing Generated Successfully");

console.error("Sample Error Message");

console.table(bill);

console.trace("Trace Method");

// Template Literal

document.getElementById("result").style.display="block";

document.getElementById("result").innerHTML=`

<h3>${shopName}</h3>

<p><b>Customer Name :</b> ${customer}</p>

<p><b>Item Price :</b> ₹${price}</p>

<p><b>Quantity :</b> ${quantity}</p>

<p><b>Total Amount :</b> ₹${total}</p>

<p><b>GST (18%) :</b> ₹${gstAmount}</p>

<hr>

<p class="final">Final Bill : ₹${finalBill}</p>

<div class="footer">

<b>Name :</b> Samprada Kapate <br>

<b>PRN :</b> YOUR_PRN <br>

<b>File Path :</b>

C:/Users/Samprada/Desktop/JavaScript/Practical2/index.html

</div>

`;

}
