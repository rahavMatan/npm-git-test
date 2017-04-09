angular.module('myApp',['ngAnimate'])
.controller('myCtrl',function($scope,$element,$animate){
  $scope.msg="12345";
  this.someBool=false;
  this.doSomething=function(){
    this.someBool=!this.someBool;
    //$element.addClass('fade');
    $animate.addClass($element,'fade');
  }

})

.directive('myDirective',function(){
  return {
    template:'<div class="fade">{{msg}}</div>',
    scope:{},
    controller:function($scope){
      $scope.msg="5656565";
    },
    controllerAs:'ctrl'
  }
})

.animation('.aDiv',function($animateCss){
  return {
    enter:function(element,done){
      return $animateCss(element,{
        addClass:'test',
        from:{
          opacity:0,
          width:'50%'
        },
        to:{
          opacity:1,
          width:'100%'
        },
        duration:1
      });
    }
  }
})
