let nomeHeroi = "Sub-Zero"
let quantidadeXP = -1
let nivel = ""

if (quantidadeXP <= 1000) {
    nivel = "Ferro"
} else if (quantidadeXP <= 2000) {
    nivel = "Bronze"
} else if (quantidadeXP <= 5000) {
    nivel = "Prata"
} else if (quantidadeXP <= 7000) {
    nivel = "Ouro"
} else if (quantidadeXP <= 8000) {
    nivel = "Platina"
} else if (quantidadeXP <= 9000) {
    nivel = "Ascendente"
} else if (quantidadeXP <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log(`O herói de nome ${nomeHeroi} está com ${quantidadeXP} de XP e está no nível ${nivel}`)
