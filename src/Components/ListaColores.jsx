import CardColor from "./CardColor";

const ListaColores = () => {
  return (
    <section className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-3 mb-2">
          <CardColor></CardColor>
        </div>
        <div className="col-md-3 mb-2">
          <CardColor></CardColor>
        </div>
        <div className="col-md-3 mb-2">
          <CardColor></CardColor>
        </div>
        <div className="col-md-3 mb-2">
          <CardColor></CardColor>
        </div>
      </div>
    </section>
  );
};

export default ListaColores;