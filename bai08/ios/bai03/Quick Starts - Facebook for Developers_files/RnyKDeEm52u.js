if (self.CavalryLogger) { CavalryLogger.start_js(["mxmb3"]); }

__d("DialogPosition",["Vector"],(function(a,b,c,d,e,f){__p&&__p();var g=40,h;a={calculateTopMargin:function(a,c,d,e){__p&&__p();d===void 0&&(d=null);e===void 0&&(e=!1);var f=b("Vector").getViewportDimensions(),i=!1;e&&d&&(i=d+c>f.y);if(d!=null&&!i)return d;if(h)return h;e=Math.floor((f.x+a)*(f.y-c)/(4*f.x));return Math.max(e,g)},setFixedTopMargin:function(a){h=a}};e.exports=a}),null);
__d("LayerTogglerContext",["Toggler"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._root=this._layer.getRoot(),b("Toggler").createInstance(this._root).setSticky(!1)};c.disable=function(){b("Toggler").destroyInstance(this._root),this._root=null};return a}();e.exports=a}),null);
__d("ScrollAwareDOM",["ArbiterMixin","CSS","DOM","DOMDimensions","HTML","Vector","ViewportBounds","getDocumentScrollElement","getElementPosition","getViewportDimensions","isAsyncScrollQuery","isNode"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){return function(){var c=arguments;j.monitor(arguments[a],function(){b.apply(null,c)})}}function g(a){a instanceof Array||(a=[a]);for(var c=0;c<a.length;c++){var d=b("HTML").replaceJSONWrapper(a[c]);if(d instanceof b("HTML"))return d.getRootNode();else if(b("isNode")(d))return d}return null}function h(a){return b("getElementPosition")(a).y>b("ViewportBounds").getTop()}function i(a){a=b("getElementPosition")(a).y+b("DOMDimensions").getElementDimensions(a).height;var c=b("getViewportDimensions")().height-b("ViewportBounds").getBottom();return a>=c}var j=babelHelpers["extends"]({monitor:function(a,c){__p&&__p();if(b("isAsyncScrollQuery")())return c();a=g(a);if(a){var d=!!a.offsetParent;if(d&&(h(a)||i(a)))return c();var e=b("Vector").getDocumentDimensions(),f=c();if(d||a.offsetParent&&!h(a)){d=b("Vector").getDocumentDimensions().sub(e);e={delta:d,target:a};j.inform("scroll",e)!==!1&&d.scrollElementBy(b("getDocumentScrollElement")())}return f}else return c()},replace:function(a,c){var d=g(c);(!d||b("CSS").hasClass(d,"hidden_elem"))&&(d=a);return j.monitor(d,function(){b("DOM").replace(a,c)})},prependContent:a(1,(c=b("DOM")).prependContent),insertAfter:a(1,c.insertAfter),insertBefore:a(1,c.insertBefore),setContent:a(0,c.setContent),appendContent:a(1,c.appendContent),remove:a(0,c.remove),empty:a(0,c.empty)},b("ArbiterMixin"));e.exports=j}),null);
__d("debounceAcrossTransitions",["debounce"],(function(a,b,c,d,e,f){function a(a,c,d){return b("debounce")(a,c,d,!0)}e.exports=a}),null);
__d("ModalLayer",["csx","cx","Arbiter","ArbiterMixin","CSS","DataStore","DOM","DOMDimensions","DOMQuery","Event","Scroll","ScrollAwareDOM","Style","UserAgent","Vector","debounceAcrossTransitions","ge","getDocumentScrollElement","isAsyncScrollQuery","removeFromArray","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=[],j=null,k=null,l=null;function m(){l||(l=b("DOMQuery").scry(document.body,"._li")[0]||b("ge")("FB4BResponsiveMain"));return l}function n(a){__p&&__p();var c={position:b("Vector").getScrollPosition(),listener:void 0},d=a.offsetTop-c.position.y;b("CSS").addClass(a,"_31e");m().id!=="FB4BResponsiveMain"&&b("Style").set(a,"top",d+"px");b("Arbiter").inform("reflow");c.listener=b("ScrollAwareDOM").subscribe("scroll",function(d,e){if(b("DOMQuery").contains(a,e.target)){d=a.offsetTop-e.delta.y;b("Style").set(a,"top",d+"px");c.position=c.position.add(e.delta);return!1}return!0});b("DataStore").set(a,"ModalLayerData",c)}function o(a,c){__p&&__p();var d=b("DataStore").get(a,"ModalLayerData");if(d){var e=function(){__p&&__p();b("CSS").removeClass(a,"_31e");b("Style").set(a,"top","");if(c){var e=b("getDocumentScrollElement")();b("Scroll").setTop(e,d.position.y);b("Scroll").getTop(e)!==d.position.y&&(b("Scroll").setTop(e,d.position.y+1),b("Scroll").setTop(e,d.position.y))}b("Arbiter").inform("reflow");d.listener.unsubscribe();d.listener=null;b("DataStore").remove(a,"ModalLayerData")};if(c&&b("isAsyncScrollQuery")()){var f=b("DOM").create("div",{className:"_42w"});b("Style").set(f,"height",a.offsetHeight+"px");b("DOM").appendContent(document.body,f);var g=b("getDocumentScrollElement")();b("Scroll").setTop(g,d.position.y);c=!1;b("setTimeout")(function(){e(),b("DOM").remove(f)},0)}else e()}}function p(){var a=m();a!=null&&!b("CSS").matchesSelector(a,"._31e")&&n(a)}function q(){i.length||o(m(),!0)}function r(){__p&&__p();var a=i.length;while(a--){var c=i[a],d=c.getLayerRoot();if(d){s(d,0);c=c.getLayerContentRoot();if(c){c=c.offsetWidth+b("DOMDimensions").measureElementBox(c,"width",!1,!1,!0);s(d,c)}}}}function s(a,c){b("Style").set(a,"min-width",c+(c?"px":""))}a=function(){"use strict";__p&&__p();function a(a){this._layer=a,this._enabled=!1}var c=a.prototype;c.enable=function(){if(!m())return;this._subscription=this._layer.subscribe(["show","hide"],function(a){a=="show"?this._addModal():this._removeModal()}.bind(this));this._layer.isShown()&&this._addModal();this._enabled=!0};c.disable=function(){if(!m())return;this._subscription&&this._subscription.unsubscribe();this._layer.isShown()&&this._removeModal();this._enabled=!1};c._addModal=function(){__p&&__p();var c=this.getLayerRoot();b("CSS").addClass(c,"_3qw");this._wash=b("DOM").create("div",{className:"_3ixn"});b("DOM").prependContent(c,this._wash);c=i[i.length-1];c?n(c.getLayerRoot()):p();c=b("getDocumentScrollElement")();b("Scroll").setTop(c,0);if(!i.length){c=b("debounceAcrossTransitions")(r,100);j=b("Event").listen(window,"resize",c);k=b("Arbiter").subscribe("reflow",c)}i.push(this);a.inform("show",this);b("setTimeout")(r,0)};c._removeModal=function(){__p&&__p();var c=this,d=this.getLayerRoot();b("CSS").removeClass(d,"_3qw");b("DOM").remove(this._wash);this._wash=null;s(d,0);var e=this===i[i.length-1];b("removeFromArray")(i,this);i.length||(j&&j.remove(),j=null,k&&k.unsubscribe(),k=null);var f;b("UserAgent").isBrowser("Safari")&&(d=b("Event").listen(document.documentElement,"mousewheel",b("Event").prevent),f=d.remove.bind(d));b("setTimeoutAcrossTransitions")(function(){var d=i[i.length-1];d?(o(d.getLayerRoot(),e),a.inform("show",d)):(q(),a.inform("hide",c));i.length&&b("setTimeout")(r,0);b("UserAgent").isBrowser("Safari")&&b("setTimeout")(function(){f()},0)},200)};c.getLayerRoot=function(){return this._enabled?this._layer.getRoot():null};c.getLayerContentRoot=function(){return this._enabled?this._layer.getContentRoot():null};a.getTopmostModalLayer=function(){return i[i.length-1]};return a}();Object.assign(a,b("ArbiterMixin"));e.exports=a}),null);
__d("DialogX",["cx","fbt","Arbiter","CSS","DialogPosition","DOMQuery","Event","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerFormHooks","LayerRefocusOnHide","LayerTabIsolation","LayerTogglerContext","ModalLayer","Style","Vector","debounce","getOrCreateDOMID","goURI","shield"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d._configure=function(c,d){__p&&__p();a.prototype._configure.call(this,c,d);b("CSS").addClass(this.getRoot(),"_4-hy");if(c.autohide)var e=this.subscribe("show",function(){e.unsubscribe(),window.setTimeout(b("shield")(this.hide,this),c.autohide)}.bind(this));if(c.redirectURI)var f=this.subscribe("hide",function(){f.unsubscribe(),b("goURI")(c.redirectURI)});this._fixedTopPosition=c.fixedTopPosition;this._ignoreFixedTopInShortViewport=c.ignoreFixedTopInShortViewport};d._getDefaultBehaviors=function(){return a.prototype._getDefaultBehaviors.call(this).concat([i,b("ModalLayer"),b("LayerAutoFocus"),b("LayerButtons"),b("LayerFormHooks"),b("LayerTabIsolation"),b("LayerTogglerContext"),b("LayerRefocusOnHide")])};d._buildWrapper=function(a,c){__p&&__p();var d=a.xui?"_4t2a":"_t",e=a.xui?"_59s7":"_1yv";this._innerContent=b("JSXDOM").div(null,c);c={className:e,role:"dialog"};if(a.labelledBy)c["aria-labelledby"]=a.labelledBy;else if(a.label)c["aria-label"]=a.label;else if(a.titleID)c["aria-labelledby"]=a.titleID;else if(a.titleClass){e=b("DOMQuery").scry(this._innerContent,a.titleClass);if(e.length){e=b("getOrCreateDOMID")(e[0]);c["aria-labelledby"]=e}else c["aria-label"]=this._getDefaultLabel()}else c["aria-label"]=this._getDefaultLabel();e={className:d};a["data-testid"]&&(e["data-testid"]=a["data-testid"]);this._wrapper=b("JSXDOM").div(c,b("JSXDOM").div(e,this._innerContent));a.width!=null&&this.setWidth(a.width);a.height!=null&&this.setHeight(a.height);return b("JSXDOM").div({className:"_10"},this._wrapper)};d._getDefaultLabel=function(){return h._("Dialog content")};d.getContentRoot=function(){return this._wrapper};d.getInnerContent=function(){return this._innerContent};d.updatePosition=function(){var a=b("Vector").getElementDimensions(this._wrapper);a=b("DialogPosition").calculateTopMargin(a.x,a.y,this._fixedTopPosition,this._ignoreFixedTopInShortViewport);b("Style").set(this._wrapper,"margin-top",a+"px");this.inform("update_position",{type:"DialogX",top:a})};d.setWidth=function(a){a=Math.floor(a);if(a===this._width)return;this._width=a;b("Style").set(this._wrapper,"width",a+"px")};d.getWidth=function(){return this._width};d.setHeight=function(a){a=Math.floor(a);if(a===this._height)return;this._height=a;b("Style").set(this._wrapper,"height",a+"px")};d.getFixedTopPosition=function(){return this._fixedTopPosition};d.shouldIgnoreFixedTopInShortViewport=function(){return this._ignoreFixedTopInShortViewport};return c}(b("Layer"));var i=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe(["show","hide"],function(a){a==="show"?(this._attach(),b("Arbiter").inform("layer_shown",{type:"DialogX"})):(this._detach(),b("Arbiter").inform("layer_hidden",{type:"DialogX"}))}.bind(this))};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null,this._resize&&this._detach()};c._attach=function(){this._layer.updatePosition(),this._resize=b("Event").listen(window,"resize",b("debounce")(this._layer.updatePosition.bind(this._layer)))};c._detach=function(){this._resize.remove(),this._resize=null};return a}();Object.assign(i.prototype,{_subscription:null,_resize:null});e.exports=a}),null);
__d("AbstractDialog.react",["DialogX","LayerHideOnBlur","LayerHideOnEscape","React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=b("React").PropTypes;a={createSpec:function(a){__p&&__p();return{displayName:a.displayName,propTypes:{behaviors:g.object,className:g.string,"data-testid":g.string,modal:g.bool,autohide:g.number,width:g.number,label:g.node,labelledBy:g.string,titleID:g.string,titleClass:g.string,causalElement:g.object,causalElementRef:g.func,shown:g.bool,layerHideOnBlur:g.bool,hideOnEscape:g.bool,isStrictlyControlled:g.bool,onHide:g.func,onToggle:g.func,fixedTopPosition:g.number},createLayer:function(c){var d=this.props.className;d=babelHelpers["extends"]({"data-testid":this.props["data-testid"]?this.props["data-testid"]:void 0,width:this.props.width,xui:!0,autohide:this.props.autohide,classNames:d?d.split(" "):null,label:this.props.label,labelledBy:this.props.labelledBy,isStrictlyControlled:this.props.isStrictlyControlled,titleID:this.props.titleID,titleClass:this.props.titleClass,causalElement:this._getCausalElement(),fixedTopPosition:this.props.fixedTopPosition},a||{});var e=babelHelpers["extends"]({},a.addedBehaviors,this.props.behaviors);this.props.layerHideOnBlur!==!1&&(e.LayerHideOnBlur=b("LayerHideOnBlur"));(this.props.hideOnEscape===!0||this.props.hideOnEscape!==!1&&a.hideOnEscape===!0)&&(e.LayerHideOnEscape=b("LayerHideOnEscape"));d.addedBehaviors=this.enumerateBehaviors(e);e=new(b("DialogX"))(d,c);e.conditionShow(this.props.shown);return e},receiveProps:function(a,b){this.updateBehaviors(b.behaviors,a.behaviors),this.layer&&(this.layer.setCausalElement(this._getCausalElement()),this.layer.conditionShow(a.shown),this.layer.setWidth(a.width),a.shown&&this.layer.updatePosition())},_getCausalElement:function(){var a;this.props.causalElementRef?a=b("ReactDOM").findDOMNode(this.props.causalElementRef()):a=this.props.causalElement;return a}}}};e.exports=a}),null);
__d("XUIButton.react",["cx","AbstractButton.react","FBLogger","React","XUISpinner.react","gkx","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;var h="medium",i=null;function j(){if(i===null)try{i=b("gkx")("811372")}catch(a){i=!1,b("FBLogger")("ui").catching(a).warn("Request for gkx failed for www_css_xuibutton_click_margin")}return i}c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.buttonRef=b("React").createRef(),c)||babelHelpers.assertThisInitialized(d)}c.getButtonSize=function(a){return a.size||h};var d=c.prototype;d.focus=function(){this.buttonRef.current!=null&&this.buttonRef.current.focus()};d.render=function(){var a=this.props,c=a.use,d=a.size,e=a.borderShade,f=a.suppressed;a=babelHelpers.objectWithoutPropertiesLoose(a,["use","size","borderShade","suppressed"]);d="_4jy0"+(d==="small"?" _517i":"")+(d==="medium"?" _4jy3":"")+(d==="large"?" _4jy4":"")+(d==="xlarge"?" _4jy5":"")+(d==="xxlarge"?" _4jy6":"")+(c==="default"?" _517h":"")+(c==="confirm"?" _4jy1":"")+(c==="special"?" _4jy2":"")+(e==="light"?" _51sy":"")+(e==="dark"?" _9c6":"")+(f?" _59pe":"")+(c==="confirm"||c==="special"?" selected":"")+(j()?" _7flx":"");return b("React").jsx(b("AbstractButton.react"),babelHelpers["extends"]({},a,{label:this.props.loading?b("React").jsx(b("XUISpinner.react"),{}):this.props.label,className:b("joinClasses")(this.props.className,d),ref:this.buttonRef}))};return c}(b("React").Component);c.defaultProps={use:"default",size:h,borderShade:"light",suppressed:!1};c.propTypes={use:a.oneOf(["default","special","confirm"]),size:a.oneOf(["small","medium","large","xlarge","xxlarge"]),borderShade:a.oneOf(["light","dark"]),suppressed:a.bool};e.exports=c}),null);
__d("XUIBlock",["cx","React"],(function(a,b,c,d,e,f,g){a=b("React").PropTypes;c={propTypes:{background:a.oneOf(["base-wash","light-wash","white","highlight","transparent"])},getDefaultProps:function(){return{background:"transparent"}},getBackgroundClass:function(a){a=(a.background==="base-wash"?"_4-u5":"")+(a.background==="light-wash"?" _57d8":"")+(a.background==="white"?" _4-u8":"")+(a.background==="highlight"?" _4-u7":"");return a}};e.exports=c}),null);
__d("XUICard.react",["cx","React","XUIBlock","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;a.background;var c=a.children,d=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["background","children","className"]);d=b("joinClasses")(d,"_4-u2",b("XUIBlock").getBackgroundClass(this.props));return b("React").jsx("div",babelHelpers["extends"]({},a,{className:d,children:c}))};return c}(b("React").Component);a.propTypes=b("XUIBlock").propTypes;a.defaultProps=babelHelpers["extends"]({},b("XUIBlock").getDefaultProps(),{background:"white"});e.exports=a}),null);
__d("XUICardSection.react",["cx","React","XUIBlock","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props;a.background;var c=a.children,d=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["background","children","className"]);d=b("joinClasses")(d,"_4-u3",b("XUIBlock").getBackgroundClass(this.props));return b("React").jsx("div",babelHelpers["extends"]({},a,{className:d,children:c}))};return c}(b("React").Component);a.propTypes=b("XUIBlock").propTypes;a.defaultProps=b("XUIBlock").getDefaultProps();e.exports=a}),null);
__d("XUIDialogTitle.react",["cx","fbt","LeftRight.react","React","XUICloseButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=null,c=this.props,d=c.closeButtonText,e=c.showCloseButton,f=c.closeButtonSize,g=c.closeButtonClassName;c=babelHelpers.objectWithoutPropertiesLoose(c,["closeButtonText","showCloseButton","closeButtonSize","closeButtonClassName"]);e&&(a=b("React").jsx(b("XUICloseButton.react"),{size:f,"data-testid":"dialog_title_close_button",label:d,className:b("joinClasses")(g,"layerCancel _51-t"),onClick:this.props.onCloseClick}));f=b("React").Children.toArray(this.props.children);return b("React").jsx("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,"_4-i0"+(e?" _2gb3":"")),children:b("React").jsxs(b("LeftRight.react"),{children:[b("React").jsx("h3",{className:"_52c9","data-hover":"tooltip","data-tooltip-display":"overflow",children:f[0]}),b("React").jsxs("div",{className:"_51-u",children:[f.slice(1),a]})]})}))};return c}(b("React").Component);a.defaultProps={closeButtonText:h._("Close"),showCloseButton:!0,closeButtonSize:"medium"};e.exports=a}),null);
__d("DevsiteUnclickableOverlay.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["className"]);c=b("joinClasses")("_5j-8",this.props.className);return b("React").jsx("div",babelHelpers["extends"]({},a,{className:c,children:this.props.children}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("DevsiteCard.react",["cx","DevsiteUnclickableOverlay.react","React","XUICard.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.children,d=a.className,e=a.disabled,f=a.flatTop,g=a.noBorder,h=a.noMargin;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","disabled","flatTop","noBorder","noMargin"]);e&&(c=b("React").jsx(b("DevsiteUnclickableOverlay.react"),{children:c}));e="_57mb _1u44"+(f?" _5jqi":"")+(g?" noBorder":"")+(h?" noMargin":"");return b("React").jsx(b("XUICard.react"),babelHelpers["extends"]({},a,{className:b("joinClasses")(e,d),children:c}))};return c}(b("React").Component);c.defaultProps={disabled:!1,flatTop:!1,noBorder:!1,noMargin:!1};c.propTypes={disabled:a.bool,flatTop:a.bool,noBorder:a.bool,noMargin:a.bool};e.exports=c}),null);
__d("DevsiteLinkDialog",["AsyncRequest","Event","URI","$"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;a={showRegistered:function(a,c,d){b("Event").listen(b("$")(a),"click",function(){d.show();return!1});a=a.match(RegExp("^"+c+"(.+)"));a&&a[1]===(g||(g=b("URI"))).getRequestURI().getFragment()&&d.show()},showAsync:function(a,c){b("Event").listen(b("$")(a),"click",function(){new(b("AsyncRequest"))().setURI(c).send();return!1})}};e.exports=a}),null);
__d("XBasicFBNuxDismissController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/megaphone/dismiss_fbnux/",{nux_id:{type:"Int",required:!0}})}),null);
__d("XBasicFBNuxViewController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/megaphone/view_fbnux/",{nux_id:{type:"Int",required:!0}})}),null);
__d("BasicFBNux",["AsyncRequest","XBasicFBNuxDismissController","XBasicFBNuxViewController"],(function(a,b,c,d,e,f){var g={subscribeHide:function(a,b){a.subscribe("hide",g.onDismiss.bind(this,b))},onView:function(a){a=b("XBasicFBNuxViewController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()},onDismiss:function(a){a=b("XBasicFBNuxDismissController").getURIBuilder().setInt("nux_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}};e.exports=g}),null);
__d("ManagedError",[],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this,b!==null&&b!==void 0?b:"")||this;b!==null&&b!==void 0?d.message=b:d.message="";d.innerError=c;return d}return b}(babelHelpers.wrapNativeSuper(Error));e.exports=a}),null);
__d("AssertionError",["ManagedError"],(function(a,b,c,d,e,f){a=function(a){"use strict";babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,b)||this}return b}(b("ManagedError"));e.exports=a}),null);
__d("Assert",["AssertionError","sprintf"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(typeof a!=="boolean"||!a)throw new(b("AssertionError"))(c);return a}function h(a,c,d){__p&&__p();var e;if(c===void 0)e="undefined";else if(c===null)e="null";else{var f=Object.prototype.toString.call(c);e=/\s(\w*)/.exec(f)[1].toLowerCase()}g(a.indexOf(e)!==-1,d||b("sprintf")("Expression is of type %s, not %s",e,a));return c}function a(a,b,c){g(b instanceof a,c||"Expression not instance of type");return b}function i(a,b){j["is"+a]=b,j["maybe"+a]=function(a,c){a!=null&&b(a,c)}}var j={isInstanceOf:a,isTrue:g,isTruthy:function(a,b){return g(!!a,b)},type:h,define:function(a,b){a=a.substring(0,1).toUpperCase()+a.substring(1).toLowerCase(),i(a,function(a,c){g(b(a),c)})}};["Array","Boolean","Date","Function","Null","Number","Object","Regexp","String","Undefined"].forEach(function(a){i(a,h.bind(null,a.toLowerCase()))});e.exports=j}),null);
__d("ContextualLayerUpdateOnScroll",["Event"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscriptions=[this._layer.subscribe("show",this._attachScrollListener.bind(this)),this._layer.subscribe("hide",this._removeScrollListener.bind(this))]};c.disable=function(){while(this._subscriptions.length)this._subscriptions.pop().unsubscribe()};c._attachScrollListener=function(){var a=this,c=this._layer.getContextScrollParent(),d=this._layer.getInsertScrollParent();if(this._listener!=null||c===d)return;this._listener=b("Event").listen(c,"scroll",function(){a._layer.updatePosition()})};c._removeScrollListener=function(){this._listener&&this._listener.remove(),this._listener=null};return a}();Object.assign(a.prototype,{_subscriptions:[]});e.exports=a}),null);
__d("LayerDestroyOnHide",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var b=a.prototype;b.enable=function(){var a=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe("hide",function(){setTimeout(a,0)})};b.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("dotAccess",[],(function(a,b,c,d,e,f){function a(a,b,c){b=b.split(".");do{var d=b.shift();a=a[d]||c&&(a[d]={})}while(b.length&&a);return a}e.exports=a}),null);
__d("useLayoutEffect_SAFE_FOR_SSR",["ExecutionEnvironment","React"],(function(a,b,c,d,e,f){"use strict";a=b("React").useEffect;c=b("React").useLayoutEffect;d=b("ExecutionEnvironment").canUseDOM?c:a;e.exports=d}),null);
__d("DateConsts",[],(function(a,b,c,d,e,f){__p&&__p();var g=1e3;a=60;b=60;c=24;d=7;f=12;var h=1e3,i=30.43,j=365.242,k=a*b,l=k*c,m=l*d,n=l*j,o=g*a,p=o*b,q=g*l,r=q*d,s=q*j,t={SUNDAY:0,MONDAY:1,TUESDAY:2,WEDNESDAY:3,THURSDAY:4,FRIDAY:5,SATURDAY:6};Object.freeze(t);t={getDaysInMonth:function(a,b){return new Date(a,b,0).getDate()},getCurrentTimeInSeconds:function(){return Date.now()/g},DAYS:t,MS_PER_SEC:g,MS_PER_MIN:o,MS_PER_HOUR:p,MS_PER_DAY:q,MS_PER_WEEK:r,MS_PER_YEAR:s,SEC_PER_MIN:a,SEC_PER_HOUR:k,SEC_PER_DAY:l,SEC_PER_WEEK:m,SEC_PER_YEAR:n,US_PER_MS:h,MIN_PER_HOUR:b,HOUR_PER_DAY:c,DAYS_PER_WEEK:d,MONTHS_PER_YEAR:f,AVG_DAYS_PER_MONTH:i,AVG_DAYS_PER_YEAR:j,"private":{instantRange:{since:-864e10,until:864e10+1}}};e.exports=t}),null);
__d("ResizeEventHandler",["requestPersistentAnimationFrame"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){var c=this;this.$1=!1;this.$2=!1;this.handleEvent=function(){c.$2===!1&&(c.$2=!0,b("requestPersistentAnimationFrame")(c.$4))};this.$4=function(){c.$2=!1,c.$1===!1&&c.$3()};this.$3=a}var c=a.prototype;c.cancel=function(){this.$1=!0};return a}();e.exports=a}),null);
__d("flipObject",[],(function(a,b,c,d,e,f){"use strict";function a(a){return Object.entries(a).reduce(function(b,c){var d=c[0];c=c[1];Object.prototype.hasOwnProperty.call(a,d)&&typeof c!=="object"&&typeof c!=="function"&&c!=null&&(b[String(c)]=d);return b},{})}e.exports=a}),null);
__d("intlList",["fbt","invariant","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i={AND:"AND",NONE:"NONE",OR:"OR"},j={COMMA:"COMMA",SEMICOLON:"SEMICOLON"};a=function(a,b,c){__p&&__p();var d=a.length;if(d===0)return"";else if(d===1)return a[0];var e=a[d-1],f=a[0];for(var h=1;h<d-1;++h)switch(c){case j.SEMICOLON:f=g._("{previous items}; {following items}",[g._param("previous items",f),g._param("following items",a[h])]);break;default:f=g._("{previous items}, {following items}",[g._param("previous items",f),g._param("following items",a[h])])}return k(f,e,b||i.AND,c||j.COMMA)};function k(a,b,c,d){switch(c){case i.AND:return g._("{list of items} and {last item}",[g._param("list of items",a),g._param("last item",b)]);case i.OR:return g._("{list of items} or {last item}",[g._param("list of items",a),g._param("last item",b)]);case i.NONE:switch(d){case j.SEMICOLON:return g._("{previous items}; {last item}",[g._param("previous items",a),g._param("last item",b)]);default:return g._("{list of items}, {last item}",[g._param("list of items",a),g._param("last item",b)])}default:h(0,568,c)}}a.DELIMITERS=j;a.CONJUNCTIONS=i;e.exports=a}),null);
__d("XDeveloperDocumentationController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/docs/{?path1}/{?path2}/{?path3}/{?path4}/{?path5}/{?path6}/",{version:{type:"String"},preview:{type:"Exists",defaultValue:!1},revisionid:{type:"Int"},translation:{type:"Exists",defaultValue:!1},path1:{type:"String"},path2:{type:"String"},path3:{type:"String"},path4:{type:"String"},path5:{type:"String"},path6:{type:"String"}})}),null);