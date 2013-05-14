
               $(document).ready(
                function(){
                    $("#banner_slider").carouFredSel(
                            {"auto":{"play":true,duration:1000,pauseOnHover: "resume"}, pagination : {

                        container: ".page-btn",
                        anchorBuilder: function(nr) {
                        return "<div class='dot'><div class='preview'>" + previewContent[nr] + "</div>&nbsp;</div>";

                  }
                     
                     
                  },
                 
                 infinite: false,
                  items: {
                   visible: 1
                  },
                  prev: ".left_btn",
                  next: ".right_btn"
                  }
                 );
                }
               );