import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: "Photoshop", price: $100 },
    { name: "Abode Acrobat", price: $120 },
    { name: "Abode Prime", price: $200 },
    { name: "Abode After Effect", price: $150 },
    { name: "Abode Illustrator", price:$300 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {
          products.map(pro => <product product={pro}></product>)
        }
        

      </header>
    </div>
  );
}

function Product(props) {
  <div>
    <h1>{props.name}</h1>
    <h3>{props.price}</h3>
</div> };

export default App;
