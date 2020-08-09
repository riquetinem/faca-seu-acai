import React, { useEffect, useCallback, useState, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { FiRefreshCcw } from 'react-icons/fi';

import formatValue from '../../utils/formatValue';

import {
  Container,
  Content,
  TitleText,
  ResultPrice,
  ResultTime,
  MiniTable,
  RemakeButton,
} from './styles';
import api from '../../services/api';

import FlavorFormat from '../../interfaces/Flavor';
import SizeFormat from '../../interfaces/Size';
import ItemFormat from '../../interfaces/Item';

const Finishing: React.FC = () => {
  const { idFlavor, idSize, idItems } = useParams();
  const history = useHistory();

  const [flavor, setFlavor] = useState<FlavorFormat>();
  const [size, setSize] = useState<SizeFormat>();
  const [items, setItems] = useState<ItemFormat[]>([]);

  useEffect(() => {
    api
      .get(`/flavors/${idFlavor}`)
      .then((response) => setFlavor(response.data));

    api.get(`/sizes/${idSize}`).then((response) => setSize(response.data));

    async function loadItems(): Promise<void> {
      const res = await api.get('/items');

      const dataFormat: ItemFormat[] = res.data;
      const idItem: string = idItems;
      const idItemNumeric: number[] = idItem
        .split('')
        .filter((i) => i !== ',')
        .map((item) => parseInt(item, 10));

      const data = dataFormat.filter((item) => idItemNumeric.includes(item.id));

      setItems(data);
    }

    if (idItems) {
      loadItems();
    }
  }, [idFlavor, idSize, idItems]);

  const price = useMemo((): number => {
    if (items) {
      const priceOfItems = items.reduce((prevVal, item) => {
        return prevVal + item.price;
      }, 0);

      return size ? size.price + priceOfItems : priceOfItems;
    }

    return size ? size.price : 0;
  }, [items, size]);

  const minutes = useMemo((): number => {
    if (items) {
      return size ? size.time + 3 : 0;
    }

    return size ? size.time : 0;
  }, [items, size]);

  const handleClick = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Container>
      <h1>Resumo do pedido</h1>

      <Content>
        <TitleText>Sabor do açaí:</TitleText>
        <h3>{flavor?.flavor}</h3>

        <TitleText>Tamanho do açaí:</TitleText>
        <MiniTable>
          <h3>{size?.size}</h3>
          <h3>{size && formatValue(size.price)}</h3>
        </MiniTable>

        {idItems && (
          <>
            <TitleText>Acompanhamentos do açaí:</TitleText>
            {items.map((item) => (
              <MiniTable key={item.id}>
                <h3> - {item.item}</h3>
                <h3>{formatValue(item.price)}</h3>
              </MiniTable>
            ))}
          </>
        )}

        <ResultPrice>
          Valor total: <p>{formatValue(price)}</p>
        </ResultPrice>
        <ResultTime>
          Tempo de preparo: <p>{minutes} minutos</p>
        </ResultTime>
      </Content>

      <RemakeButton onClick={handleClick}>
        Refazer pedido <FiRefreshCcw color="#1E1E24" size={18} />
      </RemakeButton>
    </Container>
  );
};

export default Finishing;
