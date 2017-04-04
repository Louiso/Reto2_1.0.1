import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
Meteor.startup(()=>{


});
Accounts.urls.resetPassword = function(token) {
   return Meteor.absoluteUrl('ResetPassword/' + token);
};
  process.env.MAIL_URL="smtp://EstofadoConAzucar%40gmail.com:mamemimo@smtp.gmail.com:465/";
