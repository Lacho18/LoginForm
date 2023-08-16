const data = [
    {
        name: "Ivan",
        userName: "Ivan1234",
        passWord: "1234"
    },
    {
        name: "Asen",
        userName: "AsenAsenov",   
        passWord: "0000"
    },
    {
        name: "Maria",
        userName: "Maria",
        passWord: "1qaz2wsx3edc4rfv"
    }
];

let curentUsername = "";
let curentPassword = "";

function onError(sectionDiv, errorText) {
    let sectionDivName = document.getElementById(sectionDiv);
            let errorMessage = document.createElement('p');
            errorMessage.textContent = errorText;
            errorMessage.style.color = "#ff3300";
            errorMessage.style.fontWeight = "bold";
            errorMessage.style.fontSize = "2vmax";
            sectionDivName.appendChild(errorMessage);
    
            setInterval(() => {
                errorMessage.remove();
                clearInterval();
            }, 2000);
}

$(document).ready(function () {
    $("#Send_Data").click( function () {
        curentUsername = document.getElementById('Username').value;
        curentPassword = document.getElementById('Password').value;
        let personFound = false;

        for (person of data) {
            if (person.userName === curentUsername && person.passWord === curentPassword) {
                console.log(`Welcome ${person.name}`);
                let welcomeText = document.getElementById('Welcome');
                welcomeText.innerHTML = `Welcome ${person.name}`;
                personFound = true;
            }
        }

        if (personFound) {
            $('#LoginSection').hide();
            $('#AfterLoginSection').show();
        }
        else {
            onError("LoginDiv", "Wrong username or password!");
            document.getElementById('Username').value = "";
            document.getElementById('Password').value = ""; 
        }
    });
    $("#GoToNewAcountSettings").click(function () {
        $('#LoginSection').hide();
        $('#NewAccountSection').show();
    });
    $("#Set_New_Data").click( function () {
        let confirmedPassword = false;
        let notNullData = false;

        let newMember = {
            name: "",
            userName: "",
            passWord: ""
        }

        newMember.name = document.getElementById('NameTextField').value;
        newMember.userName = document.getElementById('NewUsername').value;

        if(document.getElementById('NewPassword').value === document.getElementById('ConfirmPassword').value) {
            newMember.passWord = document.getElementById('NewPassword').value;
            confirmedPassword = true;
        }
        else {
            alert("Please confirm your password right");
            document.getElementById('ConfirmPassword').value = "";
        }
        

        if((newMember.userName !== "" && newMember.passWord !== "") && confirmedPassword) {
            data.push(newMember);
            $('#NewAccountSection').hide();
            $('#LoginSection').show();
        }
        else {
            onError("NewAccountDiv", "Please enter value to every field");
        }
    });
});
    