if (self.CavalryLogger) { CavalryLogger.start_js(["0Qz\/x"]); }

/**
 * License: https://www.facebook.com/legal/license/65YxUUd-Tll/
 */
__d("prettify",[],(function(a,b,c,d,e,f){__p&&__p();var g=!0;window.PR_SHOULD_USE_CONTINUATION=!0;var h;(function(){__p&&__p();var a=window,b=["break,continue,do,else,for,if,return,while"],c=[b,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"];c=[c,"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"];var d=[c,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],e=[c,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],f=[e,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],i="all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes";c=[c,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"];var j="caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",k=[b,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],l=[b,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],m=[b,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"];b=[b,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"];var n=[d,f,c,j,k,l,b],o=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,p="str",q="kwd",r="com",s="typ",t="lit",u="pun",v="pln",w="tag",x="dec",y="src",z="atn",A="atv",B="nocode",C="(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*";function D(a){__p&&__p();var b=0,c=!1,d=!1;for(var e=0,f=a.length;e<f;++e){var g=a[e];if(g.ignoreCase)d=!0;else if(/[a-z]/i.test(g.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,""))){c=!0;d=!1;break}}var h={b:8,t:9,n:10,v:11,f:12,r:13};function i(a){__p&&__p();var b=a.charCodeAt(0);if(b!==92)return b;var c=a.charAt(1);b=h[c];if(b)return b;else if("0"<=c&&c<="7")return parseInt(a.substring(1),8);else if(c==="u"||c==="x")return parseInt(a.substring(2),16);else return a.charCodeAt(1)}function j(a){if(a<32)return(a<16?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);return a==="\\"||a==="-"||a==="]"||a==="^"?"\\"+a:a}function k(b){__p&&__p();b=b.substring(1,b.length-1).match(new RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g"));var c=[],d=b[0]==="^",e=["["];d&&e.push("^");for(var d=d?1:0,a=b.length;d<a;++d){var f=b[d];if(/\\[bdsw]/i.test(f))e.push(f);else{f=i(f);var g;d+2<a&&"-"===b[d+1]?(g=i(b[d+2]),d+=2):g=f;c.push([f,g]);g<65||f>122||(g<65||f>90||c.push([Math.max(65,f)|32,Math.min(g,90)|32]),g<97||f>122||c.push([Math.max(97,f)&-33,Math.min(g,122)&-33]))}}c.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]});f=[];g=[];for(var d=0;d<c.length;++d){b=c[d];b[0]<=g[1]+1?g[1]=Math.max(g[1],b[1]):f.push(g=b)}for(var d=0;d<f.length;++d){b=f[d];e.push(j(b[0]));b[1]>b[0]&&(b[1]+1>b[0]&&e.push("-"),e.push(j(b[1])))}e.push("]");return e.join("")}function l(e){__p&&__p();var f=e.source.match(new RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),d=f.length,g=[];for(var a=0,h=0;a<d;++a){var i=f[a];if(i==="(")++h;else if("\\"===i.charAt(0)){var l=+i.substring(1);l&&(l<=h?g[l]=-1:f[a]=j(l))}}for(var a=1;a<g.length;++a)-1===g[a]&&(g[a]=++b);for(var a=0,h=0;a<d;++a){var i=f[a];if(i==="(")++h,g[h]||(f[a]="(?:");else if("\\"===i.charAt(0)){var l=+i.substring(1);l&&l<=h&&(f[a]="\\"+g[l])}}for(var a=0;a<d;++a)"^"===f[a]&&"^"!==f[a+1]&&(f[a]="");if(e.ignoreCase&&c)for(var a=0;a<d;++a){var i=f[a];l=i.charAt(0);i.length>=2&&l==="["?f[a]=k(i):l!=="\\"&&(f[a]=i.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}))}return f.join("")}var m=[];for(var e=0,f=a.length;e<f;++e){var g=a[e];if(g.global||g.multiline)throw new Error(""+g);m.push("(?:"+l(g)+")")}return new RegExp(m.join("|"),d?"gi":"g")}function E(a,b){__p&&__p();var c=/(?:^|\s)nocode(?:\s|$)/,d=[],e=0,f=[],g=0;function h(a){__p&&__p();var i=a.nodeType;if(i==1){if(c.test(a.className))return;for(var j=a.firstChild;j;j=j.nextSibling)h(j);j=a.nodeName.toLowerCase();("br"===j||"li"===j)&&(d[g]="\n",f[g<<1]=e++,f[g++<<1|1]=a)}else if(i==3||i==4){j=a.nodeValue;j.length&&(!b?j=j.replace(/[ \t\r\n]+/g," "):j=j.replace(/\r\n?/g,"\n"),d[g]=j,f[g<<1]=e,e+=j.length,f[g++<<1|1]=a)}}h(a);return{sourceCode:d.join("").replace(/\n$/,""),spans:f}}function F(a,b,c,d){if(!b)return;b={sourceCode:b,basePos:a};c(b);d.push.apply(d,b.decorations)}var G=/\S/;function H(a){var b=void 0;for(var c=a.firstChild;c;c=c.nextSibling){var d=c.nodeType;b=d===1?b?a:c:d===3?G.test(c.nodeValue)?a:b:b}return b===a?void 0:b}function I(a,b){__p&&__p();var c={},d;(function(){__p&&__p();var e=a.concat(b),f=[],g={};for(var h=0,i=e.length;h<i;++h){var j=e[h],k=j[3];if(k)for(var l=k.length;--l>=0;)c[k.charAt(l)]=j;l=j[1];k=""+l;g.hasOwnProperty(k)||(f.push(l),g[k]=null)}f.push(/[\0-\uffff]/);d=D(f)})();var e=b.length,f=function(a){__p&&__p();var g=a.sourceCode,h=a.basePos,i=[h,v],j=0;g=g.match(d)||[];var k={};for(var l=0,m=g.length;l<m;++l){var n=g[l],o=k[n],p=void 0,q;if(typeof o==="string")q=!1;else{var r=c[n.charAt(0)];if(r)p=n.match(r[1]),o=r[0];else{for(var s=0;s<e;++s){r=b[s];p=n.match(r[1]);if(p){o=r[0];break}}p||(o=v)}q=o.length>=5&&"lang-"===o.substring(0,5);q&&!(p&&typeof p[1]==="string")&&(q=!1,o=y);q||(k[n]=o)}s=j;j+=n.length;if(!q)i.push(h+s,o);else{r=p[1];q=n.indexOf(r);var t=q+r.length;p[2]&&(t=n.length-p[2].length,q=t-r.length);p=o.substring(5);F(h+s,n.substring(0,q),f,i);F(h+s+q,r,O(p,r),i);F(h+s+t,n.substring(t),f,i)}}a.decorations=i};return f}function J(a){__p&&__p();var b=[],c=[];a.tripleQuotedStrings?b.push([p,/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,null,"'\""]):a.multiLineStrings?b.push([p,/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):b.push([p,/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&c.push([p,/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var d=a.hashComments;d&&(a.cStyleComments?(d>1?b.push([r,/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):b.push([r,/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,null,"#"]),c.push([p,/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,null])):b.push([r,/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(c.push([r,/^\/\/[^\r\n]*/,null]),c.push([r,/^\/\*[\s\S]*?(?:\*\/|$)/,null]));d=a.regexLiterals;if(d){d=d>1?"":"\n\r";var e=d?".":"[\\S\\s]";d="/(?=[^/*"+d+"])(?:[^/\\x5B\\x5C"+d+"]|\\x5C"+e+"|\\x5B(?:[^\\x5C\\x5D"+d+"]|\\x5C"+e+")*(?:\\x5D|$))+/";c.push(["lang-regex",RegExp("^"+C+"("+d+")")])}e=a.types;e&&c.push([s,e]);d=(""+a.keywords).replace(/^ | $/g,"");d.length&&c.push([q,new RegExp("^(?:"+d.replace(/[\s,]+/g,"|")+")\\b"),null]);b.push([v,/^\s+/,null," \r\n\t\xa0"]);e="^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals&&(e+="(?!s*/)");c.push([t,/^@[a-z_$][a-z_$@0-9]*/i,null],[s,/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],[v,/^[a-z_$][a-z_$@0-9]*/i,null],[t,new RegExp("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,"0123456789"],[v,/^\\[\s\S]?/,null],[u,new RegExp(e),null]);return I(b,c)}n=J({keywords:n,hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0});function K(a,b,c){__p&&__p();var d=/(?:^|\s)nocode(?:\s|$)/,e=/\r\n?|\n/,f=a.ownerDocument,g=f.createElement("li");while(a.firstChild)g.appendChild(a.firstChild);var h=[g];function i(a){__p&&__p();var b=a.nodeType;if(b==1&&!d.test(a.className))if("br"===a.nodeName)j(a),a.parentNode&&a.parentNode.removeChild(a);else for(var g=a.firstChild;g;g=g.nextSibling)i(g);else if((b==3||b==4)&&c){g=a.nodeValue;b=g.match(e);if(b){var h=g.substring(0,b.index);a.nodeValue=h;g=g.substring(b.index+b[0].length);if(g){b=a.parentNode;b.insertBefore(f.createTextNode(g),a.nextSibling)}j(a);h||a.parentNode.removeChild(a)}}}function j(a){__p&&__p();while(!a.nextSibling){a=a.parentNode;if(!a)return}function b(c,d){__p&&__p();d=d?c.cloneNode(!1):c;var a=c.parentNode;if(a){a=b(a,1);c=c.nextSibling;a.appendChild(d);for(var e=c;e;e=c)c=e.nextSibling,a.appendChild(e)}return d}a=b(a.nextSibling,0);for(var c;(c=a.parentNode)&&c.nodeType===1;)a=c;h.push(a)}for(var k=0;k<h.length;++k)i(h[k]);b===(b|0)&&h[0].setAttribute("value",b);var l=f.createElement("ol");l.className="linenums";b=Math.max(0,b-1|0)||0;for(var k=0,m=h.length;k<m;++k)g=h[k],g.className="L"+(k+b)%10,g.firstChild||g.appendChild(f.createTextNode("\xa0")),l.appendChild(g);a.appendChild(l)}function L(a){__p&&__p();var b=/\bMSIE\s(\d+)/.exec(navigator.userAgent);b=b&&+b[1]<=8;var c=/\n/g,d=a.sourceCode,e=d.length,f=0,g=a.spans,h=g.length,i=0,j=a.decorations,k=j.length,l=0;j[k]=e;var m,n;for(n=m=0;n<k;)j[n]!==j[n+2]?(j[m++]=j[n++],j[m++]=j[n++]):n+=2;k=m;for(n=m=0;n<k;){var o=j[n],p=j[n+1],q=n+2;while(q+2<=k&&j[q+1]===p)q+=2;j[m++]=o;j[m++]=p;n=q}j.length=m;o=a.sourceNode;var r;o&&(r=o.style.display,o.style.display="none");try{while(i<h){g[i];p=g[i+2]||e;n=j[l+2]||e;var q=Math.min(p,n);k=g[i+1];var s;if(k.nodeType!==1&&(s=d.substring(f,q))){b&&(s=s.replace(c,"\r"));k.nodeValue=s;m=k.ownerDocument;a=m.createElement("span");a.className=j[l+1];var t=k.parentNode;t.replaceChild(a,k);a.appendChild(k);f<p&&(g[i+1]=k=m.createTextNode(d.substring(q,p)),t.insertBefore(k,a.nextSibling))}f=q;f>=p&&(i+=2);f>=n&&(l+=2)}}finally{o&&(o.style.display=r)}}var M={};function N(b,c){for(var d=c.length;--d>=0;){var e=c[d];!M.hasOwnProperty(e)?M[e]=b:a.console&&console.warn("cannot override language handler %s",e)}}function O(a,b){a&&M.hasOwnProperty(a)||(a=/^\s*</.test(b)?"default-markup":"default-code");return M[a]}N(n,["default-code"]);N(I([],[[v,/^[^<?]+/],[x,/^<!\w[^>]*(?:>|$)/],[r,/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],[u,/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]);N(I([[v,/^[\s]+/,null," \t\r\n"],[A,/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[[w,/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],[z,/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],[u,/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);N(I([],[[A,/^[\s\S]+/]]),["uq.val"]);N(J({keywords:d,hashComments:!0,cStyleComments:!0,types:o}),["c","cc","cpp","cxx","cyc","m"]);N(J({keywords:"null,true,false"}),["json"]);N(J({keywords:f,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:o}),["cs"]);N(J({keywords:e,cStyleComments:!0}),["java"]);N(J({keywords:b,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]);N(J({keywords:k,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]);N(J({keywords:j,hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]);N(J({keywords:l,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]);N(J({keywords:c,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]);N(J({keywords:i,hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);N(J({keywords:m,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]);N(I([],[[p,/^[\s\S]+/]]),["regex"]);function P(b){var c=b.langExtension;try{var d=E(b.sourceNode,b.pre),e=d.sourceCode;b.sourceCode=e;b.spans=d.spans;b.basePos=0;O(c,e)(b);L(b)}catch(b){a.console&&console.log(b&&b.stack||b)}}function Q(a,b,c){var d=document.createElement("div");d.innerHTML="<pre>"+a+"</pre>";d=d.firstChild;c&&K(d,c,!0);a={langExtension:b,numberLines:c,sourceNode:d,pre:1};P(a);return d.innerHTML}function R(b,c){__p&&__p();var d=c||document.body,e=d.ownerDocument||document;function f(a){return d.getElementsByTagName(a)}c=[f("pre"),f("code"),f("xmp")];var g=[];for(var f=0;f<c.length;++f)for(var h=0,i=c[f].length;h<i;++h)g.push(c[f][h]);c=null;var j=Date;j.now||(j={now:function(){return+new Date()}});var k=0,l,m=/\blang(?:uage)?-([\w.]+)(?!\S)/,n=/\bprettyprint\b/,o=/\bprettyprinted\b/,p=/pre|xmp/i,q=/^code$/i,r=/^(?:pre|code|xmp)$/i,s={};function t(){__p&&__p();var c=a.PR_SHOULD_USE_CONTINUATION?j.now()+250:Infinity;for(;k<g.length&&j.now()<c;k++){var d=g[k],f=s;for(var h=d;h=h.previousSibling;){var i=h.nodeType,u=(i===7||i===8)&&h.nodeValue;if(u?!/^\??prettify\b/.test(u):i!==3||/\S/.test(h.nodeValue))break;if(u){f={};u.replace(/\b(\w+)=([\w:.%+-]+)/g,function(b,c,a){f[c]=a});break}}i=d.className;if((f!==s||n.test(i))&&!o.test(i)){u=!1;for(var h=d.parentNode;h;h=h.parentNode){var v=h.tagName;if(r.test(v)&&h.className&&n.test(h.className)){u=!0;break}}if(!u){d.className+=" prettyprinted";v=f.lang;if(!v){v=i.match(m);var w;!v&&(w=H(d))&&q.test(w.tagName)&&(v=w.className.match(m));v&&(v=v[1])}if(p.test(d.tagName))h=1;else{u=d.currentStyle;var x=e.defaultView;u=u?u.whiteSpace:x&&x.getComputedStyle?x.getComputedStyle(d,null).getPropertyValue("white-space"):0;h=u&&"pre"===u.substring(0,3)}x=f.linenums;(x=x==="true"||+x)||(x=i.match(/\blinenums\b(?::(\d+))?/),x=x?x[1]&&x[1].length?+x[1]:!0:!1);x&&K(d,x,h);l={langExtension:v,sourceNode:d,numberLines:x,pre:h};P(l)}}}k<g.length?setTimeout(t,250):"function"===typeof b&&b()}t()}var S=a.PR={createSimpleLexer:I,registerLangHandler:N,sourceDecorator:J,PR_ATTRIB_NAME:z,PR_ATTRIB_VALUE:A,PR_COMMENT:r,PR_DECLARATION:x,PR_KEYWORD:q,PR_LITERAL:t,PR_NOCODE:B,PR_PLAIN:v,PR_PUNCTUATION:u,PR_SOURCE:y,PR_STRING:p,PR_TAG:w,PR_TYPE:s,prettyPrintOne:g?a.prettyPrintOne=Q:Q,prettyPrint:h=g?a.prettyPrint=R:h=R};typeof define==="function"&&define.amd&&define("google-code-prettify",[],function(){return S})})();f.init=h}),null);