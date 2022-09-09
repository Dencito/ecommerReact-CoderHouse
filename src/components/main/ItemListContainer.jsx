import ItemCount from "./ItemCount";
//import Products from "./Products";

function ItemListContainer(props) {
    const onAdd = (contador)=> {
    console.log('me agregue al carrito')
    if(contador>=1){
      contador === 1 ? alert(`${contador} producto añadido`) : alert(`${contador} productos añadidos`)
    }
    }
    return (
      <div className="row">
        <h1>{props.text}</h1>
        <div className="col-2 d-flex flex-column">
          <img src="https://olcovers2.blob.core.windows.net/coverswp/2019/01/Bayesian-Methods-statistical-analysis_OpenLibra-300x427.jpg" alt=""  className="w-75 mx-auto d-block"/>
          <ItemCount stock={15} initial={0} onAdd={onAdd}/>
        </div>
{/* 
        <div className="col-2 d-flex flex-column">
          <img src="https://olcovers2.blob.core.windows.net/coverswp/2019/01/Bayesian-Methods-statistical-analysis_OpenLibra-300x427.jpg" alt=""  className="w-75 mx-auto d-block"/>
          <ItemCount stock={15} initial={0} onAdd={onAdd}/>
        </div>

        <div className="col-2 d-flex flex-column">
          <img src="https://olcovers2.blob.core.windows.net/coverswp/2019/01/Bayesian-Methods-statistical-analysis_OpenLibra-300x427.jpg" alt=""  className="w-75 mx-auto d-block"/>
          <ItemCount stock={15} initial={0} onAdd={onAdd}/>
        </div>

        <div className="col-2 d-flex flex-column">
          <img src="https://olcovers2.blob.core.windows.net/coverswp/2019/01/Bayesian-Methods-statistical-analysis_OpenLibra-300x427.jpg" alt=""  className="w-75 mx-auto d-block"/>
          <ItemCount stock={15} initial={0} onAdd={onAdd}/>
        </div>

        <div className="col-2 d-flex flex-column">
          <img src="https://olcovers2.blob.core.windows.net/coverswp/2019/01/Bayesian-Methods-statistical-analysis_OpenLibra-300x427.jpg" alt=""  className="w-75 mx-auto d-block"/>
          <ItemCount stock={15} initial={0} onAdd={onAdd}/>
        </div> */}
        <br />
      </div>
    );
  }
  
  export default ItemListContainer;