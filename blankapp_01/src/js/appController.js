define(["require", 
        "exports", 
        "ojs/ojcorerouter", 
        "ojs/ojknockoutrouteradapter", 
        "ojs/ojurlparamadapter", 
        "ojs/ojarraydataprovider", 
        "knockout", 
        "ojs/ojbootstrap", 
        "ojs/ojknockout", 
        "ojs/ojnavigationlist"], 
    function(require, 
             exports, 
             CoreRouter, 
             KnockoutRouterAdapter, 
             UrlParamAdapter, 
             ArrayDataProvider, 
             ko, 
             ojbootstrap_1
    ){

    function rootViewModel(){

        // Define the routes
        this.routes = [
            { path: "", redirect: "dashboard" },
            { path: "ojetTable", detail: { label: "Table" } },
            { path: "restClient", detail: { label: "ReST" } },
            { path: "fixedDeposit", detail: { label: "FD" } },
            { path: "customComponent", detail: { label: "Composites" } },
        ];
        // Create ADP with partial array, excluding first redirect route
        this.dataProvider = new ArrayDataProvider(this.routes.slice(1), {
            keyAttributes: "path",
        });
        // Create the router with the routes
        this.router = new CoreRouter(this.routes, {
            urlAdapter: new UrlParamAdapter(),
        });
        // Create an observable to react to the current router state path
        this.selection = new KnockoutRouterAdapter(this.router);
        // Synchronize the router, causing it to go to its default route
        this.router.sync();

    }

    return new rootViewModel();
})