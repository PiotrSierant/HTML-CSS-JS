const form = document.querySelector('.form-card');
form.addEventListener('input', validateCard)

function validateCard(event) {
    event.preventDefault();
    const cardNumber = document.querySelector('#cardNumber').value;
    checkCard(cardNumber);
}
function checkCard(cardNumber) {
    const cardInput = document.querySelector('#cardNumber');
    const visaId = document.querySelector('#visa-icon');
    const amexId = document.querySelector('#amex-icon');
    const mastercardId = document.querySelector('#mastercard-icon');
    if(cardNumber[0] === '4') {
        visaId.style.color = 'green';
        if (cardNumber.length < 13 || cardNumber.length > 16) {
            cardInput.style.border = '1px solid red';
        } else {
            cardInput.style.border = '';
            return cardNumber;
        }
    } else if (cardNumber[0] === '5') {
        mastercardId.style.color = 'green';
        if (cardNumber.length !== 16) {
            cardInput.style.border = '1px solid red';
        } else {
            cardInput.style.border = '';
            return cardNumber;
        }
    } else if (cardNumber[0] === '3' && cardNumber[1] === '4' || cardNumber[1] === '7' ) {
        amexId.style.color = 'green';
        cardInput.style.border = '';
        if (cardNumber.length !== 15) {
            cardInput.style.border = '1px solid red';
        } else {
            cardInput.style.border = '';
            return cardNumber;
        }
    } else {
        cardInput.style.border = '';
        visaId.style.color = '';
        mastercardId.style.color = '';
        amexId.style.color = '';
    }
}