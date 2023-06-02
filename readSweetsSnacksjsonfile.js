const jsonObject = require('./sweetssnacks.json')

console.log("Does Agrawal Sweets Shop has MangoBarfi ? "+jsonObject.SweetsSnacks.AgrawalSweets.MangoBarfi)
console.log("Does YummyTummySweets Shop has Samosa ? "+jsonObject.SweetsSnacks.YummyTummySweets.Samosa)
var typeOfSweetsSnacks = jsonObject["SweetsSnacks"]
value = "HiFiveSweets"
function sweetssnacksJson(json,value){
    for (index in json){
        //console.log(index)
        var obj = json[index]
        if(value == index){
            console.log(index + " is having KajuKatli ? "+obj.KajuKatli)
            break;
        }
    }
}

console.log("Does DeepakSweets Shop has MangoBarfi ? "+jsonObject.SweetsSnacks.DeepakSweets.MangoBarfi)
sweetssnacksJson(typeOfSweetsSnacks,value)