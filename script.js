// const tglbtn = document.querySelector(".toggler-btn");
// const tglbtnicon = document.querySelector(".toggler-btn i");
// const dropitem = document.querySelector(".dropdown_menu");

// tglbtn.onclick = function () {
//   dropitem.classList.toggle("open");
//   const isopen = dropitem.classList.contains("open");
//   tglbtnicon.classList = isopen ? "fas fa-times" : "fa fa-bars";
// };

function billing() {
  var modal = document.getElementById("modal");
  var brand = document.getElementById("brand");
  var brand2 = document.getElementById("brand2");
  var modal2 = document.getElementById("modal2");
  const a1 = modal.innerText;
  const a2 = brand.innerText;
  brand2.innerHTML = a1;
  modal2.innerHTML = a2;
}
function price(bill) {
  var amt = document.getElementById("Amount");
  var q = document.getElementById("qunt").value;
  if (bill == "8GB|128GB") {
    amt.innerHTML = 65000 * q + " /-";
  } else if (bill == "8GB|256GB") {
    amt.innerHTML = 70000 * q + " /-";
  } else if (bill == "12GB|512GB") {
    amt.innerHTML = 80000 * q + " /-";
  }
}
function billdownload(id) {
  // window.print();
  var backup = document.body.innerHTML;
  var content = document.getElementById(id).innerHTML;
  document.body.innerHTML = content;
  window.print();
}
function checkstatus() {
  var name = document.getElementById("username").value;
  var number = document.getElementById("contact").value;
  var q = document.getElementById("qunt").value;
  var add = document.getElementById("address").value;
  var status = document.getElementById("status1");
  var status2 = document.getElementById("status2");

  if (
    name.length == 0 ||
    number.length == 0 ||
    q.length == 0 ||
    add.length == 0
  ) {
    status.innerHTML = "Enter all Information !!!";
  } else {
    status.innerHTML = "";
  }
}
let productdata = {};
function status() {
  const ram = document.getElementById("ram");
  const c = document.getElementById("clr");
  // const img = document.getElementById('product')
  var s = document.getElementById("status");
  var brandname = document.getElementById("brand").innerText;
  var modalname = document.getElementById("modal").innerText;
  productdata["brand"] = brandname;
  productdata["modal"] = modalname;
  productdata["price"] = ram.value;
  productdata["colur"] = c.value;
  // var status2 = document.getElementById("status2");

  if (ram.checked && c.checked) {
    s.innerHTML = " Thank You for being !!!";
    var brandname2 = document.getElementById("brand2");
    var modalname2 = document.getElementById("modal2");
    var price = document.getElementById("Amount");
    var clr = document.getElementById("c2");
    brandname2.innerHTML = productdata["brand"];
    clr.innerHTML = productdata["colur"];
    modalname2.innerHTML = productdata["modal"];
    price.innerHTML = productdata["Amount"];
  } else {
    s.innerHTML = "Fill up required conditions";
    productdata = {};
  }
}
buy = () => {};
function checkstatus2() {
  var name = document.getElementById("username").value;
  var number = document.getElementById("contact").value;
  var q = document.getElementById("qunt").value;
  var add = document.getElementById("address").value;
  var ramstor = document.getElementById("ram").value;
  var c = document.getElementById("colour").value;
  var status = document.getElementById("status1");
  var status2 = document.getElementById("status2");
  var name2 = document.getElementById("uname");
  var num2 = document.getElementById("connum");
  var q2 = document.getElementById("qnt");
  var clr = document.getElementById("color");
  var strg = document.getElementById("storage");
  var p = document.getElementById("amt");
  var tim = document.getElementById("time");
  var addr = document.getElementById("add");
  var th = document.getElementById("thankyou");

  if (
    name.length == 0 ||
    number.length == 0 ||
    q.length == 0 ||
    add.length == 0
  ) {
    status.innerHTML = "Enter all Information !!!";
  } else {
    status.innerHTML = "";
    status2.innerHTML =
      "Product Successfully purchased !!! please download your bill...  <br> THANK YOU";
    name2.innerHTML = name;
    num2.innerHTML = number;
    q2.innerHTML = q;
    clr.innerHTML = c;
    strg.innerHTML = ramstor;
    addr.innerHTML = add;
    p.innerHTML = document.getElementById("Amount").innerHTML;
    var d = new Date();
    th.innerHTML =
      "Thank you for your purchase; we deeply appreciate your support and trust in our products.";
    tim.innerHTML =
      d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
    billdownload("billdata");
  }
}
payment = () => {
  var method = document.getElementById("payment");
  var method2 = document.getElementById("payment2");
  method2.innerHTML = "";
  method.innerHTML =
    "Thank you for selecting the payment on delivery option for your purchase. Your order has been successfully confirmed.";
};
onlinepayment = () => {
  var method = document.getElementById("payment2");
  var method2 = document.getElementById("payment");
  method2.innerHTML = "";
  method.innerHTML =
    ' <div class="container w-50" style="border: 2px solid black"><form action="" class="needs-validation"> <input type="text" placeholder="Enter CardHolder Name" class="form-control" required />           <input              type="number"              placeholder="Card-Number"              class="form-control"              required           />           <div class="row">             <div class="col-lg-6">               <input                 type="number"                 class="form-control"                 placeholder="CVC"                 required               />             </div>             <div class="col-lg-6">               <input                 type="date"                 class="form-control"                 placeholder="valid-upto"                 required               />                     <br />             </div>       <input          type="submit"         class="btn btn-dark d-block mx-auto w-50"         data-bs-toggle="modal"         data-bs-target="#confirm"       />    </div>         </form>       </div> ';
};
s23 = (link) => {
  var img = document.getElementById("product");
  img.src = link;
};
addcart = () => {
  var phonecolour = document.getElementById("product");
  var name = document.getElementById("brand").innerText;
  var modal = document.getElementById("modal").innerText;
};
priceforall = (price) => {
  s24ultra = { "12GB|512GB": 139999, "12GB|256GB": 129999, "12GB|1TB": 159999 };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
pricefori15pro = (price) => {
  s24ultra = {
    "12GB|512GB": 144900,
    "12GB|256GB": 164900,
    "12GB|1TB": 184900,
    "8GB|128GB": 134900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
pricefori15plus = (price) => {
  s24ultra = {
    "12GB|512GB": 89999,
    "12GB|256GB": 79900,
    "12GB|1TB": 109900,
    "8GB|128GB": 134900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};

pricefori14 = (price) => {
  s24ultra = {
    "12GB|512GB": 99900,
    "12GB|256GB": 79900,
    "12GB|1TB": 109900,
    "8GB|128GB": 69900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = parseInt(s24ultra[String(selectedram)] * parseInt(q));
};
pricefori14pro = (price) => {
  s24ultra = {
    "12GB|512GB": 149900,
    "12GB|256GB": 129900,
    "12GB|1TB": 109900,
    "8GB|128GB": 119900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
pricefors24 = (price) => {
  s24ultra = {
    "12GB|512GB": 89900,
    "12GB|256GB": 79900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforvx100 = (price) => {
  s24ultra = {
    "12GB|512GB": 69900,
    "12GB|256GB": 63900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforv30 = (price) => {
  s24ultra = {
    "12GB|512GB": 46900,
    "12GB|256GB": 41900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforvt3 = (price) => {
  s24ultra = {
    "12GB|256GB": 21900,
    "8GB|128GB": 19900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
pricefor12r = (price) => {
  s24ultra = {
    "12GB|256GB": 44000,
    "8GB|128GB": 38000,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforopen = (price) => {
  s24ultra = {
    "12GB|256GB": 125900,
    "12GB|512GB": 133900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
pricefor10pro = (price) => {
  s24ultra = {
    "12GB|256GB": 54900,
    "8GB|128GB": 43900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforr13pro = (price) => {
  s24ultra = {
    "12GB|256GB": 27900,
    "8GB|128GB": 25900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforx14 = (price) => {
  s24ultra = {
    "12GB|256GB": 65900,
    "12GB|512GB": 69900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforr13plus = (price) => {
  s24ultra = {
    "12GB|256GB": 33900,
    "12GB|512GB": 35900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
priceforr13 = (price) => {
  s24ultra = {
    "12GB|256GB": 19900,
    "8GB|128GB": 16900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
pricefor11r = (price) => {
  s24ultra = {
    "12GB|256GB": 37900,
    "8GB|128GB": 35900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
pricefor10r = (price) => {
  s24ultra = {
    "12GB|256GB": 33900,
    "8GB|128GB": 30900,
  };
  selectedram = price.value;
  var q = document.getElementById("qunt").value;
  var display = document.getElementById("Amount");
  display.innerHTML = s24ultra[String(selectedram)] * parseInt(q);
};
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});
like = (id) => {
  if (id.innerHTML == '<i class="fas fa-heart"></i>') {
    id.innerHTML = '<i class="far fa-heart"></i>';
  } else {
    id.innerHTML = '<i class="fas fa-heart"></i>';
  }
};
