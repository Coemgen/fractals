/*jslint browser, white*/
/*global HtmlService, PropertiesService, SpreadsheetApp*/

function getFractalsList() {
  "use strict";
  return SpreadsheetApp.openById(
    PropertiesService.getScriptProperties()
    .getProperty("FractalConstantsSs")  
  ).getSheetByName("Mandelbrot Set")
  .getDataRange()
  .getValues();
}

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
