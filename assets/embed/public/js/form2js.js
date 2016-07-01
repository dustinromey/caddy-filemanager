/* https://github.com/maxatwork/form2js */
(function(a,b){if(typeof exports!=="undefined"&&typeof module!=="undefined"&&module.exports){module.exports=b()}else{if(typeof define==="function"&&define.amd){define(b)}else{a.form2js=b()}}}(this,function(){function e(m,k,j,q,l,r){r=r?true:false;if(typeof j=="undefined"||j==null){j=true}if(typeof k=="undefined"||k==null){k="."}if(arguments.length<5){l=false}m=typeof m=="string"?document.getElementById(m):m;var p=[],o,n=0;if(m.constructor==Array||(typeof NodeList!="undefined"&&m.constructor==NodeList)){while(o=m[n++]){p=p.concat(d(o,q,l,r))}}else{p=d(m,q,l,r)}return b(p,j,k)}function b(s,A,C){var p={},q={},y,x,w,v,u,r,n,t,o,m,z,D,B;for(y=0;y<s.length;y++){u=s[y].value;if(A&&(u===""||u===null)){continue}D=s[y].name;B=D.split(C);r=[];n=p;t="";for(x=0;x<B.length;x++){z=B[x].split("][");if(z.length>1){for(w=0;w<z.length;w++){if(w==0){z[w]=z[w]+"]"}else{if(w==z.length-1){z[w]="["+z[w]}else{z[w]="["+z[w]+"]"}}m=z[w].match(/([a-z_]+)?\[([a-z_][a-z0-9_]+?)\]/i);if(m){for(v=1;v<m.length;v++){if(m[v]){r.push(m[v])}}}else{r.push(z[w])}}}else{r=r.concat(z)}}for(x=0;x<r.length;x++){z=r[x];if(z.indexOf("[]")>-1&&x==r.length-1){o=z.substr(0,z.indexOf("["));t+=o;if(!n[o]){n[o]=[]}n[o].push(u)}else{if(z.indexOf("[")>-1){o=z.substr(0,z.indexOf("["));m=z.replace(/(^([a-z_]+)?\[)|(\]$)/gi,"");t+="_"+o+"_"+m;if(!q[t]){q[t]={}}if(o!=""&&!n[o]){n[o]=[]}if(x==r.length-1){if(o==""){n.push(u);q[t][m]=n[n.length-1]}else{n[o].push(u);q[t][m]=n[o][n[o].length-1]}}else{if(!q[t][m]){if((/^[0-9a-z_]+\[?/i).test(r[x+1])){n[o].push({})}else{n[o].push([])}q[t][m]=n[o][n[o].length-1]}}n=q[t][m]}else{t+=z;if(x<r.length-1){if(!n[z]){n[z]={}}n=n[z]}else{n[z]=u}}}}}return p}function d(l,k,m,j){var i=a(l,k,m,j);return i.length>0?i:g(l,k,m,j)}function g(l,k,n,j){var i=[],m=l.firstChild;while(m){i=i.concat(a(m,k,n,j));m=m.nextSibling}return i}function a(m,k,o,j){if(m.disabled&&!j){return[]}var l,n,i,p=f(m,o);l=k&&k(m);if(l&&l.name){i=[l]}else{if(p!=""&&m.nodeName.match(/INPUT|TEXTAREA/i)){n=c(m,j);if(null===n){i=[]}else{i=[{name:p,value:n}]}}else{if(p!=""&&m.nodeName.match(/SELECT/i)){n=c(m,j);i=[{name:p.replace(/\[\]$/,""),value:n}]}else{i=g(m,k,o,j)}}}return i}function f(i,j){if(i.name&&i.name!=""){return i.name}else{if(j&&i.id&&i.id!=""){return i.id}else{return""}}}function c(j,i){if(j.disabled&&!i){return null}switch(j.nodeName){case"INPUT":case"TEXTAREA":switch(j.type.toLowerCase()){case"radio":if(j.checked&&j.value==="false"){return false}case"checkbox":if(j.checked&&j.value==="true"){return true}if(!j.checked&&j.value==="true"){return false}if(j.checked){return j.value}break;case"button":case"reset":case"submit":case"image":return"";break;default:return j.value;break}break;case"SELECT":return h(j);break;default:break}return null}function h(o){var k=o.multiple,j=[],n,p,m;if(!k){return o.value}for(n=o.getElementsByTagName("option"),p=0,m=n.length;p<m;p++){if(n[p].selected){j.push(n[p].value)}}return j}return e}));