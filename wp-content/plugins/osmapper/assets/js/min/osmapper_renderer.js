!function(a){function e(){var a=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}function o(o,t,i){let n,r=i.params.holderID,s=[],p=[];if(t.pin)var l=L.icon({iconUrl:t.pin,iconSize:[38,38],popupAnchor:[-3,-20]});n=void 0===t.layer?"//basemaps.cartocdn.com/light_all/":t.layer,t.map_height&&a("#"+r).css({height:t.map_height+"px"});let c=new L.TileLayer(n+"{z}/{x}/{y}.png",{attribution:'<a href="https://b4after.pl/osmapper?utm_source='+window.location.href+'&utm_medium=map_contributors&utm_campaign=OSMapper">Before After </a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),m=new L.Map(r,{center:[52.3735144,16.9020508],scrollWheelZoom:"No"!==t.zoom_on_scroll,tap:!1,dragging:!e(),layers:[c]});a.each(o,function(e,o){let t=o.row_id;void 0===t&&(t=a('input[data-name="row_id"]').attr("id"));let n=a("#"+t).siblings('input[data-name="latitude"]').attr("id"),r=a("#"+t).siblings('input[data-name="longitude"]').attr("id");a(this);if(o.pin)var c=L.icon({iconUrl:o.pin,iconSize:[38,38],popupAnchor:[-3,-20]});void 0!==n&&void 0!==r||(n=a('input[value="'+o.latitude+'"]'),r=a('input[value="'+o.longitude+'"]')),p[e]=[o.latitude,o.longitude];let d=L.marker([o.latitude,o.longitude],{icon:void 0!==c?c:l,draggable:!!i.is_admin});void 0!==o.infobox&&""!==o.infobox&&d.bindPopup('<div class="markerInfoBox">'+o.infobox.replace(/(\r\n|\n|\r)/gm,"<br />")+"</div>",{className:o.popup_style?o.popup_style:"standard"}),d.on("dragend",function(a){let e=a.target.getLatLng();a.target.setLatLng(e,{draggable:"true"}).update(),n.val(e.lat),r.val(e.lng),n.addClass("manuallyDragged"),r.addClass("manuallyDragged"),i.is_admin&&iziToast.show({})}),s[e]=d,d.addTo(m)});let d=new L.LatLngBounds(p);if(p.length<2){if(m.setView({lat:d.getNorth(),lng:d.getEast()},t.map_zoom?t.map_zoom:14),"center"!==t.marker_position){var g=m.getSize(),u=[];"left"===t.marker_position?u=[.35*g.x,0]:"right"===t.marker_position?u=[-.35*g.x,0]:"bottom"===t.marker_position?u=[0,-.35*g.y]:"top"===t.marker_position&&(u=[0,.35*g.y]),m.panBy(new L.Point(u[0],u[1]),{animate:!0})}}else{m.fitBounds(d);let a=m.getZoom()>parseInt(t.map_zoom)?t.map_zoom:m.getZoom();m.setZoom(a)}}var t=ba_map_ajax.url,i=(ba_map_ajax.gif,ba_map_ajax.defaultConfig),n=a(".ba_map_holder");n.length>0&&a.each(n,function(o,r){var s=a(this).data("map-id"),p=a(this).attr("id");if(a(this).hasClass("markers")){var l=function(e){if(!e.hasClass("markers"))return!1;var o={markers:{},config:{}};return a.each(e.find(".marker"),function(e,t){let n=a(this).data("lat"),r=a(this).data("lng"),s=a(this).data("pin"),p=a(this)[0].innerHTML,l={};void 0!==n&&void 0!==r&&(l.lat=n,l.lng=r,""!==p&&(l.infoWindow=p.replace("<p></p>","")),l.icon=void 0!==s?s:i.pin,o.markers[e]=l)}),a.each(e[0].dataset,function(a,e){""!==e&&""!==a&&(o.config[a]=e)}),o}(a(this)),p="_"+Math.random().toString(36).substr(2,9);a(this).attr("id",p),function(o,t){var i=[],n=[],r=new L.TileLayer(t.config.scheme+"/{z}/{x}/{y}.png",{attribution:'<a href="https://b4after.pl">Before / After </a> Agencja Interaktywna &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),s=new L.Map(o,{center:[52.3735144,16.9020508],zoom:15,scrollWheelZoom:"false"!==t.config.scroll,tap:!1,dragging:!e(),layers:[r]});a.each(t.markers,function(e,o){a(this),n[e]=[o.lat,o.lng];var t=L.icon({iconUrl:o.icon,iconSize:[38,38],popupAnchor:[-3,-20]}),r=L.marker([o.lat,o.lng],{icon:t});void 0!==o.infoWindow&&""!==o.infoWindow&&r.bindPopup('<p class="markerInfoBox">'+o.infoWindow.replace(/(\r\n|\n|\r)/gm,"<br />")+"</p>",{className:"osmapper_class"}),i[e]=r,r.addTo(s)});var p=new L.LatLngBounds(n);s.fitBounds(p),n.length<2&&s.setZoom(14)}(p,l)}else!function(e,o){a.ajax({url:t,type:"post",dataType:"json",data:{action:"ba_map_ajax_handler",requestParams:o,requestType:e},beforeSend:function(){n.addClass("loading")},success:function(a){n.removeClass("loading")}})}("getConfig",{mapID:s,holderID:p})}),a(document).ajaxSuccess(function(e,t,i){if(i&&void 0!==i.data){let e=function(e){for(var o=e.split("&"),t=[],i=0;i<o.length;i++)t.push(o[i].split("="));var n=[];return a.each(t,function(a,e){n[e[0]]=e[1]}),n}(i.data);if("ba_map_ajax_handler"===e.action){if(void 0!==t.responseJSON&&"getConfig"===e.requestType)o(t.responseJSON.markers,t.responseJSON.config,t.responseJSON);else if(void 0!==t.responseText&&"getConfig"===e.requestType){var n=JSON.parse(t.responseText);o(n.markers,n.config,n)}else console.log("Couldn't recieve response")}}})}(jQuery);