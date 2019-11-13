if (self.CavalryLogger) { CavalryLogger.start_js(["ziFLo"]); }

__d("TooltipMixin",["DOM","React","ReactDOM","TooltipData"],(function(a,b,c,d,e,f){__p&&__p();a=b("React").PropTypes;function g(a){a=a.tooltip;return a!=null&&b("React").isValidElement(a)}c={propTypes:{children:a.node,tooltip:a.oneOfType([a.element,a.string]),position:a.oneOf(["above","below","left","right"]),alignH:a.oneOf(["left","center","right"])},getInitialState:function(){return{tooltipContainer:g(this.props)?b("DOM").create("div"):null}},UNSAFE_componentWillReceiveProps:function(a){a=g(a);var c=this.state.tooltipContainer;c&&!a?this.setState({tooltipContainer:null}):!c&&a&&this.setState({tooltipContainer:b("DOM").create("div")})},componentDidMount:function(){this._updateTooltip()},componentDidUpdate:function(a,b){b.tooltipContainer&&!this.state.tooltipContainer&&this._cleanupContainer(b.tooltipContainer),this._updateTooltip()},_updateTooltip:function(){var a;g(this.props)?(a=this.state.tooltipContainer,b("ReactDOM").render(this.props.tooltip,a)):a=this.props.tooltip;a!=null?b("TooltipData").set(b("ReactDOM").findDOMNode(this),a,this.props.position,this.props.alignH):b("TooltipData").remove(b("ReactDOM").findDOMNode(this))},componentWillUnmount:function(){this.state.tooltipContainer&&this._cleanupContainer(this.state.tooltipContainer),b("TooltipData").remove(b("ReactDOM").findDOMNode(this))},_cleanupContainer:function(a){b("ReactDOM").unmountComponentAtNode(a)}};e.exports=c}),null);
__d("toHumanReadableNumber",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3,h=g*g,i=h*g,j=i*g;function a(a){if(a>=j)return a.toExponential(1);if(a>=i)return(a/i).toFixed(1)+"G";if(a>=h)return(a/h).toFixed(1)+"M";return a>=g?(a/g).toFixed(1)+"K":a.toFixed(1).toString()}e.exports=a}),null);
__d("ApiVersionUpgradeToolDataTable.react",["ix","cx","fbt","Image.react","LeftRight.react","ObjectSort","React","XUISortableDataTable.react","XUIText.react","cxMargin","fbglyph","toHumanReadableNumber"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j="hits",k="version",l={deprecation:i._("Deprecation"),change:i._("Change"),new_feature:i._("New")},m={deprecation:(a=b("React")).jsx(b("Image.react"),{src:g("117907")}),change:a.jsx(b("Image.react"),{src:g("137555")}),new_feature:a.jsx(b("Image.react"),{src:g("120210")})};c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={sortColumn:j,sortAscending:!1};return b}var d=c.prototype;d.$1=function(a,b){var c=this.props.selectableVersions.findIndex(function(b){return b===a.version}),d=this.props.selectableVersions.findIndex(function(a){return a===b.version});return c-d};d.$2=function(a){return a!==this.state.sortColumn?null:this.state.sortAscending?"\u2191":"\u2193"};d.$3=function(){__p&&__p();var a=this;return[{id:"version",label:this.props.isForShortLivedChanges===!0?i._("Date {sort order icon up arrow or down arrow}",[i._param("sort order icon up arrow or down arrow",this.$2(k))]):i._("Version {sort order icon up arrow or down arrow}",[i._param("sort order icon up arrow or down arrow",this.$2(k))]),sortable:!0,comparator:function(b,c){return b.version===c.version?b.hits-c.hits:-a.$1(b,c)},width:70,cellRenderer:function(c,d,e){return a.props.isForShortLivedChanges===!0?b("React").jsx("div",{children:i._("Effective for all apps on {date of enforcement}",[i._param("date of enforcement",e.change_date)])}):b("React").jsxs("div",{children:[b("React").jsx("div",{className:"_5wr-",children:a.props.versionToEnforcementDate.get(c)}),b("React").jsx("div",{children:c})]})}},{id:"hits",label:i._("Call Volume {sort order icon up arrow or down arrow}",[i._param("sort order icon up arrow or down arrow",this.$2(j))]),sortable:!0,cellRenderer:function(a,c,d){a=d.hits/d.total_hits*100;c=a<.1?"< 0.1 %":a.toFixed(1)+" %";return b("React").jsxs("div",{children:[b("React").jsx("div",{className:"_5wr-",children:c}),b("React").jsx("div",{children:b("toHumanReadableNumber")(d.hits)})]})},comparator:function(b,c){return c.hits===b.hits?a.$1(b,c):c.hits-b.hits},width:65},{id:"methods",label:i._("Affected Methods"),width:270,cellRenderer:function(c,d,e){c=e.methods.map(function(c){var d=c.method,e=a.props.methodToDocPath.has(d)?b("React").jsx("a",{target:"_blank",href:a.props.methodToDocPath.get(d),children:a.props.methodToDisplayName.get(d)}):b("React").jsx(b("XUIText.react"),{children:a.props.methodToDisplayName.get(d)});return b("React").jsxs("div",{children:[e,b("React").jsx("span",{className:"_3-99",children:b("toHumanReadableNumber")(c.hits)})]},d)});return b("React").jsx("div",{children:c})}},{id:"description",label:i._("Description"),sortable:!1,width:280,cellRenderer:function(a){return b("React").jsx("div",{children:a})}},{id:"type",label:i._("Type"),sortable:!0,width:90,comparator:b("ObjectSort").getStringSortFunction("type"),cellRenderer:function(a){return b("React").jsxs("div",{children:[b("React").jsx("div",{className:"_4q3_",children:m[a]}),b("React").jsx("span",{className:"_4q40",children:l[a]})]})}}]};d.render=function(){var a=this,c=this.props.isForShortLivedChanges===!0?i._("90-day changes that may effect {name}:",[i._param("name",b("React").jsx("span",{className:"_5wr-",children:this.props.appName}))]):i._("Items to fix to upgrade {name} from {minimum version} to {max version}:",[i._param("name",b("React").jsx("span",{className:"_5wr-",children:this.props.appName})),i._param("minimum version",b("React").jsx("span",{className:"_5wr-",children:this.props.minSelectedVersion})),i._param("max version",b("React").jsx("span",{className:"_5wr-",children:this.props.maxSelectedVersion}))]);return b("React").jsxs("div",{className:"_3shr",children:[b("React").jsxs(b("LeftRight.react"),{children:[b("React").jsx(b("XUIText.react"),{size:"header3",children:c}),b("React").jsx(b("XUIText.react"),{size:"header3",children:i._("{number} Items",[i._param("number",this.props.tableRows.count())])})]}),b("React").jsx(b("XUISortableDataTable.react"),{className:"_4q41",columnToSortBy:"hits",onSort:function(b,c){return a.setState({sortColumn:b,sortAscending:c})},outerBorder:!0,columns:this.$3(),rows:this.props.tableRows.toArray()})]})};return c}(a.Component);e.exports=c}),null);
__d("create-react-class",["create-react-class/factory","react"],(function(a,b,c,d,e,f){"use strict";var g;if(typeof (g||(g=b("react")))==="undefined")throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");a=new((g||(g=b("react"))).Component)().updater;e.exports=b("create-react-class/factory")(g.Component,g.isValidElement,a)}),null);
__d("createReactClass_DEPRECATED",["create-react-class"],(function(a,b,c,d,e,f){"use strict";e.exports=b("create-react-class")}),null);
__d("ApiVersionUpgradeToolMethodsChart.react",["cx","fbt","HelpLink.react","InputLabel_DEPRECATED.react","InputLabelLabel_DEPRECATED.react","LeftRight.react","React","TooltipMixin","XUICheckboxInput.react","XUIText.react","createReactClass_DEPRECATED","cxMargin","immutable"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i=b("createReactClass_DEPRECATED")({propTypes:{percentage:a.number.isRequired},mixins:[b("TooltipMixin")],render:function(){return b("React").jsx("div",{className:"_13m8"+(this.props.percentage?"":" _13m9"),style:{width:this.props.percentage+"%"}})}}),j=2,k=6;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){b=a.call(this,b)||this;b.state={limitMethodsShown:!0};return b}var d=c.prototype;d.$1=function(){var a=this,b=this.props.selectableVersions.findIndex(function(b){return b===a.props.minSelectedVersion}),c=this.props.selectableVersions.findIndex(function(b){return b===a.props.maxSelectedVersion});return this.props.selectableVersions.filter(function(a,d){return b<d&&d<=c}).toOrderedSet()};d.$2=function(){var a=this,c,d=this.props.methodToSelected.every(function(a){return a});return(c=b("React")).jsxs("div",{className:"_13ma",children:[c.jsxs("div",{className:"_13mb _13mn",children:[c.jsx(b("XUICheckboxInput.react"),{checked:d,className:"_3-8_",onClick:function(){return a.props.onMethodSelectAllClick(!d)}}),h._("Method")]}),c.jsx("div",{className:"_13mc",children:h._("Number of upcoming changes")})]})};d.$3=function(a,c,d){var e=this.$1();a=this.props.versionToEnforcementDate.keySeq().map(function(a){var f=e.has(a)?c.get(a)||0:0,g=f/d*100;f=f===1?h._("{count} change from {version}",[h._param("count",f),h._param("version",a)]):h._("{count} changes from {version}",[h._param("count",f),h._param("version",a)]);f=b("React").jsx(b("XUIText.react"),{children:f});return b("React").jsx(i,{alignH:"center",percentage:g,tooltip:f},a)});return b("React").jsx("div",{className:"_13md",children:a.toArray()})};d.$4=function(){var a=this.props.versionToEnforcementDate.map(function(a,c){var d;return(d=b("React")).jsxs("div",{className:"_13me",children:[d.jsx("div",{className:"_13mg"}),d.jsxs("span",{children:[d.jsx("span",{className:"_13mj",children:c})," - "+a]})]},c)});return b("React").jsxs("div",{className:"_13mk",children:[b("React").jsxs("div",{className:"_13ml",children:[h._("Oldest Supported Version"),b("React").jsx(b("HelpLink.react"),{tooltip:h._("The dates listed reflect when each version of the API will be enforced for all apps. If you're using an earlier version of the API, make all necessary upgrades before this day to ensure full functionality.")})]}),a.toArray()]})};d.render=function(){__p&&__p();var a=this,c=this.$1(),d=this.props.methodToVersionToChangeCount.map(function(a){return a.filter(function(a,b){return c.has(b)}).valueSeq().reduce(function(a,b,c){return a+b},0)}),e=d.max(),f=this.props.methodToVersionToChangeCount,g=this.state.limitMethodsShown?f.take(k):f,i=g.map(function(c,f){var g;return(g=b("React")).jsxs("div",{className:"_13mm",children:[g.jsx(b("XUIText.react"),{className:"_13mn",children:g.jsxs(b("InputLabel_DEPRECATED.react"),{children:[g.jsx(b("XUICheckboxInput.react"),{checked:a.props.methodToSelected.get(f),onClick:function(b){return a.props.onMethodClick(f,b.target.checked)},value:f}),g.jsx(b("InputLabelLabel_DEPRECATED.react"),{children:a.props.methodToDisplayName.get(f)})]})}),a.$3(f,c,e+j),g.jsx("div",{className:"_13mo",children:d.get(f)})]},f)});if(i.count()===0)return null;var l=!this.state.limitMethodsShown&&f.count()>k?b("React").jsx("a",{className:"_2eop",href:"#",onClick:function(){return a.setState({limitMethodsShown:!0})},children:h._("Show Less")}):null;f=f.count()-g.count();g=f>0?b("React").jsx("a",{className:"_2eop",href:"#",onClick:function(){return a.setState({limitMethodsShown:!1})},children:h._("Show More {number more to show}",[h._param("number more to show","("+f+")")])}):null;f=l||g?b("React").jsx("div",{className:"_13mm",children:b("React").jsxs("div",{className:"_13mn",children:[g,l]})}):null;return b("React").jsxs("div",{className:"_13mp",children:[b("React").jsx(b("XUIText.react"),{className:"_13mq",display:"block",children:h._("Number of version changes")}),b("React").jsx(b("XUIText.react"),{className:"_13mr",display:"block",children:h._("Filter the table by selecting or deselecting methods below:")}),b("React").jsxs(b("LeftRight.react"),{children:[b("React").jsxs("div",{className:"_13ms",children:[this.$2(),i.toArray(),f]}),this.$4()]})]})};return c}(b("React").Component);e.exports=c}),null);
__d("ApiVersionUpgradeToolVersionSelectorsHeader.react",["cx","fbt","ApiVersionUpgradeToolHeader.react","LeftRight.react","React","XUISelector.react","XUISelectorButton.react","XUIText.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("XUISelector.react").Option;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.$1=function(a){return a.map(function(a){return b("React").jsx(i,{value:a,children:a},a)}).toArray()};d.$2=function(){var a=this,c,d=this.props.selectableVersions.findIndex(function(b){return b===a.props.maxSelectedVersion});return(c=b("React")).jsxs("div",{className:"_1kp",children:[c.jsx(b("XUIText.react"),{display:"block",className:"_2tu0",children:h._("Upgrade from:")}),c.jsxs(b("XUISelector.react"),{onChange:function(b){return a.props.onMinVersionSelect(b.value)},value:this.props.minSelectedVersion,children:[c.jsx(b("XUISelectorButton.react"),{size:"large",className:"_1km"}),this.$1(this.props.selectableVersions.slice(0,d))]})]})};d.$3=function(){var a=this,c,d=this.props.selectableVersions.findIndex(function(b){return b===a.props.minSelectedVersion});return(c=b("React")).jsxs("div",{className:"_1kp",children:[c.jsx(b("XUIText.react"),{display:"block",className:"_2tu0",children:h._("Upgrade to:")}),c.jsxs(b("XUISelector.react"),{onChange:function(b){return a.props.onMaxVersionSelect(b.value)},value:this.props.maxSelectedVersion,children:[c.jsx(b("XUISelectorButton.react"),{size:"large",className:"_1km"}),this.$1(this.props.selectableVersions.slice(d+1))]})]})};d.render=function(){return b("React").jsx(b("ApiVersionUpgradeToolHeader.react"),{selectedApp:this.props.selectedApp,showAppSelector:!0,showDisclaimer:!0,children:this.props.selectableVersions.count()>1?b("React").jsxs(b("LeftRight.react"),{className:"_2tu6",children:[this.$2(),this.$3()]}):null})};return c}(b("React").Component);e.exports=a}),null);
__d("XDeveloperAPIVersioningToolDataAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/tools/versioning/{app_id}/async/data/",{app_id:{type:"FBID",required:!0},min_api_version:{type:"String"},max_api_version:{type:"String"},methods:{type:"StringSet"}})}),null);
__d("ApiVersionUpgradeTool.react",["cx","fbt","ApiVersionUpgradeToolDataTable.react","ApiVersionUpgradeToolMethodsChart.react","ApiVersionUpgradeToolVersionSelectorsHeader.react","AsyncRequest","Link.react","React","XDeveloperAPIVersioningToolDataAsyncController","XDeveloperDocumentationController","XUISpinner.react","XUIText.react","immutable","shallowEqual"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").List,j=b("immutable").Map,k=b("immutable").OrderedMap;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;var d={},e=Object.keys(b.methodToDisplayName);for(var f=0;f<e.length;f++){var g=e[f];d[g]=!0}c.state={methodToDisplayName:j(b.methodToDisplayName),methodToDocPath:j(b.methodToDocPath),methodToSelected:j(d),minSelectedVersion:b.minSelectedVersionDefault,maxSelectedVersion:b.maxSelectedVersionDefault,selectableVersions:i(b.selectableVersions),versionToEnforcementDate:k(b.versionToEnforcementDate),methodToVersionToChangeCount:k(),loadingRequest:null,tableRows:i(),tableRowsForShortLivedChanges:i(),didAppMakeEnoughCalls:!0};return c}var d=c.prototype;d.componentDidUpdate=function(a,c){(c.minSelectedVersion!==this.state.minSelectedVersion||c.maxSelectedVersion!==this.state.maxSelectedVersion||!b("shallowEqual")(c.methodToSelected,this.state.methodToSelected))&&this.$1()};d.UNSAFE_componentWillMount=function(){this.$1()};d.$1=function(){var a=this;this.state.loadingRequest&&this.state.loadingRequest.abandon();var c=b("XDeveloperAPIVersioningToolDataAsyncController").getURIBuilder().setFBID("app_id",this.props.selectedApp.getUniqueID()).setString("min_api_version",this.state.minSelectedVersion).setString("max_api_version",this.state.maxSelectedVersion).setStringSet("methods",this.$2().toArray()).getURI();c=new(b("AsyncRequest"))().setURI(c).setHandler(function(b){return a.$3(b.payload)});c.send();this.setState({loadingRequest:c})};d.$3=function(a){var b={},c=Object.keys(a.methodToVersionToChangeCount);for(var d=0;d<c.length;d++){var e=c[d];b[e]=k(a.methodToVersionToChangeCount[e])}this.state.methodToVersionToChangeCount.map(function(c,a){b[a]||(b[a]=k())});this.setState({tableRows:i(a.tableRows),tableRowsForShortLivedChanges:i(a.tableRowsForShortLivedChanges),methodToVersionToChangeCount:k(b),loadingRequest:null,didAppMakeEnoughCalls:a.didAppMakeEnoughCalls})};d.$4=function(a,b){this.setState({methodToSelected:this.state.methodToSelected.set(a,b)})};d.$5=function(a){this.setState({methodToSelected:this.state.methodToSelected.map(function(){return a})})};d.$2=function(){var a=this;return this.state.methodToSelected.keySeq().filter(function(b){return a.state.methodToSelected.get(b)}).toList()};d.$6=function(){if(this.state.loadingRequest)return b("React").jsx("div",{className:"_5wsh",children:b("React").jsx("div",{className:"_5wsi",children:b("React").jsx(b("XUISpinner.react"),{size:"large"})})});if(this.state.selectableVersions.count()===1)return b("React").jsx("div",{className:"_1nsn _3shr",children:b("React").jsx(b("XUIText.react"),{display:"block",className:"_3bmd",children:h._("Your app is already on the latest version of the API")})});if(this.state.tableRows.count()===0){var a=this.state.didAppMakeEnoughCalls?h._("Your app has no changes for the methods you selected between {min version} and {max version}",[h._param("min version",this.state.minSelectedVersion),h._param("max version",this.state.maxSelectedVersion)]):h._("Your app hasn't made enough calls to the Graph API to show any info for the methods you selected between {min version} and {max version}. Visit our {changelog link} to see the full list of changes in all versions.",[h._param("min version",this.state.minSelectedVersion),h._param("max version",this.state.maxSelectedVersion),h._param("changelog link",b("React").jsx(b("Link.react"),{href:b("XDeveloperDocumentationController").getURIBuilder().setString("path1","apps").setString("path2","changelog").getURI(),target:"_blank",children:h._("changelog")}))]);return b("React").jsx("div",{className:"_1nsn _3shr",children:b("React").jsx(b("XUIText.react"),{display:"block",className:"_3bmd",children:a})})}return b("React").jsxs("div",{children:[this.state.tableRowsForShortLivedChanges.count()?b("React").jsx(b("ApiVersionUpgradeToolDataTable.react"),{appID:this.props.selectedApp.getUniqueID(),appName:this.props.appName,isForShortLivedChanges:!0,minSelectedVersion:this.state.minSelectedVersion,maxSelectedVersion:this.state.maxSelectedVersion,methods:this.$2(),methodToDisplayName:this.state.methodToDisplayName,methodToDocPath:this.state.methodToDocPath,selectableVersions:this.state.selectableVersions,versionToEnforcementDate:this.state.versionToEnforcementDate,tableRows:this.state.tableRowsForShortLivedChanges}):null,b("React").jsx(b("ApiVersionUpgradeToolDataTable.react"),{appID:this.props.selectedApp.getUniqueID(),appName:this.props.appName,minSelectedVersion:this.state.minSelectedVersion,maxSelectedVersion:this.state.maxSelectedVersion,methods:this.$2(),methodToDisplayName:this.state.methodToDisplayName,methodToDocPath:this.state.methodToDocPath,selectableVersions:this.state.selectableVersions,versionToEnforcementDate:this.state.versionToEnforcementDate,tableRows:this.state.tableRows})]})};d.render=function(){var a=this,c;return(c=b("React")).jsxs("div",{children:[c.jsxs("div",{className:"_1jsq",children:[c.jsx(b("ApiVersionUpgradeToolVersionSelectorsHeader.react"),{selectedApp:this.props.selectedApp,minSelectedVersion:this.state.minSelectedVersion,maxSelectedVersion:this.state.maxSelectedVersion,selectableVersions:this.state.selectableVersions,onMinVersionSelect:function(b){return a.setState({minSelectedVersion:b})},onMaxVersionSelect:function(b){return a.setState({maxSelectedVersion:b})}}),c.jsx("div",{className:"_2tu2",children:c.jsx(b("ApiVersionUpgradeToolMethodsChart.react"),{minSelectedVersion:this.state.minSelectedVersion,maxSelectedVersion:this.state.maxSelectedVersion,methodToVersionToChangeCount:this.state.methodToVersionToChangeCount,selectableVersions:this.state.selectableVersions,versionToEnforcementDate:this.state.versionToEnforcementDate,onMethodClick:this.$4.bind(this),onMethodSelectAllClick:this.$5.bind(this),methodToDisplayName:this.state.methodToDisplayName,methodToSelected:this.state.methodToSelected})})]}),c.jsx("div",{className:"_2tu2",children:this.$6()})]})};return c}(b("React").Component);e.exports=a}),null);