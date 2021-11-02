function sendEmail() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lr = ss.getLastRow();

  for(var i =2; i<lr; i++){
    var currentEmail = ss.getRange(i,1).getValue();
    var currentClassTitle= ss.getRange(i,3).getValue();

    MailApp.sendEmail(currentEmail,"Reminder for you registration for: " + currentClassTitle,"Please keep time for the class")
    Logger.log(currentEmail, currentClassTitle)
  }
  
}
