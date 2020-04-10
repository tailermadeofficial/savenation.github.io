/********************************/
/* About Us Form */
/*******************************/
$(document).ready(function()
{
var countryOptions = null;
var districtOptions = null;

$.getJSON('js/states-districts.json', function(data){
    countryOptions += '<option value="">Select Your State</option>';

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
    districtOptions += '<option value="">Select Your District</option>';

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
    countryOptions += '<option value="">Select Your State</option>';

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
    districtOptions += '<option value="">Select Your District</option>';

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
    countryOptions += '<option value="">Select Your State</option>';

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
    districtOptions += '<option value="">Select Your District</option>';

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
    countryOptions += '<option value="">Select Your State</option>';

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
    districtOptions += '<option value="">Select Your District</option>';

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
    countryOptions += '<option value="">Select Your State</option>';

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
    districtOptions += '<option value="">Select Your District</option>';

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
    countryOptions += '<option value="">Select Your State</option>';

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
    districtOptions += '<option value="">Select Your District</option>';

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
    countryOptions += '<option value="">Select Your State</option>';

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
    districtOptions += '<option value="">Select Your District</option>';

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