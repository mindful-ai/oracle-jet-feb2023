define(['knockout', 
'ojs/ojcollectiondataprovider', 
"ojs/ojmodel", 
"ojs/ojtable"], function(ko, CollectionDataProvider, Model){

    function restClientViewModel(){

        var self = this;

        // Setup the service URL
        self.serviceURL = "https://apex.oracle.com/pls/apex/oraclejet/lp/activities/";

        // Determine the structure/fields for the Model
        self.parseData = function(response) {
            return {name: response['name'], short_desc: response['short_desc']};
        };

        // Extend the model class for creating Department Model
        self.Department = Model.Model.extend({
            urlRoot: self.serviceURL,
            parse: self.parseData,
            idAttribute: 'id'
        });

        // We create a Model object
        self.myDept = new self.Department();

        // Extend the collection class 
        self.DeptCollection = Model.Collection.extend({
            url: self.serviceURL + "?limit=50",
            model: self.myDept
        });

        // We create the collection object
        self.DeptCol = ko.observable();
        self.DeptCol(new self.DeptCollection());

        // Connect the collection object to the table datasource
        self.datasource = ko.observable();
        self.datasource(new CollectionDataProvider(self.DeptCol()));


    }

    return restClientViewModel;
});