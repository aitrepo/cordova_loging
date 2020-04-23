var app = {
    // Application Constructor
    initialize: function () {

        // Cordova Specific Events
        // DeviceReady = Main
        document.addEventListener('deviceready', this.devicereadyListener.bind(this), false);
        // Whe user move to another  application
        document.addEventListener('pause', this.pauseListner.bind(this), false);
        // When user returns to the applicaion
        document.addEventListener('resume', this.resumeListner.bind(this), false);


        // Application Events

        // Listen to login btn
        $( "#login_btn" ).click(this.handleLogin);

    },


    handleLogin: function() {
       
        // validate user based on un & pw

        if($('#username').val() == "test" && $("#password").val() =="test"){
           

            // hide login 
            $('#login_page').addClass("inactive_page");
            // display welcom
            $('#welcom_page').removeClass("inactive_page");

            $( ".welcom_msg" ).text("Welcom "+ $('#username').val() );

        }else{
            alert("try again");
        }
    },

    devicereadyListener: function () {
       
        
        // Load the 1st page of my appliation : login_page

       // alert("est")
        $('#login_page').removeClass("inactive_page");

        // hide the rest of the pages


    },


    pauseListner: function(){
        alert("Application is paused");
        // save state 
    },


    resumeListner: function(){
        alert("Application is resumed");
        // load the saved state & update the UI
    }


};

app.initialize();