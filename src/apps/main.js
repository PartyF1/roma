

window.onload = function () {
   async function sendRequest(params = {}) {
      const query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
      const result = await fetch(`api/?${query}`);
      return await result.text();
   }

   async function getPow() {
      const number = document.getElementById('number').value;
      const pow = document.getElementById('pow').value;
      console.log(await sendRequest({ number, pow }));
   }
   document.getElementById('send').addEventListener('click', getPow);
}

//римские цифры оформить классом,
//результат показывать в морде клиента + 2, 8, 16 числа