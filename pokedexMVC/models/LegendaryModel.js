function LegendaryModel (id, name, description, type, url, healthPoints, specialAttack, defense, attack, experience, specialDefense) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.url = url
    this.healthPoints = healthPoints;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.attack = attack;
    this.experience = experience;
    this.specialDefense = specialDefense;
}

module.exports = LegendaryModel;