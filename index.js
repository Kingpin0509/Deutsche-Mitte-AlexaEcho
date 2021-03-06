"use strict";

// =================================================================================
// App Configuration
// =================================================================================

const app = require("jovo-framework").Jovo;

exports.handler = function(event, context, callback) {
  // Map Dialogflow standard parameter given-name with name
  //use an inputMap to match incoming inputs from Alexa and Google.
  app.setConfig({
    inputMap: {
      "given-name": "name"
    },
    userDataCol: "userData"
  });
  app.handleRequest(event, callback, handlers);
  app.execute();
};
// =================================================================================
// App Logic
// =================================================================================
const handlers = {
  LAUNCH: function() {
    let speech = app.speechBuilder();
    app.toIntent("HelloWorldIntent", app.user().isNewUser());
    app.toIntent("HelloBackIntent", !app.user().isNewUser());
    app.tell(speech);
  },
  NameIntent: function(name) {
    app.tell("Hallo " + name);
    app.toIntent("HelloWorldIntent");
  },
  SaveUserDataIntent: function() {
    app.user().data.name;
    app.tell("Saved!");
  },
  HelloWorldIntent: function() {
    let title = "Willkommen bei der Deutschen Mitte.";
    let content =
      "Um mehr über das Programm der Deutschen Mitte zu erfahren sage Einleitung. Oder nenne ein Politikressort um mehr zu erfahren z.B. Innenpolitik, Verteidigung oder Wirtschaft. Oder möchtest du eine Auflistung aller Programmschwerpunkte? Dann sage Hilfe.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Willkommen bei der Deutschen Mitte. Um mehr über das Programm der Deutschen Mitte zu erfahren sage Einleitung. Oder nenne ein Politikressort um mehr zu erfahren z.B. Innenpolitik, Verteidigung oder Wirtschaft. Oder möchtest du eine Auflistung aller Programmschwerpunkte? Dann sage Hilfe."
      );
  },
  HelloBackIntent: function() {
    let title = "Willkommen zurück...";
    let content =
      "Um mehr über das Programm der Deutschen Mitte zu erfahren sage Einleitung. Oder nenne ein Politikressort um mehr zu erfahren z.B. Innenpolitik, Verteidigung oder Wirtschaft. Oder möchtest du eine Auflistung aller Programmschwerpunkte? Dann sage Hilfe.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Willkommen zurück..! Sage Einleitung. Oder nenne ein Politikressort um mehr zu erfahren z.B. Innenpolitik, Verteidigung oder Wirtschaft. Oder möchtest du eine Auflistung aller Programmschwerpunkte? Dann sage Hilfe."
      );
  },
  HelpIntent: function() {
    let title = "Hilfe";
    let content =
      "Sozialpolitik, Aussenpolitik, Bildungspolitik, Entwicklungspolitik, Familienpolitik, Finanzpolitik, Gesundheitspolitik, Innenpolitik, Justiz, Umweltschutz, Verbraucherschutz, Verkehrspolitik, Verteidigungs oder Wirtschaftspolitik";
    app
      .showSimpleCard(title, content)
      .ask(
        "Folgende Themen stehen zur Auswahl. Sozialpolitik, Aussenpolitik, Bildungspolitik, Entwicklungspolitik, Familienpolitik, Finanzpolitik, Gesundheitspolitik, Innenpolitik, Justiz, Umweltschutz, Verbraucherschutz, Verkehrspolitik, Verteidigungs oder Wirtschaftspolitik. Worüber möchtest du mehr erfahren?",
        "Oder worüber möchtest du mehr erfahren?"
      );
  },
  EinleitungIntent: function() {
    let title = "Das Programm";
    let content =
      "Die Deutsche Mitte hat sich ein gewaltiges Programm gegeben. Wir gehen weiter als die Konkurrenz. Unsere Ziele sind ohne besonderen Einsatz und persönliche Opfer nicht erreichbar. Je umfassender die Mitwirkung, desto höher die persönlichen Anforderungen. Vorstände und Kandidaten bei Wahlen müssen die Gewähr bieten, dass sie die selbstgestellten Aufgaben erfüllen können. Deshalb werden Aus- und Fortbildungen im fachlichen und persönlichen Bereich immer wichtiger. Die inneren Strukturen in Partei und anderen Organisationsformen müssen mitwachsen. Wenn Leistungsträger aus der Mitte der deutschen Gesellschaft zu uns kommen, wollen sie angemessene Ansprechpartner finden. Die Deutsche Mitte will gerechten und fairen Ausgleich zwischen allen Menschen und -gruppen. Veränderung geht nur gemeinsam.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Die Deutsche Mitte hat sich ein gewaltiges Programm gegeben. Wir gehen weiter als die Konkurrenz. Unsere Ziele sind ohne besonderen Einsatz und persönliche Opfer nicht erreichbar. Je umfassender die Mitwirkung, desto höher die persönlichen Anforderungen. Vorstände und Kandidaten bei Wahlen müssen die Gewähr bieten, dass sie die selbstgestellten Aufgaben erfüllen können. Deshalb werden Aus- und Fortbildungen im fachlichen und persönlichen Bereich immer wichtiger. Die inneren Strukturen in Partei und anderen Organisationsformen müssen mitwachsen. Wenn Leistungsträger aus der Mitte der deutschen Gesellschaft zu uns kommen, wollen sie angemessene Ansprechpartner finden. Die Deutsche Mitte will gerechten und fairen Ausgleich zwischen allen Menschen und -gruppen. Veränderung geht nur gemeinsam.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  AussenpolitikIntent: function() {
    let title = "Außenpolitik";
    let content =
      "Mit Augenmaß, gut abgestimmt mit Partnern und Freunden und ohne großen Wirbel verlässt Deutschland die Euro-Gruppe – nicht als erstes Land, um Missstimmung zu vermeiden. Der Vertrag von Lissabon, über den die Bevölkerung nicht abstimmen durfte, wird nachträglich einem Volksentscheid unterworfen und im Ablehnungsfalle selbstverständlich aufgekündigt. Gleichzeitig legt die Bundesregierung abgesprochene Vorschläge für eine umfassende EU-Reform vor. Europa wird gestärkt und deutlich demokratisiert, mit mehr Mitbestimmung durch die Euro-Völker, Wahl aller Gremien, Beendigung der Entscheidungsmacht der jetzigen EU-Kommission. Die Deutsche Mitte fördert die Sanierungskraft hoch verschuldeter Euro-Länder. Zahlungen an verschuldete Euro-Länder erfolgen nur noch gegen dreifache Sicherheitsleistung und ab Förderbeträgen von insgesamt mehr als 20% des betreffenden Bundeshaushalts ausschließlich nach Zustimmung der eigenen und der Empfänger-Bevölkerung. Mit der Förderung internationaler Gewerkschaftspolitik gehen wir auf die große Mehrzahl der Menschen in aller Welt zu. Keine Abenteuer-Politik bei Regierungswechseln in anderen Ländern (Libyen, Syrien), grundsätzliche Beachtung der Nichteinmischung in die inneren Angelegenheiten anderer Länder. Die Deutsche Mitte tritt weltweit für gerechten Frieden ein.Gerechten Frieden in Nahost fördern wir, eine deutsche Staatsräson für die Sicherheit Israels kann und wird es nicht geben. Ungerechte und sinnlose Sanktionen werden beendet. Deutsche Soldaten werden aus dem Nicht-Nato-Ausland („out of area“) abgezogen und verbleiben fortan ausschließlich im Nato-Gebiet. Gleichzeitig werden schrittweise binnen fünf Jahren alle ausländischen Truppen aus Deutschland abgezogen. Zur Friedenssicherung wird Deutschland seine Truppen aus der Nato-Struktur so lange herausziehen, bis die Nato sämtliche Einsätze außerhalb des Nato-Gebiets beendet hat. Sollten jedoch einzelne Nato-Partner ohne Zustimmung des UN-Sicherheitsrates noch weitere Völker überfallen und Kriege anzetteln, wird sich die Deutsche Mitte für einen Austritt aus der Nato einsetzen. Truppeneinsätze benötigen künftig bessere Strategien. Wir sind und bleiben enge Freunde und Verbündete unserer EU-Nachbarn und Nato-Partner, diese Beziehungen wollen wir vorrangig besonders pflegen, vor allem im Interesse der Völker – doch deutsche Außenpolitik kann mehr als nur Bündnis- oder EU-Politik.Mit Russland und anderen Staaten oder Staatengruppen werden friedenswahrende Rückversicherungsverträge abgeschlossen.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Außenpolitik - Mit Augenmaß, gut abgestimmt mit Partnern und Freunden und ohne großen Wirbel verlässt Deutschland die Euro-Gruppe – nicht als erstes Land, um Missstimmung zu vermeiden. Der Vertrag von Lissabon, über den die Bevölkerung nicht abstimmen durfte, wird nachträglich einem Volksentscheid unterworfen und im Ablehnungsfalle selbstverständlich aufgekündigt. Gleichzeitig legt die Bundesregierung abgesprochene Vorschläge für eine umfassende EU-Reform vor. Europa wird gestärkt und deutlich demokratisiert, mit mehr Mitbestimmung durch die Euro-Völker, Wahl aller Gremien, Beendigung der Entscheidungsmacht der jetzigen EU-Kommission. Die Deutsche Mitte fördert die Sanierungskraft hoch verschuldeter Euro-Länder. Zahlungen an verschuldete Euro-Länder erfolgen nur noch gegen dreifache Sicherheitsleistung und ab Förderbeträgen von insgesamt mehr als 20% des betreffenden Bundeshaushalts ausschließlich nach Zustimmung der eigenen und der Empfänger-Bevölkerung. Mit der Förderung internationaler Gewerkschaftspolitik gehen wir auf die große Mehrzahl der Menschen in aller Welt zu. Keine Abenteuer-Politik bei Regierungswechseln in anderen Ländern (Libyen, Syrien), grundsätzliche Beachtung der Nichteinmischung in die inneren Angelegenheiten anderer Länder. Die Deutsche Mitte tritt weltweit für gerechten Frieden ein.Gerechten Frieden in Nahost fördern wir, eine deutsche Staatsräson für die Sicherheit Israels kann und wird es nicht geben. Ungerechte und sinnlose Sanktionen werden beendet. Deutsche Soldaten werden aus dem Nicht-Nato-Ausland („out of area“) abgezogen und verbleiben fortan ausschließlich im Nato-Gebiet. Gleichzeitig werden schrittweise binnen fünf Jahren alle ausländischen Truppen aus Deutschland abgezogen. Zur Friedenssicherung wird Deutschland seine Truppen aus der Nato-Struktur so lange herausziehen, bis die Nato sämtliche Einsätze außerhalb des Nato-Gebiets beendet hat. Sollten jedoch einzelne Nato-Partner ohne Zustimmung des UN-Sicherheitsrates noch weitere Völker überfallen und Kriege anzetteln, wird sich die Deutsche Mitte für einen Austritt aus der Nato einsetzen. Truppeneinsätze benötigen künftig bessere Strategien. Wir sind und bleiben enge Freunde und Verbündete unserer EU-Nachbarn und Nato-Partner, diese Beziehungen wollen wir vorrangig besonders pflegen, vor allem im Interesse der Völker – doch deutsche Außenpolitik kann mehr als nur Bündnis- oder EU-Politik.Mit Russland und anderen Staaten oder Staatengruppen werden friedenswahrende Rückversicherungsverträge abgeschlossen.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  InnenpolitikIntent: function() {
    let title = "Innenpolitik";
    let content =
      "Wir wollen mehr und besser bezahlte Polizisten, die wir persönlich kennen: als „Revierbeamte“ mit erhöhter Straßenpräsenz. Geheimdienste sollen besser und ehrlicher zum Wohl der Bevölkerung arbeiten, das allein sichert das Land. Ausländer wollen wir künftig, wie alle anderen Staaten auch, besser aussuchen: nach bundesweit einheitlichen Maßstäben, die helfen, die Aussicht auf erfolgreiche Integration und Einbürgerung vorab zu bewerten. Wir wollen Migranten künftig auch viel besser respektieren, behandeln und integrieren: schulen, in Lohn und Brot bringen, schneller einbürgern. Migranten ohne Integrationsbereitschaft werden zurückgewiesen. Die Bildung von Migrantenvierteln und aller kriminellen Banden wird tatkräftig unterbunden. Null Toleranz bei rassistischen Übergriffen. In berechtigten Einzelfällen, in denen Asylsuchende in ihren Herkunftsländern eine akute Bedrohung ihrer Menschenrechte erleiden oder befürchten müssen, erhält die Bundesregierung eine verbesserte Handlungsbasis.Mehr Volksinitiativen und Volksentscheide bei wichtigen Fragen in Bund und Land. Staatliches Entscheiden und Handeln muss viel besser öffentlich kontrollierbar werden! Den Überwachungsstaat werden wir beenden – und Spionage von außen nicht mehr dulden.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Innenpolitik - Wir wollen mehr und besser bezahlte Polizisten, die wir persönlich kennen: als „Revierbeamte“ mit erhöhter Straßenpräsenz. Geheimdienste sollen besser und ehrlicher zum Wohl der Bevölkerung arbeiten, das allein sichert das Land. Ausländer wollen wir künftig, wie alle anderen Staaten auch, besser aussuchen: nach bundesweit einheitlichen Maßstäben, die helfen, die Aussicht auf erfolgreiche Integration und Einbürgerung vorab zu bewerten. Wir wollen Migranten künftig auch viel besser respektieren, behandeln und integrieren: schulen, in Lohn und Brot bringen, schneller einbürgern. Migranten ohne Integrationsbereitschaft werden zurückgewiesen. Die Bildung von Migrantenvierteln und aller kriminellen Banden wird tatkräftig unterbunden. Null Toleranz bei rassistischen Übergriffen. In berechtigten Einzelfällen, in denen Asylsuchende in ihren Herkunftsländern eine akute Bedrohung ihrer Menschenrechte erleiden oder befürchten müssen, erhält die Bundesregierung eine verbesserte Handlungsbasis.Mehr Volksinitiativen und Volksentscheide bei wichtigen Fragen in Bund und Land. Staatliches Entscheiden und Handeln muss viel besser öffentlich kontrollierbar werden! Den Überwachungsstaat werden wir beenden – und Spionage von außen nicht mehr dulden.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  FinanzpolitikIntent: function() {
    let title = "Finanzpolitik";
    let content =
      "Banken werden ehrliche Dienstleister, Zockerei wird verboten, Zins und Zinseszins werden abgeschafft.Marode Banken werden vorübergehend verstaatlicht und teilweise in kontrollierten Konkurs gehen. Manager haften für Fehlverhalten, Betrug wird strenger bestraft. Wir fordern die Trennung von Geschäfts- und Investmentbanken und eine Börsentransaktionssteuer, um Großspekulanten einzubremsen. Diese Schritte werden international abgestimmt, durchgesetzt und eingeführt, genau wie das Verbot von Spekulantentricks: Derivate, Leerverkäufe und Termingeschäfte. Euro-Unterstützung zahlen wir nur noch gegen dreifache Sicherheit, um das Vermögen des deutschen Volkes abzusichern.Künftig darf nie wieder eine nationale Währung Weltleitwährung sein! Denn es ist genau dieser Umstand, der in den letzten zehn Jahren immer wieder zu Kriegen geführt hat – und jetzt global brandgefährlich wird! Steuern für Superreiche und auf Mega-Erbschaften steigen, Schwächere werden entlastet. Wir motivieren Superreiche und Großkonzerne, freiwillig mehr Steuern in Deutschland zu zahlen – und organisieren dies als soziales Mäzenatentum. Steuerverschwendung wird strenger geahndet und wirkungsvoller vermieden. Mehr Mitsprache für Steuerzahler! Die Deutsche Mitte fördert alternative und regionale Währungen ebenso wie Tauschringe. Die „Monetative“ (nach Prof. Dr. Bernd Senf) verbietet Geldschöpfung durch Regierung oder private Einrichtungen und legt dieses Privileg ausschließlich in die Hände einer reformierten und wirklich unabhängigen Bundesbank. Dieses Prinzip ist eingebettet in das ebenfalls verfolgte „Viergliederungsprinzip“ (nach Prof. Dr. Johannes Heinrichs) und angelehnt an das „Dreigliederungsprinzip“ (nach Dr. Rudolf Steiner).Sämtliche tiefgreifende Reformen erfolgen ausschließlich in gründlicher und tatsächlich unabhängiger wissenschaftlicher und praxisnaher Vorbereitung und Begleitung.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Finanzpolitik - Banken werden ehrliche Dienstleister, Zockerei wird verboten, Zins und Zinseszins werden abgeschafft.Marode Banken werden vorübergehend verstaatlicht und teilweise in kontrollierten Konkurs gehen. Manager haften für Fehlverhalten, Betrug wird strenger bestraft. Wir fordern die Trennung von Geschäfts- und Investmentbanken und eine Börsentransaktionssteuer, um Großspekulanten einzubremsen. Diese Schritte werden international abgestimmt, durchgesetzt und eingeführt, genau wie das Verbot von Spekulantentricks: Derivate, Leerverkäufe und Termingeschäfte. Euro-Unterstützung zahlen wir nur noch gegen dreifache Sicherheit, um das Vermögen des deutschen Volkes abzusichern.Künftig darf nie wieder eine nationale Währung Weltleitwährung sein! Denn es ist genau dieser Umstand, der in den letzten zehn Jahren immer wieder zu Kriegen geführt hat – und jetzt global brandgefährlich wird! Steuern für Superreiche und auf Mega-Erbschaften steigen, Schwächere werden entlastet. Wir motivieren Superreiche und Großkonzerne, freiwillig mehr Steuern in Deutschland zu zahlen – und organisieren dies als soziales Mäzenatentum. Steuerverschwendung wird strenger geahndet und wirkungsvoller vermieden. Mehr Mitsprache für Steuerzahler! Die Deutsche Mitte fördert alternative und regionale Währungen ebenso wie Tauschringe. Die „Monetative“ (nach Prof. Dr. Bernd Senf) verbietet Geldschöpfung durch Regierung oder private Einrichtungen und legt dieses Privileg ausschließlich in die Hände einer reformierten und wirklich unabhängigen Bundesbank. Dieses Prinzip ist eingebettet in das ebenfalls verfolgte „Viergliederungsprinzip“ (nach Prof. Dr. Johannes Heinrichs) und angelehnt an das „Dreigliederungsprinzip“ (nach Dr. Rudolf Steiner).Sämtliche tiefgreifende Reformen erfolgen ausschließlich in gründlicher und tatsächlich unabhängiger wissenschaftlicher und praxisnaher Vorbereitung und Begleitung.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  WirtschaftIntent: function() {
    let title = '"Wirtschaft';
    let content =
      "Unternehmen, die sozial, ökologisch, menschenfreundlich und flexibel arbeiten, erhalten Steuererleichterungen. Familienunternehmen, Genossenschaften und Stiftungen sowie Mitarbeiterbeteiligung werden ebenso gefördert wie Solidität und Stabilität der Unternehmensfinanzen – auch durch die Bildung stiller Reserven. Förderung von lokaler Wirtschaft und handwerklicher Eigenproduktion. Förderung von Open-Source-Ökonomie. Neue Anreize für Superreiche und Großkonzerne, zum Gemeinwohl beizutragen (Mäzenatentum). Geeignete, neue Technologien und Erfindungen werden gefördert und schneller in Produkte umgesetzt. Unterdrückung von Erfindungen aus eigensüchtigen Motiven sowie Kartellbildung werden nicht mehr geduldet und wirksam unterbunden. Eingebaute Produktalterung (Obsoleszenz) wird ein Straftatbestand, die Mindestgarantiefrist auf drei Jahre verlängert, so fördern wir Wertarbeit und den Verzicht auf Billigprodukte. Schutz vor Spionage und Benachteiligung im Ausland, besserer Übernahmeschutz, Ende sinnloser internationaler Sanktionspolitik. Das vollständige Programm folgt in kürze...";
    app
      .showSimpleCard(title, content)
      .ask(
        "Wirtschaft - Unternehmen, die sozial, ökologisch, menschenfreundlich und flexibel arbeiten, erhalten Steuererleichterungen. Familienunternehmen, Genossenschaften und Stiftungen sowie Mitarbeiterbeteiligung werden ebenso gefördert wie Solidität und Stabilität der Unternehmensfinanzen – auch durch die Bildung stiller Reserven. Förderung von lokaler Wirtschaft und handwerklicher Eigenproduktion. Förderung von Open-Source-Ökonomie. Neue Anreize für Superreiche und Großkonzerne, zum Gemeinwohl beizutragen (Mäzenatentum). Geeignete, neue Technologien und Erfindungen werden gefördert und schneller in Produkte umgesetzt. Unterdrückung von Erfindungen aus eigensüchtigen Motiven sowie Kartellbildung werden nicht mehr geduldet und wirksam unterbunden. Eingebaute Produktalterung (Obsoleszenz) wird ein Straftatbestand, die Mindestgarantiefrist auf drei Jahre verlängert, so fördern wir Wertarbeit und den Verzicht auf Billigprodukte. Schutz vor Spionage und Benachteiligung im Ausland, besserer Übernahmeschutz, Ende sinnloser internationaler Sanktionspolitik. Das vollständige Programm folgt in kürze...",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  ArbeitSozialpolitikIntent: function() {
    let title = "Arbeit und Soziales";
    let content =
      "Jeder arbeitsfähige Mensch geht einer Beschäftigung nach. Ist diese unentgeltlich, erhält jeder gemeinnützig Tätige ein solidarisches Grundeinkommen, das deutlich über den Sozialleistungen von Hartz-IV liegt. Wir wollen einen Mindeststundenlohn von 10 Euro, unterhalb von 8,50 wird nicht diskutiert. Künftig erhalten alle Beschäftigungslosen eine Liste der in ihrer Umgebung tätigen gemeinnützigen Organisationen. Nach und nach, so schnell wie möglich, müssen sie ihren künftigen Arbeitsplatz auswählen und die Arbeit aufnehmen – oder eigene Ideen vorschlagen und bei amtlicher Zustimmung verwirklichen. Ziel: Sinnvolle Arbeitswelten für alle gemäß ihren Wünschen und Fähigkeiten frei von Existenzproblemen. Billiglöhne und Schein-Leiharbeit werden unterbunden. Volle Gleichberechtigung der Geschlechter bei Einstellung, Einkommen und Aufstiegschancen. Familien erhalten großzügige Förderung. Das Auseinanderdriften von Arm und Reich wird gestoppt und zurückgefahren. Die Solidarität aller Menschen untereinander wird gestärkt. Das vollständige Programm folgt in kürze...";
    app
      .showSimpleCard(title, content)
      .ask(
        "Arbeit und Soziales - Jeder arbeitsfähige Mensch geht einer Beschäftigung nach. Ist diese unentgeltlich, erhält jeder gemeinnützig Tätige ein solidarisches Grundeinkommen, das deutlich über den Sozialleistungen von Hartz-IV liegt. Wir wollen einen Mindeststundenlohn von 10 Euro, unterhalb von 8,50 wird nicht diskutiert. Künftig erhalten alle Beschäftigungslosen eine Liste der in ihrer Umgebung tätigen gemeinnützigen Organisationen. Nach und nach, so schnell wie möglich, müssen sie ihren künftigen Arbeitsplatz auswählen und die Arbeit aufnehmen – oder eigene Ideen vorschlagen und bei amtlicher Zustimmung verwirklichen. Ziel: Sinnvolle Arbeitswelten für alle gemäß ihren Wünschen und Fähigkeiten frei von Existenzproblemen. Billiglöhne und Schein-Leiharbeit werden unterbunden. Volle Gleichberechtigung der Geschlechter bei Einstellung, Einkommen und Aufstiegschancen. Familien erhalten großzügige Förderung. Das Auseinanderdriften von Arm und Reich wird gestoppt und zurückgefahren. Die Solidarität aller Menschen untereinander wird gestärkt. Das vollständige Programm folgt in kürze...",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  VerteidigungIntent: function() {
    let title = "Verteidigung";
    let content =
      "Eine Berufsarmee ist mit der bewährten Idee des Bürgers in Uniform schwer vereinbar. Die großen Herausforderungen der Zukunft, auch an die künftig erweiterte Freiheit und Mitsprache der Bürger, sind deshalb bei einer Wehrpflichtarmee besser aufgehoben: Deutschland kehrt zu diesem Modell zurück. Das bewährte Prinzip der Inneren Führung, das jedem Soldaten Gewissensfreiheit garantiert, wird wieder bestärkt. Bundeswehreinsätze im Inneren sind ausgeschlossen – auch in anderen Ländern. Wer gemäß seiner Gewissensfreiheit keinen Wehrdienst leistet, wird zu einem Sozialen oder Ökologischen Jahr nach eigener Wahl verpflichtet. Die Bundeswehr wird eine starke, gut gerüstete, mobile und vernetzte Verteidigungsarmee – mit voller Solidarität aller Bürger. Das vollständige Programm folgt in kürze...";
    app
      .showSimpleCard(title, content)
      .ask(
        "Verteidigung - Eine Berufsarmee ist mit der bewährten Idee des Bürgers in Uniform schwer vereinbar. Die großen Herausforderungen der Zukunft, auch an die künftig erweiterte Freiheit und Mitsprache der Bürger, sind deshalb bei einer Wehrpflichtarmee besser aufgehoben: Deutschland kehrt zu diesem Modell zurück. Das bewährte Prinzip der Inneren Führung, das jedem Soldaten Gewissensfreiheit garantiert, wird wieder bestärkt. Bundeswehreinsätze im Inneren sind ausgeschlossen – auch in anderen Ländern. Wer gemäß seiner Gewissensfreiheit keinen Wehrdienst leistet, wird zu einem Sozialen oder Ökologischen Jahr nach eigener Wahl verpflichtet. Die Bundeswehr wird eine starke, gut gerüstete, mobile und vernetzte Verteidigungsarmee – mit voller Solidarität aller Bürger. Das vollständige Programm folgt in kürze...",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  BildungForschungIntent: function() {
    let title = "Bildung und Forschung";
    let content =
      "Große Investitionen in Bildung und Forschung, in der Anfangszeit plus 50%, machen Deutschland wieder zur führenden Nation in diesem Bereich.Die Deutsche Mitte fordert KiTa-Plätze für alle Kinder, vorrangig ab drei Jahren, für jüngere nur auf Wunsch der Eltern. Die elterliche Kindererziehung bis zum Erreichen des dritten Lebensjahres wird gefördert. Schulklassen unter 20 Kinder, große Erweiterungen bei den Universitäten, aufgestockte Budgets in der Forschung. Deutlich bessere bauliche und technische Ausstattungen überall. Förderung betrieblicher Verzahnung und deutlich mehr wissenschaftliche Freiheit und Unabhängigkeit gehören unbedingt zusammen: mit transparenter Finanzierung sowie allgemein zugänglichen Forschungsergebnissen. Wir fordern die Abschaffung von Schulzwang und das Recht auf freies Lernen, Förderung selbstbestimmter, praxisbezogener, erlebnisorientierter Bildungsformen – mit Ergebniskontrolle. Wir fordern unabhängige, dem Gemeinwohl verpflichtete Mediennetzwerke mit transparenter Berichterstattung, die Abschaffung des Zwangsbeitrags zur Finanzierung des derzeitigen öffentlich-rechtlichen Rundfunks und ein Verbot der Zusammenarbeit zwischen Meldebehörden und Gebühreneinzug.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Bildung und Forschung - Große Investitionen in Bildung und Forschung, in der Anfangszeit plus 50%, machen Deutschland wieder zur führenden Nation in diesem Bereich.Die Deutsche Mitte fordert KiTa-Plätze für alle Kinder, vorrangig ab drei Jahren, für jüngere nur auf Wunsch der Eltern. Die elterliche Kindererziehung bis zum Erreichen des dritten Lebensjahres wird gefördert. Schulklassen unter 20 Kinder, große Erweiterungen bei den Universitäten, aufgestockte Budgets in der Forschung. Deutlich bessere bauliche und technische Ausstattungen überall. Förderung betrieblicher Verzahnung und deutlich mehr wissenschaftliche Freiheit und Unabhängigkeit gehören unbedingt zusammen: mit transparenter Finanzierung sowie allgemein zugänglichen Forschungsergebnissen. Wir fordern die Abschaffung von Schulzwang und das Recht auf freies Lernen, Förderung selbstbestimmter, praxisbezogener, erlebnisorientierter Bildungsformen – mit Ergebniskontrolle. Wir fordern unabhängige, dem Gemeinwohl verpflichtete Mediennetzwerke mit transparenter Berichterstattung, die Abschaffung des Zwangsbeitrags zur Finanzierung des derzeitigen öffentlich-rechtlichen Rundfunks und ein Verbot der Zusammenarbeit zwischen Meldebehörden und Gebühreneinzug.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  FamilienpolitikIntent: function() {
    let title = "Familie, Senioren, Frauen und Jugend";
    let content =
      "50% mehr Kindergeld, Verlängerung des Elterngeldes auf drei Jahre – und endlich genügend Kitas für alle! Förderung der natürlichen Familienbeziehung Mutter-Kind-Vater: Intakte Familien in geordneten Verhältnissen, in denen verheiratete, leibliche Eltern ihre eigenen Kinder erziehen, erhalten € 5.000 für das erste Kind, € 10.000 für das zweite und noch einmal € 10.000 für das dritte Kind. Steuerfrei, bar, pfändungssicher und zusätzlich zu allen anderen Leistungen. Homo-Ehe: ja! Förderung der individuellen, spontanen und natürlichen Geburt, Aufwertung des Berufs der Hebammen, mehr Unterstützung für junge Mütter. Frauen erhalten Hilfe für den Wiedereinstieg in den Beruf. Bessere Personalausstattung von Erziehungseinrichtungen. „Gender Mainstreaming“, die Gleichmachung der Geschlechter, wird nicht mehr gefördert. Mann und Frau sind und bleiben Träger gleicher unveräußerlicher Rechte. Die Deutsche Mitte fördert Mehrgenerationsgemeinschaften, in denen ältere Menschen geachtet werden und in der Gemeinschaft ihren Wünschen und Fähigkeiten entsprechend Aufgaben bis zu ihrem Lebensende erfüllen. Senioren werden auf Wunsch besser betreut, mit deutlich mehr Personal. Jugendarbeit vertritt die Interessen der Jugend bei der Entdeckung und Entwicklung ihrer Persönlichkeit und fördert Selbstorganisation, Eigenaktivität und verantwortungsvolle Teilhabe der Jugendlichen an der Gemeinschaft.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Familie, Senioren, Frauen und Jugend - 50% mehr Kindergeld, Verlängerung des Elterngeldes auf drei Jahre – und endlich genügend Kitas für alle! Förderung der natürlichen Familienbeziehung Mutter-Kind-Vater: Intakte Familien in geordneten Verhältnissen, in denen verheiratete, leibliche Eltern ihre eigenen Kinder erziehen, erhalten € 5.000 für das erste Kind, € 10.000 für das zweite und noch einmal € 10.000 für das dritte Kind. Steuerfrei, bar, pfändungssicher und zusätzlich zu allen anderen Leistungen. Homo-Ehe: ja! Förderung der individuellen, spontanen und natürlichen Geburt, Aufwertung des Berufs der Hebammen, mehr Unterstützung für junge Mütter. Frauen erhalten Hilfe für den Wiedereinstieg in den Beruf. Bessere Personalausstattung von Erziehungseinrichtungen. „Gender Mainstreaming“, die Gleichmachung der Geschlechter, wird nicht mehr gefördert. Mann und Frau sind und bleiben Träger gleicher unveräußerlicher Rechte. Die Deutsche Mitte fördert Mehrgenerationsgemeinschaften, in denen ältere Menschen geachtet werden und in der Gemeinschaft ihren Wünschen und Fähigkeiten entsprechend Aufgaben bis zu ihrem Lebensende erfüllen. Senioren werden auf Wunsch besser betreut, mit deutlich mehr Personal. Jugendarbeit vertritt die Interessen der Jugend bei der Entdeckung und Entwicklung ihrer Persönlichkeit und fördert Selbstorganisation, Eigenaktivität und verantwortungsvolle Teilhabe der Jugendlichen an der Gemeinschaft.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  GesundheitIntent: function() {
    let title = "Gesundheit";
    let content =
      "Die Deutsche Mitte fördert ganzheitliche Heilkunde und alternative Medizin. Überteuerte Kartellmedizin wird durch wirkungsvollere, höherwertige und preisgünstigere natürliche Methoden ersetzt. Aufbau ganzheitlicher Gesundheitszentren und Förderung von Solidargemeinschaften und alternativer Absicherungen im Krankheitsfall mit dem Recht auf freie Therapiewahl. Reform und Weiterentwicklung des Nahrungsmittelstandards Codex Alimentarius zur nachhaltigen und ökologischen Ausrichtung. Kritischer Umgang mit Impfungen, vor allem bei Kindern, Antibiotika, Chemotherapie, Quecksilber (Amalgam-Zahnfüllungen!) und Aluminium. Strengere Grenzwerte für Elektrosmog und Radioaktivität. In die notwendige Forschung, Standardisierung und überfällige Gesamtreform wird zügig und kräftig investiert, insbesondere auch in der Wissenschaft. Der Einfluss weniger Pharma-Riesen wird ebenso zurückgedrängt wie die Profitgier im Gesundheitswesen. Endlich bessere Bezahlung für Pflegeberufe und Hebammen!";
    app
      .showSimpleCard(title, content)
      .ask(
        "Gesundheit - Die Deutsche Mitte fördert ganzheitliche Heilkunde und alternative Medizin. Überteuerte Kartellmedizin wird durch wirkungsvollere, höherwertige und preisgünstigere natürliche Methoden ersetzt. Aufbau ganzheitlicher Gesundheitszentren und Förderung von Solidargemeinschaften und alternativer Absicherungen im Krankheitsfall mit dem Recht auf freie Therapiewahl. Reform und Weiterentwicklung des Nahrungsmittelstandards Codex Alimentarius zur nachhaltigen und ökologischen Ausrichtung. Kritischer Umgang mit Impfungen, vor allem bei Kindern, Antibiotika, Chemotherapie, Quecksilber (Amalgam-Zahnfüllungen!) und Aluminium. Strengere Grenzwerte für Elektrosmog und Radioaktivität. In die notwendige Forschung, Standardisierung und überfällige Gesamtreform wird zügig und kräftig investiert, insbesondere auch in der Wissenschaft. Der Einfluss weniger Pharma-Riesen wird ebenso zurückgedrängt wie die Profitgier im Gesundheitswesen. Endlich bessere Bezahlung für Pflegeberufe und Hebammen!",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  UmweltIntent: function() {
    let title = "Umwelt, Naturschutz und Reaktorsicherheit";
    let content =
      "Die Deutsche Mitte sieht den Menschen in der hohen Verantwortung, die natürlichen Grundlagen für alle Lebensformen zu bewahren. Darum erhalten Umwelt- und Naturschutz bedeutenden Vorrang. Stärkung und Weiterentwicklung der Nationalen Naturlandschaften, Verbesserung der Betreuungssituation in Schutzgebieten, Förderung nachhaltiger und naturschonender Landnutzung, Schaffung lokaler Stoff- und Energiekreisläufe, Abschaffung des Anschlusszwangs an die Kanalisation bei kontrolliertem Betrieb eigener Abwasserreinigung, Umstieg von zentraler auf dezentrale Energieversorgung mit Ausbau regenerativer und alternativer Energieversorgung. Ausstieg aus der Atomkraft. Verbot der künstlichen Beeinflussung der Atmosphäre. Umweltverbrechen werden stärker verfolgt und bestraft, vor allem was die Bereiche Erdöl, Erdgas und Radioaktivität angeht.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Umwelt, Naturschutz und Reaktorsicherheit - Die Deutsche Mitte sieht den Menschen in der hohen Verantwortung, die natürlichen Grundlagen für alle Lebensformen zu bewahren. Darum erhalten Umwelt- und Naturschutz bedeutenden Vorrang. Stärkung und Weiterentwicklung der Nationalen Naturlandschaften, Verbesserung der Betreuungssituation in Schutzgebieten, Förderung nachhaltiger und naturschonender Landnutzung, Schaffung lokaler Stoff- und Energiekreisläufe, Abschaffung des Anschlusszwangs an die Kanalisation bei kontrolliertem Betrieb eigener Abwasserreinigung, Umstieg von zentraler auf dezentrale Energieversorgung mit Ausbau regenerativer und alternativer Energieversorgung. Ausstieg aus der Atomkraft. Verbot der künstlichen Beeinflussung der Atmosphäre. Umweltverbrechen werden stärker verfolgt und bestraft, vor allem was die Bereiche Erdöl, Erdgas und Radioaktivität angeht.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  VerbraucherschutzIntent: function() {
    let title = "Ernährung, Landwirtschaft und Verbraucherschutz";
    let content =
      "Die Deutsche Mitte fordert das Recht auf natürlich gesunde Lebensmittel. Genmanipulierte Produkte gehören nicht in die Nahrungskette! Schrittweise Umstellung auf ökologische, pestizid- und gentechnikfreie Landwirtschaft (Höchststandard: Demeter.) Dies geschieht freiwillig und mit steuerlicher Förderung. Junge Menschen helfen dabei in ihrem sozialen/ökologischen Jahr und erlernen so den Bezug zur Natur. Förderung nachhaltiger Land- und Forstbewirtschaftung, Schutz und Regeneration von Böden mit nachhaltigem Humusaufbau. Bienenvölker werden als natürliche Lebensgrundlage gesetzlich besser geschützt. Bewahrung und Förderung altbewährten Saatgutes. Keine Patentrechte auf Lebewesen. Wir fordern artgerechte Tierhaltung und Fütterung und somit eine Abschaffung der Massentierhaltung. Dabei erfolgen sämtliche Umstellungen in enger Abstimmung mit allen Beteiligten. Wasserversorgung und andere Naturgüter gehören nicht in Konzernhände! Lobby-Eingriffe in Verbraucher- und Naturschutz werden verboten, die Unabhängigkeit der Forschung wird bestärkt und kontrolliert.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Ernährung, Landwirtschaft und Verbraucherschutz - Die Deutsche Mitte fordert das Recht auf natürlich gesunde Lebensmittel. Genmanipulierte Produkte gehören nicht in die Nahrungskette! Schrittweise Umstellung auf ökologische, pestizid- und gentechnikfreie Landwirtschaft (Höchststandard: Demeter.) Dies geschieht freiwillig und mit steuerlicher Förderung. Junge Menschen helfen dabei in ihrem sozialen/ökologischen Jahr und erlernen so den Bezug zur Natur. Förderung nachhaltiger Land- und Forstbewirtschaftung, Schutz und Regeneration von Böden mit nachhaltigem Humusaufbau. Bienenvölker werden als natürliche Lebensgrundlage gesetzlich besser geschützt. Bewahrung und Förderung altbewährten Saatgutes. Keine Patentrechte auf Lebewesen. Wir fordern artgerechte Tierhaltung und Fütterung und somit eine Abschaffung der Massentierhaltung. Dabei erfolgen sämtliche Umstellungen in enger Abstimmung mit allen Beteiligten. Wasserversorgung und andere Naturgüter gehören nicht in Konzernhände! Lobby-Eingriffe in Verbraucher- und Naturschutz werden verboten, die Unabhängigkeit der Forschung wird bestärkt und kontrolliert.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  VerkehrspolitikIntent: function() {
    let title = "Verkehr, Bau und Stadtentwicklung";
    let content =
      "Voll-Ausbau der Bahn zum großen Logistik-Dienstleister, keine Privatisierung, Zusammenarbeit mit Privatfirmen, deutlich weniger und kleinere LKW auf den Straßen. Großprojekte mit enger Einbindung der Bevölkerung. Grünere Städte, „essbare Städte“ (Nutzpflanzen für die Allgemeinheit auf öffentlichen Grünflächen). Ökologisches Bauen mit modernen Methoden und Techniken nach baubiologischen Standards. Reform der Energieeffizienzpolitik. Förderung regionaler Selbstverwaltung, keine Privatisierung kommunaler und staatlicher Basisaufgaben! Regional unabhängige Wasser-, Strom- und Wärmeversorgung.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Verkehr, Bau und Stadtentwicklung - Voll-Ausbau der Bahn zum großen Logistik-Dienstleister, keine Privatisierung, Zusammenarbeit mit Privatfirmen, deutlich weniger und kleinere LKW auf den Straßen. Großprojekte mit enger Einbindung der Bevölkerung. Grünere Städte, „essbare Städte“ (Nutzpflanzen für die Allgemeinheit auf öffentlichen Grünflächen). Ökologisches Bauen mit modernen Methoden und Techniken nach baubiologischen Standards. Reform der Energieeffizienzpolitik. Förderung regionaler Selbstverwaltung, keine Privatisierung kommunaler und staatlicher Basisaufgaben! Regional unabhängige Wasser-, Strom- und Wärmeversorgung.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  EntwicklungIntent: function() {
    let title = "Wirtschaftliche Zusammenarbeit und Entwicklung";
    let content =
      "Fairer Handel mit allen Völkern und Nationen. Internationale Unterstützungsleistungen werden künftig zusätzlich in verantwortlichen Patenschaften organisiert. Diese müssen den Interessen und Bedürfnissen der empfangenden Völker dienen. Die Patenschaften werden neutral kontrolliert, bewertet und die Ergebnisse veröffentlicht.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Wirtschaftliche Zusammenarbeit und Entwicklung - Fairer Handel mit allen Völkern und Nationen. Internationale Unterstützungsleistungen werden künftig zusätzlich in verantwortlichen Patenschaften organisiert. Diese müssen den Interessen und Bedürfnissen der empfangenden Völker dienen. Die Patenschaften werden neutral kontrolliert, bewertet und die Ergebnisse veröffentlicht.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  JustizIntent: function() {
    let title = "Justiz";
    let content =
      "Recht darf kein Privileg der Wohlhabenden oder Mächtigen sein. Gerechtigkeit soll vor Gericht siegen. Ausbau des Justizwesens, mehr Personal, bessere Gebäude und Ausstattungen, weniger machtpolitischer Einfluss, mehr Unabhängigkeit, schnellere Verfahren. Bürgerrechte und –schutz sind deutlich zu stärken.";
    app
      .showSimpleCard(title, content)
      .ask(
        "Justiz - Recht darf kein Privileg der Wohlhabenden oder Mächtigen sein. Gerechtigkeit soll vor Gericht siegen. Ausbau des Justizwesens, mehr Personal, bessere Gebäude und Ausstattungen, weniger machtpolitischer Einfluss, mehr Unabhängigkeit, schnellere Verfahren. Bürgerrechte und –schutz sind deutlich zu stärken.",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  VerratenIntent: function() {
    let title = "Die haben uns verraten!";
    let content = "Das waren die Sozialdemokraten... Ja, die Sozialdemokraten!";
    app
      .showSimpleCard(title, content)
      .tell("Das waren die Sozialdemokraten... Ja, die Sozialdemokraten!");
  },
  PolitikerProfilIntent: function() {
    let title = "Wer soll künftig Deutschland führen? Persönlichkeitsprofil";
    let content =
      "Programmatische Klarheit und Eindeutigkeit lt. Kurzprogramm Beendigung von Mafia-Herrschaft, Zinssystem und privater Geldschöpfung, ganzheitliche ethische Politik – Lebenserfahrung: wegen der erhöhten Anforderungen in schwieriger und Übergangszeit: nicht unter 45 Jahren, nicht über 75 Jahre – Ethisch gefestigt und zuverlässig: bereit zum Dienst an der Gemeinschaft, langjährige gemeinnützige Tätigkeit – erwiesener Mut, Courage, geistige Unabhängigkeit – Führungserfahrung und –stärke – Organisationserfahrung und –stärke – erwiesene Expertise im Fachgebiet von mindestens zwei Ministerialressorts – erwiesene jahrelange Praxis in fachübergreifenden Aktivitäten – keine NPD-, Rep-, Stasi-Vergangenheit; keine Vorstrafen/Erpressbarkeit – erwiesene internationale Lebens- und Arbeitserfahrung – mindestens eine Fremdsprache verhandlungssicher, mindestens verhandlungssicher Englisch, dazu Priorität: Russisch, Spanisch, Chinesisch – ausgeprägte Teamfähigkeit – sehr ausgeprägte Kommunikationsstärke: überzeugend, seriös, kenntnisreich, redegewandt, schlagfertig, überlegen, sensibel, empathisch – erwiesener Ideenreichtum, Improvisationstalent – erwiesene Offenheit für neue Fachgebiete, Systeme, Verfahren, Regelwerke – erwiesene persönliche Erfahrung mit alternativem Wissen: z. B. Homöopathie, Hirnforschung Prof. Hüther, Wilhelm Reich u.v.m. – hohe Belastbarkeit, robuste Gesundheit";
    app
      .showSimpleCard(title, content)
      .ask(
        "Wer soll künftig Deutschland führen? Ein Persönlichkeitsprofil für künftige Politiker – Programmatische Klarheit und Eindeutigkeit lt. Kurzprogramm Beendigung von Mafia-Herrschaft, Zinssystem und privater Geldschöpfung, ganzheitliche ethische Politik – Lebenserfahrung: wegen der erhöhten Anforderungen in schwieriger und Übergangszeit: nicht unter 45 Jahren, nicht über 75 Jahre – Ethisch gefestigt und zuverlässig: bereit zum Dienst an der Gemeinschaft, langjährige gemeinnützige Tätigkeit – erwiesener Mut, Courage, geistige Unabhängigkeit – Führungserfahrung und –stärke – Organisationserfahrung und –stärke – erwiesene Expertise im Fachgebiet von mindestens zwei Ministerialressorts – erwiesene jahrelange Praxis in fachübergreifenden Aktivitäten – keine NPD-, Rep-, Stasi-Vergangenheit; keine Vorstrafen/Erpressbarkeit – erwiesene internationale Lebens- und Arbeitserfahrung – mindestens eine Fremdsprache verhandlungssicher, mindestens verhandlungssicher Englisch, dazu Priorität: Russisch, Spanisch, Chinesisch – ausgeprägte Teamfähigkeit – sehr ausgeprägte Kommunikationsstärke: überzeugend, seriös, kenntnisreich, redegewandt, schlagfertig, überlegen, sensibel, empathisch – erwiesener Ideenreichtum, Improvisationstalent – erwiesene Offenheit für neue Fachgebiete, Systeme, Verfahren, Regelwerke – erwiesene persönliche Erfahrung mit alternativem Wissen: z. B. Homöopathie, Hirnforschung Prof. Hüther, Wilhelm Reich u.v.m. – hohe Belastbarkeit, robuste Gesundheit",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  HoerstelIntent: function() {
    let title = "Christoph Hörstel";
    let content = "Christoph Hörstel";
    app
      .showSimpleCard(title, content)
      .ask(
        "Christoph Hörstel",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  NeueMitteIntent: function() {
    let title = "Neue Mitte";
    let content = "Die Neue Mitte.";
    app
      .showSimpleCard(title, content)
      .ask("Die Neue Mitte.", "Worüber möchtest du sonst noch mehr erfahren?");
  },
  StammtischeIntent: function() {
    let title = "Stammtische der Deutschen Mitte";
    let content =
      "Wenn die Vernetzung unter den Mitgliedern einer Landesgruppe gut geklappt hat, wächst automatisch der Wunsch, sich einmal persönlich kennen zu lernen. Endlich einmal in Ruhe mit anderen zu diskutieren, die auch begriffen haben, wohin die reise geht, die sich nicht den Tatsachen verweigern und die Beeinflussung ihres Weltbildes nicht der Tagesschau oder anderen Großmedien anvertrauen. Hier ist es wichtig, gerade weil die Deutsche Mitte die potenziell gefährlichste Herausforderung für das jetzige politische System und die herrschenden Oligarchen ist, von vornherein bestimmte Ordnungen einzuhalten. Wir verstehen einem DM-Stammtisch als erste Anlaufstelle für Interessierte. Ausführliche Vorträge oder ähnliches, alles oberhalb von 10, 15 Minuten, organisieren wir zu anderen, zu eigenen Terminen. Denn immer wieder werden wir Besucher haben, die einfach einen DM-Kreis kennen lernen wollen, um sich eine Meinung über diese Partei zu bilden – vor einem möglichen späteren Eintritt. Diese Besucher wollen eigene Fragen beantwortet haben und Meinungen von möglichst unterschiedlichen Menschen hören. Deshalb geben wir viel Raum,damit man sich kennen lernen und austauschen kann. Erfahrungsaustausch ist nun einmal der günstigste Weg, Vertrauen zu schaffen, gerade auch bei denen, die vielleicht durch frühere, unerfreuliche Erfahrungen mit Parteien „nie wieder etwas mit Parteipolitik zu tun“ haben wollten... Wenn Sie sicherstellen können, dass solche skeptischen und kritischen Menschen sich plötzlich doch wieder einbringen wollen, läuft alles Andere wie von selbst. Sie werden es erleben! Dabei helfen ein paar wichtige Erfahrungen und Erfolgsrezepte: Unverrückbar: Termin - Dies erspart Verwaltungsaufwand. Denn (schriftliche) Einladungen erübrigen sich. Bitten Sie jeden Besucher darum, auf Ihren Stammtisch aufmerksam zu machen. Dies gilt für allgemein politisch Interessierte ebenso wie zum Beispiel auch für künftige Mitglieder. Jeder Teilnehmer muss sich außerdem an Ihrem Stammtisch mit anderen verabreden dürfen. Dies hat den Vorteil, dass immer mehrere Ansprechpartner zur Verfügung stehen. Und, Sie werden sehen, das ist die beste. Der Stammtisch-Treff sollte immer an ein oder zwei festen Wochentagen im Monat („1. & 3. Montag im Monat“) stattfinden. Ausnahmen gibt es nicht, um Enttäuschungen bei denen zu vermeiden, die bei der Ausnahme-Verabredung nicht dabei waren... Unverrückbar: Adresse - Mancher tut sich sehr schwer damit, öffentliche Einrichtungen zu besuchen. Menschen sind Individualisten, zu viel Bürokratie und Vorschriften nerven, das direkte Gespräch, ohne Voranmeldung, ist Trumpf. - Wir treffen uns also wie in einem Lokal, nur ohne lange Anfahrt, Parkplatz-Sorgen und andere Zugangshürden. Ein mittelgroßer Saal ist vorhanden, diesen dürfen wir kostenlos nutzen, weil wir „Umsatz machen“ helfen. So werben wir gleichzeitig auch für unser Lokal – werden und bleiben gern gesehene Gäste. Im Ausnahmefall wichtig: Ausweichlokal Sollte das Lokal einmal zufällig am Stammtisch-Termin geschlossen haben, so sorgen Sie rechtzeitig für ein Ausweich-Lokal. Wenn alle Stricke reißen, hilft notfalls ein regenfester Zettel an der Eingangstür des Stammlokals, auf dem das Ausweichlokal genannt ist. Offen für jeden: Jeder darf jeden einladen und/oder mitbringen. DM-Kollegen ebenso wie Angehörige verschiedenster Berufsgruppen, Ausrichtungen usw... Mitgliedschaft in der Deutsche Mitte darf keine Voraussetzung für die Teilnahme am Stammtisch sein. Erlaubt ist natürlich ein bisschen Reklame für die eigene DM Organisation - wie kann dies auch anders sein? Eintrittsgeld: niemals! Jeder muss selbstverständlich den eigenen Verzehr bezahlen. Aufgaben der Stammtischleitung: Zunächst muss ein geeigneter Ort gefunden werden. 1-3 Kollegen verständigen sich dann noch, wer welchen Termin auf jeden Fall wahrnimmt. Denn niemals darf der Stammtisch ohne Betreuung sein! Wir vereinbaren dies untereinander per Telefon-Rundruf oder Hangouts. Genau wie bei jedem guten Gastgeber, besteht die selbstverständliche Aufgabe der Stammtisch-Leitung darin, zunächst das 4-Augen-Gespäche mit den ErstTeilnehmern zu suchen. Die Stamm-Teilnehmer werden sich in dieser Zeit gerne untereinander austauschen. Erst einmal geht es darum, herauszufinden, welche Fragen der neue Gast mitgebracht hat. Dabei werden gleich auch die Adresse, das politische Gebiet sowie weitere Stichworte notiert, damit im Fall der Fälle Informationen weitergegeben werden können. Alle Anschriften usw. landen beim StammtischChef, der diese sorgfältig aufbewahrt. Nach diesem Kennenlernen wird der/die Neue kurz vorgestellt und ein anderer Teilnehmer – derjenige den man im Moment als den geeignetsten Gesprächspartner einstuft – persönlich gebeten, sich mit der/dem Neuen nun zu unterhalten. Der Rest entwickelt sich! Als letztes gehört auch noch die Netzwerk-Pflege zu den Aufgaben der Stammtischleitung. Wenn die erste Gründungszeit vorbei ist und der Stammtisch „steht“, sollten Sie auch soziale Netzwerke, kritische Blogs etc. informieren. Dadurch werden DM-Treffen kostenlos in verschiedenen (Veranstaltungs-) Programmen veröffentlicht und weiteres sympathisches Interesse ist gesichert. Achtung: Journalisten, insbesondere der großen Medien, dürfen nicht teilnehmen und müssen an den Bundesvorstand verwiesen werden, solange es keine Landesverbände gibt! Der Hintergrund ist klar: In der Satzung steht eindeutig geregelt, wer mit den Medien spricht – das hilft, das von Piraten und anderen bekannte Chaos zu vermeiden – und entsprechende herbe Verunglimpfungen und Rückschläge, die Interessierte auch abschrecken können. Unser Wunsch zum Schluss: Viel Erfolg! Ihr/Euer Deutsche Mitte Team";
    app
      .showSimpleCard(title, content)
      .ask(
        "Wenn die Vernetzung unter den Mitgliedern einer Landesgruppe gut geklappt hat, wächst automatisch der Wunsch, sich einmal persönlich kennen zu lernen. Endlich einmal in Ruhe mit anderen zu diskutieren, die auch begriffen haben, wohin die reise geht, die sich nicht den Tatsachen verweigern und die Beeinflussung ihres Weltbildes nicht der Tagesschau oder anderen Großmedien anvertrauen. Hier ist es wichtig, gerade weil die Deutsche Mitte die potenziell gefährlichste Herausforderung für das jetzige politische System und die herrschenden Oligarchen ist, von vornherein bestimmte Ordnungen einzuhalten. Wir verstehen einem DM-Stammtisch als erste Anlaufstelle für Interessierte. Ausführliche Vorträge oder ähnliches, alles oberhalb von 10, 15 Minuten, organisieren wir zu anderen, zu eigenen Terminen. Denn immer wieder werden wir Besucher haben, die einfach einen DM-Kreis kennen lernen wollen, um sich eine Meinung über diese Partei zu bilden – vor einem möglichen späteren Eintritt. Diese Besucher wollen eigene Fragen beantwortet haben und Meinungen von möglichst unterschiedlichen Menschen hören. Deshalb geben wir viel Raum,damit man sich kennen lernen und austauschen kann. Erfahrungsaustausch ist nun einmal der günstigste Weg, Vertrauen zu schaffen, gerade auch bei denen, die vielleicht durch frühere, unerfreuliche Erfahrungen mit Parteien „nie wieder etwas mit Parteipolitik zu tun“ haben wollten... Wenn Sie sicherstellen können, dass solche skeptischen und kritischen Menschen sich plötzlich doch wieder einbringen wollen, läuft alles Andere wie von selbst. Sie werden es erleben! Dabei helfen ein paar wichtige Erfahrungen und Erfolgsrezepte: Unverrückbar: Termin - Dies erspart Verwaltungsaufwand. Denn (schriftliche) Einladungen erübrigen sich. Bitten Sie jeden Besucher darum, auf Ihren Stammtisch aufmerksam zu machen. Dies gilt für allgemein politisch Interessierte ebenso wie zum Beispiel auch für künftige Mitglieder. Jeder Teilnehmer muss sich außerdem an Ihrem Stammtisch mit anderen verabreden dürfen. Dies hat den Vorteil, dass immer mehrere Ansprechpartner zur Verfügung stehen. Und, Sie werden sehen, das ist die beste. Der Stammtisch-Treff sollte immer an ein oder zwei festen Wochentagen im Monat („1. & 3. Montag im Monat“) stattfinden. Ausnahmen gibt es nicht, um Enttäuschungen bei denen zu vermeiden, die bei der Ausnahme-Verabredung nicht dabei waren... Unverrückbar: Adresse - Mancher tut sich sehr schwer damit, öffentliche Einrichtungen zu besuchen. Menschen sind Individualisten, zu viel Bürokratie und Vorschriften nerven, das direkte Gespräch, ohne Voranmeldung, ist Trumpf. - Wir treffen uns also wie in einem Lokal, nur ohne lange Anfahrt, Parkplatz-Sorgen und andere Zugangshürden. Ein mittelgroßer Saal ist vorhanden, diesen dürfen wir kostenlos nutzen, weil wir „Umsatz machen“ helfen. So werben wir gleichzeitig auch für unser Lokal – werden und bleiben gern gesehene Gäste. Im Ausnahmefall wichtig: Ausweichlokal Sollte das Lokal einmal zufällig am Stammtisch-Termin geschlossen haben, so sorgen Sie rechtzeitig für ein Ausweich-Lokal. Wenn alle Stricke reißen, hilft notfalls ein regenfester Zettel an der Eingangstür des Stammlokals, auf dem das Ausweichlokal genannt ist. Offen für jeden: Jeder darf jeden einladen und/oder mitbringen. DM-Kollegen ebenso wie Angehörige verschiedenster Berufsgruppen, Ausrichtungen usw... Mitgliedschaft in der Deutsche Mitte darf keine Voraussetzung für die Teilnahme am Stammtisch sein. Erlaubt ist natürlich ein bisschen Reklame für die eigene DM Organisation - wie kann dies auch anders sein? Eintrittsgeld: niemals! Jeder muss selbstverständlich den eigenen Verzehr bezahlen. Aufgaben der Stammtischleitung: Zunächst muss ein geeigneter Ort gefunden werden. 1-3 Kollegen verständigen sich dann noch, wer welchen Termin auf jeden Fall wahrnimmt. Denn niemals darf der Stammtisch ohne Betreuung sein! Wir vereinbaren dies untereinander per Telefon-Rundruf oder Hangouts. Genau wie bei jedem guten Gastgeber, besteht die selbstverständliche Aufgabe der Stammtisch-Leitung darin, zunächst das 4-Augen-Gespäche mit den ErstTeilnehmern zu suchen. Die Stamm-Teilnehmer werden sich in dieser Zeit gerne untereinander austauschen. Erst einmal geht es darum, herauszufinden, welche Fragen der neue Gast mitgebracht hat. Dabei werden gleich auch die Adresse, das politische Gebiet sowie weitere Stichworte notiert, damit im Fall der Fälle Informationen weitergegeben werden können. Alle Anschriften usw. landen beim StammtischChef, der diese sorgfältig aufbewahrt. Nach diesem Kennenlernen wird der/die Neue kurz vorgestellt und ein anderer Teilnehmer – derjenige den man im Moment als den geeignetsten Gesprächspartner einstuft – persönlich gebeten, sich mit der/dem Neuen nun zu unterhalten. Der Rest entwickelt sich! Als letztes gehört auch noch die Netzwerk-Pflege zu den Aufgaben der Stammtischleitung. Wenn die erste Gründungszeit vorbei ist und der Stammtisch „steht“, sollten Sie auch soziale Netzwerke, kritische Blogs etc. informieren. Dadurch werden DM-Treffen kostenlos in verschiedenen (Veranstaltungs-) Programmen veröffentlicht und weiteres sympathisches Interesse ist gesichert. Achtung: Journalisten, insbesondere der großen Medien, dürfen nicht teilnehmen und müssen an den Bundesvorstand verwiesen werden, solange es keine Landesverbände gibt! Der Hintergrund ist klar: In der Satzung steht eindeutig geregelt, wer mit den Medien spricht – das hilft, das von Piraten und anderen bekannte Chaos zu vermeiden – und entsprechende herbe Verunglimpfungen und Rückschläge, die Interessierte auch abschrecken können. Unser Wunsch zum Schluss: Viel Erfolg! Ihr/Euer Deutsche Mitte Team",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  KartelleIntent: function() {
    let title = "Kartelle";
    let content = "Kartellmafia";
    app
      .showSimpleCard(title, content)
      .ask("Kartellmafia", "Worüber möchtest du sonst noch mehr erfahren?");
  },
  DeutschlandIntent: function() {
    let title = "BRD";
    let content = "BRD";
    app
      .showSimpleCard(title, content)
      .ask("BRD", "Worüber möchtest du sonst noch mehr erfahren?");
  },
  EthikIntent: function() {
    let title = "Ethik";
    let content = "Ethik in die Politik";
    app
      .showSimpleCard(title, content)
      .ask(
        "Ethik in die Politik",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  WahlversprechenIntent: function() {
    let title = "Wahlversprechen";
    let content =
      "Der Wähler hat ein Recht darauf das was vor der Wahl versprochen, danach auch gehalten wird!";
    app
      .showSimpleCard(title, content)
      .ask(
        "Der Wähler hat ein Recht darauf das was vor der Wahl versprochen, danach auch gehalten wird!",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  KoalitionIntent: function() {
    let title = "Koalitionsverhandlungen";
    let content = "Keine Koalitionsverhandlungen";
    app
      .showSimpleCard(title, content)
      .ask(
        "Wir führen keine Koalitionsverhandlungen",
        "Worüber möchtest du sonst noch mehr erfahren?"
      );
  },
  CancelIntent: function() {
    let title = "Aufwiedersehen!";
    let content = "Aufwiedersehen!";
    app.showSimpleCard(title, content).tell("Aufwiedersehen!");
  },
  StopIntent: function() {
    let title = "Aufwiedersehen!";
    let content = "Aufwiedersehen!";
    app.showSimpleCard(title, content).tell("Aufwiedersehen!");
  },
  END: function() {
    app.toIntent("StopIntent");
    // This intent is called when the session ends
    // Currently supporting AMAZON.StopIntent and reprompt timeouts
  }
};
