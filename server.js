var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


  var articleone={
      title:'Voila App',
      heading:'Voila App is ',
      date:'10 sep 2016',
      content:`<p>
      The voila apps unique app  which gives the beginner to Start developing its own App
      Aplication web App is developed having with little knowledge and groom skills remarkably</p>`
      
      
  };
    var articletwo={
      title:'Voila App',
      heading:'voila  The second Page',
      date:'DYnamics',
      content:`<p>
      Introductory Part of voila Web App
      
        Voila Web App is the App developed using html javascript
      Aplication is developed for Basic web App second </p>`
      
      
  };
  
  function createTemplate(data)
  { var title=data.title;

  var heading=data.heading;
    var date=data.date;
  var content=data.content;
   var htmltemplate= ` 
       <html>
     <head>
         <title>
        ${title}
         </title>
          <link href="/ui/style.css" rel="stylesheet" />
     </head>
     <body>
          <div class="header">
             <a href="/">Home</a>
             <hr/>
             <h3>
                 ${heading}
             </h3>
         </div>
         <div class="header">
         <h3>
           ${date}
        </h3>
         </div>
         <div class="container">
         
          ${content}
         
         </div>
         
         <div class="footer">
         Voila app Copyright
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

app.get('/article-two', function (req, res) {
  res.send(createTemplate(articletwo));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/information-tecs.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'information-tecs.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
