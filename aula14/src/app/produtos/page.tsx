import Link from "next/link";

export default function Produtos() {

  //Iterar a lista de produtos em uma tabela, utilizando, head,body e footer.

  return (
    <div>
      <h1>Produtos</h1>
      <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Marca</th>
                <th>Cor</th>
                <th>Modelo</th>
                <th>Quantidade</th>
                <th>Categoria</th>
                <th>Imagem</th>
                <th>Editar</th>
            </tr>
        </thead>

        <tbody>
            {produtos.map((produto) => (
                <tr key={produto.id}>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.cor}</td>
                    <td>{produto.modelo}</td>
                    <td>{produto.quantidade}</td>
                    <td>{produto.categoria}</td>
                    <td><img src={produto.imagem} alt="Imagem do produto" width="100" height="100" /></td>
                    <td><Link href={`/produtos/produto/${produto.id}`}>Editar</Link></td>
                </tr>
                ))}
        </tbody>
            <tfoot>
                <tr>
                    <td colSpan={8}>Total de Produtos: {produtos.length}</td>
                </tr>
            </tfoot>
      </table>
    </div>
  );
}
