# Registrera Arbetserfarenheter
Denna webbplats konsumerar REST webbtjänsten som finns i detta [repo]( https://github.com/Himoazo/API).
Webbplatsen via ** Fetch anrop ** med olika metoder kan lagra data i webbtjänsten (method: POST), kan radera en rad data (method: DELETE), kan uppdatera en rad data (method: PUT) och läser all lagrade data i webbtjänstensdatabas och visar den på startsidan (method: GET).

På ”lägg till erfarenhet” sida finns det ett formulär som man kan fylla i för att skicka uppgifter om en viss arbetserfarenhet i webbtjänsten. Lämnar man slutdatumet tomt då anser applikationen att tjänsten är fortfarande pågående. 
På startsidan som redan nämnt visas alla lagrade arbetserfarenheter med möjligheten till att radera och redigera.

**Obs.** om klientens webbläsares språk är (en: us) så förekommer det problem med att redigera lagrade erfarenheter pga date format som webbplatsen i sådana fall anpassar och som i sin tur krockar med mysql date format. Lösningen i detta fall är att radera raden och lagrar den på nytt med rätt information. Är webbläsarens språk svenska då är det inga problem att redigera.
