import {Component} from "react";

class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: ['Computer', 'Mobile', 'Laptop', 'Tablet'],
            productLists: [
                {id : 1, name : "Computer", price : 30000},
                {id : 2, name : "Mobile", price : 20000},
                {id : 3, name : "Laptop", price : 10000},
                {id : 4, name : "Tablet", price : 35000},
                {id : 5, name : "Mouse", price : 40000},
            ],
        }
    }

    showPriseBaseProduct(pr) {
        if (pr.price >= 30000) {
            return (
                <tr key={pr.id}>
                    <td>{pr.id} </td>
                    <td> {pr.name}</td>
                    <td> ${pr.price}</td>
                </tr>
            );
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.products.map((pr, i) =>
                        <tr key={i}>
                            <td>Products{i + 1} </td>
                            <td> {pr}</td>
                        </tr>)}
                    </tbody>
                </table>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.productLists.map((pl, i) => this.showPriseBaseProduct(pl))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products;
;
