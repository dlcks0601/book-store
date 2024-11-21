// import React, { useMemo, useState } from 'react';
// import styled from 'styled-components';
// import { Cart } from '../models/cart.model';
// import Button from '../components/common/Button';
// import Title from '../components/common/Title';
// import { formatNumber } from '../../src/utils/format';
// import CheckIconButton from './CheckIconButton';
// import { useAlert } from '../hooks/useAlert';

// interface Props {
//   cart: Cart;
//   checkedItem: number[];
//   onCheck: (id: number) => void;
//   onDelete: (id: number) => void;
// }

// const CartItem = ({ cart, checkedItem, onCheck, onDelete }: Props) => {
//   const { showConfirm } = useAlert();

//   const isChecked = useMemo(() => {
//     return checkedItem.includes(cart.id);
//   }, [checkedItem, cart.id]);

//   const handleCheck = () => {
//     onCheck(cart.id);
//   };
//   const handleDelete = () => {
//     showConfirm('정말 삭제하시겠습니까?', () => {
//       onDelete(cart.id);
//     });
//   };

//   return (
//     <CartItemStyle>
//       <div className='info'>
//         <div className='check'>
//           <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
//         </div>
//         <div>
//           <Title size='medium'>{cart.title}</Title>
//           <p className='summary'>{cart.summary}</p>
//           <p className='price'>{formatNumber(cart.price)}</p>
//           <p className='quantity'>{cart.quantity}</p>
//         </div>
//       </div>
//       <Button size='medium' scheme='normal' onClick={handleDelete}>
//         장바구니 삭제
//       </Button>
//     </CartItemStyle>
//   );
// };
// const CartItemStyle = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: start;
//   border: 1px solid ${({ theme }) => theme.color.border};
//   border-radius: ${({ theme }) => theme.borderRadius.default};
//   padding: 12px;

//   .info {
//     display: flex;
//     align-items: start;
//     flex: 1;
//     .check {
//       width: 40px;
//       flex-shrink: 0;
//     }
//     p {
//       padding: 0 0 8px 0;
//       margin: 0;
//     }
//   }
// `;
// export default CartItem;
