1. Creare una classe "Team" che sia costituita dalle proprietà "members" e
"members_number". members_number deve essere inizializzato a zero e members
deve essere un array vuoto. Per entrambe le proprietà definire getter e setter
corrispondenti.
2. Dichiarare poi un metodo che effettua un fetch dal seguente url:
"https://randomuser.me/api/".
3. Creare un'istanza della classe Team e assegnare l'array che risulta dalla promise alla
proprietà members della classe Team.
4. Prevedere eventuali errori dall'api con i metodi dedicati all' async/await o alla classe
promise Promise.
5. Ciclare l'array members e creare un nuovo array che contenga solo le nazionalità (
attributo nativo dell'oggetto ) di ognuno dei componenti del team.
6. Contare il numero dei membri del team e assegnarlo alla proprietà members_number.
7. (Bonus) Stampare a video: ‘Il team è composto da {members_number} membri’
sostituendo la variabile con il valore della proprietà