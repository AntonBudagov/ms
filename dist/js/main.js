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
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
                dots: true
            },
            768: {
                items: 1,
                nav: false,
                loop: true,
                dots: true
            },
            1e3: {
                items: 2,
                loop: true,
                nav: false
            },
            1200: {
                items: 3,
                loop: false,
                nav: true,
                dots: false
            }
        }
    };
    $("#sliderNews").owlCarousel(sliderNews);
    var instagramPhoto = {
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: true,
                dots: true
            },
            768: {
                items: 1,
                nav: false,
                loop: true,
                dots: true
            },
            1e3: {
                items: 3,
                loop: true,
                nav: false
            },
            1200: {
                items: 4,
                loop: false,
                nav: true,
                dots: false
            }
        }
    };
    $("#instagramPhoto").owlCarousel(instagramPhoto);
})(window);
(function(rippleBtn) {
    "use strict";
    console.log("rippleBtn");
})(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJyaXBwbGVCdXR0b24uanMiXSwibmFtZXMiOlsiYXBwbCIsImNvbnNvbGUiLCJsb2ciLCIkIiwiY2xpY2siLCJsaW5rIiwidGhpcyIsImNsb3Nlc3RfdWwiLCJjbG9zZXN0IiwicGFyYWxsZWxfYWN0aXZlX2xpbmtzIiwiZmluZCIsImNsb3Nlc3RfbGkiLCJsaW5rX3N0YXR1cyIsImhhc0NsYXNzIiwiY291bnQiLCJzbGlkZVVwIiwibGVuZ3RoIiwicmVtb3ZlQ2xhc3MiLCJjaGlsZHJlbiIsInNsaWRlRG93biIsImFkZENsYXNzIiwic2xpZGVyTmV3cyIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsInJlc3BvbnNpdmUiLCIwIiwiaXRlbXMiLCJuYXYiLCJsb29wIiwiZG90cyIsIjc2OCIsIjEwMDAiLCIxMjAwIiwib3dsQ2Fyb3VzZWwiLCJpbnN0YWdyYW1QaG90byIsIndpbmRvdyIsInJpcHBsZUJ0biJdLCJtYXBwaW5ncyI6IkNBQUEsU0FBV0E7SUFDVDtJQUVBQyxRQUFRQyxJQUFJO0lBTVpDLEVBQUUsZUFBZUMsTUFBTTtRQUNyQixJQUFJQyxPQUFPRixFQUFFRztRQUViLElBQUlDLGFBQWFGLEtBQUtHLFFBQVE7UUFDOUIsSUFBSUMsd0JBQXdCRixXQUFXRyxLQUFLO1FBQzVDLElBQUlDLGFBQWFOLEtBQUtHLFFBQVE7UUFDOUIsSUFBSUksY0FBY0QsV0FBV0UsU0FBUztRQUN0QyxJQUFJQyxRQUFRO1FBRVpQLFdBQVdHLEtBQUssTUFBTUssUUFBUTtZQUMxQixNQUFNRCxTQUFTUCxXQUFXRyxLQUFLLE1BQU1NLFFBQ2pDUCxzQkFBc0JRLFlBQVk7O1FBRzFDLEtBQUtMLGFBQWE7WUFDZEQsV0FBV08sU0FBUyxNQUFNQztZQUMxQlIsV0FBV1MsU0FBUzs7O0lBVzVCLElBQUlDO1FBQ0FDLFFBQU87UUFDUEMsaUJBQWdCO1FBQ2hCQztZQUNFQztnQkFDRUMsT0FBTTtnQkFDTkMsS0FBSTtnQkFDSkMsTUFBSztnQkFDTEMsTUFBSzs7WUFFUEM7Z0JBQ0lKLE9BQU07Z0JBQ05DLEtBQUk7Z0JBQ0pDLE1BQUs7Z0JBQ0xDLE1BQUs7O1lBRVRFO2dCQUNJTCxPQUFNO2dCQUNORSxNQUFLO2dCQUNMRCxLQUFJOztZQUVSSztnQkFDSU4sT0FBTTtnQkFDTkUsTUFBSztnQkFDTEQsS0FBSTtnQkFDSkUsTUFBSzs7OztJQUlYMUIsRUFBRSxlQUFlOEIsWUFBWVo7SUFFakMsSUFBSWE7UUFDQVosUUFBTztRQUNQQyxpQkFBZ0I7UUFDaEJDO1lBQ0VDO2dCQUNFQyxPQUFNO2dCQUNOQyxLQUFJO2dCQUNKQyxNQUFLO2dCQUNMQyxNQUFLOztZQUVQQztnQkFDRUosT0FBTTtnQkFDTkMsS0FBSTtnQkFDSkMsTUFBSztnQkFDTEMsTUFBSzs7WUFFUEU7Z0JBQ0VMLE9BQU07Z0JBQ05FLE1BQUs7Z0JBQ0xELEtBQUk7O1lBRU5LO2dCQUNFTixPQUFNO2dCQUNORSxNQUFLO2dCQUNMRCxLQUFJO2dCQUNKRSxNQUFLOzs7O0lBSVgxQixFQUFFLG1CQUFtQjhCLFlBQVlDO0dBRWhDQztDQ2xHSCxTQUFXQztJQUNUO0lBRUZuQyxRQUFRQyxJQUFJO0dBR1RpQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChhcHBsKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBjb25zb2xlLmxvZygnbWFpbi5qcycpXG4gIC8qXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgIExlZnQgTWVudVxuICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgKi9cbiAgJChcIiNsZWZ0TWVudSBhXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIHZhciBsaW5rID0gJCh0aGlzKTtcblxuICAgIHZhciBjbG9zZXN0X3VsID0gbGluay5jbG9zZXN0KFwidWxcIik7XG4gICAgdmFyIHBhcmFsbGVsX2FjdGl2ZV9saW5rcyA9IGNsb3Nlc3RfdWwuZmluZChcIi5hY3RpdmVcIilcbiAgICB2YXIgY2xvc2VzdF9saSA9IGxpbmsuY2xvc2VzdChcImxpXCIpO1xuICAgIHZhciBsaW5rX3N0YXR1cyA9IGNsb3Nlc3RfbGkuaGFzQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgdmFyIGNvdW50ID0gMDtcblxuICAgIGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLnNsaWRlVXAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgrK2NvdW50ID09IGNsb3Nlc3RfdWwuZmluZChcInVsXCIpLmxlbmd0aClcbiAgICAgICAgICAgIHBhcmFsbGVsX2FjdGl2ZV9saW5rcy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9KTtcblxuICAgIGlmICghbGlua19zdGF0dXMpIHtcbiAgICAgICAgY2xvc2VzdF9saS5jaGlsZHJlbihcInVsXCIpLnNsaWRlRG93bigpO1xuICAgICAgICBjbG9zZXN0X2xpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG5cbiAgLypcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgQ2FydXNlbHNcbiAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICovXG5cblxudmFyIHNsaWRlck5ld3MgPSB7XG4gICAgbWFyZ2luOjAsXG4gICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXG4gICAgcmVzcG9uc2l2ZTp7XG4gICAgICAwOntcbiAgICAgICAgaXRlbXM6MSxcbiAgICAgICAgbmF2OmZhbHNlLFxuICAgICAgICBsb29wOnRydWUsXG4gICAgICAgIGRvdHM6dHJ1ZVxuICAgICAgfSxcbiAgICAgIDc2ODp7XG4gICAgICAgICAgaXRlbXM6MSxcbiAgICAgICAgICBuYXY6ZmFsc2UsXG4gICAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICAgIGRvdHM6dHJ1ZSxcbiAgICAgIH0sXG4gICAgICAxMDAwOntcbiAgICAgICAgICBpdGVtczoyLFxuICAgICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgICBuYXY6ZmFsc2VcbiAgICAgIH0sXG4gICAgICAxMjAwOntcbiAgICAgICAgICBpdGVtczozLFxuICAgICAgICAgIGxvb3A6ZmFsc2UsXG4gICAgICAgICAgbmF2OnRydWUsXG4gICAgICAgICAgZG90czpmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgICAkKCcjc2xpZGVyTmV3cycpLm93bENhcm91c2VsKHNsaWRlck5ld3MpO1xuXG52YXIgaW5zdGFncmFtUGhvdG8gPSB7XG4gICAgbWFyZ2luOjAsXG4gICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXG4gICAgcmVzcG9uc2l2ZTp7XG4gICAgICAwOntcbiAgICAgICAgaXRlbXM6MSxcbiAgICAgICAgbmF2OmZhbHNlLFxuICAgICAgICBsb29wOnRydWUsXG4gICAgICAgIGRvdHM6dHJ1ZVxuICAgICAgfSxcbiAgICAgIDc2ODp7XG4gICAgICAgIGl0ZW1zOjEsXG4gICAgICAgIG5hdjpmYWxzZSxcbiAgICAgICAgbG9vcDp0cnVlLFxuICAgICAgICBkb3RzOnRydWUsXG4gICAgICB9LFxuICAgICAgMTAwMDp7XG4gICAgICAgIGl0ZW1zOjMsXG4gICAgICAgIGxvb3A6dHJ1ZSxcbiAgICAgICAgbmF2OmZhbHNlXG4gICAgICB9LFxuICAgICAgMTIwMDp7XG4gICAgICAgIGl0ZW1zOjQsXG4gICAgICAgIGxvb3A6ZmFsc2UsXG4gICAgICAgIG5hdjp0cnVlLFxuICAgICAgICBkb3RzOmZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9O1xuICAkKCcjaW5zdGFncmFtUGhvdG8nKS5vd2xDYXJvdXNlbChpbnN0YWdyYW1QaG90byk7XG5cbn0pKHdpbmRvdyk7XG4iLCIoZnVuY3Rpb24gKHJpcHBsZUJ0bikge1xuICAndXNlIHN0cmljdCc7XG5cbmNvbnNvbGUubG9nKCdyaXBwbGVCdG4nKTtcblxuXG59KSh3aW5kb3cpO1xuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
