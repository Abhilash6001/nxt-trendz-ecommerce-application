import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const theRemoveAllCartItems = () => {
        removeAllCartItems()
      }
      const totalAmount = () => {
        let sum = 0
        cartList.forEach(a => {
          sum += a.quantity * a.price
        })
        return sum
      }
      const addOrderDetails = () => (
        <div className="order-list">
          <div className="order-details">
            <div className="total-amount-card">
              <h1 className="heading1 text-color">Order Total:</h1>
              <h1>Rs {totalAmount()}/-</h1>
            </div>
            <p className="text-color">{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
        </div>
      )
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <div className="remove-all-box">
                  <button
                    className="remove-all-button"
                    onClick={theRemoveAllCartItems}
                  >
                    Remove All
                  </button>
                </div>
                <CartListView />
                {addOrderDetails()}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
