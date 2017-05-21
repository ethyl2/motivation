$( document ).ready(function() {
  // Create boxes with equal height for box class columns
  $('.box').matchHeight();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

  var today = new Date();
  //Get current date from Date object in Y-m-d format.
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var dateFormat = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
  console.log(dateFormat);
});

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

var subscribeList = [];
function subscribe() {
  var email = $("#subscribe-email").val();
  subscribeList.push(email);
  console.log(subscribeList);
  $("#subscribe-message").text(email + " is successfully subscribed." +
  " We'll never share your email with anyone else.");
}

var modalList = [];
function addModalEntry() {
  var comments = $("#modal-comments").val();
  var name = $("#modal-name").val();
  var email = $("#modal-email").val();
  var entry = {"comments": comments, "name": name, "email": email};
  modalList.push(entry);
  console.log(modalList);
  $("#response").text("Thank you, " + name + ", for your comments." +
  " We'll never share your email with anyone else.");
}

var contactList = [];
function sendContactInfo() {
  var name = $("#contact-name").val();
  var email = $("#contact-email").val();
  var comments = $("#contact-comments").val();
  var entry = {"name": name, "email": email, "comments": comments};
  contactList.push(entry);
  console.log(contactList);
  $("#contact-response").text("Thank you, " + name + ", for your comments." +
    " We'll never share your email with anyone else." +
    " We will get back to you shortly.");
}

// weightList includes 1 sample entry
var weightList = {
  "test@gmail.com": {
    "weights": [140],
    "dates": ["2017-05-19"],
    "weightUnits": ["pounds"]
  }
}

function sendWeight() {
  var email = $("#weight-email").val();
  var userNumber = parseFloat($("#weight-number").val());
  var userDate = $("#weight-date").val();
  var weightUnit = $("input[name=weightUnits]:checked").val();

  if (weightList[email]) {
    weightList[email]["weights"].push(userNumber);
    weightList[email]["dates"].push(userDate);
    weightList[email]["weightUnits"].push(weightUnit);
  } else {
    weightList[email] = {"weights": [userNumber],
      "dates": [userDate],
      "weightUnits": [weightUnit]};
  }
  console.log(weightList);

  var userTable = "<table>" +
    "<caption>" + email + "</caption>" +
    "<tr><th>Date</th>" +
    "<th>Weight</th>" +
    "<th>Unit</th></tr>";
  for (var i=0; i< weightList[email]["dates"].length; i++) {
    userTable += ("<tr><td>" + weightList[email]["dates"][i] + "</td><td>"
     + weightList[email]["weights"][i] + "</td><td>" +
     weightList[email]["weightUnits"][i] + "</td>");
  }
  userTable += "</table>";

  $("#weight-response").html(userTable);
};
