var appleDIV=document.getElementById('APPLEBOTTOMJEANS');
var container=document.createElement('div');

var logo=document.createElement('img');
logo.src='Apples.jpg';
logo.style.width='100%';
logo.style.display='block';
logo.style.marginLeft='auto';
logo.style.marginRight="auto";
logo.classList.add('w3-hover-opacity', 'w3-animate-zoom')

appleDIV.appendChild(container);
container.appendChild(logo);




var request=new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload=function() {
    var data=JSON.parse(this.response);
    if(request.status >=200 && request.status <400) {
        data.forEach(users => {
            var card=document.createElement('div');
            var header1=document.createElement('h1');
            header1.textContent=users.name;
            header1.classList.add('w3-border-bottom', 'w3-border-top', 'w3-pale-yellow');
            header1.style.textAlign='center';
            header1.style.marginLeft='30rem';
            header1.style.marginRight='30rem';
            header1.style.marginTop='5rem';
            header1.style.marginBottom='5rem';
            header1.style.fontFamily='Dancing Script';
            
    

            var para1=document.createElement('p');
            para1.textContent='Username: '+ users.username;
            para1.style.textAlign='center';
            para1.style.fontFamily='Slabo';
            para1.style.fontSize='27px';

            var para2=document.createElement('p');
            para2.textContent='Email: '+ users.email;
            para2.style.textAlign='center';
            para2.style.fontFamily='Slabo';
            para2.style.fontSize='27px';

            var para3=document.createElement('p');
            para3.textContent='Phone#: '+ users.phone;
            para3.style.textAlign='center';
            para3.style.fontFamily='Slabo';
            para3.style.fontSize='27px';

            var para4=document.createElement('p');
            para4.textContent='Website: '+ users.website;
            para4.style.textAlign='center';
            para4.style.fontFamily='Slabo';
            para4.style.fontSize='27px';

        


        

            container.appendChild(card);
            card.appendChild(header1);
            card.appendChild(para1);
            card.appendChild(para2);
            card.appendChild(para3);
            card.appendChild(para4);
    
      

        });
    } else {
        alert('Its not working!');
    }
    
}

request.send();