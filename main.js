let colors = ['blue', 'pink', 'yellow'];
let kinds = ['p','s','t'];
let size = ['large', 'small'];
let sex = ['male', 'female'];

class Clothes {
    constructor(colors, kinds, size, sex){
        this.colors = colors;
        this.kinds = kinds;
        this.size = size;
        this.sex = sex;
    }
}
const piece = new Clothes('')
const clothes = new Array(Clothes);


let filteredClothes = clothes.filter(filterByColor);

function filterByColor(value, index, array){
    return 

}