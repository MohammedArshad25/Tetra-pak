function validateForm() {
    event.preventDefault()

    let technical = document.getElementById('technicalIssues');
    let support = document.getElementById('productSupport');
    let company = document.getElementById('company');
    let customerSite = document.getElementById('customerSite');
    let affectedSystem = document.getElementById('affectedSystems');
    let productInvolved = document.getElementById('productInvolved');
    let shortDescription = document.getElementById('shortDescription');
    let question = document.getElementById("question");

    let listOfId = [company,customerSite,affectedSystem,productInvolved,shortDescription, question]

    if(technical.checked || support.checked ) {
        document.getElementById('radioError').innerHTML="";
    } else {
        document.getElementById('radioError').innerHTML="Please select one option";
         }

    for(let i in listOfId)
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