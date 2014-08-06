(function(a){a.fn.circliful=function(b,d){var c=a.extend({startdegree:0,fgcolor:"#556b2f",bgcolor:"#eee",fill:false,width:15,dimension:200,fontsize:15,percent:50,animationstep:1,iconsize:"20px",iconcolor:"#999",border:"default",complete:null,bordersize:10},b);return this.each(function(){var B=["fgcolor","bgcolor","fill","width","dimension","fontsize","animationstep","endPercent","icon","iconcolor","iconsize","border","startdegree","bordersize"];var f={};var I="";var o=0;var v=a(this);var E=false;var A,J;v.addClass("circliful");e(v);if(v.data("text")!=undefined){A=v.data("text");if(v.data("icon")!=undefined){I=a("<i></i>").addClass("fa "+a(this).data("icon")).css({color:f.iconcolor,"font-size":f.iconsize})}if(v.data("type")!=undefined){k=a(this).data("type");if(k=="half"){u(v,"circle-text-half",(f.dimension/1.45))}else{u(v,"circle-text",f.dimension)}}else{u(v,"circle-text",f.dimension)}}if(a(this).data("total")!=undefined&&a(this).data("part")!=undefined){var L=a(this).data("total")/100;percent=((a(this).data("part")/L)/100).toFixed(3);o=(a(this).data("part")/L).toFixed(3)}else{if(a(this).data("percent")!=undefined){percent=a(this).data("percent")/100;o=a(this).data("percent")}else{percent=c.percent/100}}if(a(this).data("info")!=undefined){J=a(this).data("info");if(a(this).data("type")!=undefined){k=a(this).data("type");if(k=="half"){G(v,0.9)}else{G(v,1.25)}}else{G(v,1.25)}}a(this).width(f.dimension+"px");var j=a("<canvas></canvas>").attr({width:f.dimension,height:f.dimension}).appendTo(a(this)).get(0);var g=j.getContext("2d");var w=a(j).parent();var t=j.width/2;var s=j.height/2;var F=f.percent*360;var K=F*(Math.PI/180);var m=j.width/2.5;var D=2.3*Math.PI;var C=0;var H=false;var p=f.animationstep===0?o:0;var q=Math.max(f.animationstep,0);var z=Math.PI*2;var i=Math.PI/2;var k="";var l=true;var h=(f.startdegree/180)*Math.PI;if(a(this).data("type")!=undefined){k=a(this).data("type");if(k=="half"){D=2*Math.PI;C=3.13;z=Math.PI;i=Math.PI/0.996}}a(window).resize(r);function r(){a(j).attr("width",a(w).width());if(k=="half"){a(j).attr("height",a(w).height()/2)}else{a(j).attr("height",a(w).height())}}r();function u(M,x,y){a("<span></span>").appendTo(M).addClass(x).text(A).prepend(I).css({"line-height":y+"px","font-size":f.fontsize+"px"})}function G(y,x){a("<span></span>").appendTo(y).addClass("circle-info-half").css("line-height",(f.dimension*x)+"px").text(J)}function e(x){a.each(B,function(y,M){if(x.data(M)!=undefined){f[M]=x.data(M)}else{f[M]=a(c).attr(M)}if(M=="fill"&&x.data("fill")!=undefined){E=true}})}function n(x){g.clearRect(0,0,j.width,j.height);g.beginPath();g.arc(t,s,m,C,D,false);g.lineWidth=f.bordersize+1;g.strokeStyle=f.bgcolor;g.stroke();if(E){g.fillStyle=f.fill;g.fill()}g.beginPath();g.arc(t,s,m,-(i)+h,((z)*x)-i+h,false);if(f.border=="outline"){g.lineWidth=f.width+13}else{if(f.border=="inline"){g.lineWidth=f.width-13}}g.strokeStyle=f.fgcolor;g.stroke();if(p<o){p+=q;requestAnimationFrame(function(){n(Math.min(p,o)/100)},v)}if(p==o&&l&&typeof(b)!="undefined"){if(a.isFunction(b.complete)){b.complete();l=false}}}n(p/100)})}}(jQuery));