/********************************/
/* About Us Form */
/*******************************/
$(document).ready(function()
{
	
$("input#mobile").keypress(function(event) {
  return /\d/.test(String.fromCharCode(event.keyCode));
});	
	
var countryOptions = null;
var districtOptions = null;

$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value=" ">Select Your State</option>';

$.each(data, function(key, value)
{
      countryOptions += '<option value="'+value.state+'">'+value.state+'</option>';
    });


    $('#aboutus_state').html(countryOptions);
  });


$(document).on('change', '#aboutus_state', function()
{
districtOptions = null;

$district = $(this).val();


$.getJSON('js/states-districts.json', function(data){
    districtOptions += '<option value=" ">Select Your District</option>';

$.each(data, function(key, value)
{
if($district == value.state)
{

$.each(value.districts, function(key, val)
{
districtOptions += '<option value="'+val+'">'+val+'</option>';
});

}
});

$('#aboutus_district').html(districtOptions);
});
});
});

/********************************/
/* From  Inter State */
/*******************************/
$(document).ready(function()
{
var countryOptions = null;
var districtOptions = null;

$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value=" ">Select Your State</option>';

$.each(data, function(key, value)
{
      countryOptions += '<option value="'+value.state+'">'+value.state+'</option>';
    });


    $('#from_inter_state').html(countryOptions);
  });


$(document).on('change', '#from_inter_state', function()
{
districtOptions = null;

$district = $(this).val();


$.getJSON('js/states-districts.json', function(data){
    districtOptions += '<option value=" ">Select Your District</option>';

$.each(data, function(key, value)
{
if($district == value.state)
{

$.each(value.districts, function(key, val)
{
districtOptions += '<option value="'+val+'">'+val+'</option>';
});

}
});

$('#from_inter_district').html(districtOptions);
});
});
});


/********************************/
/* To  Inter State */
/*******************************/
$(document).ready(function()
{
var countryOptions = null;
var districtOptions = null;

$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value=" ">Select Your State</option>';

$.each(data, function(key, value)
{
      countryOptions += '<option value="'+value.state+'">'+value.state+'</option>';
    });


    $('#to_inter_state').html(countryOptions);
  });


$(document).on('change', '#to_inter_state', function()
{
districtOptions = null;

$district = $(this).val();


$.getJSON('js/states-districts.json', function(data){
    districtOptions += '<option value=" ">Select Your District</option>';

$.each(data, function(key, value)
{
if($district == value.state)
{

$.each(value.districts, function(key, val)
{
districtOptions += '<option value="'+val+'">'+val+'</option>';
});

}
});

$('#to_inter_district').html(districtOptions);
});
});
});


/********************************/
/* From  Inter City */
/*******************************/
$(document).ready(function()
{
var countryOptions = null;
var districtOptions = null;


$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value=" ">Select Your State</option>';

$.each(data, function(key, value)
{
      countryOptions += '<option value="'+value.state+'">'+value.state+'</option>';
    });


    $('#from_inter_city_state').html(countryOptions);
  });


$(document).on('change', '#from_inter_city_state', function()
{
districtOptions = null;

$district = $(this).val();


$.getJSON('js/states-districts.json', function(data){
    districtOptions += '<option value=" ">Select Your District</option>';

$.each(data, function(key, value)
{
if($district == value.state)
{

$.each(value.districts, function(key, val)
{
districtOptions += '<option value="'+val+'">'+val+'</option>';
});

}
});

$('#from_inter_city_district').html(districtOptions);
$('#to_inter_city_district').html(districtOptions);
});
});
});


/********************************/
/* Support Us Form */
/*******************************/
$(document).ready(function()
{
var countryOptions = null;
var districtOptions = null;

$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value=" ">Select Your State</option>';

$.each(data, function(key, value)
{
      countryOptions += '<option value="'+value.state+'">'+value.state+'</option>';
    });


    $('#support_us_state').html(countryOptions);
  });


$(document).on('change', '#support_us_state', function()
{
districtOptions = null;

$district = $(this).val();


$.getJSON('js/states-districts.json', function(data){
    districtOptions += '<option value=" ">Select Your District</option>';

$.each(data, function(key, value)
{
if($district == value.state)
{

$.each(value.districts, function(key, val)
{
districtOptions += '<option value="'+val+'">'+val+'</option>';
});

}
});

$('#support_us_district').html(districtOptions);
});
});
});

/********************************/
/* Grocery / Food / Medical Form */
/*******************************/
$(document).ready(function()
{
var countryOptions = null;
var districtOptions = null;


$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value=" ">Select Your State</option>';

$.each(data, function(key, value)
{
      countryOptions += '<option value="'+value.state+'">'+value.state+'</option>';
    });


    $('#grocery_state').html(countryOptions);
  });


$(document).on('change', '#grocery_state', function()
{
districtOptions = null;

$district = $(this).val();


$.getJSON('js/states-districts.json', function(data){
    districtOptions += '<option value=" ">Select Your District</option>';

$.each(data, function(key, value)
{
if($district == value.state)
{

$.each(value.districts, function(key, val)
{
districtOptions += '<option value="'+val+'">'+val+'</option>';
});

}
});

$('#grocery_district').html(districtOptions);
});
});
});


/********************************/
/* Volunteer Form */
/*******************************/
$(document).ready(function()
{
var countryOptions = null;
var districtOptions = null;

$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value=" ">Select Your State</option>';

$.each(data, function(key, value)
{
      countryOptions += '<option value="'+value.state+'">'+value.state+'</option>';
    });


    $('#volunteer_state').html(countryOptions);
  });


$(document).on('change', '#volunteer_state', function()
{
districtOptions = null;

$district = $(this).val();


$.getJSON('js/states-districts.json', function(data){
    districtOptions += '<option value=" ">Select Your District</option>';

$.each(data, function(key, value)
{
if($district == value.state)
{

$.each(value.districts, function(key, val)
{
districtOptions += '<option value="'+val+'">'+val+'</option>';
});

}
});

$('#volunteer_district').html(districtOptions);
});
});
});


/********************************/
/* About Us Api */
/*******************************/
$(document).ready(function () 
	{
	$("#about_us").unbind('submit').bind('submit', function() {
			var form = $(this);

					$.ajax({
					url : "https://tailermade.com/corona/apps/dashboard/volunteer",
					type : "Post",
					data: new FormData(this),
                    contentType: false,  
                    processData:false,
					dataType: 'json',
					success:function(response) 
					{
                        if(response.status == true) 
                        {
                            $("#about_us")[0].reset();
                            //$("#about_us_error").html('<span class="alert_msg">'+response.messages+'</span>');
													$('#myModal').modal('show');
                        }
                        else
                        {
                            $("#about_us_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        $("#about_us_error").delay(5000).fadeOut('slow');
					
					} // success
					
				}); // ajax subit 				
		});
	});	
	
/********************************/
/* Volunteer Api */
/*******************************/
$(document).ready(function () 
	{
	$("#volunteer").unbind('submit').bind('submit', function() {
		
	
			var form = $(this);

					$.ajax({
					url : "https://tailermade.com/corona/apps/dashboard/volunteer",
					type : "Post",
					data: new FormData(this),
                    contentType: false,  
                    processData:false,
					dataType: 'json',
					success:function(response) 
					{
						
					
                        if(response.status == true) 
                        {
                            $("#volunteer")[0].reset();
                            //$("#volunteer_error").html('<span class="alert_msg">'+response.messages+'</span>');
							
						$('#myModal').modal('show');
							
                        }
                        else
                        {
		
                            $("#volunteer_error").html('<span class="alert_msg">'+response.messages+'</span>');
							

                        }
                        $("#volunteer_error").delay(5000).fadeOut('slow');
					
					} // success
					
				}); // ajax subit 				
		});
	});		
	
/********************************/
/* Inter-State Travel Help Need Api */
/*******************************/
$(document).ready(function () 
	{
	$("#state_travel").unbind('submit').bind('submit', function() {
			var form = $(this);

					$.ajax({
					url : "https://tailermade.com/corona/apps/dashboard/Statetravel",
					type : "Post",
					data: new FormData(this),
                    contentType: false,  
                    processData:false,
					dataType: 'json',
					success:function(response) 
					{
                        if(response.status == true) 
                        {
                            $("#state_travel")[0].reset();
													$('#myModal').modal('show');
                            //$("#state_travel_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        else
                        {
                            $("#state_travel_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        $("#state_travel_error").delay(5000).fadeOut('slow');
					
					} // success
					
				}); // ajax subit 				
		});
	});			
	
/********************************/
/* Inter-City Travel Help Need Api */
/*******************************/
$(document).ready(function () 
	{
	$("#city_travel").unbind('submit').bind('submit', function() {
			var form = $(this);

					$.ajax({
					url : "https://tailermade.com/corona/apps/dashboard/Citytravel",
					type : "Post",
					data: new FormData(this),
                    contentType: false,  
                    processData:false,
					dataType: 'json',
					success:function(response) 
					{
                        if(response.status == true) 
                        {
                            $("#city_travel")[0].reset();
													$('#myModal').modal('show');
                           // $("#city_travel_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        else
                        {
                            $("#city_travel_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        $("#city_travel_error").delay(5000).fadeOut('slow');
					
					} // success
					
				}); // ajax subit 				
		});
	});			
	
/********************************/
/* Grocery / Food / Medical Help Need Api */
/*******************************/
$(document).ready(function () 
	{
	$("#grocery_food").unbind('submit').bind('submit', function() {
			var form = $(this);

					$.ajax({
					url : "https://tailermade.com/corona/apps/dashboard/Groceryfood",
					type : "Post",
					data: new FormData(this),
                    contentType: false,  
                    processData:false,
					dataType: 'json',
					success:function(response) 
					{
                        if(response.status == true) 
                        {
                            $("#grocery_food")[0].reset();
													$('#myModal').modal('show');
                           // $("#grocery_food_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        else
                        {
                            $("#grocery_food_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        $("#grocery_food_error").delay(5000).fadeOut('slow');
					
					} // success
					
				}); // ajax subit 				
		});
	});			
/********************************/
/* Support Us Api */
/*******************************/
$(document).ready(function () 
	{
	$("#support_us").unbind('submit').bind('submit', function() {
			var form = $(this);

					$.ajax({
					url : "https://tailermade.com/corona/apps/dashboard/Supportus",
					type : "Post",
					data: new FormData(this),
                    contentType: false,  
                    processData:false,
					dataType: 'json',
					success:function(response) 
					{
                        if(response.status == true) 
                        {
                            $("#support_us")[0].reset();
													$('#myModal').modal('show');
                            //$("#support_us_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        else
                        {
                            $("#support_us_error").html('<span class="alert_msg">'+response.messages+'</span>');
                        }
                        $("#support_us_error").delay(5000).fadeOut('slow');
					
					} // success
					
				}); // ajax subit 				
		});
	});		