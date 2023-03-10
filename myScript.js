var checkInDate=document.getElementById("checkInDate");
var checkOutDate=document.getElementById("checkOutDate");
var roomCount=document.getElementById("roomID");
var adultCount=document.getElementById("id-Adult");
var childCount=document.getElementById("id-Child");

var firstName=document.getElementById("id-firstName");
var lastName=document.getElementById("id-lastName");
var age=document.getElementById("id-age");
var gender=document.getElementById("id-gender");
var phone=document.getElementById("id-phone");
var address=document.getElementById("id-address");

var extraBed=document.getElementById("id-bed");
var extraTowel=document.getElementById("id-towel");
var unlimitedWifi=document.getElementById("id-wifi");


function display1stPage(){
    reservationDetail.style.display ="block";
    personalDetails.style.display="none";
    extraAmaneties.style.display="none";
    bookingSummary.style.display="none";
}
function display2ndPage(){
    reservationDetail.style.display ="none";
    personalDetails.style.display='block';
    extraAmaneties.style.display="none";
    bookingSummary.style.display="none";
}
function display3rdPage(){
    reservationDetail.style.display ="none";
    personalDetails.style.display="none";
    extraAmaneties.style.display="block";
    bookingSummary.style.display="none";
}
function display4thPage(){
    reservationDetail.style.display ="none";
    personalDetails.style.display="none";
    extraAmaneties.style.display="none";
    bookingSummary.style.display="block";

    document.getElementById("summaryCheckOut").innerHTML= checkOutDate.value;
    
    document.getElementById("summaryCheckIn").innerHTML= checkInDate.value;
    document.getElementById("summaryRoomCount").innerHTML= roomCount.value;
    document.getElementById("summaryAdultCount").innerHTML= adultCount.value;
    document.getElementById("summaryChildCount").innerHTML= childCount.value;

    document.getElementById("summaryFirstName").innerHTML= firstName.value;
    document.getElementById("summaryLastName").innerHTML= lastName.value;
    document.getElementById("summaryAge").innerHTML= age.value;
    document.getElementById("summaryPhone").innerHTML= phone.value;
    document.getElementById("summaryAddress").innerHTML= address.value;

    document.getElementById("summaryExtraBed").innerHTML= extraBed.value;
    document.getElementById("summaryExtraTowel").innerHTML= extraTowel.value;
    document.getElementById("summaryWifi").innerHTML= unlimitedWifi.value;


}
function bookingConfirmed(){
    window.alert("your booking is confirmed !");
    display1stPage();
}







