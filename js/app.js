const d = document,
  bill = d.getElementById('bill-number'),
  people = d.getElementById('people-number'),
  tipAmount = Array.from(d.getElementsByClassName('btn-percentage')),
  btnReset = d.getElementById('btn-reset'),
  personAmount = d.getElementById('person-amount'),
  totalAmount = d.getElementById('total-amount'),
  customAmount = d.getElementById('custom-percentage');

addEventListener('DOMContentLoaded', () => {
  personAmount.innerText = (0).toFixed(2);
  totalAmount.innerText = (0).toFixed(2);
});

tipAmount.map(tipMap => {
  tipMap.addEventListener('click', e => {
    let tip = 0;
    if (e.target.innerText !== 'Custom') {
      tip = parseFloat(e.target.innerText);
    }
    let convert = tip / 100;
    const amount = (Number(bill.value) * convert) / Number(people.value);
    const total = (Number(bill.value) * convert + Number(bill.value)) / Number(people.value);

    if (bill.value.length > 0 && people.value.length > 0) {
      personAmount.innerText = amount.toFixed(2);
      totalAmount.innerText = total.toFixed(2);
    }
  });
});

btnReset.addEventListener('click', () => {
  bill.value = '';
  people.value = '';
  personAmount.innerText = (0).toFixed(2);
  totalAmount.innerText = (0).toFixed(2);
});
