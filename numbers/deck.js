
class Deck {
    constructor(){
        console.log ('NEW DECK')
        this.newDeck()
        $('#draw').on('click', evt => {
            evt.preventDefault()
            this.draw()
        }).bind(this)
    }

    async newDeck() {
        let _this = this
        const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
                            .then(res => {
                                _this.deck = res.data.deck_id
                            })
    }

    async shuffle() {
        const id = this.deck
        const deck = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/shuffle/`)
    }

    
    async draw() {
        const id = this.deck
        const draw = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`)
                             .then(res=>{
                                 console.log( res.data)
                                 const $display = $('#display')
                                 $display.empty()
                                 const $img = $(`<img src = '${res.data.cards[0].image}'>`)
                                 $display.append($img)
                             })
    }

}

$(document).ready(() =>{
    const deck = new Deck
})