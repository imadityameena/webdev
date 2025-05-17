const accountId = 14453
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

accountEmail = "gahdj@.com"
accountPassword = "12232"
accountCity = "bengluru"

console.log(accountId);

// prefer not to use var because of issue in block scope and functional use

console.table({accountId, accountEmail, accountPassword, accountCity})