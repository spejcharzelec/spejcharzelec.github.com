# Web Špejchar Želeč
**[spejcharzelec.cz](http://spejcharzelec.cz)**

Online editor: [prose.io](http://prose.io/)

## Výstavy
Položky v sekcích **Muzeum** a **Obrazárna** jsou v adresáři `_posts`.
Ke generování stránek je použit [Jekyll](http://jekyllrb.com/), který se požívá ke generování blogů. Výstavy jsou tedy koncipováný z hlediska Jekylla jako příspěvky do blogu.


Každá výstava je v jednou souboru a musí splňovat určitý formát:

 - **souboru**
 	- musí být v adresáři `_posts`
 	- název musí mít formát `rok-mesic-den-url-vystavy.md` pro Markdown, popřípadě může končit `.html` pro HTML, např:
 		- `2012-08-03-venkov-v-zanrove-malbe.md`
		- `2012-08-07-muzeum-zemedelskych-stroju.html`
	- datum určuje pořadí (k ničemu jinému se nevyužívá, takže může být libovolné)

 - **metadata v hlavičce souboru**
 	- na začátku souboru musí být sekce oddělená `---`:
 	- atributy jsou:
 		- **title**: pvní řádek hlavičky (tučný)
 		- **subtitle**: druhý řádek hlavičky (volitelný, může být vypoštěn; méně tučný)
 		- **menu**: které menu bude po otevření zvýrazněno (žluté)
 			- `obrazarna`
 			- nebo `muzeum`
 		- **category**: do která části menu patří výstava (bude pak součástí URL a zobrazí se v příslušné části)
 			- v 99% stejná hodnota jako **menu** (bohužel to nešlo udělat elegantněji)
 			- `obrazarna`
 			- nebo `muzeum`
 		- **tags**: může mít více významů, zatím využito na úvodní stránce k přidání do "První patro" a "Přízemí"
 			- `prvni-patro`
 			- nebo `prizemi`
 		- **images**: seznam obrárázků výstavy (pvní fotka je vybrána na úvodní stránku)
 			- originály je potřeba nahrát do `media/img/vystavy/orig`
 			- kařdá řádka je uvedena 2 mezerami pomlčkou a mazerou
 			- soubory jsou v uvozovnkách
 		- **layout**: určuje která šablona se použije
 			- vždy `vystava`
 		- **intro**: úvodní text stránky, který se zobrazí na úvodní stránce webu (v zúženém sloupečku)
 			- pokud je nastaven, tak se na úvodní stránce zobrazí místo těla stránky
 			- pokud není nastaven, tak se zobrazí tělo stránky
 			- text je v HTML
 			- text může být i na více řádek
 			- první řádka musí být `intro: |` (bez dalšího textu)
 			- každý další řádek intra musí být odsazeny dvěma mezerami a už obsahuje text
 	- příklad:

```
---
title: Pvní řádek hlavičky
subtitle: druhý řádek hlavičky (volitelný)
menu: obrazarna
category: obrazarna
tags: prvni-patro
images:
  - "expozice-obrazu-aloise-dolezala/01.jpg"
  - "expozice-obrazu-aloise-dolezala/02.jpg"
  - "expozice-obrazu-aloise-dolezala/03.jpg"
  - "expozice-obrazu-aloise-dolezala/04.jpg"
layout: vystava
intro: |
  První řádek intra
  druhý řádek
  text intra je <b>HTML</b>
---
Tělo stránky... (Markdown nebo HTML)
```
