/**
  Copyright (c) 2015, 2022, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./name-badge-view.html', './name-badge-viewModel', 'text!./component.json', 'css!./name-badge-styles.css'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('name-badge', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);