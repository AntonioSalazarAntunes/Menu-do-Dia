var refreshButtonState = false;

const soups = [
    "Sopa de Bróculos",
    "Sopa de Tomate",
    "Caldo Verde",
    "Sopa de Alho",
    "Sopa de Legumes"
]

const entrances = [
    "Patê de Atum",
    "Guacamole",
    "Cogumelos Chineses",
    "Cogumelos Recheados",
    "Peixinhos da horta",
    "Patê de azeitonas",
    "Patê de ovo"
]

const pastas = [
    "Massa para Rissois",
    "Pierogis",
    "Massa com Salmão e Philadelphia",
    "Massa cremosa com Cogumelos e Burrata",
    "Caccio e Pepe",
    "Pasta al Limone",
    "Esparguete à Carbonara",
    "Massa al Aglio e Olio",
    "Tagliatelle ala Bolognesesa",
    "Massa com Atum Gratinada",
    "Massa com Pesto e Bróculos",
    "Massa com Atum e Cogumelos",
    "Massa com ananás e bacon",
    "Massa hungara com Requeijão",
    "Julianára",
    "Esparguete com Camarão",
    "Esparguete com Salsichas Frescas",
    "Massa com molho de tomate e beringela",
    "Massa 4 queijos",
    "Massa com pistaccio, camarão e laranja",
    "Massa com mascarpone e tomate cherry",
    "Lasanha",
    "Fettucine Boscaiola",
]

const breads = [
    "Pizza com ananás e gorgonzola",
    "Pizza Margherita",
    "Pão de alho",
    "Piadina",
    "Pão recheado",
    "Pão com queijo Brie e mel",
    "Khachapuri",
    "Lángos",
    "Pão de abóbora",
    "Pão caseiro com chouriço",
    "Calzone",
    "Tortilha de trigo",
    "Bruschettas",
    "Pizza de frigideira"

]

const meat = [
    "Cozido à Portuguesa",
    "Frango no forno",
    "Hamburger",
    "Entrecosto com mel e mostarda",
    "Carne de porco à portuguesa",
    "Arroz com salsichas",
    "Feijoada",
    "Rolo de Carne",
    "Goulas",
    "Vitela à mãe Luisa",
    "Frnago com mostarda e mel",
    "Frango com sopa de cebola",
    "Bifanas de Porco",
    "Chicken Masala",
    "Bitoque",
    "Migas à alentejana",
    "Porco agridoce",
    "Caril de Frango",
    "Risoto de cogumelos e Bacon",
    "Ovos rotos com chouriço",
    "Ervilhas com ovos escalfados",
    "Coxinhas de franco",
    "Chili con Carne",
    "Bife de molho de café",
    "Febras na brasa à moda do Ribatejo",
    "Tirinhas de porco com mel e lima",
    "Frango KFC",
    "Carne de Porco estufada com vinho tinto",
    "Frango com molho gorgonzola",
    "Frango enrolado com bacon"
]

const fish = [
    "Jaquinzinhos",
    "Arroz com atum e ovo",
    "Bacalhau à Brás",
    "Bacalhau à Gomes de Sá",
    "Bacalhau com Natas",
    "Salmão no Forno",
    "Peixe vermelho no forno",
    "Arroz de Polvo",
    "Bacalhau com Broa",
    "Bacalhau Dourado",
    "Bacalhau com Migas",
    "Arroz com Salmão e Abacate",
    "Pescada enrolada em bacon",
    "Bacalhau à Lagareiro",
    "Atum com broa",
    "Atum com feijão e ovo"
]

const desserts = [
    "Papas de Aveia",
    "Griz",
    "Semifrio de morango",
    "Bolo",
    "Panquecas",
    "Cheesecake de Oreo",
    "Tarte de nata",
    "Doce da Avó Ilda e Tia Fernanda",
    "Semifrio de Ananás",
    "Biscoitos de Limão",
    "Broinhas doces",
    "Serradura",
    "Mousse de Chocolate",
    "Muffins de Maçã com Crumble",
    "Bolachas de abóbora com pepitas de chocolate",
    "Crumble de maçã",
    "Doce morango e mascarpone"
]

const salads = [
    "Salada de bacalhau",
    "Salada de salmão e abacate",
    "Salada de bacon",
    "Salada de salmão fumado",
    "Salada César"
]

const vegetarian = [
    "Tortilha",
    "Ratatouille",
    "Legumes salteados(beringela, cenoura..",
    "Puré de Couve-flor",
    "Couve-flor salteada",
    "Batata brasa"
]

var numberOfButtons = document.querySelectorAll(".btn");

for (var i = 0; i < numberOfButtons.length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var cadaUm = this.id;

        switch (cadaUm) {
            case "sopa":
                soupFunction();
                break;
            case "entradas":
                entranceFunction();
                break;
            case "massas":
                massasFunction();
                break;
            case "pao":
                breakFunction();
                break;
            case "carnes":
                meatFunction();
                break;
            case "peixe":
                fishFunction();
                break;
            case "sobremesas":
                dessertFunction();
                break;
            case "saladas":
                saladFunction();
                break;
            case "vegetariano":
                vegetarianFunction();
                break;
            default:
                break;

        }
    })
}

function soupFunction() {
    var randomSoup = Math.floor(Math.random() * 5);
    var randomChosenSoup = soups[randomSoup];
    
    document.getElementById("sopa").innerHTML = randomChosenSoup;
   
    
}


function entranceFunction() {
    var randomEntrance = Math.floor(Math.random() * 7);
    var randomChosenEntrance = entrances[randomEntrance];

    document.getElementById("entradas").innerHTML = randomChosenEntrance;

}

function massasFunction() {
    var randomPasta = Math.floor(Math.random() * 23);
    var randomChosenPasta = pastas[randomPasta];

    document.getElementById("massas").innerHTML = randomChosenPasta;
}

function breakFunction() {
    var randomBread = Math.floor(Math.random() * 14);
    var randomChosenBread = breads[randomBread];

    document.getElementById("pao").innerHTML = randomChosenBread;
}

function meatFunction() {
    var randomMeat = Math.floor(Math.random() * 30);
    var randomChosenMeat = meat[randomMeat];

    document.getElementById("carnes").innerHTML = randomChosenMeat;
}

function fishFunction() {
    var randomFish = Math.floor(Math.random() * 16);
    var randomChosenFish = fish[randomFish];

    document.getElementById("peixe").innerHTML = randomChosenFish;
}

function dessertFunction() {
    var randomDessert = Math.floor(Math.random() * 17);
    var randomChosenDessert = desserts[randomDessert];

    document.getElementById("sobremesas").innerHTML = randomChosenDessert;
}

function saladFunction() {
    var randomSalad = Math.floor(Math.random() * 5);
    var randomChosenSalad = salads[randomSalad];

    document.getElementById("saladas").innerHTML = randomChosenSalad;

}

function vegetarianFunction() {
    var randomVegetarian = Math.floor(Math.random() * 6) ;
    var randomChosenVegetarian = vegetarian[randomVegetarian];

    document.getElementById("vegetariano").innerHTML = randomChosenVegetarian;
}