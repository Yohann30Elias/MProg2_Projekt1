import React from "react";
import "../style/Home.css";

function Home() {
  return (
    <div className="Homestyle">

      <div className="parallax"></div>

      <div className="geschichte-container">
        <div className="geschichte">
          <h1>Geschichte</h1>
          <p>
            Pfungen, erstmals 993 n. Chr. urkundlich erwähnt, blickt auf eine lange Geschichte zurück. 
            Der Name stammt vom altdeutschen „Funginga“, was „bei den Leuten des Fungo“ bedeutet. 
            Ursprünglich ein Bauerndorf, prägten Landwirtschaft und die Nähe zur Töss die Entwicklung Pfungens. 
            Im Mittelalter gehörte es teils zum Kloster Einsiedeln und teils zu den Grafen von Kyburg, 
            bis es schließlich unter Zürcher Herrschaft kam.

            Mit der Industrialisierung im 19. Jahrhundert wandelte sich Pfungen: Textil- und Maschinenindustrie 
            prägten die Region, und die Bevölkerung wuchs. Der Anschluss an das Bahnnetz 1855 verstärkte diesen Wandel 
            und machte das Dorf zu einem beliebten Wohnort für Pendler. Heute verbindet Pfungen modernes Leben mit Tradition; 
            das historische Dorfzentrum und alte Gebäude wie die reformierte Kirche erinnern an seine Vergangenheit. 
            In den letzten Jahrzehnten hat sich das Dorf kontinuierlich entwickelt, bleibt aber stark mit seiner Geschichte und Natur verbunden.
          </p>
        </div>
      </div>

      <div className="heute-container">
        <div className="heute">
          <h1>Heutzutage</h1>
          <p>
            Pfungen hat sich in den letzten Jahrzehnten stark verändert. Während das Dorf ursprünglich durch Landwirtschaft geprägt war, ist es heute vor allem ein attraktiver Wohnort für Pendler, die in Zürich arbeiten. Die Nähe zur Stadt und die gute Verkehrsanbindung tragen dazu bei, dass die Bevölkerung kontinuierlich wächst.
          </p>
          <p>
            Wirtschaftlich ist Pfungen weniger von großen Industrien abhängig, sondern von einer Vielzahl kleinerer Unternehmen, vor allem im Dienstleistungs- und Handelssektor. Auch die landwirtschaftlichen Betriebe sind nach wie vor wichtig, doch ihre Zahl ist gesunken. Die Wirtschaftsstruktur hat sich hin zu einer Mischung aus modernen Arbeitsplätzen und traditionellem Handwerk verschoben.
          </p>
          <p>
            In Bezug auf den sozialen Unterschied gibt es in Pfungen keine extremen Unterschiede zwischen Arm und Reich. Die Lebensqualität ist hoch, und die Region zieht vor allem Familien und gut verdienende Pendler an. Trotzdem bleibt das Dorf in vielen Bereichen noch sehr traditionell und naturverbunden. Die jüngere Generation schätzt sowohl die Nähe zur Großstadt als auch die ruhige, ländliche Atmosphäre.
          </p>
        </div>
      </div>

      <div className="parallax"></div>

      <div className="aktuell">
        <h1>Aktuelles</h1>
        <p>
          balabablalabl
        </p>
      </div>

      <div className="parallax"></div>


    </div>
  );
}

export default Home;
