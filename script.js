var container = document.createElement('div');
container.className = "container"

var div1 = document.createElement('div');


var h1=document.createElement('h1');
h1.setAttribute('id','title');
h1.innerHTML="DOM with Form";

var p=document.createElement('p');
p.setAttribute('id','description');
p.innerHTML="A simple Form for DOM manipulation";

var table = document.createElement('table');
table.className = "table";
table.setAttribute("id", "myTable")
var thead = document.createElement("thead");
thead.className = "thead-light";

var tr = document.createElement("tr");

var th1 = creator('th', 'FirstName');
var th2 = creator('th', 'LastName');
var th3 = creator('th', 'Address');
var th4 = creator('th', 'PinCode');
var th5 = creator('th', 'Gender');
var th6 = creator('th', 'Food');
var th7 = creator('th', 'State');
var th8 = creator('th', 'Country');
tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(tr);

var tbody = document.createElement("tbody");


function creator(tag, data) {
    var ele = document.createElement(tag);
    ele.innerHTML = data;
    return ele;
}

var h3=document.createElement('h3');
h3.setAttribute('id','title');
h3.innerHTML="Enter your details";

var row = document.createElement('div');
row.className = "row"
row.className = "d-flex justify-content-start"
var row1 = document.createElement('div');
row1.className = "row table"


var form = document.createElement('form')
form.setAttribute("id", "form")

var formdiv1 = createformdiv("form-group")
var formdiv2 = createformdiv("form-group")
var formdiv3 = createformdiv("form-group")
var formdiv4 = createformdiv("form-group")
var formdiv5 = createformdiv("form-check form-check-inline")
var formdiv6 = createformdiv("form-check form-check-inline")
var formdiv7 = createformdiv("form-check form-check-inline")
var formdiv8 = createformdiv("form-group")
var formdiv9 = createformdiv("form-check form-check-inline")
var formdiv10 = createformdiv("form-check form-check-inline")
var formdiv11 = createformdiv("form-check form-check-inline")
var formdiv12 = createformdiv("form-check form-check-inline")
var formdiv13 = createformdiv("form-check form-check-inline")
var formdiv14 = createformdiv("form-group")
var formdiv15 = createformdiv("form-group")

function createformdiv(classname) {
    var div = document.createElement('div');
    div.className = classname;
    return div;
}


var button = document.createElement("button")
button.setAttribute("type", "button")
button.setAttribute("id", "submit")
button.className = "btn btn-primary"
button.innerHTML = "Submit"
button.addEventListener("click", submit);

var firstLabel = label("first-name", "First Name :");
var lastLabel = label("last-name", "Last Name :");
var addressLabel = label("address", "Address :");
var pincodeLabel = label("pincode", "Pincode :");
var genderLabel = label("gender", "Gender :");
var maleLabel = label("maleid", "Male");
maleLabel.className = "form-check-label";
var femaleLabel = label('femaleid', "Female");
femaleLabel.className = "form-check-label";
var foodlistLabel = label("foodlist", "Choose Your Food :");
foodlistLabel.setAttribute = ("id", "choose");
var food1label = label("food1", "Paratha");
var food2label = label("food2", "Pulao");
var food3label = label("food3", "Burger");
var food4label = label("food4", "Pizza");
var food5label = label("food5", "Dosa");
var stateLabel = label("state-name", "State :");
var countryLabel = label("country-name", "Country :");


function label(forname, innerHTMLname) {
    var label = document.createElement('label');
    label.setAttribute("for", forname);
    label.className="col-form-label"
    label.innerHTML = innerHTMLname;
    return label;
}


var firstname = input("input", "text", "first-name", "First name");
var lastname = input("input", "text", "last-name", "Last name");
var addressname = input("textarea", "textarea", "address", "Address");
var pincodename = input("input", "text", "pincode", "Pincode");
var malename = radio("input", "radio", "gender", "maleid", "male", "form-check-input")
var femalename = radio("input", "radio", "gender", "femaleid", "female", "form-check-input")
var food1name = food("input", "checkbox", "food", "food1", "Paratha", "form-check-input")
var food2name = food("input", "checkbox", "food", "food2", "Pulao", "form-check-input")
var food3name = food("input", "checkbox", "food", "food3", "Burger", "form-check-input")
var food4name = food("input", "checkbox", "food", "food4", "Pizza", "form-check-input")
var food5name = food("input", "checkbox", "food", "food5", "Dosa", "form-check-input")
var statename = input("input", "text", "state-name", "State");
var countryname = input("input", "text", "country-name", "Country");





function input(inputtag, typename, idname, placeholdername) {
    var name = document.createElement(inputtag);
    name.setAttribute("type", typename);
    name.setAttribute("id", idname);
    name.setAttribute("placeholder", placeholdername);
    name.setAttribute("required", "");
    name.required = true;
    name.className = "form-control";
    return name;
}

function radio(radiotag, radiotype, radioname, radioid, radiovalue, rodioclassname) {
    var radio = document.createElement(radiotag);
    radio.setAttribute("type", radiotype);
    radio.setAttribute("name", radioname);
    radio.setAttribute("id", radioid);
    radio.setAttribute("value", radiovalue);
    radio.className = rodioclassname;
    return radio;
}

function food(foodtag, foodtype, foodname, foodid, foodvalue, foodclassname) {
    var food = document.createElement(foodtag);
    food.setAttribute("type", foodtype);
    food.setAttribute("name", foodname);
    food.setAttribute("id", foodid);
    food.setAttribute("value", foodvalue);
    food.className = foodclassname;
    return food;
}




function submit() {

    var firstnamedata = document.getElementById('first-name').value;
    var lastnamedata = document.getElementById('last-name').value;
    var addressdata = document.getElementById('address').value;
    var pincodedata = document.getElementById('pincode').value;
    var genderdata = document.getElementsByName('gender');
    var foodlistdata = document.getElementsByName('food');
    var statedata = document.getElementById('state-name').value;
    var countrydata = document.getElementById('country-name').value;
    for (i = 0; i < genderdata.length; i++) {
        if (genderdata[i].checked)

            genderdata = genderdata[i].value;
    }
    var listOfFood = []
    for (var checkbox of foodlistdata) {
        if (checkbox.checked)
        listOfFood.push(checkbox.value)
    }

    if (listOfFood.length === 0 || (document.getElementById('maleid').checked == false && document.getElementById('femaleid').checked == false) ||
        (firstnamedata == "" || firstnamedata == null) || (lastnamedata == "" || lastnamedata == null) || (addressdata == "" || addressdata == null) ||
        (pincodedata == "" || pincodedata == null) || (statedata == "" || statedata == null) || (countrydata == "" || countrydata == null)) {
        alert(" Fill the field");
    } else {

        var table = document.getElementById("myTable");

        var row = table.insertRow(-1);
        var firstname = row.insertCell(0);
        var lastname = row.insertCell(1);
        var address = row.insertCell(2);
        var pincode = row.insertCell(3);
        var gender = row.insertCell(4);
        var foodlist = row.insertCell(5);
        var state = row.insertCell(6);
        var country = row.insertCell(7);

        firstname.innerHTML = firstnamedata
        lastname.innerHTML = lastnamedata
        address.innerHTML = addressdata
        pincode.innerHTML = pincodedata
        gender.innerHTML = genderdata
        var sum = "";
        for (i = 0; i < listOfFood.length; i++) {

            sum = `${sum}  ${listOfFood[i]}`;
            foodlist.innerHTML = sum;
        }

        state.innerHTML = statedata
        country.innerHTML = countrydata
        document.getElementById('myTable').style.visibility = "visible";

        document.getElementById("form").reset();
    }
}


div1.append(h1, p)
formdiv1.append(firstLabel, firstname);
formdiv2.append(lastLabel, lastname);
formdiv3.append(addressLabel, addressname);
formdiv4.append(pincodeLabel, pincodename);
formdiv5.append(genderLabel);
formdiv6.append(malename, maleLabel);
formdiv7.append(femalename, femaleLabel);
formdiv8.append(foodlistLabel);
formdiv9.append(food1name, food1label);
formdiv10.append(food2name, food2label);
formdiv11.append(food3name, food3label);
formdiv12.append(food4name, food4label);
formdiv13.append(food5name, food5label);
formdiv14.append(stateLabel, statename);
formdiv15.append(countryLabel, countryname);
form.append(formdiv1, formdiv2, formdiv3, formdiv4, formdiv5, formdiv6, formdiv7, formdiv8, formdiv9, formdiv10, formdiv11, formdiv12, formdiv13, formdiv14, formdiv15, button);
row.append(form)

table.append(thead, tbody);
row1.append(table)
container.append(div1, row1,h3,row)
document.body.append(container)