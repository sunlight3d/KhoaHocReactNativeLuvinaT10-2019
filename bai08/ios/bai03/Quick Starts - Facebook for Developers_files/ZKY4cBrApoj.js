if (self.CavalryLogger) { CavalryLogger.start_js(["AJ6WA"]); }

__d("AbstractStepper.react",["cx","invariant","Event","Focus","Keys","React","ReactDOM","cloneWithProps_DEPRECATED","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.children,d=a.className,e=a.beginStep,f=a.endStep,g=a.onKeyDown,i=a.isTwoWay,j=babelHelpers.objectWithoutPropertiesLoose(a,["children","className","beginStep","endStep","onKeyDown","isTwoWay"]),k=b("React").Children.count(c);e<k||h(0,900,e,k);f<k||h(0,901,f,k);c=b("React").Children.map(c,function(a,c){return b("cloneWithProps_DEPRECATED")(a,babelHelpers["extends"]({ref:c,beginStep:e,endStep:f,isTwoWay:i,index:c,totalSteps:k},j))});d=b("joinClasses")(d,"_3vmz"+(this.props.isReadOnly?" _2d6g":""));return b("React").jsx("div",babelHelpers["extends"]({},j,{className:d,children:b("React").jsx("ol",{className:"_3vm-",role:"tablist",onKeyDown:g,children:c})}))};return c}(b("React").PureComponent);c.propTypes={beginStep:a.number,endStep:a.number,onStepSelected:a.func,isReadOnly:a.bool,isTwoWay:a.bool};c.defaultProps={beginStep:0,endStep:0,onStepSelected:b("emptyFunction"),isReadOnly:!1,isTwoWay:!1};c.Step=(f=d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.onKeyPress=function(a){var c=b("Event").getKeyCode(a);(c===b("Keys").SPACE||c===b("Keys").RETURN)&&(d.props.onStepSelected(d.props.index),b("Event").prevent(a))},d.onMouseOver=function(){d.props.onStepHovered(d.props.index)},d.onClick=function(){d.props.onStepSelected(d.props.index)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1=b("Event").listen(b("ReactDOM").findDOMNode(this),"keypress",this.onKeyPress),this.$2=b("Event").listen(b("ReactDOM").findDOMNode(this),"mouseover",this.onMouseOver)};d.componentWillUnmount=function(){this.$1.remove(),this.$2.remove()};d.focus=function(){b("Focus").set(this.$3,!0)};d.render=function(){var a=this,c=this.props,d=c.children,e=c.className,f=c.style,g=c.index,h=c.beginStep,i=c.endStep,j=c.isTwoWay;c=c.totalSteps;e=b("joinClasses")(e,(g===0?"_3vn0":"")+(g===c-1?" _3vn1":"")+" _3vn2");j?e=b("joinClasses")(e,(g===h||g===i?"_3vm_":"")+(g>=h&&g<=i?" _3vn3":"")):e=b("joinClasses")(e,(g===i?"_3vm_":"")+(g<i?" _3vn3":""));return b("React").jsxs("li",{style:f,className:e,ref:function(b){a.$3=b},role:"tab","aria-selected":g===h&&j||g===i,tabIndex:g===i||g===h&&j?0:-1,onClick:this.onClick,children:[d,this.props.isReadOnly?null:b("React").jsx("div",{className:"_28zg"})]})};return c}(b("React").PureComponent),d.propTypes={beginStep:a.number,endStep:a.number,isReadOnly:a.bool,isTwoWay:a.bool,index:a.number,onStepSelected:a.func,onStepHovered:a.func,totalSteps:a.number},d.defaultProps={onStepSelected:b("emptyFunction"),onStepHovered:b("emptyFunction")},f);e.exports=c}),null);
__d("XUIStepperAnimator",["ArbiterMixin","DOM","DOMClone","StepperAnimation","Style","curry","mixin"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.offsetParent?parseInt(b("Style").get(a,"width"),10):0}var h=500,i=2,j=200,k=300,l=200;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this)||this;c.$XUIStepperAnimator1=null;c.setConfig(b);return c}var d=c.prototype;d.setConfig=function(a){var b=a.animateMount,c=a.animateTransition;a=a.transitionAnimationDuration;this.$XUIStepperAnimator2=b;this.$XUIStepperAnimator3=c;this.$XUIStepperAnimator4=a};d.mountAnimator=function(a){var b=a.steps;a=a.toStep;if(this.$XUIStepperAnimator2)return this.$XUIStepperAnimator5(b,a);else return this.$XUIStepperAnimator6(b,a)};d.transitionAnimator=function(a){var b=a.steps;a=a.toStep;this.$XUIStepperAnimator1&&this.$XUIStepperAnimator1.stop();if(this.$XUIStepperAnimator3){this.$XUIStepperAnimator1=this.$XUIStepperAnimator7(b,a,this.$XUIStepperAnimator4);return this.$XUIStepperAnimator1}else return this.$XUIStepperAnimator6(b,a)};d.blinkAnimator=function(a){__p&&__p();var c,d=a.steps,e=a.index;a=a.delay;var f=d[e].circle;d=[];var j=Object.assign({},f.style);e=g(f);var k=e*2,l=parseInt((c=b("Style")).get(f,"marginLeft"),10);l=f.offsetLeft-l;var m=l-e/2,n=parseInt(c.get(f,"marginTop"),10);n=f.offsetTop-n;var o=n-e/2,p=b("DOMClone").deepClone(f);p.removeAttribute("data-reactid");c.set(p,"position","absolute");c.set(p,"left",l+"px");c.set(p,"top",n+"px");c.set(p,"pointer-events","none");for(var c=0;c<i;c++)d.push(new(b("StepperAnimation"))(p).from("top",n).to("top",o).from("left",l).to("left",m).from("height",e).to("height",k).from("line-height",e).to("line-height",k).from("width",e).to("width",k).duration(100),new(b("StepperAnimation"))(p).from("top",o).to("top",n).from("left",m).to("left",l).from("height",k).to("height",e).from("line-height",k).to("line-height",e).from("width",k).to("width",e).duration(150));var q=new(b("StepperAnimation").Serial)(d);q.addListener("done",function(){b("DOM").remove(p),Object.assign(f.style,j)});setTimeout(function(){b("Style").set(f,"visibility","hidden"),b("DOM").insertAfter(f,p),q.go()},a?h:0);return q};d.$XUIStepperAnimator5=function(a,b){this.$XUIStepperAnimator8(a),this.$XUIStepperAnimator9(a,l),this.$XUIStepperAnimator10(a,b,l)};d.$XUIStepperAnimator10=function(a,c,d){__p&&__p();var e=this,f=[],h=this.$XUIStepperAnimator11(a,c);h=h.total;var i=d/h;a.forEach(function(a){return[a.leftConnector,a.rightConnector].forEach(function(a,c){if(a.offsetParent){c=g(a);b("Style").set(a,"width",0);f.push(e.$XUIStepperAnimator12(c,a,c*i))}})});setTimeout(function(){var d=new(b("StepperAnimation").Serial)(f);d.addListener("done",function(){e.transitionAnimator({steps:a,toStep:c})});d.go()},k)};d.$XUIStepperAnimator8=function(a){a.map(function(a){var c=a.circle,d=g(c),e=parseInt(b("Style").get(c,"marginLeft"),10),f=parseInt(b("Style").get(c,"marginTop"),10),h=parseInt(b("Style").get(c,"opacity"),10),i=Object.assign({},c.style);a=new(b("StepperAnimation"))(a.circle).from("height",d*4).to("height",d).from("width",d*4).to("width",d).from("margin-left",e-d*1.5).to("margin-left",e).from("margin-top",f-d*1.5).to("margin-top",f).from("opacity",0).to("opacity",h||1).duration(j);a.addListener("done",function(){Object.assign(c.style,i)});a.go()})};d.$XUIStepperAnimator9=function(a,c){a=a.map(function(a){var c=a.label,d=Object.assign({},c.style),e=parseInt((a=b("Style")).get(c,"marginTop"),10),f=parseInt(a.get(c,"marginBottom"),10);a.set(c,"marginTop",e+11+"px");a.set(c,"marginBottom",f-11+"px");a=new(b("StepperAnimation"))(c).from("marginTop",e+11).to("marginTop",e).from("marginBottom",f-11).to("marginBottom",f);a.addListener("done",function(){Object.assign(c.style,d)});return a});new(b("StepperAnimation").Parallel)(a).duration(c).go()};d.$XUIStepperAnimator7=function(a,b,c){b=this.$XUIStepperAnimator11(a,b);var d=b.currentPosition,e=b.toPosition;b=b.stepPositions;var f=Math.abs(e-d);c=c/f;if(e>d)return this.$XUIStepperAnimator13(a,b,d,e,c);else return this.$XUIStepperAnimator14(a,b,d,e,c)};d.$XUIStepperAnimator13=function(a,c,d,e,f){var g=this;d=[];for(var h=0,i=a.length;h<i;h++){var j=c[h];j.middle<=e&&(j.leftBarDistanceToAnimate&&d.push(this.$XUIStepperAnimator12(j.middle-j.start,a[h].leftConnectorBar,j.leftBarDistanceToAnimate*f,b("curry")(function(a){g.inform("currentStep",a)},h))));j.end<=e&&(j.rightBarDistanceToAnimate&&d.push(this.$XUIStepperAnimator12(j.end-j.middle,a[h].rightConnectorBar,j.rightBarDistanceToAnimate*f)))}return new(b("StepperAnimation").Serial)(d).go()};d.$XUIStepperAnimator14=function(a,c,d,e,f){var g=this;d=[];for(var h=a.length-1;h>=0;h--){var i=c[h];i.middle>=e&&d.push(this.$XUIStepperAnimator12(0,a[h].rightConnectorBar,i.rightBarDistanceToAnimate*f,b("curry")(function(a){g.inform("currentStep",a)},h)));i.start>=e&&d.push(this.$XUIStepperAnimator12(0,a[h].leftConnectorBar,i.leftBarDistanceToAnimate*f))}return new(b("StepperAnimation").Serial)(d).go()};d.$XUIStepperAnimator12=function(a,c,d,e){var f=new(b("StepperAnimation"))(c);a!==0&&f.addListener("done",function(){b("Style").set(c,"width","100%")});f.to("width",a).duration(d);e&&f.addListener("done",e);return f};d.$XUIStepperAnimator6=function(a,c){for(var d=0,e=c;d<e;d++)b("Style").set(a[d].leftConnectorBar,"width","100%"),b("Style").set(a[d].rightConnectorBar,"width","100%");b("Style").set(a[c].leftConnectorBar,"width","100%");b("Style").set(a[c].rightConnectorBar,"width","0%");for(var d=c+1,e=a.length;d<e;d++)b("Style").set(a[d].leftConnectorBar,"width","0%"),b("Style").set(a[d].rightConnectorBar,"width","0%");this.inform("currentStep",c)};d.$XUIStepperAnimator11=function(a,b){__p&&__p();var c=0,d=0,e=0,f=[];for(var h=0,i=a.length;h<i;h++){var j=a[h],k=g(j.leftConnector),l=g(j.leftConnectorBar),m=g(j.rightConnector);j=g(j.rightConnectorBar);h<b&&(d+=k,d+=m);b===h&&(d+=k);var n=e;c+=l;e+=k;var o=e;c+=j;e+=m;var p=e;d>n?k=k-l:k=l;d>o?l=m-j:l=j;f.push({start:n,middle:o,end:p,leftBarDistanceToAnimate:k,rightBarDistanceToAnimate:l})}return{currentPosition:c,total:e,toPosition:d,stepPositions:f}};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("XUIStepper.react",["cx","fbt","AbstractStepper.react","Event","React","ReactDOM","RTLKeys","XUIStepperAnimator","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("AbstractStepper.react").Step;c=(a=b("React")).PropTypes;var j=20;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;d=a.call(this,c)||this;d.$5=function(a){a.unsubscribe(d.$6),d.$6=null};d.$4=function(a){d.$6=a.subscribe("currentStep",function(a,b){d.setState({animationStep:b})})};d.blinkDot=function(a){d.$8||(d.$8=d.state.animator.blinkAnimator(babelHelpers["extends"]({},d.$7(),{index:a,delay:a!==d.props.currentStep})),d.$8.addListener("done",function(){d.$8=null}))};d.$7=function(){var a=b("React").Children.count(d.props.children),c=[];for(var e=0,a=a;e<a;e++)c.push(d.refs.Stepper.refs[e]);return{steps:c.map(function(a){var c;return{circle:(c=b("ReactDOM")).findDOMNode(a.refs.circle),label:c.findDOMNode(a.refs.label),leftConnector:c.findDOMNode(a.refs.leftConnector.refs.bgBar),leftConnectorBar:c.findDOMNode(a.refs.leftConnector.refs.fgBar),rightConnector:c.findDOMNode(a.refs.rightConnector.refs.bgBar),rightConnectorBar:c.findDOMNode(a.refs.rightConnector.refs.fgBar)}})}};d.$10=function(){d.$2=null,d.$3=!1};d.$11=function(a){d.$1=setTimeout(d.$10,j)};d.$12=function(){if(d.props.isReadOnly)return;clearTimeout(d.$1);d.$3||(d.$2=d.props.currentStep,d.$3=!0)};d.$13=function(a){__p&&__p();if(d.props.isReadOnly)return;var c=b("Event").getKeyCode(a);switch(c){case b("RTLKeys").UP:case b("RTLKeys").getRight():case b("RTLKeys").DOWN:case b("RTLKeys").getLeft():var e=b("React").Children.count(d.props.children),f=d.$2;c=c===b("RTLKeys").UP||c===b("RTLKeys").getLeft();c=c?-1:1;c=Math.min(Math.max(f+c,0),e-1);c!==f&&(d.$2=c,d.$9());b("Event").prevent(a);break;case b("RTLKeys").TAB:d.$3=!1;break}};var e=c.animator;e||(e=new(b("XUIStepperAnimator"))({animateMount:!1,animateTransition:c.animated,transitionAnimationDuration:100}));d.state={animator:e,animationStep:0};return d}var d=c.prototype;d.UNSAFE_componentWillMount=function(){this.$4(this.state.animator)};d.componentWillUnmount=function(){this.$5(this.state.animator)};d.UNSAFE_componentWillReceiveProps=function(a){this.$2=a.currentStep};d.UNSAFE_componentWillUpdate=function(a){a.animator!==this.props.animator&&this.setState({animator:a.animator});!a.animated&&this.props.animated&&this.setState({animator:new(b("XUIStepperAnimator"))({animateMount:!1,animateTransition:!1})});if(!this.props.animated&&a.animated){a=this.props.animator;a||(a=new(b("XUIStepperAnimator"))({animateMount:!1,animateTransition:!0}));this.setState({animator:a})}};d.componentDidUpdate=function(a,b){a=a.currentStep;var c=this.props.currentStep,d=this.state.animator;b.animator!==this.state.animator&&(this.$5(b.animator),this.$4(d));a!==c&&d&&d.transitionAnimator(babelHelpers["extends"]({},this.$7(),{toStep:c}))};d.componentDidMount=function(){this.state.animator&&this.state.animator.mountAnimator(babelHelpers["extends"]({},this.$7(),{toStep:this.props.currentStep}))};d.$9=function(){var a=this.refs.Stepper.refs[this.$2];a.stepEl&&a.stepEl.focus();this.$3=!0};d.render=function(){var a=this.props,c=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["className"]);c=b("joinClasses")(c,"_38st"+(a.numbered?" _38su":"")+(a.animated?" _38sv":"")+(a.size==="small"?" _38sw":"")+(a.size==="medium"?" _38sx":"")+(a.size==="large"?" _38sy":"")+(a.size==="xlarge"?" _38sz":""));return b("React").jsx(b("AbstractStepper.react"),babelHelpers["extends"]({ref:"Stepper"},a,{endStep:this.state.animationStep>=b("React").Children.count(this.props.children)?this.props.currentStep:this.state.animationStep,className:c,onBlur:this.$11,onFocus:this.$12,onKeyDown:this.$13}))};return c}(a.PureComponent);d.propTypes=babelHelpers["extends"]({},b("AbstractStepper.react").propTypes,{animated:c.bool,animator:c.shape({mountAnimator:c.func,transitionAnimator:c.func,blinkAnimator:c.func}),numbered:c.bool,checked:c.bool,size:c.oneOf(["small","medium","large","xlarge"])});d.defaultProps={animated:!0,animator:null,numbered:!1,currentStep:0,checked:!1,size:"medium"};d.Step=(g=f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.children,e=c.className;c=babelHelpers.objectWithoutPropertiesLoose(c,["children","className"]);e=b("joinClasses")(e,"_38s-");var f=c.index===c.totalSteps-1,g=c.index===0,j=!1,l=!1,m;c.checked&&(c.index<c.currentStep||c.alwaysChecked)?m=b("React").jsx("div",{className:"_38s_"}):m=c.numbered?h._("{Step number (e.g. 1, 2, 3)}",[h._param("Step number (e.g. 1, 2, 3)",c.index+1)]):"";return b("React").jsxs(i,babelHelpers["extends"]({},c,{endStep:c.currentStep,ref:function(b){a.stepEl=b},className:e,children:[b("React").jsx(k,{ref:"leftConnector",on:l,side:"right",className:"_38t1"+(g?" hidden_elem":"")}),b("React").jsx(k,{ref:"rightConnector",on:j,side:"left",className:"_38t2"+(f?" hidden_elem":"")}),b("React").jsx("div",{className:"_38t3",children:b("React").jsx("div",{className:"_38t4",children:b("React").jsxs("span",{className:"_38t5"+(c.index<=c.currentStep?" _38t6":""),ref:"circle",children:[b("React").jsx("div",{className:"_38t7"}),b("React").jsx("div",{className:"_38t8"}),b("React").jsx("div",{className:"_38t9"}),b("React").jsx("span",{className:"_38ta",ref:"circleContent",children:m})]})})}),b("React").jsx("div",{ref:"label",className:"_jkl",children:d})]}))};return c}(a.PureComponent),f.propTypes={currentStep:c.number,index:c.number,numbered:c.bool,checked:c.bool,alwaysChecked:c.bool},g);var k=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.render=function(){var a=this.props,c=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["className"]);c=b("joinClasses")(c,"_38tb");a=b("React").jsx("div",{className:"_38tc"+(a.side==="left"?" _38td":"")+(a.side==="right"?" _38te":"")});return b("React").jsx("div",{className:c,children:b("React").jsxs("div",{className:"_38tl",children:[b("React").jsxs("div",{className:"_38tg",ref:"bgBar",children:[a,b("React").jsxs("div",{className:"_38ti",children:[b("React").jsx("div",{className:"_38tj"}),b("React").jsx("div",{className:"_38tk"})]})]}),b("React").jsxs("div",{className:"_38tf _38tg _38th",ref:"fgBar",children:[a,b("React").jsxs("div",{className:"_38ti",children:[b("React").jsx("div",{className:"_38tj"}),b("React").jsx("div",{className:"_38tk"})]})]})]})})};return a}(a.PureComponent);k.propTypes={side:c.oneOf(["left","right"])};e.exports=d}),null);