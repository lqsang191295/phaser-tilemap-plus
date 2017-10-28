!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e,n){r(this,t),this.x=e||0,this.y=n||0}return i(t,[{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"length",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"normalized",value:function(){var e=this.length();return 0===e?new t(0,0):new t(this.x/e,this.y/e)}},{key:"perpendicular",value:function(){return new t(-this.y,this.x)}}],[{key:"sum",value:function(e,n){return new t(e.x+n.x,e.y+n.y)}},{key:"difference",value:function(e,n){return new t(e.x-n.x,e.y-n.y)}},{key:"dot",value:function(t,e){return t.x*e.x+t.y*e.y}},{key:"perpDot",value:function(t,e){return t.x*e.y-t.y*e.x}},{key:"scale",value:function(e,n){return new t(e.x*n,e.y*n)}}]),t}();e.default=a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(){r(this,t),this.makeEmpty()}return i(t,[{key:"extendTo",value:function(t){this.min>t&&(this.min=t),this.max<t&&(this.max=t)}},{key:"containsPoint",value:function(t){return this.min<=t&&t<=this.max}},{key:"containsRange",value:function(t){return this.min<=t.min&&this.max>t.max}},{key:"isEmpty",value:function(){return this.min>this.max}},{key:"makeEmpty",value:function(){this.min=Number.POSITIVE_INFINITY,this.max=Number.NEGATIVE_INFINITY}},{key:"length",value:function(){return this.min>this.max?Number.NaN:this.max-this.min}}],[{key:"intersection",value:function(e,n){var r=new t;return r.min=Math.max(e.min,n.min),r.max=Math.min(e.max,n.max),r.min>r.max&&r.makeEmpty(),r}},{key:"bound",value:function(e,n){var r=new t;return r.min=Math.min(e.min,n.min),r.max=Math.max(e.max,n.max),r}}]),t}();e.default=a},function(t,e,n){"use strict";var r=n(3),i=function(t){return t&&t.__esModule?t:{default:t}}(r);Phaser.Plugin.TilemapPlus=function(t,e){function n(t){return t+"-TilemapPlus"}Phaser.Plugin.call(this,t,e);var r=Phaser.Loader.prototype.tilemap;Phaser.Loader.prototype.tilemap=function(t,e,i,a){r.call(this,t,e,i,a),this.json(n(t),e)};var a=Phaser.GameObjectFactory.prototype.tilemap;Phaser.GameObjectFactory.prototype.tilemap=function(t,e,r,o,u){var l=a.call(this,t,e,r,o,u),f=this.game.cache.getJSON(n(t));return l.plus=new i.default(f,this.game.time,l),l}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(4),o=r(a),u=n(5),l=r(u),f=function t(e,n,r){i(this,t),this.tilemapJson=e,this.time=n,this.tilemap=r,this.timer=null,this.tileAnimations=[],this.game=n.game,this.animation=new o.default(e,n,r),this.physics=new l.default(e)};e.default=f},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){var e=t.tiles;if(e){var n=!0,r=!1,i=void 0;try{for(var o,u=Object.keys(e)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var l=o.value,f=e[l],c=f.animation;c&&c.length>0&&a.bind(this)(t,l,c)}}catch(t){r=!0,i=t}finally{try{!n&&u.return&&u.return()}finally{if(r)throw i}}}}function a(t,e,n){var r=n.map(function(t){return t.tileid}),i=n.find(function(){return!0}).duration,a=this.tilemap.tilesets.find(function(e){return e.name===t.name}),o={tiles:r,frameInterval:i,tileset:a,tileLocations:u.bind(this)(a.firstgid+parseInt(e)),currentFrame:0};this.tileAnimations.push(o)}function o(){var t=this.time.now,e=!1,n=!0,r=!1,i=void 0;try{for(var a,o=this.tileAnimations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value,l=u.tiles,f=u.frameInterval,c=u.tileset,s=u.tileLocations,h=u.currentFrame,y=Math.floor(t/f)%l.length;if(y!=h){var v=c.firstgid+l[y],m=!0,d=!1,p=void 0;try{for(var g,x=s[Symbol.iterator]();!(m=(g=x.next()).done);m=!0){var b=g.value;this.tilemap.getTile(b.x,b.y,b.layer,!0).index=v}}catch(t){d=!0,p=t}finally{try{!m&&x.return&&x.return()}finally{if(d)throw p}}u.currentFrame=y,e=!0}}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}if(e){var w=!0,k=!1,N=void 0;try{for(var P,I=this.tilemap.layers[Symbol.iterator]();!(w=(P=I.next()).done);w=!0){P.value.dirty=!0}}catch(t){k=!0,N=t}finally{try{!w&&I.return&&I.return()}finally{if(k)throw N}}}}function u(t){var e=[],n=!0,r=!1,i=void 0;try{for(var a,o=this.tilemapJson.layers[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value;if("tilelayer"===u.type)for(var l=u.data,f=u.width,c=u.height,s=0;s<c;s++)for(var h=0;h<f;h++)l[s*f+h]===t&&e.push({x:h,y:s,layer:u.name})}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}return e}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=function(){function t(e,n,i){r(this,t),this.tilemapJson=e,this.time=n,this.tilemap=i,this.timer=null,this.tileAnimations=[],this.game=n.game}return l(t,[{key:"enable",value:function(){var t=this;if(null==this.timer){var e=!0,n=!1,r=void 0;try{for(var a,u=this.tilemapJson.tilesets[Symbol.iterator]();!(e=(a=u.next()).done);e=!0){var l=a.value;l.tiles&&i.bind(this)(l)}}catch(t){n=!0,r=t}finally{try{!e&&u.return&&u.return()}finally{if(n)throw r}}this.timer=this.time.events.loop(20,function(){return o.bind(t)()})}}},{key:"disable",value:function(){null!=this.timer&&(this.time.events.remove(this.timer),this.timer=null,this.tileAnimations=[])}}]),t}();e.default=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(0),u=r(o),l=n(6),f=r(l),c=n(1),s=r(c),h=function(){function t(e){i(this,t),this.tilemapJson=e,this.shapes=[]}return a(t,[{key:"enableObjectLayer",value:function(t){var e=this.tilemapJson.layers.find(function(e){return"objectgroup"===e.type&&e.name===t});if(!e)throw new Error('No object layer found with name "'+t+'"');this.shapes=[];var n=!0,r=!1,i=void 0;try{for(var a,o=e.objects[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value;u.polygon?this.addPolygon(u):u.polyline||u.ellipse||u.gid||u.text||this.addRectangle(u)}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}}},{key:"collideWith",value:function(t){var e=t.body,n=t.game.physics.arcade.gravity,r=new u.default(n.x,n.y),i=r.normalized();e.contactNormal||(e.contactNormal=new u.default),e.contactNormal.x=e.contactNormal.y=0;var a=!0,o=!1,l=void 0;try{for(var f,c=this.shapes[Symbol.iterator]();!(a=(f=c.next()).done);a=!0){var s=f.value,h=s.collideWidth(e),y=e.velocity;if(h){var v=h.penetration,m=h.normal;e.contactNormal=u.default.sum(e.contactNormal,m),e.x-=v.x,e.y-=v.y;var d=u.default.dot(y,m);if(d>=0)continue;var p=u.default.scale(m,d),g=u.default.difference(y,p),x=void 0,b=s.properties&&s.properties.bounce;x=b?u.default.scale(p,-b):new u.default;var w=g,k=u.default.sum(x,w);e.velocity.x=k.x,e.velocity.y=k.y,e.x-=i.x,e.y-=i.y}}}catch(t){o=!0,l=t}finally{try{!a&&c.return&&c.return()}finally{if(o)throw l}}e.contactNormal=e.contactNormal.normalized()}},{key:"addRectangle",value:function(t){var e=t.width,n=t.height,r={x:t.x,y:t.y,width:t.width,height:t.height,polygon:[{x:0,y:0},{x:e,y:0},{x:e,y:n},{x:0,y:n}],properties:t.properties};this.addPolygon(r)}},{key:"addPolygon",value:function(t){var e=t.polygon.map(function(e){return new u.default(t.x+e.x,t.y+e.y)}),n=f.default.generateConvexPolygons(e),r=!0,i=!1,a=void 0;try{for(var o,l=n[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var c=o.value;this.addConvexPolygon(c,t.properties)}}catch(t){i=!0,a=t}finally{try{!r&&l.return&&l.return()}finally{if(i)throw a}}}},{key:"addConvexPolygon",value:function(t,e){var n=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY,o=!0,l=!1,c=void 0;try{for(var h,y=t.vertices[Symbol.iterator]();!(o=(h=y.next()).done);o=!0){var v=h.value;n=Math.min(n,v.x),r=Math.min(n,v.y),i=Math.max(n,v.x),a=Math.max(n,v.y)}}catch(t){l=!0,c=t}finally{try{!o&&y.return&&y.return()}finally{if(l)throw c}}var m={type:"polygon",left:n,top:r,right:i,bottom:a,polygon:t,properties:e,collideWidth:function(t){var e=t.x,n=t.x+t.width,r=t.y,i=t.y+t.height,a=[new u.default(1,0),new u.default(0,1)].concat(this.polygon.normals),o=f.default.fromRectangle(e,r,n,i),l=Number.POSITIVE_INFINITY,c=void 0,h=!0,y=!1,v=void 0;try{for(var m,d=a[Symbol.iterator]();!(h=(m=d.next()).done);h=!0){var p=m.value,g=this.polygon.projectOntoAxis(p),x=o.projectOntoAxis(p);if(s.default.intersection(g,x).isEmpty())return null;var b=Math.min(Math.abs(g.max-x.min),Math.abs(x.max-g.min));l>b&&(l=b,c=p)}}catch(t){y=!0,v=t}finally{try{!h&&d.return&&d.return()}finally{if(y)throw v}}var w=u.default.difference(o.centre,this.polygon.centre);return u.default.dot(w,c)<0&&(c=u.default.scale(c,-1)),{penetration:u.default.scale(c,-l),normal:c}}};this.shapes.push(m)}}]),t}();e.default=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(7),u=r(o),l=n(0),f=r(l),c=n(1),s=r(c),h=function(t){return t.reduce(function(t,e){return t+e},0)/t.length},y=function(){function t(e){if(i(this,t),this.vertices=e,this.edges=[],this.normals=[],this.count=this.vertices.length,this.centre=new f.default(h(e.map(function(t){return t.x})),h(e.map(function(t){return t.y}))),this.count>1)for(var n=0;n<this.count;n++){var r=(n+1)%this.count,a=f.default.difference(e[r],e[n]);this.edges.push(a);var o=a.normalized().perpendicular(),u=f.default.difference(e[n],this.centre);f.default.dot(u,o)<0&&(o=f.default.scale(o,-1)),this.normals.push(o)}}return a(t,[{key:"isValid",value:function(){if(this.count<4)return!0;for(var t=0,e=0;e<this.count;e++){var n=(e+1)%this.count,r=f.default.perpDot(this.edges[e],this.edges[n]);if(r*t<0)return!1;t=r}return!0}},{key:"projectOntoAxis",value:function(t){var e=new s.default,n=!0,r=!1,i=void 0;try{for(var a,o=this.vertices[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value,l=f.default.dot(u,t);e.extendTo(l)}}catch(t){r=!0,i=t}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}return e}}],[{key:"fromRectangle",value:function(e,n,r,i){return new t([new f.default(e,n),new f.default(r,n),new f.default(r,i),new f.default(e,i)])}},{key:"generateConvexPolygons",value:function(e){var n=e.map(function(t){return[t.x,t.y]});return u.default.decomp(n).map(function(e){return new t(e.map(function(t){return new f.default(t[0],t[1])}))})}}]),t}();e.default=y;var v=y.generateConvexPolygons([new f.default(0,0),new f.default(1,0),new f.default(.4,.4),new f.default(0,1)]);console.log(v)},function(t,e){function n(t,e,n){n=n||0;var r,i,a,o,u,l,f,c=[0,0];return r=t[1][1]-t[0][1],i=t[0][0]-t[1][0],a=r*t[0][0]+i*t[0][1],o=e[1][1]-e[0][1],u=e[0][0]-e[1][0],l=o*e[0][0]+u*e[0][1],f=r*u-o*i,_(f,0,n)||(c[0]=(u*a-i*l)/f,c[1]=(r*l-o*a)/f),c}function r(t,e,n,r){var i=e[0]-t[0],a=e[1]-t[1],o=r[0]-n[0],u=r[1]-n[1];if(o*a-u*i==0)return!1;var l=(i*(n[1]-t[1])+a*(t[0]-n[0]))/(o*a-u*i),f=(o*(t[1]-n[1])+u*(n[0]-t[0]))/(u*i-o*a);return l>=0&&l<=1&&f>=0&&f<=1}function i(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(n[0]-t[0])*(e[1]-t[1])}function a(t,e,n){return i(t,e,n)>0}function o(t,e,n){return i(t,e,n)>=0}function u(t,e,n){return i(t,e,n)<0}function l(t,e,n){return i(t,e,n)<=0}function f(t,e,n,r){if(r){var a=M,o=O;a[0]=e[0]-t[0],a[1]=e[1]-t[1],o[0]=n[0]-e[0],o[1]=n[1]-e[1];var u=a[0]*o[0]+a[1]*o[1],l=Math.sqrt(a[0]*a[0]+a[1]*a[1]),f=Math.sqrt(o[0]*o[0]+o[1]*o[1]);return Math.acos(u/(l*f))<r}return 0===i(t,e,n)}function c(t,e){var n=e[0]-t[0],r=e[1]-t[1];return n*n+r*r}function s(t,e){var n=t.length;return t[e<0?e%n+n:e%n]}function h(t){t.length=0}function y(t,e,n,r){for(var i=n;i<r;i++)t.push(e[i])}function v(t){for(var e=0,n=t,r=1;r<t.length;++r)(n[r][1]<n[e][1]||n[r][1]===n[e][1]&&n[r][0]>n[e][0])&&(e=r);a(s(t,e-1),s(t,e),s(t,e+1))||m(t)}function m(t){for(var e=[],n=t.length,r=0;r!==n;r++)e.push(t.pop());for(var r=0;r!==n;r++)t[r]=e[r]}function d(t,e){return u(s(t,e-1),s(t,e),s(t,e+1))}function p(t,e,r){var i,a,u=E,f=T;if(o(s(t,e+1),s(t,e),s(t,r))&&l(s(t,e-1),s(t,e),s(t,r)))return!1;a=c(s(t,e),s(t,r));for(var h=0;h!==t.length;++h)if((h+1)%t.length!==e&&h!==e&&o(s(t,e),s(t,r),s(t,h+1))&&l(s(t,e),s(t,r),s(t,h))&&(u[0]=s(t,e),u[1]=s(t,r),f[0]=s(t,h),f[1]=s(t,h+1),i=n(u,f),c(s(t,e),i)<a))return!1;return!0}function g(t,e,n,r){var i=r||[];if(h(i),e<n)for(var a=e;a<=n;a++)i.push(t[a]);else{for(var a=0;a<=n;a++)i.push(t[a]);for(var a=e;a<t.length;a++)i.push(t[a])}return i}function x(t){for(var e=[],n=[],r=[],i=[],a=Number.MAX_VALUE,o=0;o<t.length;++o)if(d(t,o))for(var u=0;u<t.length;++u)if(p(t,o,u)){n=x(g(t,o,u,i)),r=x(g(t,u,o,i));for(var l=0;l<r.length;l++)n.push(r[l]);n.length<a&&(e=n,a=n.length,e.push([s(t,o),s(t,u)]))}return e}function b(t){var e=x(t);return e.length>0?w(t,e):[t]}function w(t,e){if(0===e.length)return[t];if(e instanceof Array&&e.length&&e[0]instanceof Array&&2===e[0].length&&e[0][0]instanceof Array){for(var n=[t],r=0;r<e.length;r++)for(var i=e[r],a=0;a<n.length;a++){var o=n[a],u=w(o,i);if(u){n.splice(a,1),n.push(u[0],u[1]);break}}return n}var i=e,r=t.indexOf(i[0]),a=t.indexOf(i[1]);return-1!==r&&-1!==a&&[g(t,r,a),g(t,a,r)]}function k(t){var e,n=t;for(e=0;e<n.length-1;e++)for(var i=0;i<e-1;i++)if(r(n[e],n[e+1],n[i],n[i+1]))return!1;for(e=1;e<n.length-2;e++)if(r(n[0],n[n.length-1],n[e],n[e+1]))return!1;return!0}function N(t,e,n,r,i){i=i||0;var a=e[1]-t[1],o=t[0]-e[0],u=a*t[0]+o*t[1],l=r[1]-n[1],f=n[0]-r[0],c=l*n[0]+f*n[1],s=a*f-l*o;return _(s,0,i)?[0,0]:[(f*u-o*c)/s,(a*c-l*u)/s]}function P(t,e,n,r,i,f,h){f=f||100,h=h||0,i=i||25,e=void 0!==e?e:[],n=n||[],r=r||[];var v=[0,0],m=[0,0],p=[0,0],g=0,x=0,b=0,w=0,k=0,I=0,_=0,M=[],O=[],E=t,T=t;if(T.length<3)return e;if(++h>f)return console.warn("quickDecomp: max level ("+f+") reached."),e;for(var j=0;j<t.length;++j)if(d(E,j)){n.push(E[j]),g=x=Number.MAX_VALUE;for(var A=0;A<t.length;++A)a(s(E,j-1),s(E,j),s(E,A))&&l(s(E,j-1),s(E,j),s(E,A-1))&&(p=N(s(E,j-1),s(E,j),s(E,A),s(E,A-1)),u(s(E,j+1),s(E,j),p)&&(b=c(E[j],p))<x&&(x=b,m=p,I=A)),a(s(E,j+1),s(E,j),s(E,A+1))&&l(s(E,j+1),s(E,j),s(E,A))&&(p=N(s(E,j+1),s(E,j),s(E,A),s(E,A+1)),a(s(E,j-1),s(E,j),p)&&(b=c(E[j],p))<g&&(g=b,v=p,k=A));if(I===(k+1)%t.length)p[0]=(m[0]+v[0])/2,p[1]=(m[1]+v[1])/2,r.push(p),j<k?(y(M,E,j,k+1),M.push(p),O.push(p),0!==I&&y(O,E,I,E.length),y(O,E,0,j+1)):(0!==j&&y(M,E,j,E.length),y(M,E,0,k+1),M.push(p),O.push(p),y(O,E,I,j+1));else{if(I>k&&(k+=t.length),w=Number.MAX_VALUE,k<I)return e;for(var A=I;A<=k;++A)o(s(E,j-1),s(E,j),s(E,A))&&l(s(E,j+1),s(E,j),s(E,A))&&(b=c(s(E,j),s(E,A)))<w&&(w=b,_=A%t.length);j<_?(y(M,E,j,_+1),0!==_&&y(O,E,_,T.length),y(O,E,0,j+1)):(0!==j&&y(M,E,j,T.length),y(M,E,0,_+1),y(O,E,_,j+1))}return M.length<O.length?(P(M,e,n,r,i,f,h),P(O,e,n,r,i,f,h)):(P(O,e,n,r,i,f,h),P(M,e,n,r,i,f,h)),e}return e.push(t),e}function I(t,e){for(var n=0,r=t.length-1;t.length>3&&r>=0;--r)f(s(t,r-1),s(t,r),s(t,r+1),e)&&(t.splice(r%t.length,1),n++);return n}function _(t,e,n){return n=n||0,Math.abs(t-e)<n}t.exports={decomp:b,quickDecomp:P,isSimple:k,removeCollinearPoints:I,makeCCW:v};var M=[],O=[],E=[],T=[]}]);