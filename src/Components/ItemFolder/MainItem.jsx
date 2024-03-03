import Items from "./Items";


export default function Main(props) {
    const { item, onAdd } = props;

    return (
      <main className="block col-6">
        <h2>Products</h2>
        <div className="row">
          {item.map((item) => (
            <Items 
            key={item.id} 
            item={item} 
            onAdd={onAdd}></Items>
            
          ))}
        </div>
      </main>
    );
  }
  