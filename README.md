# React Grundkurs

Dies ist das Repository für den **LinkedIn Learning** Kurs `React Grundkurs`. Den gesamten Kurs finden Sie auf [LinkedIn Learning][lil-course-url].

![COURSENAME][lil-thumbnail-url] 

React hat die JavaScript-Welt nachhaltig verändert und ist heute mehr als nur Frontend-Framework: Es kommt in Fullstack-Projekten wie NextJS genauso zum Einsatz wie als React Native in mobilen Apps. Dieser umfangreiche Einsteigerkurs führt Sie von Grund auf in die populäre Bibliothek ein, leitet Sie durch Installation und Setup und stellt ausführlich die wichtigsten Komponenten und Mechanismen vor. Schritt für SChritt dringen Sie selbst in fortgeschrittene Themen wie Testing, dem Einsatz von JSX-Kommentaren oder dem State-Management mit Redux vor. 
Um von dem Kurs mit seinen vielen Praxisbeispielen am besten profitieren zu können, sollten Sie über gute JavaScript- und HTML-Kenntnisse verfügen sowie mit der Kommandezeile umgehen können. Anhand von Challenges/Solutions-Aufgaben am Ende vieler Kapitel können Sie das Erlernte sofort testen und Ihre Lösung auch gleich mit der von Ihrem Trainer angebotenen Version vergleichen.

## Anleitung

Dieses Repository hat Branches für jedes Video im Kurs. Verwenden Sie das Ausklappmenü "Branch: ..." in GitHub um zwischen den unterschiedlichen Branches hin und her zu wechseln bzw. um bei einem spezifischen Status einzusteigen. Oder Sie fügen `/tree/BRANCH_NAME` der URL hinzu um direkt in den gewünschten Branch zu wechseln.

## Branches

Die Git Branches sind passend zu den Videos im Kurs strukturiert. Die Namenskonvention lautet `Kapitel#_Video#_Topic`. Der Branch `02_03-...` beinhaltet zum Beispiel die Übungen für das dritte Video im zweiten Kapitel. 
Der `master` Branch beinhaltet den initialen Quellcode und wird nicht für die Übungen innerhalb des Kurses genutzt.

Wenn Sie von einem Branch nach Änderungen zum nächsten Branch wechseln, erhalten Sie möglicherweise die folgende Meldung:

```
error: Your local changes to the following files would be overwritten by checkout:        [files]
Please commit your changes or stash them before you switch branches.
Aborting
```

Dieses Problem lösen Sie wie folgt, insofern Sie ihre Änderungen in der aktuellen Branch speichern wollen:
    Add changes to git using this command: git add .
    Commit changes using this command: git commit -m "some message"
    
Wollen Sie einfach nur die Branch wechseln so können Sie folgendes Kommando verwenden: `git checkout -- .`

## Installation

1. Um diese Übungsdateien nutzen zu können, müssen Sie folgendes installiert haben:
   - Node.js >= 16
   - npm (passend zur Node Version)
   - git
2. Klonen Sie das Repository in Ihre lokale Maschine unter Verwendung von terminal (Mac), CMD (Windows) oder ein anderes Werkzeug mit grafischer Bedienoberfläche wie SourceTree oder GitHub Desktop.
3. Führen Sie `npm start` aus
4. Zum Starten der Testumgebung führen Sie `npm run dev` aus.

### Autor

**David Lorenz**

_Frontend-Architekt_

Sehen Sie sich andere Kurse des Autors auf [LinkedIn Learning](https://www.linkedin.com/learning/instructors/david-lorenz) an.

[0]: # (Replace these placeholder URLs with actual course URLs)
[lil-course-url]: https://www.linkedin.com/learning/react-grundkurs
[lil-thumbnail-url]: https://cdn.lynda.com/course/3161772/3161772-1652347749435-16x9.jpg
