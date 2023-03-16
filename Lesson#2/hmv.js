    // 1 Aufgabe
const rome = Number(prompt("Выберите цифры от 1 до 9"))
switch (rome) {
    case 1:
      console.log("I");
      break;
    case 2:
      console.log("II");
      break;
    case 3:
      console.log("III");
      break;
    case 4:
      console.log("IV");
      break;
    case 5:
      console.log("V");
      break;
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
    break;
    default:
        console.log("Выберите правильно!!!");
    break;

  }

  




// 2 Aufgabe

var customer = {
    name: "Aktan",
    surname: "Kenzhekariev",
    fatherName: "Maksatbekovich",
    sex: "male",
    type: "individual",
    isResident: false,
    id: 3456,
    birthDate: null,
    passport: {
      series: "ID",
      documentNo: "12345",
      expiryDate: "01-01-2025",
      issueDate: "01-01-2015",
    },
    
    getFullName: function(){
        return this.sex + "" + this.type;
    }
  };
 
console.log(customer);
console.log(typeof customer);  

console.log("Customer sex = ", customer.sex);
console.log("Customer type = ", customer.type); 

// ------


// 3 Aufgabe
answer=0
let arr=["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]
function counter(){
    for(i of arr){
        if(i[0]==="4"){
            answer++
        }
    }
}
counter()
console.log("карт VISA "+answer+" из"+ arr.length);
