let coin = {
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() * 2)

        return this.state
        
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {


        if (this.state === 0) {
        return "Heads"
        } else {
        return "Tails"
        }
        
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');

        if (this.state === 0) {
        image.src = "https://researchmaniacs.com/Random/Images/Quarter-Heads.png"
        } else {
        image.src = "https://external-preview.redd.it/Lkiw2aUK7sQ9GZb6XCuc-EnSOSQ_LUDx0adBEBoiY_s.jpg?auto=webp&s=09352730ccfad2f9f121fc3a128019f17281f2e4"
        }

        return image
        
        
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        }
};

function display20flips () {
    for (let flip = 0; flip <= 20; flip += 1) {
        coin.flip()
        let stringDiv = document.createElement ('div')
        stringDiv.append(coin.toString())
        document.body.append(stringDiv)
        
    }
}
display20flips()


function display20Images () {
    for (let flipImage = 0; flipImage <=20; flipImage +=1) {
        coin.flip()
        let quarter = document.createElement ('div')
        quarter.append(coin.toHTML())
        document.body.append(quarter)
    }
}
display20Images()