define(["knockout", "ojs/ojarraydataprovider", "ojs/ojpagingdataproviderview", "ojs/ojtable", "ojs/ojpagingcontrol" ], 

    function(ko, ArrayDataProvider, PagingDataProviderView){

        function ojetTableViewModel(){

            var self = this;
            self.deptArray = [
                {
                    DepartmentId: 3,
                    DepartmentName: "ADFPM 1001 neverending",
                    LocationId: 200,
                    ManagerId: 300,
                },
                { DepartmentId: 5, DepartmentName: "BB", LocationId: 200, ManagerId: 300 },
                {
                    DepartmentId: 10,
                    DepartmentName: "Administration",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 20,
                    DepartmentName: "Marketing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 30,
                    DepartmentName: "Purchasing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 40,
                    DepartmentName: "Human Resources1",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 50,
                    DepartmentName: "Administration2",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 60,
                    DepartmentName: "Marketing3",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 70,
                    DepartmentName: "Purchasing4",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 80,
                    DepartmentName: "Human Resources5",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 90,
                    DepartmentName: "Human Resources11",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 100,
                    DepartmentName: "Administration12",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 110,
                    DepartmentName: "Marketing13",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 120,
                    DepartmentName: "Purchasing14",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 130,
                    DepartmentName: "Human Resources15",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 1001,
                    DepartmentName: "ADFPM 1001 neverending",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 1009,
                    DepartmentName: "BB",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 1011,
                    DepartmentName: "Administration",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 2011,
                    DepartmentName: "Marketing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 3011,
                    DepartmentName: "Purchasing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 4011,
                    DepartmentName: "Human Resources1",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 5011,
                    DepartmentName: "Administration2",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 6011,
                    DepartmentName: "Marketing3",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 7011,
                    DepartmentName: "Purchasing4",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 8011,
                    DepartmentName: "Human Resources5",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 9011,
                    DepartmentName: "Human Resources11",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 10011,
                    DepartmentName: "Administration12",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 11011,
                    DepartmentName: "Marketing13",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 12011,
                    DepartmentName: "Purchasing14",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 13011,
                    DepartmentName: "Human Resources15",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 14011,
                    DepartmentName: "ADFPM 1001 neverending",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 15011,
                    DepartmentName: "BB",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 21022,
                    DepartmentName: "Administration",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 22022,
                    DepartmentName: "Marketing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 23022,
                    DepartmentName: "Purchasing",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 24022,
                    DepartmentName: "Human Resources1",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 25022,
                    DepartmentName: "Administration2",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 26022,
                    DepartmentName: "Marketing3",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 27022,
                    DepartmentName: "Purchasing4",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 28022,
                    DepartmentName: "Human Resources5",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 29022,
                    DepartmentName: "Human Resources11",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 310022,
                    DepartmentName: "Administration12",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 311022,
                    DepartmentName: "Marketing13",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 312022,
                    DepartmentName: "Purchasing14",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 313022,
                    DepartmentName: "Human Resources15",
                    LocationId: 200,
                    ManagerId: 300,
                },
            ];
            self.dataProvider = new ArrayDataProvider(self.deptArray, {keyAttributes: 'DepartmentId'});
            self.pagingDataProvider =  new PagingDataProviderView(new ArrayDataProvider(self.deptArray, {keyAttributes: 'DepartmentId'}));

            self.deptArray2 = ko.observableArray([
                {
                    DepartmentId: 3,
                    DepartmentName: "ADFPM 1001 neverending",
                    LocationId: 200,
                    ManagerId: 300,
                },
                { DepartmentId: 5, DepartmentName: "BB", LocationId: 200, ManagerId: 300 },
                {
                    DepartmentId: 10,
                    DepartmentName: "Administration",
                    LocationId: 200,
                    ManagerId: 300,
                },
                {
                    DepartmentId: 20,
                    DepartmentName: "Marketing",
                    LocationId: 200,
                    ManagerId: 300,
                }
            ]);
            self.dataProvider2 = new ArrayDataProvider(self.deptArray2);

            self.handleDropRows = (event, context) => {
                const dragData = event.dataTransfer.getData("application/ojtablerows+json");
                if (dragData) {
                    const dragDataArray = JSON.parse(dragData);
                    console.log(dragDataArray);
                    for (let i = 0; i < dragDataArray.length; i++) {
                        console.log(dragDataArray[i].data);
                        self.deptArray2.push(dragDataArray[i].data);
                        //Alternatively splice() can be used as well
                    }
                }
                console.log(self.dataArray);
              };
        }

    return ojetTableViewModel;
});