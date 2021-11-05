module.exports = {
async battery(json) {
let battery = json[2][0][1].value
let persenbat = parseInt(battery)
battrey.value = `${persenbat}%`
battrey.live = json[2][0][1].live
global.battery = ({
value: battrey.value,
isCharge: battry.live
})
}
}
