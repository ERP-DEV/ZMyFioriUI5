var hostPort = "";

// this setting is required to test app with odataService in Eclipse environment
// hostPort	 = "proxy/http/<host>:<port>";

//Odata Service Path
var oDataPath = "/sap/opu/odata/sap/ZE2E_FIORI_DEMO_NING_SRV/";
// Odata Service Url
var serviceUrl= hostPort + oDataPath;

//OData Service URL: when testing APP in Eclipse local environment
//var serviceUrl = "proxy/http/fiori:8001/sap/opu/odata/sap/ZE2E_FIORI_DEMO_NING_SRV/";

//OData Service URL: when testing app in SAP FIORI LAUNCHPAD
//var serviceUrl = "/sap/opu/odata/sap/ZE2E_FIORI_DEMO_NING_SRV/";