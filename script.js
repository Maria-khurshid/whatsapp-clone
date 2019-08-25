let handleSuccess = function(response) {
    // handle success
    console.log('Tired')
    console.log(response)
    for (let i = 0; i < response.data.length; i++) {
        let messages = response.data[i]

        document.querySelector('ul').innerHTML +=

            `<li>
            
                <div class="wtsApp">
                    <img src=${messages.profilePic}>
                        <div class="mName"><h4>${messages.name}</h4>
                            <p class="mNumb">${messages.number}</p>
                            <p class="firstLine">${messages.firstLine}</p>
                        </div>
                        <div class="timeSection">
                            <p class="msgTime">${messages.time}</p>
                            <p class="mUnread">${messages.numbUnread}</p>
                        </div>
                </div> 
            </li>`

    }

}

axios.get('https://tk-whatsapp.herokuapp.com/messages')
    .then(handleSuccess)

.catch(function(error) {
        // handle error
        console.log('Rttot')
        console.log(error)
    })
    .finally(function() {
        // always executed
        console.log('The end')
    })