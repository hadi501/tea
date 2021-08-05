function sayHello() {
    // send `submit` request to server
    console.log("hello");
    document.getElementById("helloMsg").innerHTML = `Hello, ${
      document.getElementById("name").value
    }!`;
    document.getElementById("name").value = "";
  }