(function () {
    'use strict';
    /**
     * @ngdoc overview
     * @name AppfyApp
     * @requires appfy.core
     * @requires appfy.module
     * @description
     * The app modules
     **/
    angular.module('AppfyApp', [
        'appfy.core',
        'appfy.module',
        //
        // Load 3rd party below
        // like bootstrap, material, etc
        //
        //'appfy.error.page'
    ]);
})();