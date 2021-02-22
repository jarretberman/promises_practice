
const url = "http://numbersapi.com/42"

const facts = [axios.get(url),axios.get(url),axios.get(url),axios.get(url)]
const factsUI = []
Promise.all(facts)
    .then( facts => {
        for ( res of facts){
            factsUI.push(res.data)

        }
        displayFacts(factsUI)
    })
    .catch(err => console.log(err))

const displayFacts = (arr)=>{
    const $div = $('<div>')

    for (const ele of arr) {

        $div.append($('<p>').text(ele))
    }

    $('#display').append($div)
}

displayFacts(factsUI)
