import React, { useEffect, useState, useCallback } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { useParams, useHistory } from 'react-router-dom';

import { Container, Content, ItemButton, NextButton } from './styles';
import api from '../../services/api';

import ItemFormat from '../../interfaces/Item';

const Item: React.FC = () => {
  const { idFlavor, idSize } = useParams();
  const history = useHistory();

  const [items, setItems] = useState<ItemFormat[]>([]);
  const [itemsSelected, setItemsSelected] = useState<number[]>([]);

  useEffect(() => {
    api.get('/items').then((response) => setItems(response.data));
  }, []);

  const handleItem = useCallback(
    (id: number) => {
      if (itemsSelected.includes(id)) {
        setItemsSelected(itemsSelected.filter((i) => i !== id));
      } else {
        setItemsSelected([...itemsSelected, id]);
      }
    },
    [itemsSelected],
  );

  const handleClick = useCallback(() => {
    history.push(`/flavor/${idFlavor}/size/${idSize}/items/${itemsSelected}`);
  }, [idFlavor, history, idSize, itemsSelected]);

  return (
    <Container>
      <h1>Escolha os acompanhamentos do seu açaí</h1>

      <Content>
        {items.map((item) => (
          <ItemButton
            key={item.id}
            selected={itemsSelected.some((i) => i === item.id)}
            onClick={() => handleItem(item.id)}
          >
            {item.item}
          </ItemButton>
        ))}
      </Content>

      <NextButton onClick={handleClick}>
        Próximo <FiChevronRight color="#1E1E24" size={18} />
      </NextButton>
    </Container>
  );
};

export default Item;
