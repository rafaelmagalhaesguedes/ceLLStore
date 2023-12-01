import { useContext, useState } from 'react';
import { ProductType } from '../../types/types';
import ProductContext from '../../context/ProductContext';
import Loading from '../Loading/Loading';
import {
  ProductContainer,
  ProductWrapper,
  ProductCard,
  ButtonCart,
  LoadMore,
  ButtonLoadMore,
  ProductNotFound,
  Image,
  Favorite,
  TitleCard,
  ImageCard,
  PriceCard,
  Condition,
} from './Styles';
import { translateCondition } from '../../helpers/translateCondition';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function Product() {
  const { product, loading, addToCart } = useContext(ProductContext);

  const [itemsToShow, setItemsToShow] = useState(12);

  // Load data when click on button load more
  const loadMore = () => setItemsToShow((prev) => prev + 12);

  return (
    <ProductContainer>
      {!loading ? (
        <>
          <ProductWrapper>
            {product && product.slice(0, itemsToShow).map((item: ProductType) => (
              <ProductCard key={ item.id }>
                <Favorite>
                  <Condition>{translateCondition(item.condition)}</Condition>
                  <FavoriteButton item={ item } />
                </Favorite>
                <ImageCard to={ `/product-details/${item.id}` }>
                  <Image src={ item.thumbnail } alt={ item.title } />
                </ImageCard>
                <TitleCard to={ `/product-details/${item.id}` }>
                  <h3>{item.title}</h3>
                </TitleCard>
                <PriceCard>
                  <p>
                    R$
                    {' '}
                    {item.price}
                  </p>
                  <span>
                    {item.shipping.free_shipping ? 'Frete Grátis' : ''}
                  </span>
                </PriceCard>
                <ButtonCart
                  type="button"
                  onClick={ () => addToCart(item) }
                >
                  Adicionar ao carrinho
                </ButtonCart>
              </ProductCard>
            ))}
          </ProductWrapper>
          <LoadMore>
            {product && itemsToShow < product.length && (
              <ButtonLoadMore onClick={ loadMore }>Mais Produtos</ButtonLoadMore>
            )}
          </LoadMore>
          {product && product.length === 0 && (
            <ProductNotFound>
              <h1>Nenhum produto encontrado</h1>
            </ProductNotFound>
          )}
        </>
      ) : (
        <Loading />
      )}
    </ProductContainer>
  );
}

export default Product;
