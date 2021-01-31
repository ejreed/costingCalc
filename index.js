document.getElementById('lotReturn').style.display = "block";
document.getElementById('fobPrice').style.display = "none";

trigger = (value) => {
  if (value == "fobPrice") {
    document.getElementById("fobPrice").style.display = "block";
    document.getElementById("lotReturn").style.display = "none";
  } else {  
    document.getElementById("fobPrice").style.display = "none";
    document.getElementById("lotReturn").style.display = "block";
  }
};

calculateFob = () => {
  const lr = document.getElementById('lr').value
  document.getElementById('pr').innerHTML = "$" + Number.parseFloat(lr / 20).toFixed(2); // 20 pallets in a lot
  document.getElementById('cr').innerHTML = "$" + Number.parseFloat(lr / 20 / 100).toFixed(2); // 100 cases on a pallet
  document.getElementById('wr').innerHTML = "$" + Number.parseFloat(lr / 20 / 100 / 40).toFixed(2); // 40 pounds per case
}