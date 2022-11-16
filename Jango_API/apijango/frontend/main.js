var url = "http://localhost:3000/";

//BOOK

function registerBook() {
  if (!validateCode("code")) {
    return;
  }
  if (!validateString("name")) {
    return;
  }

  if (!validateString("author")) {
    return;
  }

  if (!validateString("genre")) {
    return;
  }

  if (!validateString("publisher")) {
    return;
  }
  if (!validateYear("year")) {
    return;
  }

  let body = {
    Code: document.getElementById("code").value,
    Name: document.getElementById("name").value,
    Author: document.getElementById("author").value,
    Genre: document.getElementById("genre").value,
    Publisher: document.getElementById("publisher").value,
    Year: document.getElementById("year").value,
  };

  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.responseText);
        alert("Registro efetuado com sucesso!");
      } else {
        console.error(request.responseText);
        alert("Não foi possível efetuar o registro!");
      }
    }
  };
  request.open("POST", url + "savebook");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));
}

function removeBook(id) {
  request.open(
    "DELETE",
    url + "deleterent/" + document.getElementById(id).value
  );
  request.send();
}

function listBook() {
  request.open("GET", url + "getbook");
  request.send();
}

///Book functions

function validateCode(id) {
  let input = document.getElementById(id);
  let isNumber = /[0-9]/.test(input.value);
  if (isNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateString(id) {
  let input = document.getElementById(id);
  let hasString = /[a-z]/.test(input.value);
  let hasStringM = /[A-Z]/.test(input.value);
  let isNumber = /[0-9]/.test(input.value);

  if (hasString || hasStringM || isNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateYear(id) {
  let input = document.getElementById(id);
  let isNumber = /[0-9]/.test(input.value);

  if (isNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

//CLIENT

function registerClient() {
  if (!validateCode("code")) {
    return;
  }
  if (!validateName("userName")) {
    return;
  }

  if (!validaData("gender")) {
    return;
  }

  if (!validaSenha("bornDate")) {
    return;
  }

  if (!confirmaSenha("cpf")) {
    return;
  }

  let body = {
    Code: document.getElementById("code").value,
    UserName: document.getElementById("userName").value,
    Gender: document.getElementById("gender").value,
    BornDate: document.getElementById("bornDate").value,
    Cpf: document.getElementById("cpf").value,
  };

  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.responseText);
        alert("Registro efetuado com sucesso!");
      } else {
        console.error(request.responseText);
        alert("Não foi possível efetuar o registro!");
      }
    }
  };
  request.open("POST", url + "saveuser");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));
}

function removeClient(id) {
  request.open(
    "DELETE",
    url + "deleterent/" + document.getElementById(id).value
  );
  request.send();
}

function listClient() {
  request.open("GET", url + "getuser");
  request.send();
}

///Client functions

function validateClientCode(id) {
  let input = document.getElementById(id);
  let isNumber = /[0-9]/.test(input.value);
  if (isNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateClientString(id) {
  let input = document.getElementById(id);
  let hasString = /[a-z]/.test(input.value);
  let hasStringM = /[A-Z]/.test(input.value);
  if (hasString || hasStringM) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateBorn(id) {
  let input = document.getElementById(id);
  let hasNum = /[0-9]/.test(input.value);
  let has4 = true ? input.value.length <= 4 : false;
  if (hasNum && has4) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateCpf(id) {
  let input = document.getElementById(id);
  let hasNum = /[0-9]/.test(input.value);
  let has11 = true ? input.value.length == 11 : false;
  if (hasNum && has11) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

//RENT

function registerRent() {
  if (!validateCode("code")) {
    return;
  }
  if (!validateName("clientCode")) {
    return;
  }

  if (!validaData("bookCode")) {
    return;
  }

  if (!validaSenha("date")) {
    return;
  }

  if (!confirmaSenha("returnDate")) {
    return;
  }

  let body = {
    Code: document.getElementById("code").value,
    UserName: document.getElementById("clientCode").value,
    Gender: document.getElementById("bookCode").value,
    BornDate: document.getElementById("date").value,
    Cpf: document.getElementById("returnDate").value,
  };

  let request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        console.log(request.responseText);
        alert("Registro efetuado com sucesso!");
      } else {
        console.error(request.responseText);
        alert("Não foi possível efetuar o registro!");
      }
    }
  };
  request.open("POST", url + "saverent");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(body));
}

function removeRent(id) {
  request.open(
    "DELETE",
    url + "deleterent/" + document.getElementById(id).value
  );
  request.send();
}

function listRent() {
  request.open("GET", url + "getrent");
  request.send();
}

///Rent functions

function validateRentCode(id) {
  let input = document.getElementById(id);
  let isRentNumber = /[0-9]/.test(input.value);
  if (isRentNumber) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateClientRentCode(id) {
  let input = document.getElementById(id);
  let isClientRentCode = /[0-9]/.test(input.value);
  if (isClientRentCode) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateBookRentCode(id) {
  let input = document.getElementById(id);
  let isBookRentCode = /[0-9]/.test(input.value);
  if (isBookRentCode) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateRentDate(id) {
  let input = document.getElementById(id);
  let isRentDate = /[0-9]/.test(input.value);
  if (isRentDate) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}

function validateReturnRentDate(id) {
  let input = document.getElementById(id);
  let isReturnRentDate = /[0-9]/.test(input.value);
  if (isReturnRentDate) {
    input.style.border = 0;
    return true;
  } else {
    input.style.border = "solid 1px red";
    return false;
  }
}
