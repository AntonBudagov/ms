(function(appl) {
    "use strict";
    console.log("main.js");
    $("#leftMenu a").click(function() {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active");
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;
        closest_ul.find("ul").slideUp(function() {
            if (++count == closest_ul.find("ul").length) parallel_active_links.removeClass("active");
        });
        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");
        }
    });
    var sliderNews = {
        nav: true,
        items: 3,
        dots: false,
        center: false,
        mouseDrag: true
    };
    $("#sliderNews").owlCarousel(sliderNews);
})(window);
(function(rippleBtn) {
    "use strict";
    console.log("rippleBtn");
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiY2xpY2siLCJsaW5rIiwidGhpcyIsImNsb3Nlc3RfdWwiLCJjbG9zZXN0IiwicGFyYWxsZWxfYWN0aXZlX2xpbmtzIiwiZmluZCIsImNsb3Nlc3RfbGkiLCJsaW5rX3N0YXR1cyIsImhhc0NsYXNzIiwiY291bnQiLCJzbGlkZVVwIiwibGVuZ3RoIiwicmVtb3ZlQ2xhc3MiLCJjaGlsZHJlbiIsInNsaWRlRG93biIsImFkZENsYXNzIiwic2xpZGVyTmV3cyIsIm5hdiIsIml0ZW1zIiwiZG90cyIsImNlbnRlciIsIm1vdXNlRHJhZyIsIm93bENhcm91c2VsIiwid2luZG93IiwicmlwcGxlQnRuIl0sIm1hcHBpbmdzIjoiQ0FBQSxTQUFXQTtJQUNUO0lBRUFDLFFBQVFDLElBQUk7SUFNWkMsRUFBRSxlQUFlQyxNQUFNO1FBQ3JCLElBQUlDLE9BQU9GLEVBQUVHO1FBRWIsSUFBSUMsYUFBYUYsS0FBS0csUUFBUTtRQUM5QixJQUFJQyx3QkFBd0JGLFdBQVdHLEtBQUs7UUFDNUMsSUFBSUMsYUFBYU4sS0FBS0csUUFBUTtRQUM5QixJQUFJSSxjQUFjRCxXQUFXRSxTQUFTO1FBQ3RDLElBQUlDLFFBQVE7UUFFWlAsV0FBV0csS0FBSyxNQUFNSyxRQUFRO1lBQzFCLE1BQU1ELFNBQVNQLFdBQVdHLEtBQUssTUFBTU0sUUFDakNQLHNCQUFzQlEsWUFBWTs7UUFHMUMsS0FBS0wsYUFBYTtZQUNkRCxXQUFXTyxTQUFTLE1BQU1DO1lBQzFCUixXQUFXUyxTQUFTOzs7SUFXNUIsSUFBSUM7UUFDRUMsS0FBTTtRQUNOQyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsUUFBUTtRQUNSQyxXQUFXOztJQUVidkIsRUFBRSxlQUFld0IsWUFBWU47R0FJOUJPO0NDL0NILFNBQVdDO0lBQ1Q7SUFFRjVCLFFBQVFDLElBQUk7R0FHVDBCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKGFwcGwpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGNvbnNvbGUubG9nKCdtYWluLmpzJylcbiAgLypcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgTGVmdCBNZW51XG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAqL1xuICAkKFwiI2xlZnRNZW51IGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpbmsgPSAkKHRoaXMpO1xuXG4gICAgdmFyIGNsb3Nlc3RfdWwgPSBsaW5rLmNsb3Nlc3QoXCJ1bFwiKTtcbiAgICB2YXIgcGFyYWxsZWxfYWN0aXZlX2xpbmtzID0gY2xvc2VzdF91bC5maW5kKFwiLmFjdGl2ZVwiKVxuICAgIHZhciBjbG9zZXN0X2xpID0gbGluay5jbG9zZXN0KFwibGlcIik7XG4gICAgdmFyIGxpbmtfc3RhdHVzID0gY2xvc2VzdF9saS5oYXNDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB2YXIgY291bnQgPSAwO1xuXG4gICAgY2xvc2VzdF91bC5maW5kKFwidWxcIikuc2xpZGVVcChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCsrY291bnQgPT0gY2xvc2VzdF91bC5maW5kKFwidWxcIikubGVuZ3RoKVxuICAgICAgICAgICAgcGFyYWxsZWxfYWN0aXZlX2xpbmtzLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuXG4gICAgaWYgKCFsaW5rX3N0YXR1cykge1xuICAgICAgICBjbG9zZXN0X2xpLmNoaWxkcmVuKFwidWxcIikuc2xpZGVEb3duKCk7XG4gICAgICAgIGNsb3Nlc3RfbGkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcblxuICAvKlxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICBDYXJ1c2Vsc1xuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgKi9cblxuXG52YXIgc2xpZGVyTmV3cyA9IHtcbiAgICAgIG5hdiA6IHRydWUsXG4gICAgICBpdGVtczogMyxcbiAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgY2VudGVyOiBmYWxzZSxcbiAgICAgIG1vdXNlRHJhZzogdHJ1ZVxuICAgIH07XG4gICAgJCgnI3NsaWRlck5ld3MnKS5vd2xDYXJvdXNlbChzbGlkZXJOZXdzKTtcblxuXG5cbn0pKHdpbmRvdyk7XG4iLCIoZnVuY3Rpb24gKHJpcHBsZUJ0bikge1xuICAndXNlIHN0cmljdCc7XG5cbmNvbnNvbGUubG9nKCdyaXBwbGVCdG4nKTtcblxuXG59KSh3aW5kb3cpO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
