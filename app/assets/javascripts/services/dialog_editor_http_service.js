ManageIQ.angular.app.service('DialogEditorHttp', ['$http', 'API', function($http, API) {
  this.loadDialog = function(id) {
    return API.get('/api/service_dialogs/' + id + '?attributes=content,buttons,label');
  };

  this.saveDialog = function(id, action, data) {
    return API.post('/api/service_dialogs' + id, {
      action: action,
      resource: data,
    }, {
      skipErrors: [400],
    });
  };

  this.treeSelectorLoadData = function() {
    return $http.get('/tree/automate_entrypoint').then(function(response) {
      return response.data;
    });
  };

  this.treeSelectorLazyLoadData = function(node) {
    return $http.get('/tree/automate_entrypoint?id=' + encodeURIComponent(node.key)).then(function(response) {
      return response.data;
    });
  };

  // Load categories data from API.
  this.loadCategories = function() {
    return API.get('/api/categories' +
                        '?expand=resources' +
                        '&attributes=description,single_value,children');
  };
}]);
