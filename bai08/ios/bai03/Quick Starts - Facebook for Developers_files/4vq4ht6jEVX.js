if (self.CavalryLogger) { CavalryLogger.start_js(["UX7LM"]); }

__d("DeveloperAppAndroidCredentialUploader",["AppAndroidCredentialsUploaderUIStateStore","DeveloperGooglePlayCredentialsTypedLogger","DOM","Event"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,c){var d=b("DOM").find(a,"input");b("Event").listen(d,"click",function(){var a=d.checked?"turn_on_auto_logging":"turn_off_auto_logging";new(b("DeveloperGooglePlayCredentialsTypedLogger"))().setAppID(c).setEvent(a).log();b("AppAndroidCredentialsUploaderUIStateStore").updateStateLater({isVisiable:d.checked})})}};e.exports=a}),null);
__d("DeveloperAppColorPicker",["Event","Style"],(function(a,b,c,d,e,f){__p&&__p();function g(a,c){if(c.trim()===""){b("Style").set(a,"backgroundColor","transparent");return}b("Style").set(a,"backgroundColor","#"+c)}e.exports={bindColorPickerInputAndPreview:function(a,c){var d=a.value;g(c,d);b("Event").listen(a,"input",function(b){b=new RegExp("^[0-9a-fA-F]{"+a.value.length+"}$");b.test(a.value)?(d=a.value,g(c,a.value)):(a.value=d,g(c,""))})}}}),null);
__d("DeveloperAppDisableInstaller",["DOM","Event"],(function(a,b,c,d,e,f){var g={init:function(a,c){var d=b("DOM").find(a,"input"),e=b("DOM").find(c,"input");this.updateEnable(d,e);b("Event").listen(a,"click",function(){g.updateEnable(d,e)})},updateEnable:function(a,b){b.disabled=a.checked,a.checked&&(b.checked=!0)}};e.exports=g}),null);
__d("DeveloperCategorySelector",["CSS"],(function(a,b,c,d,e,f){"use strict";a={init:function(a,b,c){this.handleChange(a,b,c),a.subscribe("change",this.handleChange.bind(this,a,b,c))},handleChange:function(a,c,d){a.getValue()!=d?b("CSS").hide(c):b("CSS").show(c)}};e.exports=a}),null);
__d("FalcorCustomEventsSettingsText",["fbt","AnalyticsProductName","Link.react","React","URI","XDeveloperDocumentationController"],(function(a,b,c,d,e,f,g){var h;a=b("XDeveloperDocumentationController").getURIBuilder().setString("path1","app-events").setString("path2","ios").getURI().setSubdomain("developers").setFragment("purchase");c=b("XDeveloperDocumentationController").getURIBuilder().setString("path1","app-events").setString("path2","android").getURI().setSubdomain("developers").setFragment("purchase");d={AndroidImplicitPurchaseEvents:{description:g._("Turning this on logs all in-app purchase events automatically. This feature needs version 4.36 of the Android Facebook SDK or newer."),header:g._("Log In-App Purchase Events Automatically on Android (Recommended)"),notice:g._("When this setting is turned on, you should stop logging in-app purchases manually or else they'll be duplicated. {link to developer docs}",[g._param("link to developer docs",b("React").jsx(b("Link.react"),{href:c,target:"_blank",children:g._("Learn More")}))]),noticeHeader:g._("Notice:")},analyticsAccessForAdAccounts:{description:g._("Allow a person with an authorized advertising account to access Analytics."),header:g._("Allow User with Authorized Advertising Account to Access Analytics")},automaticAnalyticsEvents:{description:g._("Turning this on logs analytics events automatically."),header:g._("iOS Only: Log Analytics Events Automatically")},discardButton:g._("Discard"),failedToGetSettings:g._("We're sorry. There's an issue retrieving the app events settings. Please try again later."),failedToUpdateSettings:g._("We're sorry. We're having problems updating the app events settings. Please try again later."),iOSImplicitPurchaseEvents:{description:g._("Turning this on logs all in-app purchase events automatically. This feature needs version 3.22 of the iOS Facebook SDK or newer."),header:g._("Log In-App Purchase Events Automatically on iOS (Recommended)"),notice:g._("When this setting is turned on, you should stop logging in-app purchases manually or else they'll be duplicated. {link to developer docs}",[g._param("link to developer docs",b("React").jsx(b("Link.react"),{href:a,target:"_blank",children:g._("Learn More")}))]),noticeHeader:g._("Notice:"),purchaseValidationNotice:g._("With SDK version 4.6 or newer, all automatically logged purchases will be validated with Apple.")},link:g._("App Event Settings"),saveChangesButton:g._("Save Changes"),sessionTimeoutInterval:{appHeader:g._("iOS and Android SDK:"),appSDKVersionSubtext:g._("This feature requires version 4.11 of the Facebook SDK or higher."),appSessionTimeoutSubtext:g._("Setting a value less than 10 seconds will reset this field back to the default value of 60 seconds."),description:g._("The amount of time that can pass without events being received before a new session is started."),header:g._("Session Timeout Interval"),invalidInput:g._("Please enter an integer greater than 9 in this field."),jsSDKHeader:g._("JavaScript SDK:"),webSessionTimeoutSubtext:g._("Session timeout interval for web events is 30 minutes."),writeRequestError:g._("We're sorry, this didn't save correctly. Please refresh this page and try again.")},sharedSecret:{badSecretMessage:g._("This isn't a valid shared secret. Please try entering it again."),description:g._("This is a unique code generated in iTunes Connect that allows us to validate auto-renewable subscription purchases with Apple. If your app doesn't offer subscriptions, there is no need to fill this out."),header:g._("In-App Purchase Shared Secret"),writeRequestError:g._("We're sorry, this didn't save correctly. Please refresh the page, and try saving again.")},viewRestrictedInsights:{description:g._("Turning this on allows anyone with access to {Facebook Analytics product name} to see data for recommended purchase events. {link to help center}",[g._param("Facebook Analytics product name",b("AnalyticsProductName").shortName),g._param("link to help center",b("React").jsx(b("Link.react"),{href:new(h||(h=b("URI")))("https://www.facebook.com/help/analytics/1654494724808448"),target:"_blank",children:g._("Learn More")}))]),header:g._("Allow Analytics Users to See Purchase Information")}};e.exports=d}),null);
__d("DevsiteAndroidSettingImplicitPurchaseWarningDialog",["fbt","FalcorCustomEventsSettingsText","React","SimpleXUIDialog"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={showSupportedSDKWarning:function(){b("SimpleXUIDialog").show(b("FalcorCustomEventsSettingsText").AndroidImplicitPurchaseEvents.notice,g._("Avoid Duplicating Purchases"))},showUnsupportedSDKWarning:function(){b("SimpleXUIDialog").show(b("React").jsxs("span",{children:[g._("Automatic logging of in-app purchases on Android is now turned on for your app, however this feature requires Android Facebook SDK version 4.27 or newer.")," ",b("React").jsx("a",{href:"https://developers.facebook.com/docs/android",target:"_blank",children:g._("Click Here")})," ",g._("to download and install the latest version of the Facebook SDK. After you've integrated the new version of the SDK, there is one more step to enable the feature on Android,")," ",b("React").jsx("a",{href:"https://developers.facebook.com/docs/app-events/android/#purchase",target:"_blank",children:g._("Click Here")})," ",g._("and follow the steps.")]}),g._("One more step"))},show:function(a,b){var c=this;a.addEventListener("change",function(a){if(!a.target.checked)return;b?c.showSupportedSDKWarning():c.showUnsupportedSDKWarning()})}};e.exports=a}),null);
__d("DevsiteIOSSettingImplicitPurchaseWarningDialog",["fbt","FalcorCustomEventsSettingsText","React","SimpleXUIDialog"],(function(a,b,c,d,e,f,g){a={showSupportedSDKWarning:function(){b("SimpleXUIDialog").show(b("FalcorCustomEventsSettingsText").iOSImplicitPurchaseEvents.notice,g._("Avoid Duplicating Purchases"))},showUnsupportedSDKWarning:function(){b("SimpleXUIDialog").show(b("React").jsxs("span",{children:[g._("Automatic logging of in-app purchases on iOS is now turned on for your app, however this feature requires iOS Facebook SDK version 3.22 or newer.")," ",b("React").jsx("a",{href:"https://developers.facebook.com/docs/ios",target:"_blank",children:g._("Click Here")})," ",g._("to download and install the latest version of the Facebook SDK. Once you've integrated the new version of the SDK, in-app purchases will be automatically recorded in iOS.")]}),g._("One more step"))},show:function(a,b){var c=this;a.addEventListener("change",function(a){if(!a.target.checked)return;b?c.showSupportedSDKWarning():c.showUnsupportedSDKWarning()})}};e.exports=a}),null);
__d("DevsiteBasicSettings",["csx","cx","CSS","DOM","DOMScroll","Vector","$"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i={updateAddPlatformButton:function(){b("CSS").conditionShow(b("$")("add-platform-button"),i.getHiddenPlatformCards().length)},getAddedPlatformCards:function(){return b("DOM").scry(document,"div._5t1j:not(.hidden_elem)")},getHiddenPlatformCards:function(){return b("DOM").scry(document,"div._5t1j.hidden_elem")},removePlatform:function(a){b("CSS").hide(a),i.getPlatformCheckbox(a).checked=!1,i.updateAddPlatformButton()},addPlatform:function(a){__p&&__p();var c=b("DOM").find(document,"div."+i.getPlatformCardClass(a));b("CSS").show(c);i.getPlatformCheckbox(c).checked=!0;i.updateAddPlatformButton();a=b("Vector").getScrollPosition();var d=b("Vector").getElementPosition(c);a=new(b("Vector"))(a.x,d.y-100,"document");b("DOMScroll").scrollTo(a);b("CSS").addClass(c,"_5tqe");b("CSS").addClass(c,"_5tqf");setTimeout(function(){b("CSS").removeClass(c,"_5tqf")},4e3)},getPlatformCheckbox:function(a){return b("DOM").find(a,'input[type="checkbox"][name="platforms[]"]')},getPlatformCardClass:function(a){switch(a){case"android":return"_59f_";case"ios":return"_59g1";case"playstation":return"_59g5";case"xbox":return"_59g6";case"web":return"_59g7";case"canvas":return"_59g9";case"windows":return"_59gt";case"page_tab":return"_59g-"}}};e.exports=i}),null);
__d("DevsiteExternalPlatformCard",["DevsiteBasicSettings","Event"],(function(a,b,c,d,e,f){a=function(a,c){"use strict";b("Event").listen(c,"click",function(c){b("DevsiteBasicSettings").removePlatform(a);return!1})};e.exports=a}),null);
__d("DeveloperAppPlatformSelector",["cssVar","cx","Animation","CSS","DeveloperAppPlatform","Grid.react","React","ReactDOM","XUIText.react"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=b("Grid.react").GridItem;a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(a){__p&&__p();var c=this;if(this.$2(a))return;if(this.props.animateOnSelect===!1)return this.props.onSelect(a);var d=b("ReactDOM").findDOMNode(this.refs[a+"-image"]);b("CSS").toggle(b("ReactDOM").findDOMNode(this.refs[a+"-selected-image"]));b("CSS").toggleClass(d,"active");new(b("Animation"))(d).to("opacity",0).duration(600).ondone(function(){return c.props.onSelect(a)}).go();new(b("Animation"))(b("ReactDOM").findDOMNode(this.refs[a+"-label"])).to("color","#4080ff").duration(600).go()};d.$2=function(a){return this.props.disabledPlatforms&&this.props.disabledPlatforms.indexOf(a)!=-1};d.render=function(){var a=this,c=this.props.visiblePlatforms.map(function(c){return b("React").jsxs(i,{className:"_5s9l"+(a.$2(c)?" disabled":""),onClick:a.$1.bind(a,c),children:[b("React").jsxs("div",{className:"_5uuz",children:[b("React").jsx("div",{"data-platform":c,className:"_5s9m selected active hidden_elem",ref:c+"-selected-image"}),b("React").jsx("div",{"data-platform":c,className:"_5s9m",ref:c+"-image"})]}),b("React").jsx(b("XUIText.react"),{weight:"bold",size:"header4",display:"block",className:"mtm",ref:c+"-label",children:b("DeveloperAppPlatform").labels[c]})]},c)});return b("React").jsx(b("Grid.react"),{cols:4,fixed:!0,className:"_5s9o",children:c})};return c}(b("React").Component);c.propTypes={onSelect:a.func.isRequired,animateOnSelect:a.bool,visiblePlatforms:a.array.isRequired,disabledPlatforms:a.array};e.exports=c}),null);
__d("DeveloperAppPlatformSelectorDialog",["cx","fbt","ix","DeveloperAppPlatformSelector","DevsiteBasicSettings","Image.react","React","XUIButton.react","XUIDialog.react","XUIDialogBody.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogTitle.react","setTimeout"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={dialogShown:!1,disabledPlatforms:[]},d.$1=function(a){d.hide(),b("setTimeout")(function(){b("DevsiteBasicSettings").addPlatform(a)},450)},d.hide=function(){d.setState({dialogShown:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.renderLayers=function(){var a;return(a=b("React")).jsxs(b("XUIDialog.react"),{layerHideOnBlur:!1,modal:!0,shown:this.state.dialogShown,width:680,children:[a.jsx(b("XUIDialogTitle.react"),{showCloseButton:!1,children:h._("Select Platform")}),a.jsxs(b("XUIDialogBody.react"),{className:"_5t1i",children:[a.jsx("img",{height:"1",src:"https://sact.atdmt.com/action/fuspmg_GamesCanvasSettingsPage_1",width:"1"}),a.jsx(b("DeveloperAppPlatformSelector"),{animateOnSelect:!1,disabledPlatforms:this.state.disabledPlatforms,onSelect:this.$1,visiblePlatforms:this.props.visiblePlatforms})]}),a.jsx(b("XUIDialogFooter.react"),{children:a.jsx(b("XUIDialogCancelButton.react"),{})})]},"dialog")};d.show=function(){var a=[];b("DevsiteBasicSettings").getAddedPlatformCards().forEach(function(c){return a.push(b("DevsiteBasicSettings").getPlatformCheckbox(c).getAttribute("value"))});this.setState({dialogShown:!0,disabledPlatforms:a})};d.render=function(){var a=this;return b("React").jsxs("span",{children:[b("React").jsx(b("XUIButton.react"),{"data-testid":"add_platform_button",image:b("React").jsx(b("Image.react"),{src:i("101322")}),label:h._("Add Platform"),onClick:function(b){return a.show()},rel:"async",size:"xxlarge",type:"button"}),this.renderLayers()]})};return c}(b("React").PureComponent);c.propTypes={visiblePlatforms:a.array.isRequired};e.exports=c}),null);