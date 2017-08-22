/*
************************
Created by Stepan Pesout
*****www.pesout.eu******
*****@stepanpesout******
************************
*/

var a = 0;
var aa = 0;
var b = 0;
var c = 0;
var d = 0;
var ea = 0;
var eb = 0;
var f = 0;
var g = 0;

var i = 0;

var x = 0;
var y = 0;
var xpuv = 0;
var ypuv = 0;
var now = 0;

var pa;
var pb;
var pc;

var hor = "ne";
var tre = "ne";
var aut = "ne";
var zhm = "ne";
var zpp = "ne";
var nau = "ne";
var les = "ne";

var det = false;

var platno = document.getElementById("platno");
var kontext = platno.getContext("2d");


function zprac()
{
  kontext.fillStyle = "#16a085";
  kontext.fillRect(0, 0, platno.width, platno.height);

  a = window.location.href.replace("http://kudy.pesout.eu/c/?", "");

  a = a.replace(/%/g, '!-');
  a = a.split('!');

  aa = a[a.length-1].split('#');

  f = a[0];
  g = a[0];

  //Koncova vyska + nejvyssi a nejnizsi bod
  for (i = 0; i < a.length-1; i++)
  {
    b = b + (a[i]*1);
    if (b > f) {f = b;}
    if (b < g) {g = b;}
  }

  //Celkove stoupani
  for (i = 0; i < a.length-1; i++)
  {
    if (a[i]*1 > 0) {c = c + (a[i]*1)}
  }

  //Celkove klesani
  for (i = 0; i < a.length-1; i++)
  {
    if (a[i]*1 < 0) {d = d + (a[i]*-1)}
  }

  //Kresleni
  kontext.lineWidth = 0.2;
  kontext.strokeStyle = "#fff";
  kontext.beginPath();
    kontext.moveTo(0, 10);
    kontext.lineTo(window.innerWidth-35, 10);
  kontext.closePath();
  kontext.stroke();

  kontext.lineWidth = 0.2;
  kontext.strokeStyle = "#fff";
  kontext.beginPath();
    kontext.moveTo(0, 40);
    kontext.lineTo(window.innerWidth-35, 40);
  kontext.closePath();
  kontext.stroke();

  kontext.lineWidth = 0.2;
  kontext.strokeStyle = "#fff";
  kontext.beginPath();
    kontext.moveTo(0, 70);
    kontext.lineTo(window.innerWidth-35, 70);
  kontext.closePath();
  kontext.stroke();

  kontext.lineWidth = 0.2;
  kontext.strokeStyle = "#fff";
  kontext.beginPath();
    kontext.moveTo(0, 100);
    kontext.lineTo(window.innerWidth-35, 100);
  kontext.closePath();
  kontext.stroke();

  kontext.lineWidth = 0.2;
  kontext.strokeStyle = "#fff";
  kontext.beginPath();
    kontext.moveTo(0, 131);
    kontext.lineTo(window.innerWidth-35, 131);
  kontext.closePath();
  kontext.stroke();

  ea = 120 / (f - g);
  eb = (window.innerWidth-35) / (a.length - 2);

  //Prvni zmena vysky
  xpuv = 0;
  ypuv = 130 - ((a[0] - g) * ea);

  now = (a[0]*1) + (a[1]*1);
  x = x + eb;
  y = 130 - ((now - g) * ea);

  kontext.lineWidth = 3;
  kontext.beginPath();
    kontext.moveTo(xpuv, ypuv);
    kontext.lineTo(x, y);
  kontext.closePath();
  kontext.stroke();

  //Druha az n-ta zmena vysky
  for (i = 2; i < a.length-1; i++)
  {
    xpuv = x;
    ypuv = y;

    now = now + (a[i]*1)
    x = x + eb;
    y = 130 - ((now - g) * ea);

    kontext.beginPath();
      kontext.moveTo(xpuv, ypuv);
      kontext.lineTo(x, y);
      kontext.closePath();
      kontext.stroke();
  }

  //Dalsi informace

  if (aa[1].charAt(0) == 1)
  {
    hor = "ano";
  }

  if (aa[1].charAt(1) == 1)
  {
    tre = "ano";
  }

  if (aa[1].charAt(2) == 1)
  {
    aut = "ano";
  }

  if (aa[1].charAt(3) == 1)
  {
    zhm = "ano";
  }

  if (aa[1].charAt(4) == 1)
  {
    zpp = "ano";
  }

  if (aa[1].charAt(5) == 1)
  {
    nau = "ano";
  }

  if (aa[1].charAt(6) == 1)
  {
    les = "ano";
  }

  //  ---  VYSTUP  ---
  document.getElementById("a").innerHTML = a[0];
  document.getElementById("b").innerHTML = b;
  document.getElementById("c").innerHTML = c - a[0];
  document.getElementById("d").innerHTML = d;
  document.getElementById("f").innerHTML = f;
  document.getElementById("g").innerHTML = g;

  document.getElementById("hor").innerHTML = hor;
  document.getElementById("tre").innerHTML = tre;
  document.getElementById("aut").innerHTML = aut;
  document.getElementById("zhm").innerHTML = zhm;
  document.getElementById("zpp").innerHTML = zpp;
  document.getElementById("nau").innerHTML = nau;
  document.getElementById("les").innerHTML = les;

  if (aa[0] != "-")
  {
    document.getElementById("url").innerHTML = '<span class="popis"><a style="color:#067055;" href="http://' + aa[0] + '">Webová stránka</a></span><br><br>';
  }

  document.getElementById("po1").innerHTML = f;
  document.getElementById("po2").innerHTML = Math.round(((f*1) + (g*1)) / 2);
  document.getElementById("po3").innerHTML = g;

}

function detail()
{

  if (det)
  {
    document.getElementById("detail").style.display = "none";
    document.getElementById("tlacitko").innerHTML = "Zobrazit detaily"
    det = false;
  }
  else
  {
    document.getElementById("detail").style.display = "block";
    document.getElementById("tlacitko").innerHTML = "Skrýt detaily"
    det = true;
  }

}
