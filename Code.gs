/*jslint*/

function include(file) {
  "use strict";
  return HtmlService.createHtmlOutputFromFile(file)
  .getContent();
}

function doGet() {
  "use strict";
  return HtmlService.createTemplateFromFile("Index")
  .evaluate()
  .setTitle("Fractals");
}
