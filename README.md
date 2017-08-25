# KudyJdu

- [http://kudy.pesout.eu](kudy.pesout.eu)

## Popis

Po zadání informací o vytyčené trase se vygeneruje QR kód. Ten se umístí do terénu společně se značením trasy (naučná stezka, turistická trasa), nejlépe i s informací o cílovém bodu a jeho vzdálenosti. Po naskenování kódu algoritmus zpracuje data v kódu obsažená. Výstupem je pak výškopis a předem zadané informace.

Výhodou je, že všechna data o trase jsou v QR kódu a není tak třeba zajišťovat databáze apod. Z internetu se v případě naskenování stáhne pouze část algoritmu nutná ke zpracování, přičemž velikost se pohybuje kolem 9 kB. Díky této vlastnosti lze algoritmus používat i při snížené rychlosti připojení nebo špatném signálu.

## Jak zadávat vstupní hodnoty
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


## Konverze ze souřadnic
- používá Google Maps API; mohou se vyskytnout drobné nepřesnosti
- uživatel zadá souřadnice do pole pro vstup a klepne na odkaz "Konverze ze souřadnic"
- je nutné dodržovat tento formát:
```
0.00000, 0.00000
0.00000, 0.00000
0.00000, 0.00000
```

## Vlastnosti
- v ukázkové verzi jsou pojmenovány jako Vlastnost 1 až 7
- v praxi půjde o otázky s boolean odpovědí popisující charakter cesty

