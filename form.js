function validateForm() {
    event.preventDefault()
    //tchncl sprt cmpny cstmrSite afctdSystm prdctInvlvd shrtDec qstn
    let technical = document.getElementById('tchncl');
    let support = document.getElementById('sprt');
    let company = document.getElementById('cmpny');
    let customerSite = document.getElementById('cstmrSite');
    let affectedSystem = document.getElementById('afctdSystm');
    let productInvolved = document.getElementById('prdctInvlvd');
    let shortDescription = document.getElementById('shrtDesc');
    let question = document.getElementById("qstn");

    let listOfId = [company,customerSite,affectedSystem,productInvolved,shortDescription, question]

    if(technical.checked || support.checked ) {
        document.getElementById('radioError').innerHTML=""
    } else {
        document.getElementById('radioError').innerHTML="Please select one option";
         }

    for(i in listOfId)
    {
        let currentId= listOfId[i].id
        let inputElement = document.getElementById(`${currentId}`);
        let currentElement = document.getElementById(`${currentId}Error`);

        if(listOfId[i].value == null || listOfId[i].value=="") {
            currentElement.innerHTML="Please fill this field";
            inputElement.classList.add("error");
        } else {
                currentElement.innerHTML="";
                inputElement.classList.remove("error");
                }
    }
    
}