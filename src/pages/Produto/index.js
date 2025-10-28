import InputComponent from "../../components/InputComponent";

//Produto
function Produto() {
  function handleSubmit(evento) {
    evento.preventDefault();
    alert('Produto cadastrado com sucesso!');
  }

  return (
    <div>
      <h1>Produto</h1>

      <div className="bg-light p-3 rounded-3 w-50 m-auto">
        <form onSubmit={(evento) => handleSubmit(evento)}>
          <InputComponent
            label="Nome do Produto"
            name="nome"
            type="text" />
          <InputComponent
            label="Preço do Produto"
            name="preco"
            type="number" />
          <InputComponent
            label="Quantidade do Produto"
            name="quantidade"
            type="number" />
          <button className="btn btn-success mt-3"
            type="submit" >Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Produto;