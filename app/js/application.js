// Generated by CoffeeScript 1.7.1
(function() {
  "use strict";
  var BoardCtrl,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.ticTacToe = angular.module('TicTacToe', []);

  ticTacToe.constant('Settings', {
    WIN_PATTERNS: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  });

  BoardCtrl = (function() {
    function BoardCtrl($scope, Settings) {
      this.$scope = $scope;
      this.Settings = Settings;
      this.mark = __bind(this.mark, this);
      this.$scope.cells = {};
      this.$scope.mark = this.mark;
    }

    BoardCtrl.prototype.mark = function($event) {
      var cell, player;
      this.$event = $event;
      cell = this.$event.target.dataset.index;
      player = Object.keys(this.$scope.cells).length % 2 === 0 ? 'x' : 'o';
      return this.$scope.cells[cell] = player;
    };

    return BoardCtrl;

  })();

  BoardCtrl.$inject = ["$scope", "Settings"];

  ticTacToe.controller("BoardCtrl", BoardCtrl);

}).call(this);

//# sourceMappingURL=application.map
