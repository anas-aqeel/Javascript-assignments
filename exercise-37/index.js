document.write("open console to see the output!");

function describe_city(name, country = 'Pakistan') {
    console.log(`${name} is in ${country}`)
}
describe_city('Karachi')
describe_city('Mumbai', 'India')
describe_city('Islamabad')