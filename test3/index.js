class User {
  #user = null;
  set user(x) {
    this.#user = x;
  }
  get user() {
    return this.#user;
  }

  printDescription() {
    let name = this.#user.first_name;
    let surname = this.#user.last_name;
    let city = this.#user.address.city;
    console.log(
      `il mio nome è ${name} ed il mio cognome è ${surname} e vivo a ${city}`
    );
  }
}
/* Infine dichiarare un metodo per stampare in console alcuni dati
dello user come in questo esempio: “Mario Rossi vive a Roma”. */
async function myfetch(url) {
  const getObj = await fetch(url);
  const obj = await getObj.json();
  if (!obj.id) {
    return
  }else{
  const nuovo = new User();
  nuovo.user = obj;
  nuovo.printDescription();
  }
}
myfetch("https://random-data-api.com/api/v2/users");
