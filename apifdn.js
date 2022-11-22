const requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp", requestOptions)
  .then((Response) => Respons.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

document.getElementById("hasil").innerHTML = hasil;
