if (self.CavalryLogger) { CavalryLogger.start_js(["TBQWg"]); }

__d("DeferredComponent.react",["React","createCancelableFunction"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d){__p&&__p();var e;e=a.call(this,c,d)||this;e.$1=function(a){e.setState({ComponentClass:a},function(){e.props.onComponentLoad&&e.props.onComponentLoad(a)})};var f=null;function g(a){f=a}e.props.deferredComponent(g);e.state={ComponentClass:f,cancelableModulesLoaded:b("createCancelableFunction")(e.$1)};return e}var d=c.prototype;d.componentDidMount=function(){this.props.deferredComponent(this.state.cancelableModulesLoaded)};d.componentWillUnmount=function(){this.state.cancelableModulesLoaded.cancel()};d.render=function(){__p&&__p();var a=this.state.ComponentClass;if(!a||this.props.deferredForcePlaceholder)return this.props.deferredPlaceholder;var c=this.props;c.deferredPlaceholder;c.deferredComponent;c.onComponentLoad;c.deferredForcePlaceholder;c=babelHelpers.objectWithoutPropertiesLoose(c,["deferredPlaceholder","deferredComponent","onComponentLoad","deferredForcePlaceholder"]);return b("React").jsx(a,babelHelpers["extends"]({},c))};return c}(b("React").Component);c.propTypes={deferredPlaceholder:a.element.isRequired,deferredComponent:a.func.isRequired,onComponentLoad:a.func,deferredForcePlaceholder:a.bool};e.exports=c}),null);
__d("PromiseAnnotate",[],(function(a,b,c,d,e,f){"use strict";e.exports={setDisplayName:function(a,b){a.displayName=b;return a},getDisplayName:function(a){a=a.displayName;if(typeof a==="string")return a;else return null}}}),null);
__d("JSResourceReference",["Promise","Bootloader","PromiseAnnotate","ifRequired"],(function(a,b,c,d,e,f){__p&&__p();var g=function(a){return a};a=function(){"use strict";__p&&__p();function a(a){this.$1=a}var c=a.prototype;c.getModuleId=function(){var a=this.$1;return a};c.getModuleIdAsRef=function(){return this.$1};c.load=function(){var a=this,c=new(b("Promise"))(function(c){b("Bootloader").loadModules.call(b("Bootloader"),[a.$1],c,a.$2||"JSResource: unknown caller")});b("PromiseAnnotate").setDisplayName(c,"Bootload("+this.getModuleId()+")");return c};c.preload=function(){b("Bootloader").preloadModules.call(b("Bootloader"),[this.$1])};c.equals=function(a){return this===a||this.$1==a.$1};c.getModuleIfRequired=function(){return b("ifRequired").call(null,this.$1,g)};c.__setRef=function(a){this.$2=a;return this};a.loadAll=function(a,c){__p&&__p();var d={},e=!1;for(var f=a,g=Array.isArray(f),h=0,f=g?f:f[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var i;if(g){if(h>=f.length)break;i=f[h++]}else{h=f.next();if(h.done)break;i=h.value}i=i;i=i.$2;i&&(e=!0,d[i]=!0)}b("Bootloader").loadModules.call(b("Bootloader"),a.map(function(a){return a.getModuleId()}),c,e?Object.keys(d).join(":"):"JSResource: unknown caller")};return a}();e.exports=a}),null);
__d("JSResource",["JSResourceReference"],(function(a,b,c,d,e,f){__p&&__p();var g={};function h(a,b){g[a]=b}function i(a){return g[a]}function a(a){a=a;var c=i(a);if(c)return c;c=new(b("JSResourceReference"))(a);h(a,c);return c}a.Reference=b("JSResourceReference");a.loadAll=b("JSResourceReference").loadAll;e.exports=a}),null);
__d("PerfHelperUtils",["cx","DeferredComponent.react","JSResource","React","joinClasses","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.render=function(){var a=this.props,c=a.tooltip;a=a.className;return b("React").jsx("div",{className:"_28hn"+(this.props.color==="red"?" _4ez8":"")+(this.props.color==="green"?" _28ho":""),children:b("React").jsx(b("DeferredComponent.react"),{deferredPlaceholder:b("React").jsx("div",{}),deferredComponent:function(a){b("promiseDone")(b("JSResource")("Tooltip.react").__setRef("PerfHelperUtils").load(),a)},className:b("joinClasses")("_5_my",a),tooltip:c,children:this.props.children})})};return a}(b("React").PureComponent);function a(a){return b("React").jsx(h,{color:"red",tooltip:"This bootloaded component has a red border\n          because "+a.moduleId+"\n          took over "+a.timeLimitSecs+" seconds ("+a.timeSpentSecs+"s) to load",children:a.children})}c={SlowBootloadBorder:a,BorderedComponent:h};e.exports=c}),null);
__d("PerfUtils",["React","performanceNow","PerfHelperUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("React").Component,i=b("PerfHelperUtils").SlowBootloadBorder;function a(a,c,d){__p&&__p();var e=function(f){__p&&__p();babelHelpers.inheritsLoose(e,f);function e(){return f.apply(this,arguments)||this}var g=e.prototype;g.componentDidMount=function(){c()};g.render=function(){if(d)return b("React").jsx(a,babelHelpers["extends"]({},this.props,{ref:d}));else return b("React").jsx(a,babelHelpers["extends"]({},this.props))};return e}(h);return e}function c(a,c,d){__p&&__p();var e=1e4;d=(g||(g=b("performanceNow")))()-d;if(d<e)return a;var f=e/1e3,j=Math.round(d)/1e3;e=function(d){babelHelpers.inheritsLoose(e,d);function e(){return d.apply(this,arguments)||this}var g=e.prototype;g.componentDidMount=function(){};g.render=function(){return b("React").jsx(i,{moduleId:c,timeLimitSecs:f,timeSpentSecs:j,children:b("React").jsx(a,babelHelpers["extends"]({},this.props))})};return e}(h);return e}d={appendListener:a,markRedInDev:c};e.exports=d}),null);
__d("BootloadedComponent.react",["DeferredComponent.react","JSResource","PerfUtils","React","TimeSlice","performanceNow"],(function(a,b,c,d,e,f){__p&&__p();var g;a=b("React").Component;var h=b("PerfUtils").appendListener;c=b("PerfUtils").markRedInDev;d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.create=function(a){__p&&__p();var c=function(d){__p&&__p();babelHelpers.inheritsLoose(c,d);function c(){return d.apply(this,arguments)||this}var e=c.prototype;e.render=function(){var c=this.props;c.bootloadLoader;c=babelHelpers.objectWithoutPropertiesLoose(c,["bootloadLoader"]);return b("React").jsx(i,babelHelpers["extends"]({bootloadLoader:a,bootloadPlaceholder:b("React").jsx("div",{})},c))};return c}(b("React").Component);c.displayName="BootloadedComponent("+a.getModuleId()+")";return c};return c}(a);f=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this,c)||this;d.$BootloadedComponent1=function(a){var c=d.props.isContinuation,e;c=c?b("TimeSlice").PropagationType.CONTINUATION:b("TimeSlice").PropagationType.EXECUTION;b("TimeSlice").guard(b("JSResource").loadAll,"BootloadedComponent load all JSResource",{propagationType:c})([d.props.bootloadLoader],function(b){b=d.props.onComponentDidMount?h(b,d.props.onComponentDidMount):b,a(b)})};c.onBootloaderWillMount&&c.onBootloaderWillMount();return d}var d=c.prototype;d.render=function(){var a=this.props;a.bootloadLoader;a.isContinuation;var c=a.bootloadPlaceholder,d=a.bootloadForcePlaceholder;a=babelHelpers.objectWithoutPropertiesLoose(a,["bootloadLoader","isContinuation","bootloadPlaceholder","bootloadForcePlaceholder"]);return b("React").jsx(b("DeferredComponent.react"),babelHelpers["extends"]({deferredPlaceholder:c,deferredComponent:this.$BootloadedComponent1,deferredForcePlaceholder:d},a))};return c}(d);f.defaultProps={isContinuation:!0};var i=f;e.exports=i}),null);
__d("TabBarItem.react",["cx","Event","Focus","Keys","React","ReactDOM","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").jsx("li",babelHelpers["extends"]({},this.props,{children:this.props.children}))};return c}(b("React").Component);d=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.onKeyDown=function(a){var c=b("Event").getKeyCode(a);c===b("Keys").SPACE&&d.refs.tab&&(b("ReactDOM").findDOMNode(d.refs.tab).click(),b("Event").prevent(a))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props,c=a.selected,d=a.hideFocusRing;a=a.shouldWrapTab;c="_45hc"+(c?" _1hqh":"");d="_3m1v"+(d?" _468f":"");return a?this.$1(c,d):this.$2(b("joinClasses")(c,d))};d.$1=function(a,c){__p&&__p();var d=this.props,e=d.id,f=d.className,g=d.href,h=d.ajaxify,i=d.tabIndex,j=d.rel,k=d.target,l=d.selected,m=d.wrapper,n=d.mockSpacebarClick,o=d["aria-haspopup"];d.focused;d.hideFocusRing;d.shouldWrapTab;d=babelHelpers.objectWithoutPropertiesLoose(d,["id","className","href","ajaxify","tabIndex","rel","target","selected","wrapper","mockSpacebarClick","aria-haspopup","focused","hideFocusRing","shouldWrapTab"]);g=g||"#";var p={};n&&(p.onKeyDown=this.onKeyDown);n=b("React").jsx("a",{"aria-haspopup":o,"aria-describedby":e,ref:"tab",ajaxify:h,href:g,role:"tab",rel:j,target:k,tabIndex:i,className:c,"aria-selected":l,children:this.props.children});return b("React").jsx(m,babelHelpers["extends"]({},d,{tabIndex:null,className:b("joinClasses")(f,a),role:"presentation",children:b("React").cloneElement(n,p)}))};d.$2=function(a){__p&&__p();var c=this.props,d=c.id,e=c.className,f=c.href,g=c.selected,h=c.mockSpacebarClick;c=babelHelpers.objectWithoutPropertiesLoose(c,["id","className","href","selected","mockSpacebarClick"]);f=f||"#";var i={};h&&(i.onKeyDown=this.onKeyDown);delete c.menuAlignh;delete c.menuClassName;delete c.tabComponent;delete c.maxDropdownHeight;delete c.focused;delete c.hideFocusRing;delete c.wrapper;delete c.shouldWrapTab;h=b("React").jsx("a",babelHelpers["extends"]({"aria-haspopup":this.props["aria-haspopup"],"aria-describedby":d},c,{href:f,ref:"tab",role:"tab",className:b("joinClasses")(e,a),"aria-selected":g,children:this.props.children}));return b("React").cloneElement(h,i)};d.componentDidMount=function(){this.focus()};d.componentDidUpdate=function(a){this.props.focused!==a.focused&&this.focus()};d.focus=function(){this.props.focused&&b("Focus").set(this.refs.tab,!this.props.hideFocusRing)};return c}(b("React").Component);d.propTypes={wrapper:a.func.isRequired,shouldWrapTab:a.bool,tabIndex:a.oneOf([-1,0]),selected:a.bool,focused:a.bool,hideFocusRing:a.bool,mockSpacebarClick:a.bool};d.defaultProps={"aria-haspopup":!1,wrapper:c,shouldWrapTab:!0,tabIndex:-1,selected:!1,focused:!1,hideFocusRing:!1,mockSpacebarClick:!0};e.exports=d}),null);
__d("TabBarItemWrapper.react",["React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.getComponent=function(a){return a.component};var c=b.prototype;c.render=function(){return this.props.component};return b}(b("React").Component);e.exports=a}),null);
__d("TabBar.react",["cx","fbt","invariant","BootloadedComponent.react","Event","JSResource","React","ReactDOM","RTLKeys","TabBarItem.react","TabBarItemWrapper.react","clearTimeout","emptyFunction","joinClasses","setTimeout"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=h._("More");c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var d,e;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(d=e=a.call.apply(a,[this].concat(g))||this,e.$2=!1,e.state={activeTabKey:e.props.activeTabKey||e.props.defaultActiveTabKey,focusedTabKey:null,previousFocusedTabKey:null,visibleTabsCount:0,shouldCalculateVisibleTabs:!0,hideFocusRing:!0},e.onMouseDown=function(){e.setState({hideFocusRing:!0})},e.onKeyDown=function(a){__p&&__p();var d=b("Event").getKeyCode(a);switch(d){case b("RTLKeys").UP:case b("RTLKeys").getRight():case b("RTLKeys").DOWN:case b("RTLKeys").getLeft():var f,g=e.groupTabsByVisibility();g=g.visibleTabs;d=d===b("RTLKeys").UP||d===b("RTLKeys").getLeft();var h=d?-1:1,i=d?0:g.length-1,j=e.getFocusedTabIndex();j===-1&&h===-1&&(j=g.length);j===-1?f=null:j===i&&h===1?f=c.MORE_TAB_KEY:(d=d?Math.max:Math.min,d=d(j+h,i),f=g[d].key);f&&e.setState({focusedTabKey:f,hideFocusRing:!1});break;case b("RTLKeys").RETURN:j=e.getFocusedTab();if(j){h=j.key;i=e.props.onTabClick(h,a);i!==!1&&e.$2&&e.activateTab(h)}break}},e.onKeyUp=function(a){b("Event").getKeyCode(a)===b("RTLKeys").TAB&&e.state.hideFocusRing&&e.setState({hideFocusRing:!1})},e.onBlur=function(){e.setState(function(a){return{previousFocusedTabKey:a.focusedTabKey,focusedTabKey:null}}),e.$1=b("setTimeout")(function(){e.setState({previousFocusedTabKey:null})},c.BLUR_TIMEOUT)},d)||babelHelpers.assertThisInitialized(e)}var d=c.prototype;d.componentDidMount=function(){this.$3(),this.$4(),this.$2=!0};d.componentWillUnmount=function(){b("clearTimeout")(this.$1),this.$2=!1};d.UNSAFE_componentWillReceiveProps=function(a){this.setState(function(b){return{shouldCalculateVisibleTabs:!0,activeTabKey:a.activeTabKey||b.activeTabKey}})};d.shouldComponentUpdate=function(a,b){if(this.state.focusedTabKey&&!b.focusedTabKey)return!1;return!this.state.focusedTabKey&&!b.focusedTabKey&&this.state.previousFocusedTabKey&&!b.previousFocusedTabKey?!1:!0};d.componentDidUpdate=function(){this.state.shouldCalculateVisibleTabs&&this.$3(),this.$4()};d.render=function(){__p&&__p();var a=this,d=this.getTabs(),e=d.length,f=this.getActiveTabIndex();f=d[f];var g=this.getActiveTabIndex(!0),h;f&&(h=f.key);var i=this.props.dropdownTabComponent;i=b("React").jsx(i,{ref:"more",className:"_45hd _2pik",children:b("React").jsx("span",{className:"_1b0",children:this.props.moreLabel})},"_dropdown");if(this.state.shouldCalculateVisibleTabs)d=d.map(function(b,c){return a.$5(b,c,h,null,g,!1,!1)}),e>2&&d.push(i);else{e=this.groupTabsByVisibility();d=e.visibleTabs;e=e.extraTabs;var j=this.isDropdownSelected(),k=this.state.visibleTabsCount,l=this.state.focusedTabKey;l=l&&this.getFocusedTabIndex()===-1?c.MORE_TAB_KEY:l;d=d.map(function(b,c){return a.$5(b,c,h,l,g,!0,!0)});e=e.map(function(b,c){return a.$5(b,c,h,null,g,!0,!1)});if(e.length){var m;k===0&&f&&(m=f);f=m&&m.props.children||this.props.moreLabel;var n="_dropdown";i=b("React").jsx(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("TabBarDropdownItem.react").__setRef("TabBar.react"),bootloadPlaceholder:i,menuAlignh:this.props.dropdownMenuAlignh,menuClassName:this.props.dropdownMenuClassName,selected:j,focused:l===c.MORE_TAB_KEY,hideFocusRing:this.state.hideFocusRing,onMouseDown:this.onMouseDown,onFocus:this.onFocus.bind(this,n),onBlur:this.onBlur,ref:"more",label:f,tabComponent:this.props.dropdownTabComponent,maxDropdownHeight:this.props.maxDropdownHeight,children:e},n);k===0?d=i:d.push(i)}}j=Object.assign({},this.props);delete j.moreLabel;delete j.maxTabsVisible;delete j.onTabClick;delete j.activeTabKey;delete j.onHeightCalculated;delete j.onWidthCalculated;delete j.orientation;delete j.alwaysShowActive;delete j.dropdownTabComponent;delete j.shouldCalculateVisibleTabs;return b("React").jsx("ul",babelHelpers["extends"]({},j,{className:b("joinClasses")(this.props.className,"_43o4"+(this.props.orientation==="horizontal"?" _4470":"")+(this.props.orientation==="vertical"?" _4471":"")),role:"tablist",onKeyDown:this.onKeyDown,onKeyUp:this.onKeyUp,children:d}))};d.setWidth=function(a){b("ReactDOM").findDOMNode(this).style.width=a,this.setState({shouldCalculateVisibleTabs:!0})};d.setHeight=function(a){b("ReactDOM").findDOMNode(this).style.height=a,this.setState({shouldCalculateVisibleTabs:!0})};d.$4=function(){this.props.orientation==="vertical"?this.$6():this.$7()};d.$6=function(){this.props.onWidthCalculated(b("ReactDOM").findDOMNode(this).clientWidth)};d.$7=function(){this.props.onHeightCalculated(b("ReactDOM").findDOMNode(this).clientHeight)};d.$3=function(){__p&&__p();var a=this,b=this.getTabs(),c=b.length,d=Object.keys(this.refs).map(function(b){return a.$8(a.refs[b])}),e=Math.ceil(this.$8(this)),f=this.$8(this.refs.more),g=Math.min(c,this.props.maxTabsVisible);if(!this.props.shouldCalculateVisibleTabs){this.setState({visibleTabsCount:g,shouldCalculateVisibleTabs:!1});return}var h=this.getActiveTabIndex();this.props.alwaysShowActive&&h!==-1&&(b.unshift(b.splice(h,1)[0]),d.unshift(d.splice(h,1)[0]));g=0;h=0;for(var i=0;i<c;i++){var j=d[i],k=b[i].key||"";if(h+j>e&&!k.startsWith("visual_poll_")){if(g>0&&c>2)while(g>0&&(h+f>e||c-g<2))g--,h-=d[g];else g=0;break}g++;h+=j}this.setState({visibleTabsCount:Math.min(g,this.props.maxTabsVisible),shouldCalculateVisibleTabs:!1})};d.$8=function(a){a=b("ReactDOM").findDOMNode(a);if(!a||!(a instanceof HTMLElement))return 0;a=a.getBoundingClientRect();var c=a.width;a=a.height;return this.props.orientation==="vertical"?a:c};d.getActiveTabIndex=function(a){__p&&__p();a===void 0&&(a=!1);var b=this.state.activeTabKey;if(a){a=this.groupTabsByVisibility();a=a.visibleTabs;a=a}else a=this.getTabs();return a.findIndex(function(a){return b!=null&&a&&a.key===b})};d.getFocusedTabIndex=function(){var a=this.state.focusedTabKey||this.state.previousFocusedTabKey,b=this.groupTabsByVisibility();b=b.visibleTabs;return b.findIndex(function(b){return a!=null&&b&&b.key===a})};d.getFocusedTab=function(){var a=this.state.focusedTabKey,b=this.groupTabsByVisibility();b=b.visibleTabs;var c=b.findIndex(function(b){return a!=null&&b&&b.key===a});return b[c]};d.onClick=function(a,b){b=this.props.onTabClick(a,b);b!==!1&&this.$2&&this.activateTab(a)};d.onFocus=function(a,c){b("clearTimeout")(this.$1),a!==this.state.focusedTabKey&&(this.setState({focusedTabKey:a,previousFocusedTabKey:null}),c.preventDefault(),c.stopPropagation())};d.$5=function(a,d,e,f,g,h,j){__p&&__p();var k=this;a.key!==c.MORE_TAB_KEY||i(0,4969);e=e!=null&&e===a.key;f=f!=null&&f===a.key;f={selected:e,focused:f,tabIndex:e||g===-1&&d===0?0:-1,hideFocusRing:this.state.hideFocusRing};h?(f.onClick=function(b,c){c=(c=c)!=null?c:b;k.onClick(a.key,c)},f.onMouseDown=this.onMouseDown):f.mockSpacebarClick=!1;j&&(f.onFocus=this.onFocus.bind(this,a.key),f.onBlur=this.onBlur);a=b("React").cloneElement(a,f);return b("React").jsx(b("TabBarItemWrapper.react"),{component:a,ref:d},a.key)};d.activateTab=function(a){a&&this.setState({activeTabKey:a,focusedTabKey:a,shouldCalculateVisibleTabs:!0})};d.getTabs=function(){var a=[];b("React").Children.forEach(this.props.children,function(b){b&&a.push(b)});return a};d.groupTabsByVisibility=function(){__p&&__p();var a=this.state.visibleTabsCount,b=this.getTabs(),c=this.getActiveTabIndex(),d,e;if(!this.props.alwaysShowActive||c<a||a===0)e=b.slice(a),d=b.slice(0,a);else{c=b.splice(c,1)[0];a=a>0?a-1:0;e=b.slice(a);d=b.slice(0,a);d.push(c)}return{visibleTabs:d,extraTabs:e}};d.isDropdownSelected=function(){var a=this.state.visibleTabsCount,b=this.getActiveTabIndex();a=!this.props.alwaysShowActive&&b>=a||a===0&&b>-1;return a};return c}(b("React").Component);c.MORE_TAB_KEY="_moreTab";c.BLUR_TIMEOUT=120;c.Tab=b("TabBarItem.react");c.defaultProps={alwaysShowActive:!0,className:"",dropdownTabComponent:b("TabBarItem.react"),maxTabsVisible:Infinity,moreLabel:a,onHeightCalculated:b("emptyFunction").thatReturns,onTabClick:b("emptyFunction").thatReturnsTrue,onWidthCalculated:b("emptyFunction").thatReturns,orientation:"horizontal",shouldCalculateVisibleTabs:!0};e.exports=c}),null);
__d("concatMap",[],(function(a,b,c,d,e,f){function a(a,b){var c=-1,d=b.length,e=[],f;while(++c<d)f=a(b[c],c,b),Array.isArray(f)?Array.prototype.push.apply(e,f):Array.prototype.push.call(e,f);return e}e.exports=a}),null);
__d("LitestandEllipsis",["BinarySearch","DOMQuery","concatMap","getElementText","isTextNode"],(function(a,b,c,d,e,f){__p&&__p();var g,h="\u2026";function i(a,b,c){a=a.slice(0,b).join(" ")+h;c===0&&(a=a.trimLeft());return a}function j(a,b,c){a=a.substr(0,b).trimRight()+h;c===0&&(a=a.trimLeft());return a}a={add:function(a,c,d){__p&&__p();d=d||a;b("DOMQuery").scry(a,"br").forEach(function(a){a.parentNode&&a.parentNode.removeChild(a)});var e=d.offsetHeight||0;if(e<=c)return;var f=l(a),g=f.length-1,m=c+1;e=function(){__p&&__p();var a=b("getElementText")(f[g]).split(/[\n\s]/g),c=b("BinarySearch").greatestLowerBound(function(b){k(f[g],i(a,b,g));return d.offsetHeight||0},m,0,a.length,function(a,b){return a-b});if(c>0){k(f[g],i(a,c,g));return"break"}c=b("BinarySearch").greatestLowerBound(function(b){k(f[g],j(a[0],b,g));return d.offsetHeight||0},m,0,a[0].length-h.length-2,function(a,b){return a-b});if(c>-1){k(f[g],j(a[0],c,g));return"break"}k(f[g],"");g--};while(g>=0){a=e();if(a==="break")break}}};function k(a,b){g=g||(a.textContent!=null?"textContent":"innerText"),a[g]=b}function l(a){return b("isTextNode")(a)?[a]:b("concatMap")(l,Array.from(a.childNodes))}e.exports=a}),null);
__d("LitestandShareAttachment",["csx","cx","CSS","DOMQuery","LitestandEllipsis","queryThenMutateDOM"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=22,j=16,k=5,l=3,m=3,n=2,o=2,p=5,q=5,r="_5qqr",s="_6m2",t=20,u=20,v=2;function w(a){return b("CSS").matchesSelector(a,"._59ap")}function x(a){return b("CSS").matchesSelector(a,"._5ej3")}function y(a){return b("CSS").matchesSelector(a,"._pb2")}function z(a){return b("CSS").matchesSelector(a,"._1-9r")}function A(a){return b("CSS").matchesSelector(a,"._61bj")}function B(a,c){a=a.getElementsByTagName?b("DOMQuery").scry(a,c)[0]:null;return a?a:null}function C(a){return!!B(a,"^div._4rtc")}function D(a){return B(a,"._59tj")}function E(a){return B(a,"._6m6")}function F(a){return B(a,"._6m7")}function G(a){return B(a,"._6m3")}function H(a){__p&&__p();if(y(a))return o;else if(C(a))return n;else if(w(a))if(z(a))return v;else return l;else if(x(a))return m;else return k}function I(a,b,c){__p&&__p();var d=G(a);if(!b||!d||A(a))return 0;var e=D(a),f=w(a),g=y(a),h=Math.round(b.scrollHeight/J(a));if(w(a)&&z(a))if(h==v)return 0;else return Math.max(v-h,0);if(h>c&&!g)return 0;h=d.offsetHeight-p-b.offsetHeight-(e?e.offsetHeight:0)-(f?0:q)+1;return Math.floor(Math.max(h,0)/K(a))}function J(a){return y(a)?u:i}function K(a){return z(a)?t:j}a={getSimpleCropClass:function(){return r},_truncateText:function(a,c){var d,e,f,g=H(a);b("queryThenMutateDOM")(function(){d=E(a),e=F(a),f=I(a,d,g)},function(){if(!a.offsetHeight){c&&b("CSS").addClass(a,r);return}!f?(e&&b("CSS").hide(e),d&&b("LitestandEllipsis").add(d,g*J(a))):e&&f&&(b("CSS").show(e),b("LitestandEllipsis").add(e,f*K(a)))})},getDetailsBreakingNewsPlaceholder:function(a){a=this.getDetailsFooterBrandName(a);if(!a)return null;var b=B(a.parentNode,"div._3vkw");b||(b=document.createElement("div"),b.className="clearfix _3vkw",a.parentNode.insertBefore(b,a));return b},getBreakingBanner:function(a){a=B(a,"div.___a");return a},getDetailsFooterBrandName:function(a){a=B(a,"div._59tj");return!a?null:B(a,"div._6lz")},getDetailsFooterForBreaking:function(a){return B(a,"div._59tj")},getTitleNode:function(a){return B(a,"div._6m6")},getContentNode:function(a){return B(a,"div._6m3")},init:function(a,c){__p&&__p();var d=this;if(b("CSS").hasClass(a,r)){var e=!1;b("queryThenMutateDOM")(function(){a.offsetHeight&&(e=!0)},function(){e?(b("CSS").removeClass(a,r),d._truncateText(a,!0)):c||window.setTimeout(function(){return d.init(a,!0)},300)});return}else{var f=b("CSS").hasClass(a,s);this._truncateText(a,f)}},getNumDescriptionLines:function(a){return I(a,E(a),H(a))},getDescriptionLineHeight:function(a){return K(a)}};e.exports=a}),null);
__d("DOMContainer.react",["invariant","React","isNode"],(function(a,b,c,d,e,f,g){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.containerNode=null,c.setContainerNode=function(a){c.containerNode=a;var b=c.props.containerRef;typeof b==="function"&&b(a)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.getDOMChild=function(){var a=this.props.children;b("isNode")(a)||g(0,1533);return a};d.shouldComponentUpdate=function(a){return a.children!==this.props.children};d.componentDidMount=function(){var a=this.containerNode;a!=null&&a.appendChild(this.getDOMChild())};d.componentDidUpdate=function(a){a=this.containerNode;if(a==null)return;while(a.lastChild)a.removeChild(a.lastChild);a.appendChild(this.getDOMChild())};d.render=function(){var a=this.props,c=a.display;a=babelHelpers.objectWithoutPropertiesLoose(a,["display"]);c=c==="block"?"div":"span";return b("React").jsx(c,babelHelpers["extends"]({},a,{ref:this.setContainerNode,children:void 0}))};return c}(b("React").Component);c.propTypes={display:a.oneOf(["inline","block"]),containerRef:a.func};c.defaultProps={display:"inline"};e.exports=c}),null);
__d("TabBarShim",["DOMContainer.react","React","isNode"],(function(a,b,c,d,e,f){__p&&__p();a=function a(c){__p&&__p();var d;c.children&&(d=c.children.map(function(c,d){if(typeof c==="object"&&typeof c.ctor==="function")return a(c);else if(b("isNode")(c)){d=b("React").jsx(b("DOMContainer.react"),{children:c},"TabBarShim-"+d);return d}else return c}),d.length===1&&(d=d[0]));var e=c.ctor;return b("React").jsx(e,babelHelpers["extends"]({},c.props,{children:d}))};e.exports=a}),null);