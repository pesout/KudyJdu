/*
************************
Created by Stepan Pesout
*****www.pesout.eu******
*****@stepanpesout******
************************
*/

function reset()
{
  a = 0;
  b = 0;
  c = "";
  d = "";
  e = "";
  f = 0;
  i = 0;
  document.getElementById("vystup").innerHTML = "";
}

function vstup()
{
  if (document.formular.vstup1.value.charAt(document.formular.vstup1.value.length-1) == ",")
  {
    document.formular.vstup1.value = document.formular.vstup1.value.slice(0, document.formular.vstup1.value.length-1);
  }

  reset();

  if (document.formular.deleni.value == "ca")
  {
    a = document.formular.vstup1.value.split(",");
  }
  if (document.formular.deleni.value == "ps")
  {
    a = document.formular.vstup1.value.split(/\r\n|\r|\n/g);
  }
  if (document.formular.deleni.value == "me")
  {
    a = document.formular.vstup1.value.split(" ");
  }

  if (a[1] == undefined)
  {
    document.getElementById("dialog").innerHTML = "Špatně zadaný vstup";
  }
  else
  {
    document.getElementById("dialog").innerHTML = "&nbsp;";
    zpracovani();
  }
}

function zpracovani()
{
  for (i = 0; i < a.length-1; i++)
  {
    b = Math.round(a[i+1]*1) - Math.round(a[i]*1);
    c = b.toString();

    // Nezaporna cisla
    if (b >= 0 && c.length >= 1 && c.length <= 3) {b = "!" + c}
    if (b >= 0 && c.length > 3) {document.getElementById("dialog").innerHTML = "Maximální možný rozdíl je 999 metrů."; reset();}

    // Zaporna cisla
    if (b <= 0 && c.length >= 2 && c.length <= 4) {b = b*(-1); b = "%" + b}
    if (b <= 0 && c.length > 4) {document.getElementById("dialog").innerHTML = "Maximální možný rozdíl je 999 metrů."; reset();}

    d = d + b;
  }

  e = a[0].toString();

  if (document.formular.url.value.length == 0)
  {
    f = "-";
  }
  else
  {
    f = document.formular.url.value;
  }

  d = "http://kudy.pesout.eu/c/?" + e + d + "!" + f + "#" + document.formular.hor.value + document.formular.tre.value + document.formular.aut.value + document.formular.zhm.value + document.formular.zpp.value + document.formular.nau.value + document.formular.les.value;
  new QRCode(document.getElementById("vystup"), d);

  if (e.length > 4) {document.getElementById("dialog").innerHTML = "Zadali jste neexistující nadmořskou výšku."; reset();};
}
