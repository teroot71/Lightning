/*
 * This code is for Internal Salesforce use only, and subject to change without notice.
 * Customers shouldn't reference this file in any web pages.
 */
var InternalDialogs={showConfirm:function(a,b,c){InternalDialogs.shouldSwitchToNativeAlertConfirmPrompt()?confirm(a)&&"function"===typeof b&&b():(a={id:Dialogs.getNextId(),title:"",message:a,actions:[b,c],actionLabels:[LC.getLabel("Buttons","ok"),LC.getLabel("Buttons","cancel")],useCSS:!0,backgroundClass:Dialogs.types.CONFIRM.backgroundClass,contentClass:Dialogs.types.CONFIRM.contentClass,iconClass:Dialogs.types.CONFIRM.iconClass,getIconAlt:Dialogs.types.CONFIRM.getIconAlt()},Dialogs.createDialog(a,
!0).show())},showAlert:function(a){InternalDialogs.shouldSwitchToNativeAlertConfirmPrompt()?alert(a):Dialogs.showSimpleInfo("",a)},shouldSwitchToNativeAlertConfirmPrompt:function(){return window===top||UserContext.useNativeAlertConfirmPrompt}};

//# sourceMappingURL=/javascript/1684699876123/sfdc/source/InternalDialogs.js.map
