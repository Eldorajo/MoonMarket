import React, { Component } from 'react';

class Main extends Component {

  render() {
    return (
      <div id="content">
        <p>&nbsp;</p>
        <h2><strong>Shuttle Ticket Classes</strong></h2>
		<table className="table">
		<tbody>
		<tr>
		<th >Budget</th>
		<th >Economy</th>
		<th >Business</th>
		<th >VIP / First Class</th>
		</tr>
		<tr>
		<td>We had space left over on the shuttle with the luggage and animals. Beggars can't be choosey here.</td>
		<td>A step up from Budget, you get a clean seat and a couple meals to keep your sugar regulated.</td>
		<td>Here's where the luxury begins. Travel in style and grace as you have nice seats and the ability to use the bathroom.</td>
		<td>This class basically makes you royalty. Entertainers from Earth travelling had their trip comped by performing for you.</td>
		</tr>
		</tbody>
		</table>
        <p>&nbsp;</p>
        <h2>Purchase Ticket for Shuttle</h2>
		<p>Check the inventory of remaining tickets to "Get to the Moon" below.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Owner</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody id="productList">
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td>{product.name}</td>
                  <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} Eth</td>
                  <td>{product.owner}</td>
                  <td>
                    { !product.purchased
                      ? <button
                          name={product.id}
                          value={product.price}
                          onClick={(event) => {
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                        >
                          Buy
                        </button>
                      : null
                    }
                    </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
