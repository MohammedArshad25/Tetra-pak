class basicClass{
    constructor(obj){
        this.obj = obj
    }

    validateForm = () =>{
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
    
        document.getElementById('radioError').innerHTML=(technical.checked || support.checked)?"": "Please select one option";
    
        listOfId.forEach(function(Id){
            let currentId= Id.id;
            let inputElement = document.getElementById(`${currentId}`);
            let currentElement = document.getElementById(`${currentId}Error`);
    
            (Id.value == null || Id.value == "") ? 
                                                (currentElement.innerHTML="Please fill this field", 
                                                inputElement.classList.add("error")) :
                                                (  currentElement.innerHTML="",
                                                inputElement.classList.remove("error"));
        });
        
    }
    
    createHTML = (obj) => {
        var rawTemplate = document.getElementById("ddtemplate").innerHTML;
        var compiledTemplate = Handlebars.compile(rawTemplate);
        var ourGeneratedHTML = compiledTemplate(obj);
        var petsContainer = document.getElementById("affectedSystems");
        petsContainer.insertAdjacentHTML('beforeend',ourGeneratedHTML);
    }
    
    setProductList = () => {
        let affectedSystem = document.getElementById("affectedSystems").value;
        var rawTemplate = document.getElementById("pitemplate").innerHTML;
        var compiledTemplate = Handlebars.compile(rawTemplate);
        var ourGeneratedHTML = compiledTemplate(obj.data[affectedSystem]);
        var ASContainer = document.getElementById("productInvolved");
        ASContainer.innerHTML= ourGeneratedHTML;
    }
}
    
    getObject();
    let obj="";
    let form =new basicClass();
    async function getObject()
    {
        obj = await  fetch('./data.json').then(response => {
            return response.json();
          }).then(obj => {
            return obj
          }).catch(err => {
            console.log("error")
          });
          form.createHTML(obj);
    }









