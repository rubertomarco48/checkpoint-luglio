class Team {

    membersNumbers = 0;
    members=[];
    
    set merbers(array){
        members.push(array);
    }
    get printMerbers(){
        return this.members;
    }
    set membersNumbers(array){
        this.membersNumbers = array.length;
    }
    get printMemberNumbers(){
        return this.membersNumbers;
    }
}

function nation(array) {
    const nat = [];

    for (let i = 0; i < array.length; i++) {
        const element = array [i];
        nat.push(element.nat)       
    }
    return nat;
 }
 
    
 
async function myfetch(url) {
    try{
    const objString = await fetch(url);
    const obj = await objString.json();
    const squadra = new Team();
    squadra.members =obj;
    /* console.log(squadra);
    console.log(nation(obj));  */
    console.log(obj);   
    }catch(err){
        console.log(err);
    }
}
myfetch("https://randomuser.me/api/")


