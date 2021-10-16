(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
    
document.addEventListener('contextmenu', event => event.preventDefault());

$(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
    else if(event.ctrlKey && event.shiftKey && event.keyCode==73)
    {
        return false;
    }
    else if(event.ctrlKey && event.keyCode==73)
    {
        return false;
    }
    else if(event.ctrlKey && event.keyCode==85)
    {
        return false;
    }
});
    
function disableselect(e) {
    return false;
}

function reEnable() {
    return true;
}

document.onselectstart = new Function("return false");

if (window.sidebar) {
    document.onmousedown = disableselect;
    document.onclick = reEnable;
}    



})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);

!function(t){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],t):t("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(t){"use strict";function e(e){return!e||void 0!==e.allowPageScroll||void 0===e.swipe&&void 0===e.swipeStatus||(e.allowPageScroll=u),void 0!==e.click&&void 0===e.tap&&(e.tap=e.click),e||(e={}),e=t.extend({},t.fn.swipe.defaults,e),this.each(function(){var i=t(this),r=i.data(k);r||(r=new n(this,e),i.data(k,r))})}function n(e,n){function M(e){if(!(ut()||t(e.target).closest(n.excludedElements,Yt).length>0)){var i=e.originalEvent?e.originalEvent:e;if(!i.pointerType||"mouse"!=i.pointerType||0!=n.fallbackToMouseEvents){var r,a=i.touches,o=a?a[0]:i;return Ft=T,a?Wt=a.length:!1!==n.preventDefaultEvents&&e.preventDefault(),jt=0,Ct=null,Nt=null,zt=null,Ut=0,Xt=0,Qt=0,Ht=1,qt=0,Vt=mt(),lt(),dt(0,o),!a||Wt===n.fingers||n.fingers===v||z()?(Zt=St(),2==Wt&&(dt(1,a[1]),Xt=Qt=bt(Gt[0].start,Gt[1].start)),(n.swipeStatus||n.pinchStatus)&&(r=j(i,Ft))):r=!1,!1===r?(Ft=_,j(i,Ft),r):(n.hold&&(ee=setTimeout(t.proxy(function(){Yt.trigger("hold",[i.target]),n.hold&&(r=n.hold.call(Yt,i,i.target))},this),n.longTapThreshold)),ct(!0),null)}}}function D(t){var e=t.originalEvent?t.originalEvent:t;if(Ft!==x&&Ft!==_&&!st()){var i,r=e.touches,a=r?r[0]:e,o=ht(a);if(Bt=St(),r&&(Wt=r.length),n.hold&&clearTimeout(ee),Ft=y,2==Wt&&(0==Xt?(dt(1,r[1]),Xt=Qt=bt(Gt[0].start,Gt[1].start)):(ht(r[1]),Qt=bt(Gt[0].end,Gt[1].end),zt=yt(Gt[0].end,Gt[1].end)),Ht=Tt(Xt,Qt),qt=Math.abs(Xt-Qt)),Wt===n.fingers||n.fingers===v||!r||z()){if(Ct=Et(o.start,o.end),Nt=Et(o.last,o.end),H(t,Nt),jt=xt(o.start,o.end),Ut=vt(),pt(Ct,jt),i=j(e,Ft),!n.triggerOnTouchEnd||n.triggerOnTouchLeave){var l=!0;if(n.triggerOnTouchLeave){var s=Ot(this);l=kt(o.end,s)}!n.triggerOnTouchEnd&&l?Ft=R(y):n.triggerOnTouchLeave&&!l&&(Ft=R(x)),Ft!=_&&Ft!=x||j(e,Ft)}}else Ft=_,j(e,Ft);!1===i&&(Ft=_,j(e,Ft))}}function P(t){var e=t.originalEvent?t.originalEvent:t,i=e.touches;if(i){if(i.length&&!st())return ot(e),!0;if(i.length&&st())return!0}return st()&&(Wt=Kt),Bt=St(),Ut=vt(),U()||!N()?(Ft=_,j(e,Ft)):n.triggerOnTouchEnd||!1===n.triggerOnTouchEnd&&Ft===y?(!1!==n.preventDefaultEvents&&!1!==t.cancelable&&t.preventDefault(),Ft=x,j(e,Ft)):!n.triggerOnTouchEnd&&B()?(Ft=x,C(e,Ft,f)):Ft===y&&(Ft=_,j(e,Ft)),ct(!1),null}function A(){Wt=0,Bt=0,Zt=0,Xt=0,Qt=0,Ht=1,lt(),ct(!1)}function L(t){var e=t.originalEvent?t.originalEvent:t;n.triggerOnTouchLeave&&(Ft=R(x),j(e,Ft))}function I(){Yt.unbind(Pt,M),Yt.unbind(Rt,A),Yt.unbind(At,D),Yt.unbind(Lt,P),It&&Yt.unbind(It,L),ct(!1)}function R(t){var e=t,i=Q(),r=N(),a=U();return!i||a?e=_:!r||t!=y||n.triggerOnTouchEnd&&!n.triggerOnTouchLeave?!r&&t==x&&n.triggerOnTouchLeave&&(e=_):e=x,e}function j(t,e){var n,i=t.touches;return(W()||F())&&(n=C(t,e,d)),(V()||z())&&!1!==n&&(n=C(t,e,h)),rt()&&!1!==n?n=C(t,e,p):at()&&!1!==n?n=C(t,e,g):it()&&!1!==n&&(n=C(t,e,f)),e===_&&A(t),e===x&&(i?i.length||A(t):A(t)),n}function C(e,u,c){var m;if(c==d){if(Yt.trigger("swipeStatus",[u,Ct||null,jt||0,Ut||0,Wt,Gt,Nt]),n.swipeStatus&&!1===(m=n.swipeStatus.call(Yt,e,u,Ct||null,jt||0,Ut||0,Wt,Gt,Nt)))return!1;if(u==x&&Y()){if(clearTimeout(te),clearTimeout(ee),Yt.trigger("swipe",[Ct,jt,Ut,Wt,Gt,Nt]),n.swipe&&!1===(m=n.swipe.call(Yt,e,Ct,jt,Ut,Wt,Gt,Nt)))return!1;switch(Ct){case i:Yt.trigger("swipeLeft",[Ct,jt,Ut,Wt,Gt,Nt]),n.swipeLeft&&(m=n.swipeLeft.call(Yt,e,Ct,jt,Ut,Wt,Gt,Nt));break;case r:Yt.trigger("swipeRight",[Ct,jt,Ut,Wt,Gt,Nt]),n.swipeRight&&(m=n.swipeRight.call(Yt,e,Ct,jt,Ut,Wt,Gt,Nt));break;case a:Yt.trigger("swipeUp",[Ct,jt,Ut,Wt,Gt,Nt]),n.swipeUp&&(m=n.swipeUp.call(Yt,e,Ct,jt,Ut,Wt,Gt,Nt));break;case o:Yt.trigger("swipeDown",[Ct,jt,Ut,Wt,Gt,Nt]),n.swipeDown&&(m=n.swipeDown.call(Yt,e,Ct,jt,Ut,Wt,Gt,Nt))}}}if(c==h){if(Yt.trigger("pinchStatus",[u,zt||null,qt||0,Ut||0,Wt,Ht,Gt]),n.pinchStatus&&!1===(m=n.pinchStatus.call(Yt,e,u,zt||null,qt||0,Ut||0,Wt,Ht,Gt)))return!1;if(u==x&&q())switch(zt){case l:Yt.trigger("pinchIn",[zt||null,qt||0,Ut||0,Wt,Ht,Gt]),n.pinchIn&&(m=n.pinchIn.call(Yt,e,zt||null,qt||0,Ut||0,Wt,Ht,Gt));break;case s:Yt.trigger("pinchOut",[zt||null,qt||0,Ut||0,Wt,Ht,Gt]),n.pinchOut&&(m=n.pinchOut.call(Yt,e,zt||null,qt||0,Ut||0,Wt,Ht,Gt))}}return c==f?u!==_&&u!==x||(clearTimeout(te),clearTimeout(ee),J()&&!tt()?($t=St(),te=setTimeout(t.proxy(function(){$t=null,Yt.trigger("tap",[e.target]),n.tap&&(m=n.tap.call(Yt,e,e.target))},this),n.doubleTapThreshold)):($t=null,Yt.trigger("tap",[e.target]),n.tap&&(m=n.tap.call(Yt,e,e.target)))):c==p?u!==_&&u!==x||(clearTimeout(te),clearTimeout(ee),$t=null,Yt.trigger("doubletap",[e.target]),n.doubleTap&&(m=n.doubleTap.call(Yt,e,e.target))):c==g&&(u!==_&&u!==x||(clearTimeout(te),$t=null,Yt.trigger("longtap",[e.target]),n.longTap&&(m=n.longTap.call(Yt,e,e.target)))),m}function N(){var t=!0;return null!==n.threshold&&(t=jt>=n.threshold),t}function U(){var t=!1;return null!==n.cancelThreshold&&null!==Ct&&(t=gt(Ct)-jt>=n.cancelThreshold),t}function X(){return null===n.pinchThreshold||qt>=n.pinchThreshold}function Q(){return!(n.maxTimeThreshold&&Ut>=n.maxTimeThreshold)}function H(t,e){if(!1!==n.preventDefaultEvents)if(n.allowPageScroll===u)t.preventDefault();else{var l=n.allowPageScroll===c;switch(e){case i:(n.swipeLeft&&l||!l&&n.allowPageScroll!=m)&&t.preventDefault();break;case r:(n.swipeRight&&l||!l&&n.allowPageScroll!=m)&&t.preventDefault();break;case a:(n.swipeUp&&l||!l&&n.allowPageScroll!=w)&&t.preventDefault();break;case o:(n.swipeDown&&l||!l&&n.allowPageScroll!=w)&&t.preventDefault()}}}function q(){var t=G(),e=Z(),n=X();return t&&e&&n}function z(){return!!(n.pinchStatus||n.pinchIn||n.pinchOut)}function V(){return!(!q()||!z())}function Y(){var t=Q(),e=N(),n=G(),i=Z();return!U()&&i&&n&&e&&t}function F(){return!!(n.swipe||n.swipeStatus||n.swipeLeft||n.swipeRight||n.swipeUp||n.swipeDown)}function W(){return!(!Y()||!F())}function G(){return Wt===n.fingers||n.fingers===v||!E}function Z(){return 0!==Gt[0].end.x}function B(){return!!n.tap}function J(){return!!n.doubleTap}function K(){return!!n.longTap}function $(){if(null==$t)return!1;var t=St();return J()&&t-$t<=n.doubleTapThreshold}function tt(){return $()}function et(){return(1===Wt||!E)&&(isNaN(jt)||jt<n.threshold)}function nt(){return Ut>n.longTapThreshold&&jt<b}function it(){return!(!et()||!B())}function rt(){return!(!$()||!J())}function at(){return!(!nt()||!K())}function ot(t){Jt=St(),Kt=t.touches.length+1}function lt(){Jt=0,Kt=0}function st(){var t=!1;if(Jt){St()-Jt<=n.fingerReleaseThreshold&&(t=!0)}return t}function ut(){return!(!0!==Yt.data(k+"_intouch"))}function ct(t){Yt&&(!0===t?(Yt.bind(At,D),Yt.bind(Lt,P),It&&Yt.bind(It,L)):(Yt.unbind(At,D,!1),Yt.unbind(Lt,P,!1),It&&Yt.unbind(It,L,!1)),Yt.data(k+"_intouch",!0===t))}function dt(t,e){var n={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return n.start.x=n.last.x=n.end.x=e.pageX||e.clientX,n.start.y=n.last.y=n.end.y=e.pageY||e.clientY,Gt[t]=n,n}function ht(t){var e=void 0!==t.identifier?t.identifier:0,n=ft(e);return null===n&&(n=dt(e,t)),n.last.x=n.end.x,n.last.y=n.end.y,n.end.x=t.pageX||t.clientX,n.end.y=t.pageY||t.clientY,n}function ft(t){return Gt[t]||null}function pt(t,e){t!=u&&(e=Math.max(e,gt(t)),Vt[t].distance=e)}function gt(t){if(Vt[t])return Vt[t].distance}function mt(){var t={};return t[i]=wt(i),t[r]=wt(r),t[a]=wt(a),t[o]=wt(o),t}function wt(t){return{direction:t,distance:0}}function vt(){return Bt-Zt}function bt(t,e){var n=Math.abs(t.x-e.x),i=Math.abs(t.y-e.y);return Math.round(Math.sqrt(n*n+i*i))}function Tt(t,e){return(e/t*1).toFixed(2)}function yt(){return Ht<1?s:l}function xt(t,e){return Math.round(Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)))}function _t(t,e){var n=t.x-e.x,i=e.y-t.y,r=Math.atan2(i,n),a=Math.round(180*r/Math.PI);return a<0&&(a=360-Math.abs(a)),a}function Et(t,e){if(Mt(t,e))return u;var n=_t(t,e);return n<=45&&n>=0?i:n<=360&&n>=315?i:n>=135&&n<=225?r:n>45&&n<135?o:a}function St(){return(new Date).getTime()}function Ot(e){e=t(e);var n=e.offset();return{left:n.left,right:n.left+e.outerWidth(),top:n.top,bottom:n.top+e.outerHeight()}}function kt(t,e){return t.x>e.left&&t.x<e.right&&t.y>e.top&&t.y<e.bottom}function Mt(t,e){return t.x==e.x&&t.y==e.y}var n=t.extend({},n),Dt=E||O||!n.fallbackToMouseEvents,Pt=Dt?O?S?"MSPointerDown":"pointerdown":"touchstart":"mousedown",At=Dt?O?S?"MSPointerMove":"pointermove":"touchmove":"mousemove",Lt=Dt?O?S?"MSPointerUp":"pointerup":"touchend":"mouseup",It=Dt?O?"mouseleave":null:"mouseleave",Rt=O?S?"MSPointerCancel":"pointercancel":"touchcancel",jt=0,Ct=null,Nt=null,Ut=0,Xt=0,Qt=0,Ht=1,qt=0,zt=0,Vt=null,Yt=t(e),Ft="start",Wt=0,Gt={},Zt=0,Bt=0,Jt=0,Kt=0,$t=0,te=null,ee=null;try{Yt.bind(Pt,M),Yt.bind(Rt,A)}catch(e){t.error("events not supported "+Pt+","+Rt+" on jQuery.swipe")}this.enable=function(){return this.disable(),Yt.bind(Pt,M),Yt.bind(Rt,A),Yt},this.disable=function(){return I(),Yt},this.destroy=function(){I(),Yt.data(k,null),Yt=null},this.option=function(e,i){if("object"==typeof e)n=t.extend(n,e);else if(void 0!==n[e]){if(void 0===i)return n[e];n[e]=i}else{if(!e)return n;t.error("Option "+e+" does not exist on jQuery.swipe.options")}return null}}var i="left",r="right",a="up",o="down",l="in",s="out",u="none",c="auto",d="swipe",h="pinch",f="tap",p="doubletap",g="longtap",m="horizontal",w="vertical",v="all",b=10,T="start",y="move",x="end",_="cancel",E="ontouchstart"in window,S=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!E,O=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!E,k="TouchSwipe",M={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};t.fn.swipe=function(n){var i=t(this),r=i.data(k);if(r&&"string"==typeof n){if(r[n])return r[n].apply(r,Array.prototype.slice.call(arguments,1));t.error("Method "+n+" does not exist on jQuery.swipe")}else if(r&&"object"==typeof n)r.option.apply(r,arguments);else if(!(r||"object"!=typeof n&&n))return e.apply(this,arguments);return i},t.fn.swipe.version="1.6.18",t.fn.swipe.defaults=M,t.fn.swipe.phases={PHASE_START:T,PHASE_MOVE:y,PHASE_END:x,PHASE_CANCEL:_},t.fn.swipe.directions={LEFT:i,RIGHT:r,UP:a,DOWN:o,IN:l,OUT:s},t.fn.swipe.pageScroll={NONE:u,HORIZONTAL:m,VERTICAL:w,AUTO:c},t.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:v}}),function(t){function e(e){e.each(function(){var e=t(this),n=e.data("animation");e.addClass(n).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass(n)})})}t(".carousel").each(function(){function e(){function e(e,r,s,u){if(t("#"+n).css({display:"block"}),!0===e)var c=r;else c=l;if(""!==c&&c>0&&c<=o){if(window.matchMedia(s).matches){t(a).each(function(){var e=t(this);e.find(".cloneditems").remove();for(var n=1;n<c;n++)(e=e.next()).length||(e=t(this).siblings(":first")),e.children(":first-child").children(":first-child").clone().addClass("cloneditem-"+n+" cloneditems").appendTo(t(this).children(":first-child"))});var d=100/c+"%";t(a).on("slideIsChanging",function(){i.find(".active.carousel-item-left, .carousel-item-prev").css({"-webkit-transform":"translateX(-"+d+")",transform:"translateX(-"+d+")","-webkit-transform":"-webkit-translate3d(-"+d+",0,0)",transform:"translate3d(-"+d+",0,0)"}),i.find(".carousel-item-next, .active.carousel-item-right").css({"-webkit-transform":"translateX("+d+")",transform:"translateX("+d+")","-webkit-transform":"-webkit-translate3d("+d+",0,0)",transform:"translate3d("+d+",0,0)"}),i.find(".carousel-item-next.carousel-item-left, .carousel-item-prev.carousel-item-right").css({"-webkit-transform":"translateX(0)",transform:"translateX(0)","-webkit-transform":"-webkit-translate3d(0,0,0)",transform:"translate3d(0,0,0)"})})}}else{var h="In Slider Id : #"+n;h+="\n",h+="You are assigning the value ("+c+") to the (data-"+u+") attribute. Which is greater than numbers of carousel-item those you are creating ("+o+")",h+="\n\n",h+="Please make sure the value of (data-"+u+") should be <= to numbers of carousel-item ("+o+").",h+="\n\n",h+="Note : The values should not be 0 or empty And also (Positive Integers only)",alert(h),t("#"+n).css({display:"none"})}}var n=i.attr("id"),a=i.find(".carousel-item"),o=t(a).length,l=i.attr("data-column"),s=i.attr("data-m1200"),u=i[0].hasAttribute("data-m1200"),c=i.attr("data-m992"),d=i[0].hasAttribute("data-m992"),h=i.attr("data-m768"),f=i[0].hasAttribute("data-m768"),p=i.attr("data-m576"),g=i[0].hasAttribute("data-m576");e(r,l,"(min-width: 1201px)","column"),e(u,s,"(min-width: 993px) and (max-width: 1200px)","m1200"),e(d,c,"(min-width: 769px) and (max-width: 992px)","m992"),e(f,h,"(min-width: 577px) and (max-width: 768px)","m768"),e(g,p,"(max-width: 576px)","m576")}var n,i=t(this),r=i[0].hasAttribute("data-column");!0===r&&(n=jQuery.fn.addClass,jQuery.fn.addClass=function(){var t=n.apply(this,arguments);return jQuery(this).trigger("slideIsChanging"),t},e(),t(window).resize(function(){clearTimeout(i.id),i.id=setTimeout(e,100)}))});var n=t(".carousel"),i=n.find(".carousel-item:first").find("[data-animation ^= 'animated']");n.carousel(),e(i),n.on("slide.bs.carousel",function(n){e(t(n.relatedTarget).find("[data-animation ^= 'animated']"))});for(var r=t(".carousel"),a=r.length,o=0;o<a;o++){t.fn.carousel.Constructor.TRANSITION_DURATION=9999999;var l=r.eq(o).data("duration"),s=t("[data-duration="+l+"] > .carousel-inner > .carousel-item");t(s).each(function(){t(this).css({"-webkit-transition-duration":l+"ms","-moz-transition-duration":l+"ms","transition-duration":l+"ms"})})}var u=t(".carousel").find("[class=mouse_wheel_y]");t(".carousel").find("[class=mouse_wheel_xy]")&&t(".mouse_wheel_xy").bind("mousewheel",function(e){e.originalEvent.wheelDelta/120>0?t(this).carousel("prev"):t(this).carousel("next")}),u&&t(".mouse_wheel_y").bind("mousewheel",function(e){e.originalEvent.wheelDelta/120>0&&t(this).carousel("next")});var c=t(".carousel").find("[class=swipe_y]"),d=t(".carousel").find("[class=swipe_x]");c&&t(".swipe_y .carousel-inner").swipe({swipeUp:function(e,n,i,r,a){t(this).parent().carousel("next")},swipeDown:function(){t(this).parent().carousel("prev")},threshold:0}),d&&t(".swipe_x .carousel-inner").swipe({swipeLeft:function(e,n,i,r,a){t(this).parent().carousel("next")},swipeRight:function(){t(this).parent().carousel("prev")},threshold:0});var h=0,f=0,p=t(".carousel").find("[class=thumb_scroll_y]"),g=t(".carousel").find("[class=thumb_scroll_x]");p&&t(".thumb_scroll_y").on("slid.bs.carousel",function(){var e=-1*t(".thumb_scroll_y .carousel-indicators li:first").position().top+t(".thumb_scroll_y .carousel-indicators li:last").position().top+t(".thumb_scroll_y .carousel-indicators li:last").height(),n=t(".thumb_scroll_y .carousel-indicators li.active").position().top+t(".thumb_scroll_y .carousel-indicators li.active").height()/1+h-t(".thumb_scroll_y .carousel-indicators").height()/1;n<0&&(n=0),n>e-t(".thumb_scroll_y .carousel-indicators").height()&&(n=e-t(".thumb_scroll_y .carousel-indicators").height()),t(".thumb_scroll_y .carousel-indicators").animate({scrollTop:n},800),h=n}),g&&t(".thumb_scroll_x").on("slid.bs.carousel",function(){var e=-1*t(".thumb_scroll_x .carousel-indicators li:first").position().left+t(".thumb_scroll_x .carousel-indicators li:last").position().left+t(".thumb_scroll_x .carousel-indicators li:last").width(),n=t(".thumb_scroll_x .carousel-indicators li.active").position().left+t(".thumb_scroll_x .carousel-indicators li.active").width()/1+f-t(".thumb_scroll_x .carousel-indicators").width()/1;n<0&&(n=0),n>e-t(".thumb_scroll_x .carousel-indicators").width()&&(n=e-t(".thumb_scroll_x .carousel-indicators").width()),t(".thumb_scroll_x .carousel-indicators").animate({scrollLeft:n},800),f=n}),t(".pauseVideo").on("slide.bs.carousel",function(){t("video").each(function(){this.pause()})}),t(".onlinePauseVideo").on("slide.bs.carousel",function(e){t(e.target).find("iframe").each(function(e,n){t(n).attr("src",t(n).attr("src"))})});var m=t(".carousel.ps_full_screen > .carousel-inner > .carousel-item"),w=t(window).height();m.eq(0).addClass("active"),m.height(w),m.addClass("ps_full_s"),t(".carousel.ps_full_screen > .carousel-inner > .carousel-item > img").each(function(){var e=t(this).attr("src");t(this).parent().css({"background-image":"url("+e+")"}),t(this).remove()}),t(window).on("resize",function(){w=t(window).height(),m.height(w)})}(jQuery);


window.onscroll = function scrollprog() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

window.onload = function requestUserRepos(){
    const xhr = new XMLHttpRequest();
    const url = `https://api.github.com/users/mr-white-hat/repos`;
    xhr.open('GET', url, true);
    xhr.onload = function () {
        const data = JSON.parse(this.response);
        var Count = 0;
        let ul = document.getElementById('order');
        let ordlist = document.getElementById('order-list');
        for (let i in data) {
            let li = document.createElement('li');
            var att = document.createAttribute('data-target');
            att.value = '#fw_al_007';
            li.setAttributeNode(att);
            var att = document.createAttribute('data-slide-to');
            att.value = Count;
            li.setAttributeNode(att);
            let div = document.createElement('div');
            var att = document.createAttribute('class');
            att.value = 'carousel-item';
            div.setAttributeNode(att);
            if (Count == 0) {
                var att = document.createAttribute('class');
                att.value = 'active';
                li.setAttributeNode(att);
                var att = document.createAttribute('class');
                att.value = 'carousel-item active';
                div.setAttributeNode(att);
            }
            div.innerHTML = (`
                <img src="https://raw.githubusercontent.com/mr-white-hat/${data[i].name}/master/Proj.jpg" alt="fw_al_007_${Count+1}">
                <div class="fw_al_007_slide">
                    <h3 data-animation="animated flipInX"> GITHUB </h3>
                    <h1 data-animation="animated flipInX"><span>${data[i].name}</h1>
                    <p data-animation="animated flipInX">${data[i].description}</p>
                    <a href="${data[i].html_url}" data-animation="animated flipInX" target = "_blank">View Code</a>
                </div>
            `);
            Count += 1;
            ul.appendChild(li);
            ordlist.appendChild(div);
        }
    }
    xhr.send();
}