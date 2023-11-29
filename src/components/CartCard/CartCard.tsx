import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle, faReply } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ProductType } from '../../types/types';
import { Cart, CartInfo } from './Styles';
import ProductContext from '../../context/ProductContext';

function CartCard() {
  const navigate = useNavigate();
  const {
    cart, increaseQuantity, decreaseQuantity, deleteItem } = useContext(ProductContext);

  return (
    <Cart>
      <button type="button" className="button" onClick={ () => navigate('/') }>
        <FontAwesomeIcon icon={ faReply } size="1x" />
        {' '}
        Continuar comprando
      </button>
      <CartInfo>
        <h1>Carrinho de compras</h1>
        <ul>
          {cart.map((item: ProductType) => (
            <li key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <h3>{item.title}</h3>
              <div>
                <FontAwesomeIcon
                  className="minus"
                  onClick={ () => decreaseQuantity(item.id) }
                  icon={ faMinusCircle }
                  size="lg"
                />
                <span>{item.quantity}</span>
                <FontAwesomeIcon
                  className="plus"
                  onClick={ () => increaseQuantity(item.id) }
                  icon={ faPlusCircle }
                  size="lg"
                />
              </div>
              <p>
                R$
                {' '}
                {item.price}
              </p>
              <button onClick={ () => deleteItem(item.id) }>
                X
              </button>
            </li>
          ))}
        </ul>
        {cart.length === 0 && <p>Não há produtos no carrinho</p>}
      </CartInfo>
    </Cart>
  );
}

export default CartCard;