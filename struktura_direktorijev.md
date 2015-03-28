# Struktura direktorijev

Moja zamisel je, da bi vsaka vizualizacija živela v svoji mapi, organiziramo jih pa lahko po sklopih. Kot
smo že omenili, se bomo omejili na dve "super-skupine" dejavnikov (notranji in zunanji dejavniki). Te dve mapi
sta vhodni točki v projekt. Nato se bosta navznotraj še delili na več skupin, npr. ~/obisk/notranji/vreme.

Vsaka posamezna vizualizacija, pa ne bo imela preveč komplicirane strukture: imeti mora main.py, ki bo vstopna 
točka za analizo podatkov. V kolikor se bomo odločili testirati našo aplikacijo bo vsebovalo tudi mapo tests/. 
Kaj več kot to je pa po mojem odvisno od trenutne analize in njene kompleksnosti, kako bomo organizirali bolj 
podrobno. 

Pri sami vizualizaciji pa ne bo trebno preveč pretiravati, ker bomo potrebovali samo mapo z imenom vizualizacije, in notri
index.html ter app.js, kjer bo verjetno potrebno samo par REST klicev na naš strežnik z bazo, in sledi vizualizacija z d3js. 
Vizualizacija bo pa bila v veji gh-pages, tako, da se ne bo tepla z master vejo razvoja. 