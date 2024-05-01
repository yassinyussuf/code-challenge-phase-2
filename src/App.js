import React from "react";
import Parent from "./components/Parent";
function App() {
  const data =     [
{ "id": 1, "name": "Pasta - Agnolotti - Butternut", "price": 23, "image": "[http://dummyimage.com/242x100.png/cc0000/ffffff](http://dummyimage.com/242x100.png/cc0000/ffffff)", "quantity": 44 },
    { "id": 2, "name": "Dc - Sakura Fu", "price": 32, "image": "[http://dummyimage.com/231x100.png/cc0000/ffffff](http://dummyimage.com/231x100.png/cc0000/ffffff)", "quantity": 42 },
    { "id": 3, "name": "Paste - Black Olive", "price": 74, "image": "[http://dummyimage.com/130x100.png/ff4444/ffffff](http://dummyimage.com/130x100.png/ff4444/ffffff)", "quantity": 41 },
    { "id": 4, "name": "Compound - Pear", "price": 58, "image": "[http://dummyimage.com/221x100.png/cc0000/ffffff](http://dummyimage.com/221x100.png/cc0000/ffffff)", "quantity": 39 },
    { "id": 5, "name": "Beer - Upper Canada Lager", "price": 33, "image": "[http://dummyimage.com/193x100.png/cc0000/ffffff](http://dummyimage.com/193x100.png/cc0000/ffffff)", "quantity": 41 },
    { "id": 6, "name": "Vanilla Beans", "price": 70, "image": "[http://dummyimage.com/202x100.png/cc0000/ffffff](http://dummyimage.com/202x100.png/cc0000/ffffff)", "quantity": 32 },
    { "id": 7, "name": "Flour - Corn, Fine", "price": 20, "image": "[http://dummyimage.com/150x100.png/cc0000/ffffff](http://dummyimage.com/150x100.png/cc0000/ffffff)", "quantity": 34 },
    { "id": 8, "name": "Bagel - Whole White Sesame", "price": 91, "image": "[http://dummyimage.com/218x100.png/cc0000/ffffff](http://dummyimage.com/218x100.png/cc0000/ffffff)", "quantity": 40 },
    { "id": 9, "name": "Carbonated Water - Peach", "price": 43, "image": "[http://dummyimage.com/213x100.png/cc0000/ffffff](http://dummyimage.com/213x100.png/cc0000/ffffff)", "quantity": 39 },
    { "id": 10, "name": "Oil - Sesame", "price": 78, "image": "[http://dummyimage.com/111x100.png/cc0000/ffffff](http://dummyimage.com/111x100.png/cc0000/ffffff)", "quantity": 34 },
    { "id": 11, "name": "Cookies - Fortune", "price": 18, "image": "[http://dummyimage.com/237x100.png/dddddd/000000](http://dummyimage.com/237x100.png/dddddd/000000)", "quantity": 28 },
    { "id": 12, "name": "Shichimi Togarashi Peppeers", "price": 99, "image": "[http://dummyimage.com/230x100.png/dddddd/000000](http://dummyimage.com/230x100.png/dddddd/000000)", "quantity": 39 },
    { "id": 13, "name": "Oil - Shortening,liqud, Fry", "price": 91, "image": "[http://dummyimage.com/138x100.png/dddddd/000000](http://dummyimage.com/138x100.png/dddddd/000000)", "quantity": 18 },
    { "id": 14, "name": "Cheese - Montery Jack", "price": 24, "image": "[http://dummyimage.com/134x100.png/5fa2dd/ffffff](http://dummyimage.com/134x100.png/5fa2dd/ffffff)", "quantity": 22 },
    { "id": 15, "name": "Cafe Royale", "price": 43, "image": "[http://dummyimage.com/170x100.png/5fa2dd/ffffff](http://dummyimage.com/170x100.png/5fa2dd/ffffff)", "quantity": 30 }]
    return (
      <div className="App">
        <Parent props= {data} />
    
      </div>
    );
  }
  
  export default App;
