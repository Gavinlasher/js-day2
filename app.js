const packages = [
    {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs',lost:false}, 
    {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk',lost:false}, 
    {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147',lost:false}, 
    {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145',lost:false}, 
    {heavy: true, priority: true, fragile: true, to: 'Brittany',trackingNumber: 'vghjdahjg23174',lost: false}, 
    {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz',lost:false}, 
    {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367' ,lost:false}]

current = []
// let display = document.getElementById('packagedata').classList.remove('packagedata')

function draw(){
    let packagetemp = `<div class="col-12 p-3  text-center">
    <table>
        <tr>
          <th>heavy</th>
          <th>Prority</th>
          <th>Fragile</th>
          <th>To:</th>
          <th>Tracking Name</th>
        </tr>`
    
        for (let i = 0; i < current.length; i++) {
            const package = current[i];
            
            packagetemp +=`

            <tr id="${package.trackingNumber}" onclick="guess('${package.trackingNumber}')">
              <td>'${package.heavy}'</td>
              <td>'${package.priority}'</td>
              <td>'${package.fragile}'</td>
              <td>'${package.to}'</td>
              <td>'${package.trackingNumber}'</td>
            </tr>
            `

        }
        template =+ `</table>
        </div>`
        document.getElementById('packagedata').innerHTML = packagetemp
    }

function newDay(){
document.getElementById("packagedata").classList.remove('hidden')

    packages.forEach(package => package.lost = false)

const randomPackage = Math.floor(Math.random() * packages.length)

packages[randomPackage].lost = true
current = packages
draw()
}
 function filter(filterPackage){

let lostPackage = packages.find(package => package.lost = true)

current = current.filter(package => package[filterPackage] === lostPackage[filterPackage])
draw()
 }
function reset(){
    document.getElementById('packagedata').classList.add('hidden')
    
    
}
function guess(trackingNumber){
    let lostPackagess = packages.find(package => package.lost)
    if(lostPackagess.trackingNumber == trackingNumber) {
        alert("Package found, Congrats")
        document.getElementById(lostPackagess.trackingNumber).classList.add('victory')
    }
    else{
        alert("Package Not Found")
        document.getElementById(trackingNumber).classList.add('defeat')
    }
}