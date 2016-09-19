var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


  var articleone={
      Title:'Voila App',
      heading:'voila App Heading',
      date:'@ sep 2016',content:`<p>
      fkfkfk
      </p>
      <p>
      ddddd</p>`
      
      
  };
  
  function createTemplate(data)
  { var title=data.title;

  var heading=data.heading;
    var date=data.date;
  var content=data.content;
   var htmltemplate= ` 
       <html>
     <head> Volia app
         <title>
        ${title}
         </title>
         
     </head>
     
     
     <body>
         
        <div>
             <a href="/">Home</a>
             <hr/>
             <h3>
                 ${heading}
             </h3>
         </div>
         <div>
            ${date}
         </div>
         <div>
            ${content}
         </div>
        </body>
         
  </html>`
  ;  
     return htmltemplate;
  }
   
  
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleone));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
