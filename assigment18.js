let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
    alert (" گردونه ی شانس روی هر رژیمی ایستاد اسکرین شات بگیرید و آن را برای من ارسال کنید ،پیرامون آن رژیم توضیحاتی را برای شما ارائه میکنم ")
}