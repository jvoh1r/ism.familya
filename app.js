document.getElementById("btn").addEventListener("click", function () {
    let fio = document.getElementById("fioInput").value.trim();
    let parts = fio.split(" ");

    if (parts.length < 3) {
        alert("Iltimos F.I.O ni to‘liq kiriting!");
        return;
    }

    document.getElementById("fam").textContent = parts[0];
    document.getElementById("ism").textContent = parts[1];
    document.getElementById("otasining").textContent = parts.slice(2).join(" ");

    document.getElementById("result").classList.remove("hidden");
});