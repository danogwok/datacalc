//jQuery(document).ready(function($) {
$(function() {


var estimatedDaily=0, estimatedweekly=0, estimatedMonthly=0, estimatedMonthlyfromDaily, estimatedMonthlyMBS, estimatedDailyfromweekly, stimatedDailyfrommonthly;

//daily data usage
$( "#sliderdailyvideo" ).slider({
	range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailyvideo" ).val( ui.value );
                var estimatedDailyVideo = Math.round(100 * (parseFloat(ui.value)  * 2.27)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 2.27 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 2.27 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#video-cost").text(estimatedDailyVideo);
            $("#daily-cost").text(estimatedDaily);
            $("#period_data").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyVideo + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("gaming-cost").text(estimatedDailyGaming));
    		}     
               
	});
 //$( "#dailyvideo" ).val( $( "#sliderdailyvideo" ).slider( "value" ) );
//});
//return estimatedMonthlyfromDaily;

$( "#sliderdailyemail" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $("#dailyemail").val( ui.value );
                var estimatedDailyEmail = Math.round(100 * (parseFloat(ui.value)  * 0.05)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51)) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#email-cost").text(estimatedDailyEmail);
            $("#daily-cost").text(estimatedDaily);
            $("#period_data").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);

    		//$("#daily-cost2").text(estimatedDailyEmail * 0.05 + $("#video-cost").text(estimatedDailyVideo) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("gaming-cost").text(estimatedDailyGaming));
    		}        
	});



$( "#sliderdailygaming" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailygaming" ).val( ui.value );
                var estimatedDailyGaming = Math.round(100 * (parseFloat(ui.value)  * 1.51)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 1.51 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailyvideo').slider("value") * 2.27) ) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 1.51 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailyvideo').slider("value") * 2.27) ) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#gaming-cost").text(estimatedDailyGaming);
            $("#daily-cost").text(estimatedDaily);
            $("#period_data").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyGaming + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("video-cost").text(estimatedDailyVideo));
    		}        
	});

$( "#sliderdailystreaming" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailystreaming" ).val( ui.value );
                var estimatedDailyStreaming = Math.round(100 * (parseFloat(ui.value)  * 23.52)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 23.52 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 23.52 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailybrowsing').slider("value") * 0.94 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#streaming-cost").text(estimatedDailyStreaming);
            $("#daily-cost").text(estimatedDaily);
            $("#period_data").text(estimatedDaily);
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyStreaming + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("video-cost").text(estimatedDailyVideo));
    		}        
	});

$( "#sliderdailybrowsing" ).slider({
		range: "max",
		min: 0,
		max: 100,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#dailybrowsing" ).val( ui.value );
                var estimatedDailyBrowsing = Math.round(100 * (parseFloat(ui.value)  * 0.94)) / 100;
                estimatedDaily = Math.round(100 * (ui.value * 0.94 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromDaily = Math.round(100 * 30 * (ui.value * 0.94 + $('#sliderdailyemail').slider("value") * 0.05 + $('#sliderdailyvideo').slider("value") * 2.27 + $('#sliderdailystreaming').slider("value") * 23.52 + $('#sliderdailygaming').slider("value") * 1.51) ) / 100;

            myFunction(estimatedMonthlyfromDaily);
            monthlyFunction(estimatedMonthlyfromDaily);
            dailyFunction(estimatedDaily);
            $("#browsing-cost").text(estimatedDailyBrowsing);
            $("#daily-cost").text(estimatedDaily);
            $("#period_data").text(estimatedDaily);     
            $("#dailymonthly-cost").text(estimatedMonthlyfromDaily);
    		//$("#daily-cost2").text(estimatedDailyBrowsing + $("#email-cost").text(estimatedDailyEmail) + $("#browsing-cost").text(estimatedDailyBrowsing) + $("#streaming-cost").text(estimatedDailyStreaming) + $("video-cost").text(estimatedDailyVideo));
    		}        
	});
//weekly data usage
$( "#sliderweeklyvideo" ).slider({
    range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklyvideo" ).val( ui.value );
                var estimatedweeklyVideo = Math.round(100 * (parseFloat(ui.value)  * 2.27)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 2.27 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 4.28 * (ui.value * 2.27 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 2.27 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) / 700) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#video-cost").text(estimatedweeklyVideo);
            $("#weekly-cost").text(estimatedweekly);
            $("#period_data").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedDailyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyVideo + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("gaming-cost").text(estimatedweeklyGaming));
            }     
               
    });
 //$( "#weeklyvideo" ).val( $( "#sliderweeklyvideo" ).slider( "value" ) );
//});
//return estimatedMonthlyfromweekly;

$( "#sliderweeklyemail" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $("#weeklyemail").val( ui.value );
                var estimatedweeklyEmail = Math.round(100 * (parseFloat(ui.value)  * 0.05)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 4.28 * (ui.value * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51)) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) / 700) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#email-cost").text(estimatedweeklyEmail);
            $("#weekly-cost").text(estimatedweekly);
            $("#period_data").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);

            //$("#weekly-cost2").text(estimatedweeklyEmail * 0.05 + $("#video-cost").text(estimatedweeklyVideo) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("gaming-cost").text(estimatedweeklyGaming));
            }        
    });



$( "#sliderweeklygaming" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklygaming" ).val( ui.value );
                var estimatedweeklyGaming = Math.round(100 * (parseFloat(ui.value)  * 1.51)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 1.51 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklyvideo').slider("value") * 2.27) ) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 4.28 * (ui.value * 1.51 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklyvideo').slider("value") * 2.27) ) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 *(ui.value * 1.51 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklyvideo').slider("value") * 2.27) / 700 ) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#gaming-cost").text(estimatedweeklyGaming);
            $("#weekly-cost").text(estimatedweekly);
            $("#period_data").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyGaming + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("video-cost").text(estimatedweeklyVideo));
            }        
    });

$( "#sliderweeklystreaming" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklystreaming" ).val( ui.value );
                var estimatedweeklyStreaming = Math.round(100 * (parseFloat(ui.value)  * 23.52)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 23.52 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 4.28 * (ui.value * 23.52 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 23.52 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklybrowsing').slider("value") * 0.94 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklygaming').slider("value") * 1.51) / 700 ) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#streaming-cost").text(estimatedweeklyStreaming);
            $("#weekly-cost").text(estimatedweekly);
            $("#period_data").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyStreaming + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("video-cost").text(estimatedweeklyVideo));
            }        
    });

$( "#sliderweeklybrowsing" ).slider({
        range: "max",
        min: 0,
        max: 700,
        
        value: 0,
        
        slide: function( event, ui ) {
                $( "#weeklybrowsing" ).val( ui.value );
                var estimatedweeklyBrowsing = Math.round(100 * (parseFloat(ui.value)  * 0.94)) / 100;
                estimatedweekly = Math.round(100 * (ui.value * 0.94 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedMonthlyfromweekly = Math.round(100 * 4.28 * (ui.value * 0.94 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) ) / 100;
                estimatedDailyfromweekly = Math.round(100 * 100 * (ui.value * 0.94 + $('#sliderweeklyemail').slider("value") * 0.05 + $('#sliderweeklyvideo').slider("value") * 2.27 + $('#sliderweeklystreaming').slider("value") * 23.52 + $('#sliderweeklygaming').slider("value") * 1.51) / 700) / 100;
                
            myFunction2(estimatedMonthlyfromweekly);
            monthlyFunction2(estimatedMonthlyfromweekly);
            dailyFunction2(estimatedDailyfromweekly);
            $("#browsing-cost").text(estimatedweeklyBrowsing);
            $("#weekly-cost").text(estimatedweekly);
            $("#period_data").text(estimatedweekly);
            $("#weeklymonthly-cost").text(estimatedMonthlyfromweekly);
            //$("#weekly-cost2").text(estimatedweeklyBrowsing + $("#email-cost").text(estimatedweeklyEmail) + $("#browsing-cost").text(estimatedweeklyBrowsing) + $("#streaming-cost").text(estimatedweeklyStreaming) + $("video-cost").text(estimatedweeklyVideo));
            }        
    });

//monthly data usage

var slidermonthlyvideo = $( "#slidermonthlyvideo" ).slider({
	range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlyvideo" ).val( ui.value );
                var estimatedMonthlyVideo = Math.round(100 * (parseFloat(ui.value)  * 0.0022737)) / 100;
                estimatedMonthly = Math.round(100 * (ui.value * 0.0022737 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.0022737 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.0022737 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) / 3000) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthvideo-cost").text(estimatedMonthlyVideo);
            $("#monthly-cost").text(estimatedMonthly);
            $("#period_data").text(estimatedMonthly);
    		}        
	});

var slidermonthlyemail = $( "#slidermonthlyemail" ).slider({
		range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlyemail" ).val( ui.value );
                var estimatedMonthlyEmail = Math.round(100 * (parseFloat(ui.value)  * 0.000049)) / 100;
                estimatedMonthly = Math.round(100 * (ui.value * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) /3000 ) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthemail-cost").text(estimatedMonthlyEmail);
            $("#monthly-cost").text(estimatedMonthly);
            $("#period_data").text(estimatedMonthly);
    		}        
	});

var slidermonthlygaming = $( "#slidermonthlygaming" ).slider({
		range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlygaming" ).val( ui.value );
                var estimatedMonthlyGaming = Math.round(100 * (parseFloat(ui.value)  * 0.001513)) / 100;
                estimatedMonthly = Math.round(100 * (ui.value * 0.001513 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlyvideo').slider("value") * 0.0022737) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.001513 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlyvideo').slider("value") * 0.0022737) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.001513 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlyvideo').slider("value") * 0.0022737) / 3000) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthgaming-cost").text(estimatedMonthlyGaming);
            $("#monthly-cost").text(estimatedMonthly);
            $("#period_data").text(estimatedMonthly);
    		}        
	});

var slidermonthlystreaming = $( "#slidermonthlystreaming" ).slider({
		range: "max",
		min: 0,
		max:3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlystreaming" ).val( ui.value );
                var estimatedMonthlyStreaming = Math.round(100 * (parseFloat(ui.value)  * 0.0235243)) / 100;
                estimatedMonthly = Math.round(100 * (ui.value * 0.0235243 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.0235243 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlygaming').slider("value") * 0.001513) ) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.0235243 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlybrowsing').slider("value") * 0.0009357 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlygaming').slider("value") * 0.001513) / 3000) / 100;
                
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthstreaming-cost").text(estimatedMonthlyStreaming);
            $("#monthly-cost").text(estimatedMonthly);
            $("#period_data").text(estimatedMonthly);
    		}        
	});

var slidermonthlybrowsing = $( "#slidermonthlybrowsing" ).slider({
		range: "max",
		min: 0,
		max: 3000,
		
		value: 0,
		
		slide: function( event, ui ) {
                $( "#monthlybrowsing" ).val( ui.value );
                var estimatedMonthlyBrowsing = Math.round(100 * (parseFloat(ui.value)  * 0.0009357)) / 100;
                estimatedMonthly = Math.round(100 * (ui.value * 0.0009357 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513)) / 100;
                estimatedMonthlyMBS = Math.round(100 * 1024 * (ui.value * 0.0009357 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513)) / 100;
                estimatedDailyfrommonthly = Math.round(100 * 100024 * (ui.value * 0.0009357 + $('#slidermonthlyemail').slider("value") * 0.000049 + $('#slidermonthlyvideo').slider("value") * 0.0022737 + $('#slidermonthlystreaming').slider("value") * 0.0235243 + $('#slidermonthlygaming').slider("value") * 0.001513) / 3000) / 100;
            
            myFunction3(estimatedMonthly);
            monthlyFunction3(estimatedMonthlyMBS);
            dailyFunction3(estimatedDailyfrommonthly);
            $("#monthbrowsing-cost").text(estimatedMonthlyBrowsing);
            $("#monthly-cost").text(estimatedMonthly);
            $("#period_data").text(estimatedMonthly);
    		}       
	});


$('#submit_btn').click(function(){
    $(".slider_width").slider("value", 0);
    $(".for_reset").val("0");
    myFunction(0);
    $("#monthlydata").text("0");
    $("#dailydata").text("0");
    estimatedMonthly = estimatedweekly = estimatedDaily = 0;
    $("#period_data").text("0");
});

var response = '';
var estimatedusage = estimatedMonthlyfromDaily;


//start of tabs
$('div.htmltabs div.tabsContent').hide();//tabsContent class is used to hide all the tabs content in the start
	$('div.tab1').show(); // It will show the first tab content when page load, you can set any tab content you want - just put the tab content class e.g. tab4
	$('div.htmltabs ul.tabs li.tab1 a').addClass('tab-current');// We will add the class to the current open tab to style the active state
	//It will add the click event on all the anchor tag under the htmltabs class to show the tab content when clicking to the tab
	$('div.htmltabs ul li a').click(function()
	{
		var thisClass = this.className.slice(0,4);//"this" is the current anchor where user click and it will get the className from the current anchor and slice the first part as we have two class on the anchor 
		$('div.htmltabs div.tabsContent').hide();// It will hide all the tab content
		$('div.' + thisClass).show(); // It will show the current content of the user selected tab
		$('div.htmltabs ul.tabs li a').removeClass('tab-current');// It will remove the tab-current class from the previous tab to remove the active style
		$(this).addClass('tab-current'); //It will add the tab-current class to the user selected tab
	});

	//end of tabs

//for daily estimates
function myFunction(estimatedMonthly)
{
    var response = 'no bundle';
    var estimatedusage = estimatedMonthly;
    if (estimatedusage > 0){       
        response= '500MB for 25,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 612){       
        response= '1GB for 45,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 1519.8){       
        response= '500MB for 25,000UGX valid for 30 days and another on expiry..';
    }
    if (estimatedusage > 1530){       
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.';
    }

    if (estimatedusage > 1632) {
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.';
    }
    //Approximately 3gb
    if (estimatedusage > 2958) {
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 3060) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 6144) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    //Approximately 10gb
    if (estimatedusage > 9200) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 10200) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.'; 
    }
    //Approximately 20gb
    if (estimatedusage > 19500) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 20480) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 40960) {
        response= '50GB for 250,000UGX valid for 30 days and another on expiry.';
    }
    //Approximately 50gb
    if (estimatedusage > 50000) {
        response= '50GB for 530,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 51200) {
        response= '50GB for 530,000UGX valid for 30 days and another on expiry.';
    }
      /*
    if (estimatedusage > 71680) {
        response= 'We recommend 530,000 for 50GB Monthly and another bundle after.';
    }
    */
    $("#yoursolution").text(response);
//    $("#yoursolution").text("initial");
}

function myFunction2(estimatedMonthly)
{
    var response = 'no bundle';
    var estimatedusage = estimatedMonthly;
    if (estimatedusage > 0){       
        response= '500MB for 25,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 612){       
        response= '1GB for 45,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 1519.8){       
        response= '500MB for 25,000UGX valid for 30 days and another on expiry..';
    }
    if (estimatedusage > 1530){       
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.';
    }

    if (estimatedusage > 1632) {
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.';
    }
    //Approximately 3gb
    if (estimatedusage > 2958) {
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 3060) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 6144) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    //Approximately 10gb
    if (estimatedusage > 9200) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 10200) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.'; 
    }
    //Approximately 20gb
    if (estimatedusage > 19500) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 20480) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 40960) {
        response= '50GB for 250,000UGX valid for 30 days and another on expiry.';
    }
    //Approximately 50gb
    if (estimatedusage > 50000) {
        response= '50GB for 530,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 51200) {
        response= '50GB for 530,000UGX valid for 30 days and another on expiry.';
    }
      /*
    if (estimatedusage > 71680) {
        response= 'We recommend 530,000 for 50GB Monthly and another bundle after.';
    }
    */
    $("#yoursolution").text(response);
//    $("#yoursolution").text("initial");
}

function myFunction3(estimatedMonthly)
{
    var response = 'no bundle';
    var estimatedusage = estimatedMonthly;
    if (estimatedusage > 0){       
        response= '500MB for 25,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 612){       
        response= '1GB for 45,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 1519.8){       
        response= '500MB for 25,000UGX valid for 30 days and another on expiry..';
    }
    if (estimatedusage > 1530){       
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.';
    }

    if (estimatedusage > 1632) {
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.';
    }
    //Approximately 3gb
    if (estimatedusage > 2958) {
        response= '3GB for 85,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 3060) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 6144) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    //Approximately 10gb
    if (estimatedusage > 9200) {
        response= '10GB for 150,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 10200) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.'; 
    }
    //Approximately 20gb
    if (estimatedusage > 19500) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.'; 
    }
    if (estimatedusage > 20480) {
        response= '20GB for 250,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 40960) {
        response= '50GB for 250,000UGX valid for 30 days and another on expiry.';
    }
    //Approximately 50gb
    if (estimatedusage > 50000) {
        response= '50GB for 530,000UGX valid for 30 days and another on expiry.';
    }
    if (estimatedusage > 51200) {
        response= '50GB for 530,000UGX valid for 30 days and another on expiry.';
    }
      /*
    if (estimatedusage > 71680) {
        response= 'We recommend 530,000 for 50GB Monthly and another bundle after.';
    }
    */
    $("#yoursolution").text(response);
//    $("#yoursolution").text("initial");
}


function monthlyFunction(Monthlyusage)
{
    $("#monthlydata").text((Math.round((estimatedMonthlyfromDaily/1024)*1000)/1000).toFixed(2))
}

function monthlyFunction2(Monthlyusage)
{
    $("#monthlydata").text((Math.round((estimatedMonthlyfromweekly/1024)*1000)/1000).toFixed(2))
}


function monthlyFunction3(Monthlyusage)
{
    $("#monthlydata").text((Math.round((estimatedMonthlyMBS/1024)*1000)/1000).toFixed(2))
}

function dailyFunction(DailyUsage)
{
    $("#dailydata").text((Math.round((estimatedDaily/1024)*1000)/1000).toFixed(2))
}

function dailyFunction2(DailyUsage)
{
    $("#dailydata").text((Math.round((estimatedDailyfromweekly/1024)*1000)/1000).toFixed(2))
}

function dailyFunction3(DailyUsage)
{
    $("#dailydata").text((Math.round((estimatedDailyfrommonthly/1024)*1000)/1000).toFixed(2))
}

$("#daily").click(function(){
    $("#period_data").text(estimatedDaily);
    $("#tab_id").text("daily");
    $("#units").text("MB");
});

$("#weekly").click(function(){
    $("#tab_id").text("weekly");
    $("#period_data").text(estimatedweekly);
    $("#units").text("MB");
});

$("#monthly").click(function(){
    $("#tab_id").text("monthly");
    $("#period_data").text(estimatedMonthly);
    $("#units").text("GB");
});

});


// developed by Brudan Digital, Hive Colab //

/***** http://www.brudan.net  *****/

/***** info@brudan.net  *****/