angular.module('myApp.controllers', [])
.controller('PagesCtrl', function ($scope, $window) {
    console.log('Page controller reporting for duty');
    function autoHeight() {
        $('#content').css('min-height', 0);
        $('#content').css('min-height', (
            $(document).height()
            - $('#header').height()
            - $('#footer').height()
        ));
    }
    // onDocumentReady function bind
    $(document).ready(function () {
        autoHeight();
    });

    // onResize bind of the function
    $(window).resize(function () {
        autoHeight();
    });
})
.controller('Dropdown', function($scope) {
    $(".dropdown-menu li a").click(function(){
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
      });
})
.controller('EventsPopulation',function($scope){
    $scope.images  = [
        "/images/Country.jpg",
        "/images/Jazz.jpg",
        "/images/Electronic.jpg"
    ];
    $scope.events = [
        {
            'id': 1,
            'artist': 'Kenny Chesney w/ Grace Potter',
            'genre': 'Country',
            'price': '$30-260',
            'location': 'Nashville, TN',
            'image': '/images/Country.jpg'
        },
        {
            'id': 2,
            'artist': 'Gerald Albright Band',
            'genre': 'Jazz',
            'price': '$15-90',
            'location': 'Atlanta, GA',
            'image': '/images/Jazz.jpg'
        },
        {
            'id': 3,
            'artist': 'The Rock Church',
            'genre': 'Electronic',
            'price': '$20-40',
            'location': 'Birmingham, AL',
            'image': '/images/Electronic.jpg'
        }
    ];
}); 