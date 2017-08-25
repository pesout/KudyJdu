# KudyJdu

- [kudy.pesout.eu](http://kudy.pesout.eu)

## Podmínky použití

Tuto apliklaci lze nekomerčně používat a upravovat dle libosti, je ale nutné uvést jméno autora (Štěpán Pešout) a odkaz na jeho webové stránky ([pesout.eu](http://pesout.eu)).

## Popis

Po zadání informací o vytyčené trase se vygeneruje QR kód. Ten se umístí do terénu společně se značením trasy (naučná stezka, turistická trasa), nejlépe i s informací o cílovém bodu a jeho vzdálenosti. Po naskenování kódu algoritmus zpracuje data v kódu obsažená. Výstupem je pak výškopis a předem zadané informace.

Výhodou je, že všechna data o trase jsou v QR kódu a není tak třeba zajišťovat databáze apod. Z internetu se v případě naskenování stáhne pouze část algoritmu nutná ke zpracování, přičemž velikost se pohybuje kolem 9 kB. Díky této vlastnosti lze algoritmus používat i při snížené rychlosti připojení nebo špatném signálu.

Zkuste si naskenovat tento testovací kód:

![Testovací QR kód](https://rawgit.com/pesout/KudyJdu/master/ukazka.png)

## Jak zadávat vstupní hodnoty

### Pole (textarea) v horní části
- vstupem je `n` hodnot nadmořské výšky v různých bodech trasy, přičemž n je větší než 1
- tyto body by měly být přibližně stejně daleko od sebe, tj. bod `m` by měl být stejně daleko od bodů `m-1` a `m+1`
- uživatel má na výběr 3 formáty, svou volbu vybere pomocí radio buttonu pod polem pro vstup



- varianta "Čárka" znamená vstup ve formátu
```
000,000,000
```


- varianta "Nový řádek" znamená vstup ve formátu
```
000
000
000
```


- varianta "Mezera" znamená vstup ve formátu
```
000 000 000
```


- **Doporučení**: Zadávejte rozumný počet bodů (cca do 35), aby byl QR kód stále čitelný i s low-endovými smartphony disponujícími horšími fotoaparáty.

### Konverze ze souřadnic
- používá Google Maps API; mohou se vyskytnout drobné nepřesnosti
- uživatel zadá souřadnice do pole pro vstup a klepne na odkaz "Konverze ze souřadnic"
- je nutné dodržovat tento formát:
```
0.00000, 0.00000
0.00000, 0.00000
0.00000, 0.00000
```

### Vlastnosti
- v ukázkové verzi jsou pojmenovány jako Vlastnost 1 až 7
- v praxi půjde o otázky s boolean odpovědí popisující charakter cesty, např. sjízdnost na kole

### Webová adresa
- nepovinné pole, kam lze vložit odkaz na další informace o cestě aj.

## Přečtení QR kódu
- po načtení libovonou aplikací přejděte na odkaz, který kód obsahuje

## Generátor QR kódů
- Původní projekt: [https://davidshimjs.github.io/qrcodejs/](https://davidshimjs.github.io/qrcodejs/)
