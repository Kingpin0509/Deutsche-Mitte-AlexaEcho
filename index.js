"use strict";

// =================================================================================
// The below code is used to set up the AWS Lambda handler
// =================================================================================

const app = require("jovo-framework").Jovo;

exports.handler = function(event, context, callback) {
  app.handleRequest(event, callback, handlers);
  app.execute();
};
const HELP_MESSAGE =
  "Politikressorts: Sozialpolitik, Aussenpolitik, Bildungspolitik, Entwicklungspolitik, Familienpolitik, Finanzpolitik, Gesundheitspolitik, Innenpolitik, Justiz, Umweltschutz, Verbraucherschutz, Verkehrspolitik, Verteidigungs- oder Wirtschaftspolitik.";
const HELP_REPROMPT = "Was möchtest du sonst noch wissen?";
const STOP_MESSAGE = "Aufwiedersehen!";
// =================================================================================
// Below is where the logic of your voice app should be happening
// Get started by adding some intents and Jovo functions
// =================================================================================

let handlers = {
  LAUNCH: function() {
    app.toIntent("HelloWorldIntent");
  },
  HelloWorldIntent: function() {
    app.tell("Willkommen bei der Deutschen Mitte. Sage Einleitung für einen Überblick der DM bestrebungen. Nenne ein Politikressort über das du mehr erfahren möchtest z.B. Innenpolitik, Verteidigung oder Wirtschaft. Sage Hilfe für einen Überblick aller Funktionen.");
  },
  EinleitungIntent: function() {
    app.tell(
      "Die Deutsche Mitte hat sich ein gewaltiges Programm gegeben. Wir gehen weiter als die Konkurrenz. Unsere Ziele sind ohne besonderen Einsatz und persönliche Opfer nicht erreichbar. Je umfassender die Mitwirkung, desto höher die persönlichen Anforderungen. Vorstände und Kandidaten bei Wahlen müssen die Gewähr bieten, dass sie die selbstgestellten Aufgaben erfüllen können. Deshalb werden Aus- und Fortbildungen im fachlichen und persönlichen Bereich immer wichtiger. Die inneren Strukturen in Partei und anderen Organisationsformen müssen mitwachsen. Wenn Leistungsträger aus der Mitte der deutschen Gesellschaft zu uns kommen, wollen sie angemessene Ansprechpartner finden. Die Deutsche Mitte will gerechten und fairen Ausgleich zwischen allen Menschen und gruppen. Veränderung geht nur gemeinsam."
    );
  },
  AussenpolitikIntent: function() {
    app.tell(
      "Außenpolitik - Mit Augenmaß, gut abgestimmt mit Partnern und Freunden und ohne großen Wirbel verlässt Deutschland die Euro-Gruppe – nicht als erstes Land, um Missstimmung zu vermeiden. Der Vertrag von Lissabon, über den die Bevölkerung nicht abstimmen durfte, wird nachträglich einem Volksentscheid unterworfen und im Ablehnungsfalle selbstverständlich aufgekündigt. Gleichzeitig legt die Bundesregierung abgesprochene Vorschläge für eine umfassende EU-Reform vor. Europa wird gestärkt und deutlich demokratisiert, mit mehr Mitbestimmung durch die Euro-Völker, Wahl aller Gremien, Beendigung der Entscheidungsmacht der jetzigen EU-Kommission. Die Deutsche Mitte fördert die Sanierungskraft hoch verschuldeter Euro-Länder. Zahlungen an verschuldete Euro-Länder erfolgen nur noch gegen dreifache Sicherheitsleistung und ab Förderbeträgen von insgesamt mehr als 20% des betreffenden Bundeshaushalts ausschließlich nach Zustimmung der eigenen und der Empfänger-Bevölkerung. Mit der Förderung internationaler Gewerkschaftspolitik gehen wir auf die große Mehrzahl der Menschen in aller Welt zu. Keine Abenteuer-Politik bei Regierungswechseln in anderen Ländern (Libyen, Syrien), grundsätzliche Beachtung der Nichteinmischung in die inneren Angelegenheiten anderer Länder. Die Deutsche Mitte tritt weltweit für gerechten Frieden ein.Gerechten Frieden in Nahost fördern wir, eine deutsche Staatsräson für die Sicherheit Israels kann und wird es nicht geben. Ungerechte und sinnlose Sanktionen werden beendet. Deutsche Soldaten werden aus dem Nicht-Nato-Ausland („out of area“) abgezogen und verbleiben fortan ausschließlich im Nato-Gebiet. Gleichzeitig werden schrittweise binnen fünf Jahren alle ausländischen Truppen aus Deutschland abgezogen. Zur Friedenssicherung wird Deutschland seine Truppen aus der Nato-Struktur so lange herausziehen, bis die Nato sämtliche Einsätze außerhalb des Nato-Gebiets beendet hat. Sollten jedoch einzelne Nato-Partner ohne Zustimmung des UN-Sicherheitsrates noch weitere Völker überfallen und Kriege anzetteln, wird sich die Deutsche Mitte für einen Austritt aus der Nato einsetzen. Truppeneinsätze benötigen künftig bessere Strategien. Wir sind und bleiben enge Freunde und Verbündete unserer EU-Nachbarn und Nato-Partner, diese Beziehungen wollen wir vorrangig besonders pflegen, vor allem im Interesse der Völker – doch deutsche Außenpolitik kann mehr als nur Bündnis- oder EU-Politik.Mit Russland und anderen Staaten oder Staatengruppen werden friedenswahrende Rückversicherungsverträge abgeschlossen."
    );
  },
  InnenpolitikIntent: function() {
    app.tell(
      "Innenpolitik - Wir wollen mehr und besser bezahlte Polizisten, die wir persönlich kennen: als „Revierbeamte“ mit erhöhter Straßenpräsenz. Geheimdienste sollen besser und ehrlicher zum Wohl der Bevölkerung arbeiten, das allein sichert das Land. Ausländer wollen wir künftig, wie alle anderen Staaten auch, besser aussuchen: nach bundesweit einheitlichen Maßstäben, die helfen, die Aussicht auf erfolgreiche Integration und Einbürgerung vorab zu bewerten. Wir wollen Migranten künftig auch viel besser respektieren, behandeln und integrieren: schulen, in Lohn und Brot bringen, schneller einbürgern. Migranten ohne Integrationsbereitschaft werden zurückgewiesen. Die Bildung von Migrantenvierteln und aller kriminellen Banden wird tatkräftig unterbunden. Null Toleranz bei rassistischen Übergriffen. In berechtigten Einzelfällen, in denen Asylsuchende in ihren Herkunftsländern eine akute Bedrohung ihrer Menschenrechte erleiden oder befürchten müssen, erhält die Bundesregierung eine verbesserte Handlungsbasis.Mehr Volksinitiativen und Volksentscheide bei wichtigen Fragen in Bund und Land. Staatliches Entscheiden und Handeln muss viel besser öffentlich kontrollierbar werden! Den Überwachungsstaat werden wir beenden – und Spionage von außen nicht mehr dulden."
    );
  },
  FinanzpolitikIntent: function() {
    app.tell(
      "Finanzpolitik - Banken werden ehrliche Dienstleister, Zockerei wird verboten, Zins und Zinseszins werden abgeschafft.Marode Banken werden vorübergehend verstaatlicht und teilweise in kontrollierten Konkurs gehen. Manager haften für Fehlverhalten, Betrug wird strenger bestraft. Wir fordern die Trennung von Geschäfts- und Investmentbanken und eine Börsentransaktionssteuer, um Großspekulanten einzubremsen. Diese Schritte werden international abgestimmt, durchgesetzt und eingeführt, genau wie das Verbot von Spekulantentricks: Derivate, Leerverkäufe und Termingeschäfte. Euro-Unterstützung zahlen wir nur noch gegen dreifache Sicherheit, um das Vermögen des deutschen Volkes abzusichern.Künftig darf nie wieder eine nationale Währung Weltleitwährung sein! Denn es ist genau dieser Umstand, der in den letzten zehn Jahren immer wieder zu Kriegen geführt hat – und jetzt global brandgefährlich wird! Steuern für Superreiche und auf Mega-Erbschaften steigen, Schwächere werden entlastet. Wir motivieren Superreiche und Großkonzerne, freiwillig mehr Steuern in Deutschland zu zahlen – und organisieren dies als soziales Mäzenatentum. Steuerverschwendung wird strenger geahndet und wirkungsvoller vermieden. Mehr Mitsprache für Steuerzahler! Die Deutsche Mitte fördert alternative und regionale Währungen ebenso wie Tauschringe. Die „Monetative“ (nach Prof. Dr. Bernd Senf) verbietet Geldschöpfung durch Regierung oder private Einrichtungen und legt dieses Privileg ausschließlich in die Hände einer reformierten und wirklich unabhängigen Bundesbank. Dieses Prinzip ist eingebettet in das ebenfalls verfolgte „Viergliederungsprinzip“ (nach Prof. Dr. Johannes Heinrichs) und angelehnt an das „Dreigliederungsprinzip“ (nach Dr. Rudolf Steiner).Sämtliche tiefgreifende Reformen erfolgen ausschließlich in gründlicher und tatsächlich unabhängiger wissenschaftlicher und praxisnaher Vorbereitung und Begleitung."
    );
  },
  WirtschaftIntent: function() {
    app.tell(
      "Wirtschaft - Unternehmen, die sozial, ökologisch, menschenfreundlich und flexibel arbeiten, erhalten Steuererleichterungen. Familienunternehmen, Genossenschaften und Stiftungen sowie Mitarbeiterbeteiligung werden ebenso gefördert wie Solidität und Stabilität der Unternehmensfinanzen – auch durch die Bildung stiller Reserven. Förderung von lokaler Wirtschaft und handwerklicher Eigenproduktion. Förderung von Open-Source-Ökonomie. Neue Anreize für Superreiche und Großkonzerne, zum Gemeinwohl beizutragen (Mäzenatentum). Geeignete, neue Technologien und Erfindungen werden gefördert und schneller in Produkte umgesetzt. Unterdrückung von Erfindungen aus eigensüchtigen Motiven sowie Kartellbildung werden nicht mehr geduldet und wirksam unterbunden. Eingebaute Produktalterung (Obsoleszenz) wird ein Straftatbestand, die Mindestgarantiefrist auf drei Jahre verlängert, so fördern wir Wertarbeit und den Verzicht auf Billigprodukte. Schutz vor Spionage und Benachteiligung im Ausland, besserer Übernahmeschutz, Ende sinnloser internationaler Sanktionspolitik. Das vollständige Programm folgt in kürze..."
    );
  },
  ArbeitSozialpolitikIntent: function() {
    app.tell(
      "Arbeit und Soziales - Jeder arbeitsfähige Mensch geht einer Beschäftigung nach. Ist diese unentgeltlich, erhält jeder gemeinnützig Tätige ein solidarisches Grundeinkommen, das deutlich über den Sozialleistungen von Hartz-IV liegt. Wir wollen einen Mindeststundenlohn von 10 Euro, unterhalb von 8,50 wird nicht diskutiert. Künftig erhalten alle Beschäftigungslosen eine Liste der in ihrer Umgebung tätigen gemeinnützigen Organisationen. Nach und nach, so schnell wie möglich, müssen sie ihren künftigen Arbeitsplatz auswählen und die Arbeit aufnehmen – oder eigene Ideen vorschlagen und bei amtlicher Zustimmung verwirklichen. Ziel: Sinnvolle Arbeitswelten für alle gemäß ihren Wünschen und Fähigkeiten frei von Existenzproblemen. Billiglöhne und Schein-Leiharbeit werden unterbunden. Volle Gleichberechtigung der Geschlechter bei Einstellung, Einkommen und Aufstiegschancen. Familien erhalten großzügige Förderung. Das Auseinanderdriften von Arm und Reich wird gestoppt und zurückgefahren. Die Solidarität aller Menschen untereinander wird gestärkt. Das vollständige Programm folgt in kürze..."
    );
  },
  VerteidigungIntent: function() {
    app.tell(
      "Verteidigung - Eine Berufsarmee ist mit der bewährten Idee des Bürgers in Uniform schwer vereinbar. Die großen Herausforderungen der Zukunft, auch an die künftig erweiterte Freiheit und Mitsprache der Bürger, sind deshalb bei einer Wehrpflichtarmee besser aufgehoben: Deutschland kehrt zu diesem Modell zurück. Das bewährte Prinzip der Inneren Führung, das jedem Soldaten Gewissensfreiheit garantiert, wird wieder bestärkt. Bundeswehreinsätze im Inneren sind ausgeschlossen – auch in anderen Ländern. Wer gemäß seiner Gewissensfreiheit keinen Wehrdienst leistet, wird zu einem Sozialen oder Ökologischen Jahr nach eigener Wahl verpflichtet. Die Bundeswehr wird eine starke, gut gerüstete, mobile und vernetzte Verteidigungsarmee – mit voller Solidarität aller Bürger. Das vollständige Programm folgt in kürze..."
    );
  },
  BildungForschungIntent: function() {
    app.tell(
      "Bildung und Forschung - Große Investitionen in Bildung und Forschung, in der Anfangszeit plus 50%, machen Deutschland wieder zur führenden Nation in diesem Bereich.Die Deutsche Mitte fordert KiTa-Plätze für alle Kinder, vorrangig ab drei Jahren, für jüngere nur auf Wunsch der Eltern. Die elterliche Kindererziehung bis zum Erreichen des dritten Lebensjahres wird gefördert. Schulklassen unter 20 Kinder, große Erweiterungen bei den Universitäten, aufgestockte Budgets in der Forschung. Deutlich bessere bauliche und technische Ausstattungen überall. Förderung betrieblicher Verzahnung und deutlich mehr wissenschaftliche Freiheit und Unabhängigkeit gehören unbedingt zusammen: mit transparenter Finanzierung sowie allgemein zugänglichen Forschungsergebnissen. Wir fordern die Abschaffung von Schulzwang und das Recht auf freies Lernen, Förderung selbstbestimmter, praxisbezogener, erlebnisorientierter Bildungsformen – mit Ergebniskontrolle. Wir fordern unabhängige, dem Gemeinwohl verpflichtete Mediennetzwerke mit transparenter Berichterstattung, die Abschaffung des Zwangsbeitrags zur Finanzierung des derzeitigen öffentlich-rechtlichen Rundfunks und ein Verbot der Zusammenarbeit zwischen Meldebehörden und Gebühreneinzug."
    );
  },
  FamilienpolitikIntent: function() {
    app.tell(
      "Familie, Senioren, Frauen und Jugend - 50% mehr Kindergeld, Verlängerung des Elterngeldes auf drei Jahre – und endlich genügend Kitas für alle! Förderung der natürlichen Familienbeziehung Mutter-Kind-Vater: Intakte Familien in geordneten Verhältnissen, in denen verheiratete, leibliche Eltern ihre eigenen Kinder erziehen, erhalten € 5.000 für das erste Kind, € 10.000 für das zweite und noch einmal € 10.000 für das dritte Kind. Steuerfrei, bar, pfändungssicher und zusätzlich zu allen anderen Leistungen. Homo-Ehe: ja! Förderung der individuellen, spontanen und natürlichen Geburt, Aufwertung des Berufs der Hebammen, mehr Unterstützung für junge Mütter. Frauen erhalten Hilfe für den Wiedereinstieg in den Beruf. Bessere Personalausstattung von Erziehungseinrichtungen. „Gender Mainstreaming“, die Gleichmachung der Geschlechter, wird nicht mehr gefördert. Mann und Frau sind und bleiben Träger gleicher unveräußerlicher Rechte. Die Deutsche Mitte fördert Mehrgenerationsgemeinschaften, in denen ältere Menschen geachtet werden und in der Gemeinschaft ihren Wünschen und Fähigkeiten entsprechend Aufgaben bis zu ihrem Lebensende erfüllen. Senioren werden auf Wunsch besser betreut, mit deutlich mehr Personal. Jugendarbeit vertritt die Interessen der Jugend bei der Entdeckung und Entwicklung ihrer Persönlichkeit und fördert Selbstorganisation, Eigenaktivität und verantwortungsvolle Teilhabe der Jugendlichen an der Gemeinschaft."
    );
  },
  GesundheitIntent: function() {
    app.tell(
      "Gesundheit - Die Deutsche Mitte fördert ganzheitliche Heilkunde und alternative Medizin. Überteuerte Kartellmedizin wird durch wirkungsvollere, höherwertige und preisgünstigere natürliche Methoden ersetzt. Aufbau ganzheitlicher Gesundheitszentren und Förderung von Solidargemeinschaften und alternativer Absicherungen im Krankheitsfall mit dem Recht auf freie Therapiewahl. Reform und Weiterentwicklung des Nahrungsmittelstandards Codex Alimentarius zur nachhaltigen und ökologischen Ausrichtung. Kritischer Umgang mit Impfungen, vor allem bei Kindern, Antibiotika, Chemotherapie, Quecksilber (Amalgam-Zahnfüllungen!) und Aluminium. Strengere Grenzwerte für Elektrosmog und Radioaktivität. In die notwendige Forschung, Standardisierung und überfällige Gesamtreform wird zügig und kräftig investiert, insbesondere auch in der Wissenschaft. Der Einfluss weniger Pharma-Riesen wird ebenso zurückgedrängt wie die Profitgier im Gesundheitswesen. Endlich bessere Bezahlung für Pflegeberufe und Hebammen!"
    );
  },
  UmweltIntent: function() {
    app.tell(
      "Umwelt, Naturschutz und Reaktorsicherheit - Die Deutsche Mitte sieht den Menschen in der hohen Verantwortung, die natürlichen Grundlagen für alle Lebensformen zu bewahren. Darum erhalten Umwelt- und Naturschutz bedeutenden Vorrang. Stärkung und Weiterentwicklung der Nationalen Naturlandschaften, Verbesserung der Betreuungssituation in Schutzgebieten, Förderung nachhaltiger und naturschonender Landnutzung, Schaffung lokaler Stoff- und Energiekreisläufe, Abschaffung des Anschlusszwangs an die Kanalisation bei kontrolliertem Betrieb eigener Abwasserreinigung, Umstieg von zentraler auf dezentrale Energieversorgung mit Ausbau regenerativer und alternativer Energieversorgung. Ausstieg aus der Atomkraft. Verbot der künstlichen Beeinflussung der Atmosphäre. Umweltverbrechen werden stärker verfolgt und bestraft, vor allem was die Bereiche Erdöl, Erdgas und Radioaktivität angeht."
    );
  },
  VerbraucherschutzIntent: function() {
    app.tell(
      "Ernährung, Landwirtschaft und Verbraucherschutz - Die Deutsche Mitte fordert das Recht auf natürlich gesunde Lebensmittel. Genmanipulierte Produkte gehören nicht in die Nahrungskette! Schrittweise Umstellung auf ökologische, pestizid- und gentechnikfreie Landwirtschaft (Höchststandard: Demeter.) Dies geschieht freiwillig und mit steuerlicher Förderung. Junge Menschen helfen dabei in ihrem sozialen/ökologischen Jahr und erlernen so den Bezug zur Natur. Förderung nachhaltiger Land- und Forstbewirtschaftung, Schutz und Regeneration von Böden mit nachhaltigem Humusaufbau. Bienenvölker werden als natürliche Lebensgrundlage gesetzlich besser geschützt. Bewahrung und Förderung altbewährten Saatgutes. Keine Patentrechte auf Lebewesen. Wir fordern artgerechte Tierhaltung und Fütterung und somit eine Abschaffung der Massentierhaltung. Dabei erfolgen sämtliche Umstellungen in enger Abstimmung mit allen Beteiligten. Wasserversorgung und andere Naturgüter gehören nicht in Konzernhände! Lobby-Eingriffe in Verbraucher- und Naturschutz werden verboten, die Unabhängigkeit der Forschung wird bestärkt und kontrolliert."
    );
  },
  VerkehrspolitikIntent: function() {
    app.tell(
      "Verkehr, Bau und Stadtentwicklung - Voll-Ausbau der Bahn zum großen Logistik-Dienstleister, keine Privatisierung, Zusammenarbeit mit Privatfirmen, deutlich weniger und kleinere LKW auf den Straßen. Großprojekte mit enger Einbindung der Bevölkerung. Grünere Städte, „essbare Städte“ (Nutzpflanzen für die Allgemeinheit auf öffentlichen Grünflächen). Ökologisches Bauen mit modernen Methoden und Techniken nach baubiologischen Standards. Reform der Energieeffizienzpolitik. Förderung regionaler Selbstverwaltung, keine Privatisierung kommunaler und staatlicher Basisaufgaben! Regional unabhängige Wasser-, Strom- und Wärmeversorgung."
    );
  },
  EntwicklungIntent: function() {
    app.tell(
      "Wirtschaftliche Zusammenarbeit und Entwicklung - Fairer Handel mit allen Völkern und Nationen. Internationale Unterstützungsleistungen werden künftig zusätzlich in verantwortlichen Patenschaften organisiert. Diese müssen den Interessen und Bedürfnissen der empfangenden Völker dienen. Die Patenschaften werden neutral kontrolliert, bewertet und die Ergebnisse veröffentlicht."
    );
  },
  JustizIntent: function() {
    app.tell(
      "Justiz - Recht darf kein Privileg der Wohlhabenden oder Mächtigen sein. Gerechtigkeit soll vor Gericht siegen. Ausbau des Justizwesens, mehr Personal, bessere Gebäude und Ausstattungen, weniger machtpolitischer Einfluss, mehr Unabhängigkeit, schnellere Verfahren. Bürgerrechte und –schutz sind deutlich zu stärken."
    );
  },
  "AMAZON.HelpIntent": function() {
    const speechOutput = HELP_MESSAGE;
    const reprompt = HELP_REPROMPT;

    this.response.speak(speechOutput).listen(reprompt);
    this.emit(":responseReady");
  },
  "AMAZON.CancelIntent": function() {
    this.response.speak(STOP_MESSAGE);
    this.emit(":responseReady");
  },
  "AMAZON.StopIntent": function() {
    this.response.speak(STOP_MESSAGE);
    this.emit(":responseReady");
  }
};
