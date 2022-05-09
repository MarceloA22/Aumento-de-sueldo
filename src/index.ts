let btnEnviar = document.getElementById("enviar");
let data1 = document.getElementById("data1");

btnEnviar.addEventListener("click", () => {
  let sueldoActual: number = data1.value * 1;
  let nuevoSueldo: number = 0;
  if (sueldoActual <= 15000) {
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Usted tiene un aumento de 20% su nuevo sueldo es de:");
    console.log(nuevoSueldo);
  } else if (15001 < sueldoActual && sueldoActual <= 20000) {
    nuevoSueldo = sueldoActual * 1.1;
    console.log("Usted tiene un aumento de 10%, su nuevo sueldo es de:");
    console.log(nuevoSueldo);
  } else if (20001 < sueldoActual && sueldoActual <= 25000) {
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Usted tiene un aumento de 5%, su nuevo sueldo es de:");
    console.log(nuevoSueldo);
  } else {
    nuevoSueldo = sueldoActual;
    console.log(
      "usted tiene un sueldo muy alto, agradezca que no se lo bajamos, su sueldo actual sigue siendo de:"
    );
    console.log(nuevoSueldo);
  }
});
