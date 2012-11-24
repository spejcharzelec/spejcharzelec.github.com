---
layout: vystava
title: Aktuální výstava
subtitle: Krajina posbíraná z úložny času
menu: obrazarna
category: obrazarna
published: true
show_past: true
tags: prvni-patro
intro: | Obrazárna Špejchar Želeč u Tábora nabízí od 1. prosince 2012 svým návštěvníkům bohatou kolekci obrazů  Vladimíra Míčka (1941-2010) a  Evy Míčkové (1946-2005). Účel spojit obě pozůstalosti v jednu velkou výstavu nachází oporu v období sedmdesátých a osmdesátých let, kdy oba umělce (životní partnery) jejich tvorba sbližovala a docházelo u nich k čitelnému, vzájemnému ovlivnění – jednalo se o malbu abstraktní krajiny formou barevných fáborů či stuh. Šlo o zobrazování přírody od širšího záběru (styl kobercových vzorů) až po zvětšený detail.
images: 
  - "micko-mickova/01.jpg"
  - "micko-mickova/02.jpg"
  - "micko-mickova/03.jpg"
  - "micko-mickova/04.jpg"
  - "micko-mickova/05.jpg"
  - "micko-mickova/06.jpg"
---
Obrazárna Špejchar Želeč u Tábora nabízí od 1. prosince 2012 svým návštěvníkům bohatou kolekci obrazů  Vladimíra Míčka (1941-2010) a  Evy Míčkové (1946-2005). 
Účel spojit obě pozůstalosti v jednu velkou výstavu nachází oporu v období sedmdesátých a osmdesátých let, kdy oba umělce (životní partnery) jejich tvorba sbližovala a docházelo u nich k čitelnému, vzájemnému ovlivnění – jednalo se o malbu abstraktní krajiny formou barevných fáborů či stuh. Šlo o zobrazování přírody od širšího záběru (styl kobercových vzorů) až po zvětšený detail.
Vladimír Míčko byl představitelem výtvarného experimentátora, který už na studiích a  krátce po nich prokazoval svůj talent v motivech krajiny jižních Čech a Prahy. Eva Míčková ve svých olejích a zejména v jemných akvarelech zachycovala detaily přírody – kmen stromu, střed květu, polní trávy.
Oba umělci se vytráceli už za svého života ze seznamu jmen známých malířů, postupem doby stále řidčeji vystavovali a tak nedosáhli za svého života  zaslouženého trůnu.
I když je nutné podotknout, že něco z jejich díla našlo zastoupení v Národní galerii a v mnoha soukromých sbírkách. V říjnu v pražském Rudolfinu dokonce krajinami domova od Vladimíra Míčka , byly obdarováni naši váleční i novodobí veteráni
Obrazy manželů Míčkových (v českém prostředí nelehko zařaditelné) byly ve své době přijímány  jen s polohlasným uznáním (bez patřičné odezvy historiků umění) , přestože se jednalo o mimořádně dobře naladěnou tvorbu postavenou na expresivním vyjadřování, tvorbu vyzrálou, v některých ohledech zcela originální.
Přehlídka  jejich prací (celkem 150 položek) v Obrazárně  Špejchar Želeč potrvá do konce měsíce března 2013.
</div>
<div class="black-container">
    <h2><a href="{{ page.url }}">Výstavy pořádané v Obrazárně</a></h2>
</div>

<div class="time-container">
    {% if page.show_past %}
        <h3>Historie výstav</h3>
        <ul>
            {% for page in site.categories.obrazarna %}
                {% if page.is_past %}
                    <li><a href="{{ page.url }}">{{ page.title }} {{ page.subtitle }}</a></li>
                {% endif %}
            {% endfor %}
        </ul>
    {% endif %}
</div>
