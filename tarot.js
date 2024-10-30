function createTarotSpread() {
    let tarotCard = [
        {"cardBack": "images/back.jpg", "cardImage": "images/fool.jpg", "cardTitle": "The Fool", "cardReading": "beginnings possibilities, pleasure, thoughtlessness, adventure, opportunity"},
        {"cardBack": "images/back.jpg", "cardImage": "images/magician.jpg", "cardTitle": "The Magician", "cardReading": "creativity, self-confidence, dexterity, sleight of hand,will-power, skill"},
        {"cardBack": "images/back.jpg", "cardImage": "images/empress.jpg", "cardTitle": "The Empress", "cardReading": "development, accomplishment action, evolution"},
        {"cardBack": "images/back.jpg", "cardImage": "images/priestess.jpg", "cardTitle": "The High Priestess", "cardReading": "knowledge, wisdom, learning, intuition, impatience, virtue, purity"},
        {"cardBack": "images/back.jpg", "cardImage": "images/hierophant.jpg", "cardTitle": "The Hierophant", "cardReading": "mercy, conformity, forgiveness, social approval, bonded, inspiration"},
        {"cardBack": "images/back.jpg", "cardImage": "images/lovers.jpg", "cardTitle": "The Lovers", "cardReading": "harmony, trust,romance, optimism, honor, love, harmony"},
        {"cardBack": "images/back.jpg", "cardImage": "images/hermit.jpg", "cardTitle": "The Hermit", "cardReading": "inner strength, prudence, withdrawal, caution, vigilance."},
        {"cardBack": "images/back.jpg", "cardImage": "images/chariot.jpg", "cardTitle": "The Chariot", "cardReading": "perseverance, rushed decision, turmoil, vengeance, adversity"},        
        {"cardBack": "images/back.jpg", "cardImage": "images/strenght.jpg", "cardTitle": "Strength", "cardReading": "courage, conviction, strength, determination, action, heroism, virility"},
        {"cardBack": "images/back.jpg", "cardImage": "images/justice.jpg", "cardTitle": "Justice", "cardReading": "equality, righteousness, virtue, honor, harmony, balance"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wheeloffortune.jpg", "cardTitle": "The Wheel of Fortune", "cardReading": "unexpected events, advancement, destiny, fortune, progress"},
        {"cardBack": "images/back.jpg", "cardImage": "images/moon.jpg", "cardTitle": "The Moon", "cardReading": "Upright:double-dealing Deception, disillusionment, trickery, error, danger, disgrace"},
        {"cardBack": "images/back.jpg", "cardImage": "images/sun.jpg", "cardTitle": "The Sun", "cardReading": "accomplishment, success, love, joy, happy marriage, satisfaction"},
        {"cardBack": "images/back.jpg", "cardImage": "images/star.jpg", "cardTitle": "The Star", "cardReading": "balance, pleasure, optimism, insight, spiritual love, hope, faith"},
        {"cardBack": "images/back.jpg", "cardImage": "images/devil.jpg", "cardTitle": "The Devil", "cardReading": "downfall, unexpected failure, controversy, ravage, disaster, ill tempered"},
        {"cardBack": "images/back.jpg", "cardImage": "images/hangedman.jpg", "cardTitle": "The Hanged Man", "cardReading": "change, reversal, boredom, improvement, rebirth, suspension, change"},
        {"cardBack": "images/back.jpg", "cardImage": "images/death.jpg", "cardTitle": "Death", "cardReading": "unexpected change, loss, failure, transformation, death, bad luck"},
        {"cardBack": "images/back.jpg", "cardImage": "images/temperance.jpg", "cardTitle": "Temperance", "cardReading": "temperance, patience, good influence, confidence, moderation"},
        {"cardBack": "images/back.jpg", "cardImage": "images/tower.jpg", "cardTitle": "The Tower", "cardReading": "disruption, abandonment, end of friendship, bankruptcy, downfall, unexpected events"},
        {"cardBack": "images/back.jpg", "cardImage": "images/judgement.jpg", "cardTitle": "Judgement", "cardReading": "awakening, renewal, rejuvenation, rebirth, improvement, promotion, atonement, judgment"},
        {"cardBack": "images/back.jpg", "cardImage": "images/world.jpg", "cardTitle": "The World", "cardReading": "perfection, recognition, success, fulfillment, eternal life"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands1.jpg", "cardTitle": "The Ace of Wands", "cardReading": "profitable journey, new business, beginning, new career, birth, inheritance"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands2.jpg", "cardTitle": "Two of Wands", "cardReading": "generous person, courage, patience, courage"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands3.jpg", "cardTitle": "Three of Wands", "cardReading": "cooperation, good partnership, success"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands4.jpg", "cardTitle": "Four of Wands", "cardReading": "dissatisfaction, kindness, reevaluation"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands5.jpg", "cardTitle": "Five of Wands", "cardReading": "lawsuit or quarrel, courage, competition"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands6.jpg", "cardTitle": "Six of Wands", "cardReading": "leadership, good news, success"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands7.jpg", "cardTitle": "Seven of Wands", "cardReading": "stiff competition, victory, courage, energy"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands8.jpg", "cardTitle": "Eight of Wands", "cardReading": "new ideas, love, journey"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands9.jpg", "cardTitle": "Nine of Wands", "cardReading": "victory, good health, obstinacy"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wands10.jpg", "cardTitle": "Ten of Wands", "cardReading": "pain, ruined, failure"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wandspage.jpg", "cardTitle": "The Page of Wands", "cardReading": "inspiration, ideas, discovery, limitless potential, free spirit"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wandsknight.jpg", "cardTitle": "The Knight of Wands", "cardReading": "generous, journey, impetuous"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wandsqueen.jpg", "cardTitle": "The Queen of Wands", "cardReading": "fondness, attraction, command"},
        {"cardBack": "images/back.jpg", "cardImage": "images/wandsking.jpg", "cardTitle": "The King of Wands", "cardReading": "passionate, good leader, noble"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups1.jpg", "cardTitle": "The Ace of Cups", "cardReading": "good health, love, joy, beauty"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups2.jpg", "cardTitle": "Two of Cups", "cardReading": "romance, friendship, cooperation"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups3.jpg", "cardTitle": "Three of Cups", "cardReading": "fortune, hospitality, discovery"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups4.jpg", "cardTitle": "Four of Cups", "cardReading": "dissatisfaction, kindness, reevaluation, redemption"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups5.jpg", "cardTitle": "Five of Cups", "cardReading": "broken marriage,vain regret, sorrow, loss"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups6.jpg", "cardTitle": "Six of Cups", "cardReading": "acquaintance, good memories, acquaintance, happiness"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups7.jpg", "cardTitle": "Seven of Cups", "cardReading": "imagination, illusion, directionless"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups8.jpg", "cardTitle": "Eight of Cups", "cardReading": "disappointment, abandonment, misery"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups9.jpg", "cardTitle": "Nine of Cups", "cardReading": "physical well-being, hopes, security"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cups10.jpg", "cardTitle": "Ten of Cups", "cardReading": "friendship, happiness, life"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cupspage.jpg", "cardTitle": "The Page of Cups", "cardReading": "sweetness, interest in literature, gentleness"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cupsknight.jpg", "cardTitle": "The Knight of Cups", "cardReading": "emotional, romantic dreamer, intelligence"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cupsqueen.jpg", "cardTitle": "The Queen of Cups", "cardReading": "loving mother, gentle, happiness"},
        {"cardBack": "images/back.jpg", "cardImage": "images/cupsking.jpg", "cardTitle": "The King of Cups", "cardReading": "kindness, willingness, enjoyment"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords1.jpg", "cardTitle": "The Ace of Swords", "cardReading": "love, valiant, victory"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords2.jpg", "cardTitle": "Two of Swords", "cardReading": "indecision, trouble, balanced"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords3.jpg", "cardTitle": "Three of Swords", "cardReading": "broken relationship, civil war"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords4.jpg", "cardTitle": "Four of Swords", "cardReading": "temporary exile, strife, retreat"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords5.jpg", "cardTitle": "Five of Swords", "cardReading": "defeat, cowardliness, empty victory"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords6.jpg", "cardTitle": "Six of Swords", "cardReading": "harmony, sorrow, journey"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords7.jpg", "cardTitle": "Seven of Swords", "cardReading": "betrayal, insolence, unwise attempt"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords8.jpg", "cardTitle": "Eight of Swords", "cardReading": "weakness, indecision, censure"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords9.jpg", "cardTitle": "Nine of Swords", "cardReading": "desolation, illness, suspicion, cruelty"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swords10.jpg", "cardTitle": "Ten of Swords", "cardReading": "defeat, failure, pain"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swordspage.jpg", "cardTitle": "The Page of Swords", "cardReading": "grace, diplomacy, dexterity"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swordsknight.jpg", "cardTitle": "The Knight of Swords", "cardReading": "strong man, braver, clever person"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swordsqueen.jpg", "cardTitle": "The Queen of Swords", "cardReading": "skillful, brave, clever, rush"},
        {"cardBack": "images/back.jpg", "cardImage": "images/swordsking.jpg", "cardTitle": "The King of Swords", "cardReading": "powerful, friendship, counselor"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles1.jpg", "cardTitle": "The Ace of Pentacles", "cardReading": "prosperity, happiness, pleasure"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles2.jpg", "cardTitle": "Two of Pentacles", "cardReading": "harmony, new projects, helpful"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles3.jpg", "cardTitle": "Three of Pentacles", "cardReading": "abilities, approval,effort"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles4.jpg", "cardTitle": "Four of Pentacles", "cardReading": "ungenerous, greed, miserly"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles5.jpg", "cardTitle": "Five of Pentacles", "cardReading": "destitution, poor health, despair, loneliness"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles6.jpg", "cardTitle": "Six of Pentacles", "cardReading": "prosperity, philanthropy, charity, gifts"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles7.jpg", "cardTitle": "Seven of Pentacles", "cardReading": "development, re-evaluation, effort, hard work"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles8.jpg", "cardTitle": "Eight of Pentacles", "cardReading": "employment, money, learning, trade"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles9.jpg", "cardTitle": "Nine of Pentacles", "cardReading": "solitude, well-being, green thumb"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentacles10.jpg", "cardTitle": "Ten of Pentacles", "cardReading": "wealth, property, stability"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentaclespage.jpg", "cardTitle": "The Page of Pentacles", "cardReading": "kindness,new ideas/opinions, scholar"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentaclesknight.jpg", "cardTitle": "The Knight of Pentacles", "cardReading": "dull outlook, patience, animal lover, trustworthy"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentaclesqueen.jpg", "cardTitle": "The Queen of Pentacles", "cardReading": "thoughtfulness, intelligence, talents, melancholy"},
        {"cardBack": "images/back.jpg", "cardImage": "images/pentaclesking.jpg", "cardTitle": "The King of Pentacles", "cardReading": "reliable person, steadiness"}
    ];
    //shuffles cards
    tarotCard.sort(() => Math.random() - 0.5);

    // Selects the first 3 cards 
    let selectedCards = tarotCard.slice(0, 3);

    let tarotHTML = selectedCards.map((card, index) => `
        <div class="flip-card" id="card-${index}">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="card-img-top" src="${card.cardBack}" alt="Card back">
                </div>
                <div class="flip-card-back">
                    <img class="card-img-top" src="${card.cardImage}" alt="Card front">
                </div>
            </div>
        </div>
    `).join('');

    document.getElementById('tarotSpread').innerHTML = tarotHTML;

    // Array to hold readings of flipped cards
    let flippedReadings = [];

    // Adds click event listeners to each card
    selectedCards.forEach((card, index) => {
        document.getElementById(`card-${index}`).addEventListener('click', function() {
            this.classList.toggle('flipped');

            if (this.classList.contains('flipped')) {
                // Add this card's reading if it's flipped
                flippedReadings.push(`<h3 class="bree-serif-regular">${card.cardTitle}</h3><p class="bree-serif-regular">${card.cardReading}</p>`);
            } else {
                // Remove this card's reading if it's flipped back
                flippedReadings = flippedReadings.filter(reading => !reading.includes(card.cardTitle));
            }

            // Update the card reading div with all flipped readings
            document.getElementById('cardReading').innerHTML = flippedReadings.join('');
        });
    });
}

createTarotSpread();