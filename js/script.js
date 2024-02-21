const btn = document.querySelector("#btn"),
      out = document.querySelector("#out"),
      out1 = document.querySelector(".out1"),
      weight = document.querySelector("#weight"),
      vol = document.querySelector("#vol"),
      load = document.querySelector("#load"),
      del = document.querySelector("#del"),
      frag = document.querySelector("#frag"),
      range = document.querySelector("#range"),
      kg = 5.5,
      kub = 3500,
      km = 2;

      range.onchange = function () {
        let distanceValue = range.value;
        document.querySelector(".distance").innerHTML = distanceValue;
      };

btn.addEventListener('click', ()=>{
  if (weight.value != "" && vol.value != "") {
    if (load.checked) {
      load.value = 1500;
    } else {
      load.value = 0;
    }
    if (del.checked) {
      del.value = 3500;
    } else {
      del.value = 0;
    }
    if (frag.checked) {
      frag.value = 2000;
    } else {
      frag.value = 0;
    }

    let sum =
      weight.value * kg +
      vol.value * kub +
      Number(load.value) +
      +Number(del.value) +
      Number(frag.value) +
      range.value * km;
    if (isNaN(sum)) {
      alert("Введите числовое значение");
    } else {
      out.innerHTML = sum;
    }
  } else {
    alert("Введите вес и объем груза");
  }
  let data = document.querySelector(".s-10").value;
  document.querySelector(".out1").innerHTML = data;
});
  btnClear.addEventListener('click', () => {
  out.innerHTML = "0.0";
  weight.value = 0;
  vol.value = 0;
  document.getElementById("del").checked = false;
  document.getElementById("load").checked = false;
  document.getElementById("frag").checked = false;
  out1.innerHTML = "";
});


