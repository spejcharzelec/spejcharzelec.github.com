# Web Špejchar Želeč
**[spejcharzelec.cz](http://spejcharzelec.cz)**

Online editor: [prose.io](http://prose.io/)

## Výstavy
Položky v sekcích **Muzeum** a **Obrazárna** jsou v adresáři `_posts`.
Ke generování stránek je použit [Jekyll](http://jekyllrb.com/), který se požívá ke generování blogů. Výstavy jsou tedy koncipováný z hlediska Jekylla jako příspěvky do blogu.


Každá výstava je v jednou souboru a musí splňovat určitý formát:

 - **souboru**
 	- musí být v adresáři `_posts`
 	- název musí mít formát `rok-mesic-den-url-vystavy.md` pro [Markdown](http://daringfireball.net/projects/markdown/basics), popřípadě může končit `.html` pro HTML, např:
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
 			- nebo `prvni-patro-future` pro přidání připravované výstavy do prvního patra
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
 		- **published** má se příspěvek zobrazit na webu?
 			- `true` zobrazit (výchozí hodnote, pokud published není nastaveno)
 			- `false` nezobrazit (vůbec se do stránek nevygeneruje)
 			- použito například u aktualit
 		- **is_future** jedná se o připravovanou výstavu?
 			- `true` zobrazí se v seznamu připravovaných výstav
 			- aby by tento seznam byl vidět musí být v souboru `obrazarna/vystavy/index.html` v havičce nastaveno `show_future: true`
 			- pokud výstava nemá být na úvodní stránce webu je zapotřebí upravit `tags` výstavy (odstranit `prvni-patro`)
 		- **is_past** jedná se o minulou výstavu?
 			- `true` zobrazí v seznamu minulých výstav
 			- aby by tento seznam byl vidět musí být v souboru `obrazarna/vystavy/index.html` v havičce nastaveno `show_past: true`
			- pokud výstava nemá být na úvodní stránce webu je zapotřebí upravit `tags` výstavy (odstranit `prvni-patro`)
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
published: true
---
Tělo stránky... (Markdown nebo HTML)
```
## Editace a obrázky (Mac)

### GitHub.app
Je zapotřebí stáhnout a nainstalovat: [GitHub.app](http://mac.github.com/).

#### Instalace
Při prvním spuštění zobrazí průvodce, kde je v kroku "Connect to GitHub" potřeba zadat přihlašovací údaje na Github a dát Login.

Po spuštění je zapotřebí vybrat repozitář "spejcharzelec/spejcharzelec.github.com" a dát "Clone to Computer". Tím se vytvoří lokální kopie souborů z GitHubu.

Po naklonování je zapotřebí repozitář dvojklikem otevřít. Dostaneš se na tuto obrazovku:

![Otevřený repozitář](http://mac.github.com/images/promo-screenshot.png)

#### Synchronizace
V záložce History je videt seznam jednotlivých commitů. Každý commit je soubor soubor změn v repozitáři. Červeně jsou smazané řádky, zeleně přidané. Kažý commit musí mít Commit summary, což je stručný popis změny.

Jestli chceš mít na svém počítači aktuální verzy ze serveru, je zapotřebí provéds synchronizaci (Sync vpravo nahoře).

Synchronizace také pošle lokélní commity na server.

#### Odeslání změn na GitHub
K odeslání změn je zapotřebí vytvořít nový commit. To se dělá v záložce Changes. Jestli jsou v repozitáři nějaké změny, tak tady budou vidět všechny pohromadě.

Stačí zaškrtat soubory, které chceš odeslat, vyplnit Commit summary ("nové fotky na stránce spejchar", "přidána výstava ABC", "upraven kontakt", …) a dát Commit. Pak je zapotřebý ještě udělat Sync (případně je vedle tlačítka Commit tlačítko, které ho přepne na Commit & Sync).

#### Update webu
Update webu se provede po odeslaní změn na GitHub. Většinout jsou změny vidět hned, ale někdy (když je server vytížen) můžou být změny vidět až do max. 10 minut.

### Update opbrázků
Vytvořil jsem skript, kterým jdou z originálů dělat náhledy, ale instalace potřebných nástrojů je poměrně složitá, takže se o ní rozepíšu až po příjezdu z tábora.

#### Ruční update

Zatím můžeš náhledy vygenerovat ručně. Vše se nachází v adresáři `media/img/vystavy`:

- `orig` obsahuje plnou velikost
- `small` velikost pro uvodní stránku (šířka = **286px**)
- `thumb` velikost pro galerii (výška = **100px**)
- soubor s cestou `obrazy-abc/01.jpg` v odresari `orig` sem musi nachazet pod stejnou cestou i v adresarich `small` a `thumb`
- na prislusne strance v casti `images:` se na soubor odkazes jako na `obrazy-abc/01.jpg` a aplikace se postará o zbytek

Všechny tyto velikosti obrázku (v `orig`, `small` a `thumb`) je zapotřebí přidat a odeslat v Commitu na GitHub.
