const d = document,
  bill = d.getElementById("bill-number"),
  people = d.getElementById("people-number"),
  tipAmount = Array.from(d.getElementsByClassName("btn-percentage")),
  btnReset = d.getElementById("btn-reset"),
  personAmount = d.getElementById("person-amount"),
  totalAmount = d.getElementById("total-amount"),
  customAmount = d.getElementById("custom-percentage");

addEventListener("DOMContentLoaded", () => {
  personAmount.innerText = (0).toFixed(2);
  totalAmount.innerText = (0).toFixed(2);
});

tipAmount.map(tipMap => {
  tipMap.addEventListener("click", e => {
    let tip = parseFloat(e.target.innerText);
    let convert = tip / 100;
    let billValue = bill.value;
    let peopleValue = people.value;
    const amount = (Number(billValue) * convert) / Number(peopleValue);
    const total = (Number(billValue) * convert + Number(billValue)) / Number(peopleValue);
    console.log(amount);
    customAmount.addEventListener("input", e => {
      let value = e.target.value;
      const inputAmount = (Number(billValue) * (value / 100)) / Number(peopleValue);
      const inputTotal = (Number(billValue) * (value / 100) + Number(billValue)) / Number(peopleValue);
      if (!NaN || value.length > 0) {
        personAmount.innerText = inputAmount.toFixed(2);
        totalAmount.innerText = inputTotal.toFixed(2);
      }
    });

    if (billValue.length > 0 && people.value.length > 0) {
      personAmount.innerText = amount.toFixed(2);
      totalAmount.innerText = total.toFixed(2);
    }
  });
});

btnReset.addEventListener("click", () => {
  bill.value = "";
  people.value = "";
  customAmount.value = "";
  personAmount.innerText = (0).toFixed(2);
  totalAmount.innerText = (0).toFixed(2);
});
