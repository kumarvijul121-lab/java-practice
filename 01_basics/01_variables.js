const accountId = 720300
let accountEmail = "vscode3432@gmail.com"
var accountPassword = "822828"
accountCity = "Karnal"
accountState = "Haryana"


// accountId = 8 // not allowed

accountEmail = "Mynewcodechange@gmail.com"
accountPassword = "723343"
accountCity = "Kurukhshetra"
accountState = "Punjab"

console.log(accountId);
 
// prefer not to use var
//  because of issue in block scope and functional scope

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])