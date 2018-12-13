jQuery.sap.require("sap.ui.demo.myFiori.util.connectivity"); 
jQuery.sap.require("sap.ui.demo.myFiori.util.Formatter");
jQuery.sap.require("sap.ui.demo.myFiori.util.Grouper");

sap.ui.controller("sap.ui.demo.myFiori.view.Master", {
	
onInit : function() {	

		//Load OData Service
		var oModel = new sap.ui.model.odata.ODataModel(serviceUrl, true);
		sap.ui.getCore().setModel(oModel);
		
	},

	handleListItemPress : function (evt) {
		var context = evt.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},
	
	handleSearch : function (evt) {
		
		// create model filter
		var filters = [];
		var query = evt.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("SoId", sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}
		
		// update list binding
		var list = this.getView().byId("list");
		
		//Frame Url with EntitySet
		//var url = serviceUrl + "SalesOrderSet";
				
		//Call OdataService
		//OData.read(url, function(data) {

			//Read output
			//var result = data.results;
			
			//set JSONoutput to a JSONModel
			//var oModel = new sap.ui.model.json.JSONModel();
			//oModel.setData({
				//listItems : result
			//});
			
			//Set output to ListControl			
			//list.setModel(oModel);
						
		//}, function(err) {
			//var errTxt = err.message + "\n" + err.request.requestUri;
			//sap.m.MessageBox.show(errTxt, sap.m.MessageBox.Icon.ERROR, "Service Error");
		//});	
		
		var binding = list.getBinding("items");
		binding.filter(filters);
	},
	
	handleListSelect : function (evt) {
		var context = evt.getParameter("listItem").getBindingContext();
		this.nav.to("Detail", context);
	},

	handleGroup : function (evt) {

		// compute sorters
		var sorters = [];
		var item = evt.getParameter("selectedItem");
		var key = (item) ? item.getKey() : null;
		if ("GrossAmount" === key || "LifecycleStatus" === key) {
			sap.ui.demo.myFiori.util.Grouper.bundle = this.getView().getModel("i18n").getResourceBundle();
			var grouper = sap.ui.demo.myFiori.util.Grouper[key];
			sorters.push(new sap.ui.model.Sorter(key, true, grouper));
		}

		// update binding
		var list = this.getView().byId("list");
		
		//Frame Url with EntitySet
		//var url = serviceUrl + "SalesOrderSet";
				
		//Call OdataService
		//OData.read(url, function(data) {

			//Read output
			var result = data.results;
			
			//set JSONoutput to a JSONModel
			//var oModel = new sap.ui.model.json.JSONModel();
			//oModel.setData({
				//listItems : result
			//});
			
			//Set output to ListControl			
			list.setModel(oModel);
						
		//}, function(err) {
			//var errTxt = err.message + "\n" + err.request.requestUri;
			//sap.m.MessageBox.show(errTxt, sap.m.MessageBox.Icon.ERROR, "Service Error");
		//});	
		
		var oBinding = list.getBinding("items");
		oBinding.sort(sorters);
	}
});