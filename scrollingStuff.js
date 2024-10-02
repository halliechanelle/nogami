$(document).ready(function(){

const extra_padding = 20
    
    //function to scroll section into view when relevant button clicked
    $("#aboutButton").click(function() {
        var aboutPosition = $("#about").offset(); //get object with x,y position in px of section within document
        var headerHeight = $("header").outerHeight(); //get height of header in px
        scrollTo(aboutPosition.left, aboutPosition.top-headerHeight-extra_padding); //scroll to x: x position of section, y: y position of section accounting for static header and some padding 
    })
    //cont. sim.
    $("#benefitsButton").click(function() {
        var benefitsPosition = $("#benefits").offset();
        var headerHeight = $("header").outerHeight();
        scrollTo(benefitsPosition.left, benefitsPosition.top-headerHeight-extra_padding);
    })

    $("#treatmentsButton").click(function() {
        var treatmentsPosition = $("#treatments").offset();
        var headerHeight = $("header").outerHeight();
        scrollTo(treatmentsPosition.left, treatmentsPosition.top-headerHeight-extra_padding);
    })

    $("#pricesButton").click(function() {
        var pricesPosition = $("#prices").offset();
        var headerHeight = $("header").outerHeight();
        scrollTo(pricesPosition.left, pricesPosition.top-headerHeight-extra_padding);
    })

    $("#contactButton").click(function() {
        var contactPosition = $("#contact").offset();
        var headerHeight = $("header").outerHeight();
        scrollTo(contactPosition.left, contactPosition.top-headerHeight-extra_padding);
    })
});